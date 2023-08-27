import { Request, Response, NextFunction } from "express";
import axios, { AxiosResponse } from 'axios';

//Set Types <interface></interface>
interface Fact {
    fact: string
};
interface Breed {
    id: number|string|null,
    name: string|null,
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
                let resultImages: AxiosResponse = await axios.get(`${imgEndpoint}v1/search?query=dog%20${dog.name}&per_page=1`);
                dog.image_url = (resultImages.data.photos[0].src.medium) ? resultImages.data.photos[0].src.medium : null;
            } catch (error:any) {
                console.error(`Error fetching images for ${dog.name}: ${error.message}`);
            }
            // Add Breed
            resData.push(dog);
        }
        //Send Response
        return res.status(200).json(resData);
    } catch (error:any) {
        // Handle errors appropriately
        console.error(error.message);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

//Get Dog breed info Endpoint handle
const getBreedInfo = async (req: Request, res: Response, next: NextFunction) => {
    //Make Request
    const endpoint: String = process.env.Service_DogFact || 'https://dogapi.dog/';
    const imgEndpoint: string  = process.env.Service_Image || 'https://api.pexels.com/';
    
    try {
        const dog_id: string = (req.params.id).toString();
        let result: AxiosResponse = await axios.get(`${endpoint}api/v2/breeds/${dog_id}`);
        let image_url: string = '';
        //Get Image
        try {
            // Get Images
            axios.defaults.headers.common['Authorization'] = `${process.env.DogImage_TOKEN}`;
            let resultImages: AxiosResponse = await axios.get(`${imgEndpoint}v1/search?query=dog%20${result.data.data.attributes.name}&per_page=1`);
            image_url = (resultImages.data.photos[0].src.medium) ? resultImages.data.photos[0].src.medium : null;
        } catch (error:any) {
            console.error(`Error fetching images for ${result.data.data.attributes.name}: ${error.message}`);
        }
        //Get Data
        let data: Breed = {
            id: dog_id,
            name: result.data.data.attributes.name,
            summary: result.data.data.attributes.description,
            origin: 'Not Availiable',
            life_span: `${result.data.data.attributes.life.min} to ${result.data.data.attributes.life.max}`,
            weight_kg: `${result.data.data.attributes.male_weight.min} to ${result.data.data.attributes.male_weight.max}`,
            height_cm: 'Not Availiable',
            image_url: image_url,
        };
        //Send Response
        return res.status(200).json({data});
    } catch (error) {
        // Handle errors appropriately
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

//Get Dog Fun Fact Endpoint handle
const getDogFact = async (req: Request, res: Response, next: NextFunction) => {
    //Make Request
    const endpoint: String = process.env.Service_DogFact || 'https://dogapi.dog/';
    try {
        let result: AxiosResponse = await axios.get(`${endpoint}api/v2/facts`);
        //Get Data
        let fact: Fact = (result.data.data[0].attributes?.body) ? result.data.data[0].attributes.body : `Don't have any dog fun fact at the momment.`;
        //Send Response
        return res.status(200).json({fact:fact});
    } catch (error) {
        // Handle errors appropriately
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

//Exports
export default { getBreedList, getBreedInfo, getDogFact};