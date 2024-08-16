import { Router } from "express";
import { getDashboardMetrics } from "../controller/dashboardController";

const dashboardRouter = Router();

dashboardRouter.get('/', getDashboardMetrics)

export default dashboardRouter;
