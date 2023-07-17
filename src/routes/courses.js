import express from "express";
import { show, create, store } from "../app/controllers/CourseController.js";
const coursesRouter = express.Router();

coursesRouter.get('/create', create);
coursesRouter.post('/store', store);
coursesRouter.get('/:slug', show);

export default coursesRouter;