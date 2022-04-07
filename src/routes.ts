import { Request, Response, Router } from "express";
import { ProductController } from "./controllers/ProductController";
import crypto from 'crypto'
import ensureAuthentitacted from './middleware'

const router = Router();

router.get('/products', ensureAuthentitacted, new ProductController().findAll)
router.post('/products', ensureAuthentitacted, new ProductController().create)
router.get('/products/:id', ensureAuthentitacted, new ProductController().findById)
router.put('/products/:id', ensureAuthentitacted, new ProductController().update)
router.delete('/products/:id', ensureAuthentitacted, new ProductController().remove)

router.post('/auth', (request: Request, response: Response)=>{
    const token = crypto.randomUUID();
    response.json({
        token: token
    })
})

export default router;