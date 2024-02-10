import express from "express";
import { deleteCookie, getCookie, getUser } from "../controllers/user.js";

const router = express.Router();

router.get("/auth/github", getUser);
router.get("/api/me", getCookie);
router.get("/api/logout", deleteCookie);

export default router;
