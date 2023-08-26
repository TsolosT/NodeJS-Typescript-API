//Imports
import express, { Express, Request, Response, NextFunction} from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import path from 'path';
import routes from './routes';

//Initialize configuration 
dotenv.config();
//Init App
const app: Express = express();
//Local Server port 
const port:  number = parseInt(process.env.PORT as string, 10) || 3000;
//Setting the root path for views directory
app.set('views', path.join(__dirname, 'views'));
//Setting the view engine
app.set('view engine', 'ejs');
//Set Static content serve
app.use(express.static(path.join(__dirname, "public")));
/** Parse the request */
app.use(express.urlencoded({ extended: false }));
/** Takes care of JSON data */
app.use(express.json());
/** Logging */
app.use(morgan('dev'));

/** RULES OF OUR API */
app.use((req : Request, res : Response, next: NextFunction)  => {
    // set the CORS policy
    res.header('Access-Control-Allow-Origin', '*');
    // set the CORS headers
    res.header('Access-Control-Allow-Headers', 'origin, X-Requested-With, Content-Type, Accept, Authorization');
    // set the CORS method headers
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET POST');
        return res.status(200).json({});
    }
    next();
});
//Set Endpoints
app.use('/', routes);
/** Error handling */
app.use((req : Request, res : Response, next: NextFunction) => {
    const error = new Error('Not found');
    return res.status(404).json({
        message: error.message
    });
});
//Server Start Point
app.listen(port, process.env.IP as string, () => {
    console.log(`Server has started on ${port} PORT ...press ctrl+C to stop!`);
});