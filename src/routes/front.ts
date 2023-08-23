import { Router , Request, Response} from 'express';

const router = Router();

/* Home route */
router.get("/", (req : Request, res : Response) => {
    res.render('index');
});
//Not Found Point
router.get("*", (req : Request, res : Response) => {
    res.send('Hmm sorry for not found what you looking for. Contact Dev for any troubleshooting..')
});

export default router;