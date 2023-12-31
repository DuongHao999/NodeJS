import express from "express";
import { show, create, store, edit, update, destroy, restore, forceDelete, handelFormActions } from "../app/controllers/CourseController.js";
const coursesRouter = express.Router();

coursesRouter.get('/create', create);
coursesRouter.post('/store', store);
coursesRouter.get('/:id/edit', edit);
coursesRouter.post('/handle-form-actions', handelFormActions);
coursesRouter.put('/:id', update);
coursesRouter.patch('/:id/restore', restore);
coursesRouter.delete('/:id', destroy);
coursesRouter.delete('/:id/force', forceDelete);
coursesRouter.get('/:slug', show);

export default coursesRouter;