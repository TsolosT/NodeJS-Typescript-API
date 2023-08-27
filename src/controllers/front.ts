import { Request, Response, NextFunction } from "express";
import axios, { AxiosResponse } from 'axios';


//Get Dog Fun Fact Endpoint handle
const getDemoData = async (req: Request, res: Response, next: NextFunction) => {
    const endpoint: string = 'http://localhost:3000'; // Temp
    //Get Breeds 
    let resultBreed: AxiosResponse = await axios.get(`${endpoint}/api/breed/list`);
    //Get Fact
    let resultFact: AxiosResponse = await axios.get(`${endpoint}/api/fact`);
    //Send Response
    res.render('apidemo', {breeds:resultBreed.data, fact: resultFact.data});
};

//Exports
export default { getDemoData };