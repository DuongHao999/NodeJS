import express from "express";
import { storeCourses } from "../app/controllers/MeController.js";

const meRouter = express.Router();

meRouter.get('/store/courses', storeCourses);

export default meRouter;