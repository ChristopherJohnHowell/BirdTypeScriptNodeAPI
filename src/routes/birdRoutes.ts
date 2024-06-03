import { Router } from 'express';
import { getBirds, getBird, createBird, updateBird, deleteBird } from '../controllers/birdController';

const router = Router();

router.get('/birds', getBirds);
router.get('/birds/:id', getBird);
router.post('/birds', createBird);
router.put('/birds/:id', updateBird);
router.delete('/birds/:id', deleteBird);

export default router;
