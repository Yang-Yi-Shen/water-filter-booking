const express = require('express') // for API development
const sqlite = require('sqlite3') // for storing booking & revenue data
const bcrypt = require('bcrypt') // for encrypting Mr. Luo's password

const app = express()
const PORT = 6900

app.listen(PORT, () => {
    console.log(`app listening at port ${PORT}`)
})