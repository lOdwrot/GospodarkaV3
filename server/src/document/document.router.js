import {Router} from 'express'
import * as documentControler from './document.controler'

// Grzesek, jbc to do parametrów z roznych czesci requesta mozesz dobrac sie tak
// request.headers.token,
// request.params.licenseKey,
// request.body.newOwner,

const router = Router()

router.post('/getDocument', async (req, res) => {
    res.json(await documentControler.getDocument(req.body.documentId))
})

router.get('/', async (req, res) => {
    res.send(await documentControler.getAllDocuments())
})

router.put('/', async (req, res) => {
    res.json(await documentControler.updateDocument(req.body))
})

router.post('/', async (req,res) =>{
    res.json(await documentControler.insertDocument(req.body))
})

router.delete('/', async (req,res) =>{
    res.json(await documentControler.deleteDocument(req.body.documentId))
})

router.put('/assign', async (req, res) => {
    res.json(await documentControler.assignDocument(req.body.documentId, req.body.userId))
})

export default router