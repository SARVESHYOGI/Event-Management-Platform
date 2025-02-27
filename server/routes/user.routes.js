import express, { Router } from 'express';
import { createUser, getusers, loginuser, logoutuser, refreshToken } from '../controllers/user.controller.js';
import auth from '../middlewares/auth.js';

const router = Router();

router.get('/', (req, res) => {
  res.send(' in user routes');
});

router.get('/getusers', getusers);
router.post('/createuser', createUser);
router.post('/loginuser', loginuser);
router.post('/logoutuser', auth, logoutuser);
router.post('/refresh-token', refreshToken)



export default router;