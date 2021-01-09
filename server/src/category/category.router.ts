import express, { NextFunction, Request, Response } from "express";
import CategoryService from "./category.service";

const CategoryRouter = express.Router();

CategoryRouter.get("/", async (req: Request, res: Response) => {
  const categoryList = await CategoryService.getCategoryList();
  res.json(categoryList);
});

CategoryRouter.post(
  "/",
  async (req: Request, res: Response, next: NextFunction) => {
    const { name } = req.body;
    const { code, json } = await CategoryService.createCategory(name);

    res.status(code).json(json);
  }
);

export default CategoryRouter;
