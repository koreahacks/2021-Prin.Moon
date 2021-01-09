import express, { Request, Response } from "express";
import UserJoinPotService from "./user-join-pot.service";

const UserJoinPotRouter = express.Router();

UserJoinPotRouter.post("/apply", async (req: Request, res: Response) => {
  const userId = req.user?.id;
  const { potId } = req.body;
  const { code, json } = await UserJoinPotService.createUserJoinPot(
    userId,
    potId
  );
  res.status(code).json(json);
});

UserJoinPotRouter.put("/confirm/:id", async (req: Request, res: Response) => {
  const userId = req.user?.id;
  const { id: potId } = req.params;
  const { code, json } = await UserJoinPotService.updateUserJoinPot(
    userId,
    Number(potId)
  );
  res.status(code).json(json);
});

UserJoinPotRouter.delete("/cancel/:id", async (req: Request, res: Response) => {
  const userId = req.user?.id;
  const { id: potId } = req.params;

  const { code, json } = await UserJoinPotService.deleteUserJoinPot(
    userId,
    Number(potId)
  );
  res.status(code).json(json);
});

export default UserJoinPotRouter;
