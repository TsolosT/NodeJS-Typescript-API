import { Request, Response, NextFunction } from "express";
import axios, { AxiosResponse } from 'axios';

//Get Api Catalog Page
const showDemoBreedData = async (req: Request, res: Response, next: NextFunction) => {

    const endpoint: string = 'http://localhost:3000'; // Temp
    const dog_id: string = (req.params.id).toString();
    //Get Breeds 
    let resultBreed: Object | null = null;
    try {
        let resultBreedData: AxiosResponse = await axios.get(`${endpoint}/api/breed/info/${dog_id}`);
        resultBreed = resultBreedData.data.data;
    } catch (error) {
        // Handle errors appropriately
        console.error(error);
    }
    //Send Response
    res.render('apidemobreed', {data:resultBreed});
}

//Get Api Showcase Page
const showDemoData = async (req: Request, res: Response, next: NextFunction) => {
    const endpoint: string = 'http://localhost:3000'; // Temp
    //Get Breeds & Fact
    let resultBreed: Object | null = null;
    let resultFact: Object | null = null;
    try {
        let resultBreedData: AxiosResponse  = await axios.get(`${endpoint}/api/breed/list`);
        resultBreed = resultBreedData.data;
        //Get Fact
        let resultFactData: AxiosResponse = await axios.get(`${endpoint}/api/fact`);
        resultFact = resultFactData.data;
    }  catch (error) {
        // Handle errors appropriately
        console.error(error);
    }
    //Send Response
    res.render('apidemo', {breeds:resultBreed, fact: resultFact});
};

//Exports
export default { showDemoData, showDemoBreedData };