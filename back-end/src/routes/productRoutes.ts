// URL → controller eşleştirmeleri
import { Router } from 'express';
import * as controller from '../controllers/productController';

const router = Router();
router.get('/', controller.getAll);
router.post('/', controller.create)

export default router;
