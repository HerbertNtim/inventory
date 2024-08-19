"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const expenseController_1 = require("../controller/expenseController");
const expenseRouter = (0, express_1.Router)();
expenseRouter.get('/', expenseController_1.getExpenseByCategory);
exports.default = expenseRouter;
