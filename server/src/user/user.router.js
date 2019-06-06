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

router.post('/get', async (req, res) => {
    res.json(await userControler.getUser(req.body.user))
})

router.get('/', async (req, res) => {
    res.send(await userControler.getAllUsers())
})

router.put('/update', async (req, res) => {
    res.json(await userControler.updateUser(req.body.user))
})

router.post('/insert', async (req,res) =>{
    res.json(await userControler.insertUser(req.body.user))
})

router.post('/delete', async (req,res) =>{
    res.json(await userControler.deleteUser(req.body.user))
})

export default router