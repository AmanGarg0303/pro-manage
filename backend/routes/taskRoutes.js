import express from "express";
import { protect } from "../middlewares/jwt.js";
import {
  createTask,
  getTask,
  getUserTasks,
  shiftTask,
  taskAnalytics,
  updateCheckListTask,
} from "../controllers/taskController.js";
const router = express.Router();

router.post("/create", protect, createTask);

router.get("/", protect, getUserTasks);

router.get("/analytics", protect, taskAnalytics);

router.get("/:taskId", getTask);

router.patch("/shift/:taskId", protect, shiftTask);

router.patch("/:taskId/:checkId", protect, updateCheckListTask);

export default router;
