import { PrismaClient } from "@prisma/client";
import { Response, Request } from "express";

const prisma = new PrismaClient();

export const getProducts = async (req: Request, res: Response): Promise<void> => {
  try {
    const search = req.query.search?.toString();
    const product = await prisma.products.findMany({
      where: {
        name: {
          contains: search
        }
      }
    })

    res.json(product);
  } catch (error: any) {
    res.status(500).json({ message: 'Error in fetching products' });
  }
}

export const createProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const { productId, name, price, stockQuantity, rating } = req.body;
    const product = await prisma.products.create({
      data: {
        productId,
        name,
        price,
        stockQuantity,
        rating
      }
    });

    res.status(201).json(product);
  } catch (error: any) {
    res.status(500).json({ message: 'Error in creating product' });
  }
}
