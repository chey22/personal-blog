import * as express from 'express';
import db from '../db';

const router = express.Router();

// TAGS ROUTES
// get all blog tags
router.get('/', async (req, res) => {
    try {
        let tags = await db.Tags.tAll();
        res.json(tags)
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

// get one blog tag based on its unique id
router.get('/:id?', async (req, res) => {
    try {
        let tags = await db.Tags.tOne(parseInt(req.params.id, 10));
        res.json(tags)
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

export default router;