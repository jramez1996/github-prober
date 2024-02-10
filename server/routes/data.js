import express from "express";
import { createData } from "../controllers/data.js";

const router = express.Router();

router.post("/", createData);

export default router;
