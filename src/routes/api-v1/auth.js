import express from 'express'
import controller from '../../controllers/user.js'
import validate from '../../validation/validate.js';

 const router = express.Router();

router.post("/signup",validate.userRegistration, controller.registerUser);
router.post("/signin", validate.signIn,controller.signIn)
router.post("/signout", controller.signOut)

export default router
