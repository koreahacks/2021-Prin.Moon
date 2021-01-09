import { getRepository } from "typeorm";
import { resMessage, statusCode } from "../common/constant";
import JsonResponse from "../common/types/json-response";
import PotEntity from "../entity/pot.entity";
import PotDTO from "./dto/pot.dto";

const PotService = {
  getRecentPots: async () => {
    const potRepository = getRepository(PotEntity);
    const potList = await potRepository.find({ relations: ["User"], take: 7 });

    return potList;
  },

  getPotsByCategory: async (categoryId: number) => {
    const potRepository = getRepository(PotEntity);
    const potList = await potRepository.find({
      relations: ["Category", "User"],
      where: { categoryId },
    });

    return potList;
  },
  createPot: async (pot: PotDTO) => {
    try {
      const potRepository = getRepository(PotEntity);
      const newPot = potRepository.create(pot);
      await potRepository.save(newPot);
      return {
        code: statusCode.CREATED,
        json: newPot,
      };
    } catch (e) {
      return {
        code: statusCode.DB_ERROR,
        json: new JsonResponse(false, resMessage.DB_ERROR),
      };
    }
  },
};

export default PotService;
