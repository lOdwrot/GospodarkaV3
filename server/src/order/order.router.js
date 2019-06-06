import {Router} from 'express'
import * as orderControler from './order.controler'

// Grzesek, jbc to do parametrów z roznych czesci requesta mozesz dobrac sie tak
// request.headers.token,
// request.params.licenseKey,
// request.body.newOwner,

const router = Router()

// Ten endpoint jbc uderza na ściezke: http://localhost:5000/order/request
router.post('/request', async (req, res) => {
    res.json(await orderControler.login(req.body.mail, req.body.password))
})

router.get('/', async (req, res) => {
    res.send(await orderControler.getAllOrder())
})

export default router