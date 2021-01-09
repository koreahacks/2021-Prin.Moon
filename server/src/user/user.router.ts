import express, { Request, Response } from "express";
import UserService from "./user.service";

const UserRouter = express.Router();

UserRouter.get("/info", (req: Request, res: Response) => {
  return res.json({ success: true, user: req.user });
});

UserRouter.put("/credential", (req: Request, res: Response) => {});

UserRouter.put("/saved-money", (req: Request, res: Response) => {});

export default UserRouter;
