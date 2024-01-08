const sqlite = require('sqlite3')

export function getPassword(
    name: string
) {
    let db = new sqlite.Database('./database.db')

    // ensure user is in database
    db.get('SELECT password FROM users WHERE name = ?', [name], (err, row) => {
        if (err) {
            console.error(err)
            return
        }

        return row.password
    })

    db.close()
}