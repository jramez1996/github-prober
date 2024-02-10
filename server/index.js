import express from "express";
import postRoutes from "./routes/data.js";
import userRoutes from "./routes/user.js";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello to GitHub prober API!");
});

app.use("/postdata", postRoutes);
app.use("/", userRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
