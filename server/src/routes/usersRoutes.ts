import { Router } from "express";
import { getUsers } from "../controller/usersController";

const usersRouter = Router();

usersRouter.get('/', getUsers)

export default usersRouter;
