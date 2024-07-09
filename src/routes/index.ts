import express from "express";

import userRoutes from "./user";
import projectRoutes from "./project";
import authRoutes from "./auth";

const router = express();

router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/projects", projectRoutes);

export default router;
