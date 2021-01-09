import express from "express";
import AuthRouter from "../auth/auth.router";
import CategoryRouter from "../category/category.router";
import jwtAuthorize from "../middleware/jwt-authorize";
import PotRouter from "../pot/pot.router";

const APIRouter = express.Router();

APIRouter.use("/auth", AuthRouter);
APIRouter.use(jwtAuthorize);
APIRouter.use("/category", CategoryRouter);
APIRouter.use("/pot", PotRouter);
export default APIRouter;
