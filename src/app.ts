import express, { Application, Request, Response } from "express";
import { notFound } from "./app/middleware/notFound";
import { IndexRoutes } from "./app/routes";
import { globalErrorHandler } from "./app/middleware/globalErrorHandler";

const app: Application = express();

// Enable URL-encoded form data parsing
app.use(express.urlencoded({ extended: true }));

// Middleware to parse JSON bodies
app.use(express.json());

app.use("/api/v1", IndexRoutes);

// Basic route
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the PH Health Care Management Backend API!");
});

app.use(notFound);
app.use(globalErrorHandler);

export default app;
