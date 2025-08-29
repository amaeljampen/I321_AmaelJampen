import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";

import userRoutes from "./src/routes/users.js";

dotenv.config();

const app = express();

// Middlewares globaux
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
    res.json({ message: "Bienvenue sur l'API" });
});

export default app;
