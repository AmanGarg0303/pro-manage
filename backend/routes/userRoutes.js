import express from "express";
const router = express.Router();

import { protect } from "../middlewares/jwt.js";
import { updateUser } from "../controllers/userController.js";

router.put("/update", protect, updateUser);

export default router;
