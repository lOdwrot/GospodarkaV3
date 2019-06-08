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

router.post('/getUser', async (req, res) => {
    res.json(await userControler.getUser(req.body.userId))
})

router.get('/', async (req, res) => {
    res.send(await userControler.getAllUsers())
})

router.put('/', async (req, res) => {
    res.json(await userControler.updateUser(req.body.newData))
})

router.post('/', async (req,res) =>{
    res.json(await userControler.insertUser(req.body.newUser))
})

router.delete('/', async (req,res) =>{
    res.json(await userControler.deleteUser(req.body.userId))
})

router.put('/rate', async (req, res) => {
    res.json(await userControler.rateUser(req.body.userId, req.body.rating))
})

router.put('/assign', async (req, res) => {
    res.json(await userControler.assignUser(req.body.userId, req.body.project))
})

export default router