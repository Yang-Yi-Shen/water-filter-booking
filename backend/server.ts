import express from 'express'

import { getBookings, makeBooking } from './booking'
import { getEarnings } from './earnings'
import { changePassword, userLogin } from './auth'

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

// PUT APIs
app.put('/changePassword', async (req, res) => {
    const newPassword = req.body.newPassword
    const response = changePassword(newPassword)
    res.json({
        data: response
    })
})

app.put('/makeBooking', async (req, res) => {
    const timeStart = req.body.timeStart
    const timeEnd = req.body.timeEnd
    const revenue = req.body.revenue

    const response = makeBooking(timeStart, timeEnd, revenue)
    res.json({
        data: response
    })
})

// start backend (fwoosh!)
app.listen(PORT, () => {
    console.log(`app listening at port ${PORT}`)
})