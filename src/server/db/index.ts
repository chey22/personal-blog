import * as mysql from "mysql";
import config from "../config";

// may need to be right above export stmt
import Blogs from "./queries/blogs";
import Tags from "./queries/tags";

const pool = mysql.createPool(config.mysql);

// !~SQL injection attack!~ - inserts the query below into the template literal and deletes the users table. DO NOT allow your users direct access to these values esp in plain text
// const userid = '1; DROP TABLE users;'
// console.log('SELECT * FROM users WHERE id = ${userid}');

export const Query = (query: string, values?: any) => { // or: (query:string, values?: Array<string | number>)
  
  const sql = mysql.format(query, values);
  console.log(sql)

    return new Promise((resolve, reject) => {
    // pool.query(query, values, (err, results) -- this is poor practice bc it allows the user to have access to the variables query and values in plain text. Updated version below.
    pool.query(sql, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

// Query('SELECT * FROM users WHERE id = ?', [1]);


// OLD - landers version
// export const Connection = mysql.createConnection(config.mysql);

// Connection.connect(err => {
//     if(err) console.log(err)
// });

// export const Query = (query: string, values?: Array<string | number>) => {
//     // don't have to use connection.end since using a Promise
//     return new Promise<Array<any>>((resolve, reject) => {
//         Connection.query(query, values, (err, results) => {
//             if(err) return reject(err);
//             return resolve(results);
//         });
//     });
// }

export default {
  Blogs,
  Tags
};
