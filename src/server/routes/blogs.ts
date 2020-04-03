import * as express from 'express';
import db from '../db';

const router = express.Router();

// BLOGS ROUTES
// get all blogs = GET /api/blogs
router.get('/', async (req, res) => {
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
router.get('/:id', async (req, res) => {
    try {
        let blogs = await db.Blogs.one(parseInt(req.params.id, 10)); //base10 because the integer got converted to a string in the json
        res.json(blogs); // 0 index bc it comes first in the response
        // res.json((await db.Blogs.one(req.params.id))[0]);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

// post a new blog
// POST a new Blog, with at least one tag
// Hint: Your blog insert will result in an id response from mysql, use that to insert your blog id and tag id into your blogtags table!
router.post('/', async (req, res) => {
    let title = req.body.title;
    let content = req.body.content;
    let authorid = parseInt(req.body.authorid, 10); //base10 because the integer got converted to a string in the json
    let tagid = parseInt(req.body.tagid, 10); //base10 because the integer got converted to a string in the json
    try {
        let result = await db.Blogs.post(title, content, authorid)
        await db.BlogTags.insert(result.insertId, tagid)
        res.json(result.insertId)
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

// edit an existing blog
router.put('/:id?', async (req, res) => {
    let id = parseInt(req.params.id, 10);
    let title = req.body.title;
    let content = req.body.content;
    try {
        res.json(await db.Blogs.put(id, title, content))
        // let blogs = await db.Blogs.put(id, title, content);
        // res.json(blogs);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

// delete an existing blog
router.delete('/:id', async (req, res) => {
    let id = parseInt(req.params.id, 10);
    try {
        res.json(await db.Blogs.del(id))
    } catch(e) {
        console.log(e);
        res.sendStatus(500).json('delete failed');
    }
})

 export default router