import { Query } from './index';

const all = async () => Query('SELECT * FROM blogs');
const one = async (id: number) => Query('SELECT * FROM blogs WHERE id = ?', [id]);

export default {
    all,
    one
}