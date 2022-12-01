import { Router } from 'express';
import routes from './api-v1';

const router = Router();

router.use('/api/v1', routes);

export default router;
