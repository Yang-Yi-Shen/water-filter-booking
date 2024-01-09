import express from 'express'

import { getBookings } from './booking'
import { getEarnings } from './earnings'
import { userLogin } from './auth'

const app = express()
const PORT = 6900

// GET APIs
app.get('/getBookings', async (req, res) => {
    const response = await getBookings()
    res.json({
        data: response
    })
})

app.get('/getEarnings', async (req, res) => {
    const response = await getEarnings()
    res.json({
        data: response
    })
})

// POST APIs
app.post('/userLogin', async (req, res) => {
    const password = req.body.password
    const response = await userLogin(password)
    res.json({
        data: response
    })
})

app.listen(PORT, () => {
    console.log(`app listening at port ${PORT}`)
})