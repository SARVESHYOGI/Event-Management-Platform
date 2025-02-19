import express, { Router } from 'express';
import { createUser, getusers, loginuser, logoutuser } from '../controllers/user.controller.js';
import auth from '../middlewares/auth.js';

const router = Router();

router.get('/getusers', getusers);
router.post('/createuser', createUser);
router.post('/loginuser', loginuser);
router.post('/logoutuser', auth, logoutuser);


export default router;