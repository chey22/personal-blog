import { Query } from '../index';

const all = async () => {
    return Query('SELECT * FROM blogs');
};

const one = async (id: number) => {
    return Query('SELECT * FROM blogs WHERE id = ?', [id]);
};

const post = async (title: string, content: string, authorid: number, tagid: number) => {
    // let values = [title, content, authorid, tagid];
    // let tempQuery: any = await Query('INSERT INTO blogstable (title, content, authorid) VALUES(?,?,?)', values);
    // let insertId: any = Object.entries(tempQuery)[2][1];
    return Query(`INSERT INTO blogs (title, content, authorid) VALUES(?,?,?)`,[title, content, Number(authorid), Number(tagid)])
}

const put = async (id: number, title: string, content: string) => {
    return Query(`UPDATE blogs SET (id, title, conent) VALUES(?,?)`, [id, title, content])
}

export default {
    all,
    one,
    post,
    put
}