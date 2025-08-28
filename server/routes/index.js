import express from "express";
import authRouter from "./auth.js";
import taksRouter from "./task.js";

const router = express.Router();

router.use("/", authRouter);
router.use("/task", taksRouter);

export default router;
