import * as express from 'express';

import db from '../db';

const router = express.Router();

// TAGS ROUTES
// get all blog tags
router.get('api/tags', (res, req) => {

})

// get one blog tag based on its unique id
router.get('api/tags/:id?', (res, req) => {

})

export default router;