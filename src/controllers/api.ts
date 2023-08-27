import { Request, Response, NextFunction } from "express";
import axios, { AxiosResponse } from 'axios';

//Set Types <interface></interface>
interface Fact {
    fact: string
};
interface Breed {
    id: number,
    name: string,
    summary?: string
    origin?: string,
    life_span?: string,
    temperament?: string,
    weight_kg?: string,
    height_cm?: string,
    image_url?: string,
};

//Get Dogs breed list Endpoint handle
const getBreedList = async (req: Request, res: Response, next: NextFunction) => { 
    //Get Breeds
    const endpoint: string  = process.env.Service_DogFact || 'https://dogapi.dog/';
    const imgEndpoint: string  = process.env.Service_Image || 'https://api.pexels.com/';
    try {
        let result: AxiosResponse = await axios.get(`${endpoint}api/v2/breeds`);
        //Set Data
        let data: any[] = result.data.data;
        let resData: any[] = [];
        axios.defaults.headers.common['Authorization'] = `${process.env.DogImage_TOKEN}`;
        for (const breed of data) {
            let dog: Breed = {
                id: breed?.id || null,
                name: breed.attributes?.name || null,
            };
            try {
                // Get Images
                let resultImages: AxiosResponse = await axios.get(`${imgEndpoint}v1/search?query=dog ${dog.name}&per_page=1`);
                dog.image_url = (resultImages.data.photos[0].src.medium) ? resultImages.data.photos[0].src.medium : null;
            } catch (error:any) {
                console.error(`Error fetching images for ${dog.name}: ${error.message}`);
            }
            // Add Breed
            resData.push(dog);
        }
        //Send Response
        return res.status(200).json(resData);
    } catch (error) {
        // Handle errors appropriately
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

// method get bread:name info
const getBreedInfo = null;

//Get Dog Fun Fact Endpoint handle
const getDogFact = async (req: Request, res: Response, next: NextFunction) => {
    //Make Request
    const endpoint: String = process.env.Service_DogFact || 'https://dogapi.dog/';
    let result: AxiosResponse = await axios.get(`${endpoint}api/v2/facts`);
    //Get Data
    let fact: Fact = (result.data.data[0].attributes?.body) ? result.data.data[0].attributes.body : `Don't have any dog fun fact at the momment.`;
    //Send Response
    return res.status(200).json({fact:fact});
};

//Exports
export default { getBreedList, getBreedInfo, getDogFact};