import {Router} from 'express'
import * as equipmentControler from './equipment.controler'

// Grzesek, jbc to do parametrów z roznych czesci requesta mozesz dobrac sie tak
// request.headers.token,
// request.params.licenseKey,
// request.body.newOwner,

const router = Router()

// Ten endpoint jbc uderza na ściezke: http://localhost:5000/user/login

router.post('/getEquipment', async (req, res) => {
    res.json(await equipmentControler.getEquipment(req.body.equipmentId))
})

router.get('/', async (req, res) => {
    res.send(await equipmentControler.getAllEquipments())
})

router.put('/', async (req, res) => {
    res.json(await equipmentControler.updateEquipmen(req.body))
})

router.post('/', async (req,res) =>{
    res.json(await equipmentControler.insertEquipment(req.body))
})

router.delete('/', async (req,res) =>{
    res.json(await equipmentControler.deleteEquipment(req.body.equipmentId))
})

router.put('/assign', async (req, res) => {
    res.json(await equipmentControler.assignEquipment(req.body.equipmentId, req.body.projectId))
})

export default router