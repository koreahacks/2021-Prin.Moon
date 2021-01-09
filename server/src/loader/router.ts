import express from "express";
import AuthRouter from "../auth/auth.router";
import CategoryRouter from "../category/category.router";
import jwtAuthorize from "../middleware/jwt-authorize";
import PotRouter from "../pot/pot.router";
import UserRouter from "../user/user.router";
import UserJoinPotRouter from "../user-join-pot/user-join-pot.router";

const APIRouter = express.Router();

APIRouter.use("/auth", AuthRouter);
APIRouter.use(jwtAuthorize);
APIRouter.use("/user", UserRouter);
APIRouter.use("/category", CategoryRouter);
APIRouter.use("/pot", PotRouter);
APIRouter.use("/join", UserJoinPotRouter);
export default APIRouter;
