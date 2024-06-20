import express from "express";
import { protect } from "../middlewares/jwt.js";
import { createTask, getTask } from "../controllers/taskController.js";
const router = express.Router();

router.post("/create", protect, createTask);

router.get("/:taskId", getTask);

export default router;
