import express from 'express';
import UserController from '../../controllers/user.js';
// import Validate from '../../middleware/validate.js';

const router = express();

router.post('/signup', UserController.registerUser);
router.post('/signin', UserController.signIn);
router.post('/signout', UserController.signOut);

export default router;
