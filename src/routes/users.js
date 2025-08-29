import { Router } from "express";
import { getUsers, getUserById, createUser } from "../controllers/user.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/", getUsers);
router.get("/:id", getUserById);
router.post("/", authMiddleware, createUser);

export default router;
