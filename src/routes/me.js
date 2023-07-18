import express from "express";
import { storeCourses, trashCourses } from "../app/controllers/MeController.js";

const meRouter = express.Router();

meRouter.get('/store/courses', storeCourses);
meRouter.get('/trash/courses', trashCourses);

export default meRouter;