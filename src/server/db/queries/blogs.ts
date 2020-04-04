import { Query } from '../index';
// import db from './db'

const all = () => {
    // return Query('SELECT * FROM blogs');
    return Query(`SELECT blogs.*, authors.name FROM blogs JOIN authors ON authors.id = blogs.authorid`);
};

const one = (id: number) => {
    // return Query('SELECT * FROM blogs WHERE id = ?', [id]);
    return Query(`SELECT blogs.*, authors.name FROM blogs JOIN authors ON authors.id = blogs.authorid WHERE blogs.id = ?`, [id]);
};

// POST a new Blog, with at least one tag
// Hint: Your blog insert will result in an id response from mysql, use that to insert your blog id and tag id into your blogtags table!
const post = async (title: string, content: string, authorid: number) => {
    return Query(`INSERT INTO blogs (title, content, authorid) VALUES(?,?,?)`,[title, content, Number(authorid)])
}

const put = async (id: number, title: string, content: string) => {
    return Query(`UPDATE blogs SET title = ?, content = ? WHERE id = ?`, [title, content, id])
}

const del = async (id: number) => {
    return Query('DELETE FROM blogs WHERE id = ?', [id])
}

// export const blogTags = async (id:number) => Query('CALL spBlogTags(?)', [id]); // per Cat

export default {
    all,
    one,
    post,
    put,
    del,
    // blogTags // per Cat
}
