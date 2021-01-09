import express, { Request, Response, NextFunction } from "express";
import createDBConnection from "./mysql";
import cors from "cors";
import logger from "morgan";
import createError from "http-errors";
import APIRouter from "./router";
import dotenv from "dotenv";
import { statusCode, resMessage } from "../common/constant";

export default async (app: express.Application) => {
  dotenv.config();

  await createDBConnection();
  app.set("port", process.env.SERVER_PORT);
  app.use(logger("dev"));
  app.use(express.json());
  app.use(
    cors({
      origin:
        process.env.NODE_ENV === "development"
          ? process.env.FRONT_DOMAIN_DEVELOP
          : process.env.FRONT_DOMAIN_PRODUCTION,
      credentials: true,
    })
  );

  app.use("/api", APIRouter);

  app.use(
    (
      err: { code: number; message: string },
      req: Request,
      res: Response,
      next: NextFunction
    ) => {
      if (err.code)
        return res
          .status(err.code)
          .json({ success: false, message: err.message });
      return res
        .status(statusCode.INTERNAL_SERVER_ERROR)
        .json({ success: false, message: resMessage.INTERNAL_SERVER_ERROR });
    }
  );

  app.use((req: Request, res: Response, next: NextFunction): void => {
    next(createError(404));
  });
};
