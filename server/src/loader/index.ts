import express, { Request, Response } from "express";
import createDBConnection from "./mysql";
import dotenv from "dotenv";

dotenv.config();

export default async (app: express.Application) => {
  await createDBConnection();

  app.use("/", (req: Request, res: Response) => {
    res.send("hello");
  });
};
