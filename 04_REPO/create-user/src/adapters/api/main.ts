import express from "express";
import userRouter from "./userRouter";

const app = express();

app.use(express.json());
app.use("/api", userRouter); // préfix les routes

export default app;