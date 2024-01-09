import express from 'express'

import { getBookings } from './booking'
import { getEarnings } from './earnings'

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

app.listen(PORT, () => {
    console.log(`app listening at port ${PORT}`)
})