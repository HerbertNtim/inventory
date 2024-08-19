import { PrismaClient } from "@prisma/client";
import { Response, Request } from "express";

const prisma = new PrismaClient();

export const getExpenseByCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const ExpenseByCategorySummaryRaw = await prisma.expenseByCategory.findMany({
      orderBy: {
        date: 'desc'
      }
    })

    const ExpenseByCategorySummary = ExpenseByCategorySummaryRaw.map((item) => ({
      ...item,
      amount: item.amount.toString()
    }))

    res.status(200).json(ExpenseByCategorySummary)
  } catch (error: any) {
    res.status(500).json({ message: "Error in fetching expenses" });
  }
};
