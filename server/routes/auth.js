import express from "express";
import {
  getAllUser,
  getProfile,
  login,
  register,
} from "../controllers/auth.js";
import {
  authMiddleware,
  registerMiddleware,
  validateLogin,
} from "../middlewares/authMiddleware.js";

const authRouter = express.Router();

authRouter.post("/register", registerMiddleware, register);
authRouter.post("/login", validateLogin, login);
authRouter.get("/profile", authMiddleware, getProfile);
authRouter.get("/users", authMiddleware, getAllUser);

export default authRouter;
