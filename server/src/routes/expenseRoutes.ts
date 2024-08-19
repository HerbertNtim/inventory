import { Router } from "express";
import { getExpenseByCategory } from "../controller/expenseController";

const expenseRouter = Router();

expenseRouter.get('/', getExpenseByCategory)

export default expenseRouter;
