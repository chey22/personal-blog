import * as express from 'express';
import blogsRouter from './blogs';

// import db from '../db'; // who knows

const router = express.Router();

router.use('/blogs', blogsRouter);

export default router