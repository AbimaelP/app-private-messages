import express from 'express'
import UserController from '../app/controllers/UserController.js'

const router = express.Router()

const auth = async (request,response,next) => {
    const isAuth = await UserController.authenticate(request.body.token)
    
    if(isAuth.codRequest == 200 && (isAuth.isValid.length === 32 || isAuth.isValid.length === 36 )){
        return next()
    }

    return response.status(401).json({ error: 'Você não está autenticado' })
};

router.post('/register',async (request, response) => {
    const userData = await request.body;
    const token = await UserController.create(userData)

    token.codRequest == 200 ? response.status(200).json(token.token_cod) : response.status(token.codRequest).json({error: token.error})
});

router.post('/login',auth,async (request,response) => {
    const token = await request.body.token
    const data = await UserController.index(token)

    response.json(data)
});

router.get('/messages-history', auth,async (request,response) => {
    const token = await request.body
    const messages = await MessagesController.index(token)

});

export default router