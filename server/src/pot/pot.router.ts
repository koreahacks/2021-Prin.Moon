import express, { NextFunction, Request, Response } from "express";
import PotService from "./pot.service";

const PotRouter = express.Router();

PotRouter.get("/recent", async (req: Request, res: Response) => {
  const potList = await PotService.getRecentPots();
  res.json(potList);
});

PotRouter.get(
  "/:categoryId",
  async (req: Request, res: Response, next: NextFunction) => {
    const { categoryId } = req.params;
    try {
      const potList = await PotService.getPotsByCategory(Number(categoryId));
      res.json(potList);
    } catch (e) {
      next(e);
    }
  }
);

export default PotRouter;
