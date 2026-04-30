import express, { Request, Response } from "express";
import { getMessage } from "./service";

const app = express();
const PORT = 4000;

// Middleware
app.use(express.json());

// Basic Route
app.get("/", (req: Request, res: Response) => {
  const message = getMessage();
  res.send(message);
});

app.listen(PORT, () => {
  console.log("Server is Running on Port: 4000 🚀");
});
