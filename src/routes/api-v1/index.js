import express from 'express';
import userAuth from './auth.js';

const routers = express();
routers.use('/auth/user/', userAuth);
export default routers;
