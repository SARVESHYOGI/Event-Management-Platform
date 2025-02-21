import express from 'express';
import { getEvents, createEvent, deleteEvent, editevent } from '../controllers/events.controller.js';
import upload from '../middlewares/multer.js';
import auth from '../middlewares/auth.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send(' in eveent routes');
});
router.get('/getevents', getEvents);
router.post('/createevent', auth, upload.single("image"), createEvent);
router.delete('/deleteevent/:id', auth, deleteEvent);
router.put('/editevent/:id', auth, editevent);




export default router;