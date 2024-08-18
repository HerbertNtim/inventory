"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersController_1 = require("../controller/usersController");
const usersRouter = (0, express_1.Router)();
usersRouter.get('/', usersController_1.getUsers);
exports.default = usersRouter;
