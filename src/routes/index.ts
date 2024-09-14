import { Router } from 'express';
import contactsRouter from "./contacts";

const router = Router();

router.use('/contacts', contactsRouter);

router.get('/', (req, res) => {
    res.status(200).json({
        message: "Hello World!"
    });
})

export default router;