import express from 'express';
import { index, show } from '../app/controllers/NewController.js';

const newsRouter = express.Router();

newsRouter.use('/:slug', show);
newsRouter.use('/', index); // đường dẫn gốc phải đặt sau cùng

export default newsRouter;