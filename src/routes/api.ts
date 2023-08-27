import { Router, Request, Response} from 'express';
import controller from '../controllers/api';
const router = Router();

//Apis Endpoints
// router.get('/breed/:name', controller.getBreedInfo);
router.get('/breed/list', controller.getBreedList);
router.get('/fact', controller.getDogFact);
//Version Endpoint
router.get("/version", (req : Request, res : Response) =>{
    // res.status(200.json({ 
    //     reference : process.env.API_REFERENCE,
    //     commit : process.env.API_COMMIT,
    //     version : process.env.API_VERSION
    // });
    res.send('Currenly not availiable...');
});
//Health Endpoint
router.get("/health", (req : Request, res : Response) =>{
    res.status(200).json({ message: 'Dog Find is Woof Woof and running.'});
});

export default router;