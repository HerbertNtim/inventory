"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dashboardController_1 = require("../controller/dashboardController");
const dashboardRouter = (0, express_1.Router)();
dashboardRouter.get('/', dashboardController_1.getDashboardMetrics);
exports.default = dashboardRouter;
