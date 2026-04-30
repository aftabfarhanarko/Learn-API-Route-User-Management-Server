import express from "express";
import cors from "cors";

import userRoutes from "./modules/user/user.route";
import { errorHandler } from "./middlewares/error.middlewares";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use(errorHandler);

export default app;
