import {Router} from 'express'
import * as userControler from './user.controler'

// Grzesek, jbc to do parametrów z roznych czesci requesta mozesz dobrac sie tak
// request.headers.token,
// request.params.licenseKey,
// request.body.newOwner,

const router = Router()

// Ten endpoint jbc uderza na ściezke: http://localhost:5000/user/login
router.post('/login', async (req, res) => {
    res.json(await userControler.login(req.body.mail, req.body.password))
})

router.get('/', async (req, res) => {
    res.send(await userControler.getAllUsers())
})

export default router