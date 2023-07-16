import express from 'express';
import { index, search } from '../app/controllers/SiteController.js';

const siteRouter = express.Router();

siteRouter.get('/search', search);
siteRouter.get('/', index); // đường dẫn gốc phải đặt sau cùng

export default siteRouter;