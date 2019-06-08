import express from 'express'
import bodyParser from 'body-parser'
import userRouter from './user/user.router'
import mealsRouter from './meals/meals.router'
import orderRouter from './orders/orders.router'
import projectRouter from './project/project.router'
import equipmentRouter from './equipment/equipment.router'
import documentRouter from './document/document.router'
import userdocRouter from './userdoc/userdoc.router'
import {connect} from './database'
import cors from 'cors'

const PORT = process.env.PORT || 5000
const DB_PORT = process.env.DB_PORT ||'27017'
const DB_USER = process.env.DB_USER || ''
const DB_PASSWORD= process.env.DB_PASSWORD || ''
const DB_NAME = process.env.DB_NAME || 'Gospodarka'

const app = express()
app.use(cors())
connect({DB_USER, DB_PASSWORD, DB_PORT, DB_NAME})

app.use((req, res, next) => {
    let fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl
    let currentDate = new Date();
    req.body && console.log("#params: ", JSON.stringify(req.body))
    console.log('Time: ', currentDate.toLocaleString(), ' Reqest address: ', fullUrl, '\n')
    next()
})

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

app.use('/user', userRouter)
app.use('/meals', mealsRouter)
app.use('/orders', orderRouter)
app.use('/project', projectRouter)
app.use('/equipment', equipmentRouter)
app.use('/document', documentRouter)
app.use('/userdoc', userdocRouter)

app.get('/', (req, res) => {
    res.send({Test: 'Ok'})
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})