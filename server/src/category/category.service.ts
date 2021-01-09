import { getRepository } from "typeorm";
import { statusCode, resMessage } from "../common/constant";
import JsonResponse from "../common/types/json-response";
import CategoryEntity from "../entity/category.entity";

const CategoryService = {
  getCategoryList: async () => {
    const categoryRepository = getRepository(CategoryEntity);
    const categoryList = await categoryRepository.find();

    return categoryList;
  },
  createCategory: async (name: string) => {
    const categoryRepository = getRepository(CategoryEntity);
    const category = await categoryRepository.findOne({ where: { name } });

    if (category)
      return {
        code: statusCode.BAD_REQUEST,
        json: { success: false, message: resMessage.DUPLICATE_VALUE_ERROR },
      };
    const newCategory = categoryRepository.create({ name });
    await categoryRepository.save(newCategory);

    return {
      code: statusCode.OK,
      json: new JsonResponse(true, resMessage.X_CREATE_SUCCESS("category")),
    };
  },
};

export default CategoryService;
