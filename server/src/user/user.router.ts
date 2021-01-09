import express, { Request, Response } from "express";
import UserService from "./user.service";

const UserRouter = express.Router();

UserRouter.get("/info", (req: Request, res: Response) => {
  return res.json({ success: true, user: req.user });
});

UserRouter.put("/credibility/:userId", async (req: Request, res: Response) => {
  const { userId } = req.params;
  const credibility = req.body.credibility;
  const { code, json } = await UserService.updateUserCredibility(
    Number(userId),
    credibility
  );
  res.status(code).json(json);
});

UserRouter.put("/saved-money", async (req: Request, res: Response) => {
  const id = req.user?.id;
  const name = req.user?.name;
  const money = req.body.money;
  const { code, json } = await UserService.updateUserSavedMoney(
    id,
    name,
    money
  );
  res.status(code).json(json);
});

export default UserRouter;
