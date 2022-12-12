import express from 'express';
import userAuth from './auth.js';
import profileRoute from './profiles.route';

const routers = express();
routers.use('/profiles', profileRoute);
routers.use('/auth/user/', userAuth);

export default routers;
