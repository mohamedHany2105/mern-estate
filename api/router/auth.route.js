import express from 'express';
// import signIn from '../controllers/auth.controller.js';
import{ signUp,signIn} from '../controllers/auth.controller.js';
const router=express.Router();

router.post('/signup',signUp);
router.post('/signin',signIn);


export default router

