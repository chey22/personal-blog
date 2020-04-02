import * as express from 'express';

import db from '../db';

const router = express.Router();

// BLOGS ROUTES
// get all blogs = GET /api/blogs
router.get('/api/blogs', async (req, res) => {
    try {
        let blogs = await db.Blogs.all();
        res.json(blogs)
        // res.json(await db.Blogs.all());
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

// get one blog based on its unique id
router.get('/api/blogs/:id', async (req, res) => {
    try {
        let blogs = await db.Blogs.one(parseInt(req.params.id, 10)); //base10 because the integer got converted to a string in the json
        res.json(blogs[0]); // 0 index bc it comes first in the response
        // res.json((await db.Blogs.one(req.params.id))[0]);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

// post a new blog
router.post('/api/blogs,', async (req, res) => {
    let title = req.body.title;
    let content = req.body.content;
    let authorid = parseInt(req.body.authorid, 10); //base10 because the integer got converted to a string in the json
    let tagid = parseInt(req.body.tagid, 10); //base10 because the integer got converted to a string in the json
    try {
        let blogs = await db.Blogs.post(title, content, authorid, tagid)
        res.json(blogs)
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

// edit an existing blog
router.put('/api/blogs/:id?', async (req, res) => {
    let id = parseInt(req.params.id, 10);
    let title = req.body.title;
    let content = req.body.content;
    try {
        let blogs = await db.Blogs.put(id, title, content);
        res.json(blogs);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

// delete an existing blog
router.delete('/api/blogs/:id?', async (req, res) => {
    let id = parseInt(req.params.id, 10);
    try {

    } catch {

    }
})

 export default router