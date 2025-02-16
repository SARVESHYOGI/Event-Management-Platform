import express, { Router } from 'express';
import { createUser, getusers } from '../controllers/user.controller.js';

const router = Router();

router.get('/getusers', getusers);
router.post('/createuser', createUser);


export default router;