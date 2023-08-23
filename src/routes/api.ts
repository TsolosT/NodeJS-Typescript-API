import { Router , Request, Response} from 'express';

const router = Router();

//Version Endpoint
router.get("/version", (req : Request, res : Response) =>{
    // res.json({ 
    //     reference : process.env.API_REFERENCE,
    //     commit : process.env.API_COMMIT,
    //     version : process.env.API_VERSION
    // });
    res.send('Currenly not availiable...');
});
//Health Endpont
router.get("/health", (req : Request, res : Response) =>{
    res.json({ message: 'Dog Find is Woof Woof and running.'});
});

export default router;