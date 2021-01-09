import { getRepository } from "typeorm";
import PotEntity from "../entity/pot.entity";

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
};

export default PotService;
