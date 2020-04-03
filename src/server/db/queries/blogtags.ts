import { Query } from "../index";

interface IBlogTags {
  blogid: number;
  tagid: number;
}

const all = (blogid: number) => {
    return Query<IBlogTags[]>
    (`SELECT tags.name FROM blogtags JOIN tags ON tags.id = blogtags.tagid WHERE blogid = ?`, [blogid])
    // ("SELECT * FROM blogtags WHERE blogid = ?", [blogid]);
};

const insert = (blogid: number, tagid: number) => {
return Query('INSERT INTO blogtags (blogid, tagid) VALUE (?,?)',[blogid, tagid]);

};

export default {
    all,
    insert
}