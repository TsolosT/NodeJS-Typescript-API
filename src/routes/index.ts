import { Router } from 'express';
import frontRoutes from './front';
import apiRoutes from './api';

const router = Router();

router.use('/api', apiRoutes);
router.use('/', frontRoutes);


export default router;