import express from "express";
const router = express.Router();

import { protect } from "../middlewares/jwt.js";
import { assignPeople, updateUser } from "../controllers/userController.js";

router.put("/update", protect, updateUser);

router.put("/assignee", protect, assignPeople);

export default router;
