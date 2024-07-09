import express from "express";
import {
  createUser,
  deleteUser,
  getUserByID,
  getUsers,
  updateUser,
} from "../controller/user";
import { auth } from "../middleware/auth";

const router = express();

router.get("/", auth, getUsers);

router.get("/:id", getUserByID);

router.post("/", createUser);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

export default router;
