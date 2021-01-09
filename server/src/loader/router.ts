import express from "express";
import AuthRouter from "../auth/auth.router";
import CategoryRouter from "../category/category.router";

const APIRouter = express.Router();

APIRouter.use("/auth", AuthRouter);
APIRouter.use("/category", CategoryRouter);

export default APIRouter;
