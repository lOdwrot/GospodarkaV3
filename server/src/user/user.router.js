import {Router} from 'express'
import * as userControler from './user.controler'

const router = Router()

router.get('/login', async (req, res) => {
    res.json(await userControler.login(request.body.mail, request.body.password))
})

router.get('/', async (req, res) => {
    res.send(await userControler.getAllUsers())
})

export default router