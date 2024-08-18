import { Router } from "express";
import { createProduct, getProducts } from "../controller/productsController";

const productsRouter = Router();

productsRouter.get('/', getProducts)
productsRouter.post('/', createProduct)

export default productsRouter;
