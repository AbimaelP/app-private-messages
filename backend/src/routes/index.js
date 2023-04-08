import express from 'express'
import UserController from '../app/controllers/UserController.js'

const router = express.Router()

const auth = (request,response,next) => {
    if(UserController.auth()){
        return next()
    }

    return request.status(401).json({ error: 'Você não está autenticado' })
};

router.post('/register',async (request, response) => {
    const userData = await request.body;
    const token = await UserController.create(userData)

    token.codRequest == 200 ? response.status(200).json(token.token_cod) : response.status(token.codRequest).json({error: token.error})
});

router.post('/login',async (request,response) => {
    const userData = await request.body
    const token = await UserController.index(userData)

    response.json(token)
});

router.get('/messages-history', auth,async (request,response) => {
    const token = await request.body
    const messages = await MessagesController.index(token)

});

export default router