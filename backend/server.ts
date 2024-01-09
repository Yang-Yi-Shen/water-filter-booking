import express from 'express'

const app = express()
const PORT = 6900

app.listen(PORT, () => {
    console.log(`app listening at port ${PORT}`)
})