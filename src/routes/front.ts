import { Router , Request, Response} from 'express';
import controller from '../controllers/front';

const router = Router();
/* Api Demo */
router.get("/apidemo", controller.getDemoData);
/* Home route */
router.get("/", (req : Request, res : Response) => {
    res.render('index');
});
//Not Found Point
router.get("*", (req : Request, res : Response) => {
    res.send('Hmm sorry for not found what you looking for. Contact Dev for any troubleshooting..')
});

export default router;