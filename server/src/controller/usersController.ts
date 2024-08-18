import { PrismaClient } from "@prisma/client";
import { Response, Request } from "express";

const prisma = new PrismaClient();

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await prisma.users.findMany()

    res.status(200).json(users)
  } catch (error) {
    res.status(500).json({ message: "Error in getting users" });
  }
};
