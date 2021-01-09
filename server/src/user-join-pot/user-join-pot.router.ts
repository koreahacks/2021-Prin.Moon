import express, { Request, Response } from "express";
import PotService from "../pot/pot.service";
import UserJoinPotService from "./user-join-pot.service";

const UserJoinPotRouter = express.Router();

UserJoinPotRouter.get("/:potId", async (req: Request, res: Response) => {
  const userId = req.user?.id;
  if (!userId) return;
  const { potId } = req.body;
  const isOnGoing = await UserJoinPotService.getUserJoinPot(userId, potId);
  res.json({ isOnGoing });
});

UserJoinPotRouter.post("/apply", async (req: Request, res: Response) => {
  const userId = req.user?.id;
  const { potId } = req.body;
  const { code, json } = await UserJoinPotService.createUserJoinPot(
    userId,
    potId
  );
  res.status(code).json(json);
});

UserJoinPotRouter.put(
  "/confirm/:potId",
  async (req: Request, res: Response) => {
    const userId = req.user?.id;
    const { potId } = req.params;
    const { code, json } = await UserJoinPotService.updateUserJoinPot(
      userId,
      Number(potId)
    );

    if (code === 200) {
      await PotService.updateJoinedPeople(Number(potId));
    }

    res.status(code).json(json);
  }
);

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
