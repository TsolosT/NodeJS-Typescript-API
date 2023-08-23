//Imports
import express, { Express } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import routes from './routes';

//Initialize configuration 
dotenv.config();

const app: Express = express();
//Setting the root path for views directory
app.set('views', path.join(__dirname, 'views'));
//Setting the view engine
app.set('view engine', 'ejs');
//Set Static content serve
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

//Local Server port 
const port: any = process.env.PORT || 3000;
//Set Endpoints
app.use('/', routes);

//Server Start Point
app.listen(port, process.env.IP as string, () => {
    console.log(`Server has started on ${port} PORT ...press ctrl+C to stop!`);
});