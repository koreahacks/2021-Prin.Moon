import express, { NextFunction, Request, Response } from "express";
import PotDTO from "./dto/pot.dto";
import UpdatePotRequest from "./dto/update-pot-request.dto";
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

PotRouter.post("/", async (req: Request, res: Response, next: NextFunction) => {
  const potDTO = new PotDTO(req.body);
  const { code, json } = await PotService.createPot(potDTO);
  res.status(code).json(json);
});

PotRouter.patch(
  "/:potId",
  async (req: Request, res: Response, next: NextFunction) => {
    const { potId } = req.params;
    const potDTO = new UpdatePotRequest(req.body);
    const { code, json } = await PotService.updatePot(Number(potId), potDTO);
    res.status(code).json(json);
  }
);

export default PotRouter;
