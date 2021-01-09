import express from "express";
import createDBConnection from "./mysql";
import APIRouter from "./router";
import dotenv from "dotenv";

dotenv.config();

export default async (app: express.Application) => {
  await createDBConnection();

  app.use("/api", APIRouter);
};
