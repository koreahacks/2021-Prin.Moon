import express, { Request, Response } from "express";
import UserJoinPotService from "../user-join-pot/user-join-pot.service";
import UserService from "./user.service";
import PotEntity from "../entity/pot.entity";
import { getRepository } from "typeorm";

const UserRouter = express.Router();

UserRouter.get("/info", (req: Request, res: Response) => {
  return res.json({ success: true, user: req.user });
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

UserRouter.put("/credibility/:userId", async (req: Request, res: Response) => {
  const { userId } = req.params;
  const { credibility, potId } = req.body;
  await UserService.updateUserCredibility(Number(userId), credibility);
  await UserJoinPotService.finishEvaluation(req.user?.id as number, potId);
  const potRepository = getRepository(PotEntity);
  const potInfo = await potRepository.findOne({
    relations: ["owner", "userJoinPot", "category"],
    where: { id: potId },
  });
  const userJoinPot = potInfo?.userJoinPot?.filter(
    (item) => item.userId === req.user?.id
  );
  res.json({ potInfo: userJoinPot });
});

UserRouter.get("/logout", (req: Request, res: Response) => {
  const frontURL =
    process.env.NODE_ENV === "dev"
      ? (process.env.CLIENT_URI_DEV as string)
      : (process.env.CLIENT_URI_PRODUCTION as string);

  res.clearCookie("Authorization").redirect(frontURL);
});

export default UserRouter;
