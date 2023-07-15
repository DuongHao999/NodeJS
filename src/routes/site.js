import express from 'express';
import { index, search } from '../app/controllers/SiteController.js';

const siteRouter = express.Router();

siteRouter.use('/search', search);
siteRouter.use('/', index); // đường dẫn gốc phải đặt sau cùng

export default siteRouter;