import express from 'express';
import UserController from '../../controllers/user'
import validate from '../../middleware/validate.js';

const router = express();

router.post('/signup', validate.userRegistration, UserController.registerUser);
router.post('/signin', validate.signIn, UserController.signIn);
router.post('/signout', UserController.signOut);

export default router;
