import { Request, Response } from 'express';
import express from 'express';

const router = express.Router();

/* GET users listing. */
router.get('/', (req: Request, res: Response) => {
  res.send('respond with a resource');
});

export default router;
