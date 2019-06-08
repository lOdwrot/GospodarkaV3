import {Router} from 'express'
import * as userdocControler from './userdoc.controler'

// Grzesek, jbc to do parametrów z roznych czesci requesta mozesz dobrac sie tak
// request.headers.token,
// request.params.licenseKey,
// request.body.newOwner,

const router = Router()

router.post('/getUser', async (req, res) => {
    res.json(await userdocControler.getUserDoc(req.body.userdocId))
})

router.get('/', async (req, res) => {
    res.send(await userdocControler.getAllUserDocs())
})

router.put('/', async (req, res) => {
    res.json(await userdocControler.updateUserDoc(req.body))
})

router.post('/', async (req,res) =>{
    res.json(await userdocControler.insertUserDoc(req.body))
})

router.delete('/', async (req,res) =>{
    res.json(await userdocControler.deleteUserDoc(req.body.userdocId))
})

export default router