import {Router} from 'express'
import * as ordersControler from './orders.controler'

// Grzesek, jbc to do parametrów z roznych czesci requesta mozesz dobrac sie tak
// request.headers.token,
// request.params.licenseKey,
// request.body.newOwner,

const router = Router()

// Ten endpoint jbc uderza na ściezke: http://localhost:5000/orders/order
router.post('/order', async (req, res) => {
    res.json(await ordersControler.userOrder(req.body.userId))
})

router.post('/day-order', async (req, res) => {
    res.json(await ordersControler.userDayOrder(req.body.userId, req.body.date))
})

router.get('/', async (req, res) => {
    res.send(await ordersControler.getAllOrders())
})

router.post('/submit', async (req, res) => {
    res.json(await ordersControler.postOrder(req.body.userId, req.body.mealId))
})

export default router