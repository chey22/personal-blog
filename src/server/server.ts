import * as express from 'express';
import * as path from 'path'
import apiRouter from './routes';
import config from './config'

const app = express();

// MIDDLEWARES

// // cors middleware
// app.use(cors());

// static middleware
app.use(express.static('public'));

// this is the body parser middleware that parses the JSON content that's posted to the API so that we can use the JSON content like a JS object
app.use(express.json());

// middleware router from apiRouter out of routes in index.js
app.use('/api', apiRouter); // or app.use(apiRouter); ?

// wildcard GET - for using React on front end of a single page app (meaning only one index.html file and one app.js file for all views). Nuance for working in full stack environment where server and the site are running on the same location
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')))
    // in case you tried to make a GET request to a pURL that you haven't coded a route for yet, aka a route that doesn't match inside apiRouter
    // also suited for headless CMS i.e. Wordpress, Stripe, Squarespace where you can build your own create-react-app and use their service


app.listen(parseInt(config.port), () => console.log(`Server listening on port: ${config.port}`));
// or use: const port = process.env.PORT || 3000;

// // testing
// import './db' // Luke does not use, but Chase does?