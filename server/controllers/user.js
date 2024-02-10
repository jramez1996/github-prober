import axios from "axios";
import querystring from "querystring";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const COOKIE_NAME = "github-jwt";

const getGithubUser = async (code) => {
  const githubToken = await axios
    .post(
      `https://github.com/login/oauth/access_token?client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}&code=${code}`
    )
    .then((res) => res.data)

    .catch((error) => {
      throw error;
    });

  const decoded = querystring.parse(githubToken);

  const accessToken = decoded.access_token;

  return axios
    .get("https://api.github.com/user", {
      headers: { Authorization: `Bearer ${accessToken}` },
    })
    .then((res) => res.data)
    .catch((error) => {
      console.error(`Error getting user from GitHub`);
      throw error;
    });
};

export const getUser = async (req, res) => {
  const code = req.query.code;
  const path = req.query.path;

  if (!code) {
    throw new Error("No code!");
  }

  const githubUser = await getGithubUser(code);

  const token = jwt.sign(githubUser, process.env.SECRET);

  res.cookie(COOKIE_NAME, token, {
    httpOnly: true,
    domain: "localhost",
  });

  res.redirect(`http://localhost:3000${path}`);
};

export const getCookie = (req, res) => {
  const cookie = req.cookies[COOKIE_NAME];

  try {
    const decode = jwt.verify(cookie, process.env.SECRET);

    return res.send(decode);
  } catch (e) {
    return res.send(null);
  }
};

export const deleteCookie = (req, res) => {
  res
    .status(200)
    .clearCookie("github-jwt", { path: "/" })
    .send("Cookie deleted");
};
