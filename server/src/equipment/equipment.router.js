import {Router} from 'express'
import * as equipmentControler from './equipment.controler'

// Grzesek, jbc to do parametrów z roznych czesci requesta mozesz dobrac sie tak
// request.headers.token,
// request.params.licenseKey,
// request.body.newOwner,

const router = Router()

// Ten endpoint jbc uderza na ściezke: http://localhost:5000/user/login

router.post('/getEquipment', async (req, res) => {
    res.json(await equipmentControler.getEquipments(req.body.equipmentId))
})

router.get('/', async (req, res) => {
    res.send(await equipmentControler.getAllEquipments())
})

router.put('/', async (req, res) => {
    res.json(await equipmentControler.updateEquipment(req.body.newData))
})

router.post('/', async (req,res) =>{
    res.json(await equipmentControler.insertEquipments(req.body.newEquipment))
})

router.delete('/', async (req,res) =>{
    res.json(await equipmentControler.deleteEquipments(req.body.equipmentId))
})

router.put('/assign', async (req, res) => {
    res.json(await userControler.assignEquipment(req.body.equipmentId, req.body.project))
})

export default router