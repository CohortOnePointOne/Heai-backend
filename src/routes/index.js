import express from 'express';
import routes from './api-v1/index.js';

const router = express();

router.use('/api/v1', routes);

export default router;
