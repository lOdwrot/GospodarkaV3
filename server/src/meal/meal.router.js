import {Router} from 'express'
import * as mealControler from './meal.controler'

// Grzesek, jbc to do parametrów z roznych czesci requesta mozesz dobrac sie tak
// request.headers.token,
// request.params.licenseKey,
// request.body.newOwner,

const router = Router()

// Ten endpoint jbc uderza na ściezke: http://localhost:5000/meals/menu
router.post('/menu', async (req, res) => {
    res.json(await mealControler.meal(req.body.mealDescription))
})

router.get('/', async (req, res) => {
    res.send(await mealControler.getAllMeals())
})

export default router