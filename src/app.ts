import express, { Application, Request, Response } from "express";
import { SpecialtyRoute } from "./app/module/specialty/specialty.route";

const app: Application = express();

// Enable URL-encoded form data parsing
app.use(express.urlencoded({ extended: true }));

// Middleware to parse JSON bodies
app.use(express.json());

app.use("/api/v1", SpecialtyRoute);
// Basic route
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the PH Health Care Management Backend API!");
});

export default app;