import * as express from 'express';
import apiRouter from './routes';

const app = express();

//MIDDLEWARES

// // cors middleware
// app.use(cors());

// static middleware
app.use(express.static('public'));

// this is the body parser middleware that parses the JSON content that's posted to the API so that we can use the JSON content like a JS object
app.use(express.json());

// middleware router from apiRouter out of routes in index.js
app.use(apiRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
