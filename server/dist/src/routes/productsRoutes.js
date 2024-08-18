"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productsController_1 = require("../controller/productsController");
const productsRouter = (0, express_1.Router)();
productsRouter.get('/', productsController_1.getProducts);
productsRouter.post('/', productsController_1.createProduct);
exports.default = productsRouter;
