import express from "express";
import {
  createTask,
  deleteTask,
  getAllTask,
  updateTask,
} from "../controllers/task.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const taksRouter = express.Router();

taksRouter.get("/", authMiddleware, getAllTask);
taksRouter.post("/add", authMiddleware, createTask);
taksRouter.patch("/update/:id", authMiddleware, updateTask);
taksRouter.delete("/delete/:id", authMiddleware, deleteTask);

export default taksRouter;
