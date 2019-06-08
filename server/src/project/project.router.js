import {Router} from 'express'
import * as projectControler from './project.controler'

// Grzesek, jbc to do parametrów z roznych czesci requesta mozesz dobrac sie tak
// request.headers.token,
// request.params.licenseKey,
// request.body.newOwner,

const router = Router()

router.post('/getProject', async (req, res) => {
    res.json(await projectControler.getProject(req.body.projectId))
})

router.get('/', async (req, res) => {
    res.send(await projectControler.getAllProjects())
})

router.put('/', async (req, res) => {
    res.json(await projectControler.updateProject(req.body))
})

router.post('/', async (req,res) =>{
    res.json(await projectControler.insertProject(req.body))
})

router.delete('/', async (req,res) =>{
    res.json(await projectControler.deleteProject(req.body.projectId))
})

export default router