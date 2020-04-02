import * as dotenv from 'dotenv';

dotenv.config();

export default {
  mysql: {
    host: process.env.DB_HOST,
    // port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_SCHEMAthere
  },
  port: process.env.PORT
};

// export default {
//   mysql: {
//     host: "localhost",
//     port: 3306,
//     user: "bloguser",
//     password: "lolpassword!",
//     database: "db_lab3_blog"
//   }
// };
