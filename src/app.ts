//Imports
import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app: Express = express();

//Local Server port 
const port: any = process.env.PORT || 3000;
//Version Endpoint
app.get("/version", (req : Request, res : Response) =>{
    // res.json({ 
    //     reference : process.env.API_REFERENCE,
    //     commit : process.env.API_COMMIT,
    //     version : process.env.API_VERSION
    // });
    res.send('Currenly not availiable...');
});
//Health Endpont
app.get("/health", (req : Request, res : Response) =>{
    res.json({ message: 'Dog Find is Woof Woof and running.'});
});
//Not Found Point
app.get("*", (req : Request, res : Response) => {
    res.send('Hmm sorry for not found what you looking for. Contact Dev for any troubleshooting..')
});
//Server Start Point
app.listen(port, process.env.IP as string, () => {
    console.log(`Server has started on ${port} PORT ...press ctrl+C to stop!`);
});