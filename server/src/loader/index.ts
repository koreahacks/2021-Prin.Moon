import express, { Request, Response } from "express";
import createDBConnection from "./mysql";

export default async (app: express.Application) => {
  await createDBConnection();

  app.use("/", (req: Request, res: Response) => {
    res.send("hello");
  });
};
