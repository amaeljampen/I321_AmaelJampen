import { Router } from "express";
import { getAllPizzas} from "../controllers/controller.js";
import { authMiddleware } from "../middlewares/middelwares.js";

const router = Router();

router.get("/", getAllPizzas);


export default router;
