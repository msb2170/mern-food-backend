import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import myUserRoute from "./routes/MyUserRoute";

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING as string)
  .then(() => console.log("connected to database"));

const app = express();

//automatically convert body of requests to JSON
app.use(express.json());
app.use(cors());

//basic endpoint that checks if server has started
app.get("/health", async (req: Request, res: Response) => {
  res.send({ message: "health OK!" });
});

app.get("/health", async (req: Request, res: Response) => {
  res.send({ message: "health OK!" });
});

app.use("/api/my/user", myUserRoute);

app.listen(7000, () => {
  console.log("server started on localhost:7000");
});
