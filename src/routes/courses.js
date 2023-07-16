import express from "express";
import { show } from "../app/controllers/CourseController.js";
const coursesRouter = express.Router();

coursesRouter.get('/:slug', show);

export default coursesRouter;