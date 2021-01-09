import express from "express";
import AuthRouter from "../auth/auth.router";

const APIRouter = express.Router();

APIRouter.use("/auth", AuthRouter);

export default APIRouter;
