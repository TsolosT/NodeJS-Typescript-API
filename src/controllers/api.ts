import { Request, Response, NextFunction } from "express";
import axios, { AxiosResponse } from 'axios';

//Set Types <interface></interface>
interface Fact {
    fact: string
};


// method get all breads to json
const getBreedList = null;

// method get bread:name info
const getBreedInfo = null;

// method get dog fact
const getDogFact = async (req: Request, res: Response, next: NextFunction) => {
    //Make Request
    const endpoint: String = process.env.Service_DogFact || 'https://dogapi.dog/';
    let result: AxiosResponse = await axios.get(`${endpoint}api/v2/facts`);
    //Get Data
    let fact: Fact = result.data.data[0].attributes.body;
    //Send Response
    return res.status(200).json({fact:fact});
};

//Exports
export default { getBreedList, getBreedInfo, getDogFact};