import express, { Request, Response, NextFunction } from "express";
import createDBConnection from "./mysql";
import cors from "cors";
import path from "path";
import logger from "morgan";
import createError from "http-errors";
import { statusCode, resMessage } from "@util/constant";

export default async (app: express.Application) => {
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
