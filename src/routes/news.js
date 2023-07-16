import express from 'express';
import { index, show } from '../app/controllers/NewController.js';

const newsRouter = express.Router();

newsRouter.get('/:slug', show);
newsRouter.get('/', index); // đường dẫn gốc phải đặt sau cùng

export default newsRouter;