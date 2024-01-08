import sqlite3 from 'sqlite3';

export interface User {
    name: string;
    password: string;
}

function getPassword(
    name: string
) {
    let db = new sqlite3.Database('./database.db')

    // ensure user is in database
    db.get('SELECT password FROM users WHERE name = ?', [name], (err, row: User) => {
        if (err) {
            console.error(err)
            return
        }

        return row.password
    })

    db.close()
}

export function changePassword(
    name: string,
    newPassword: string
) {
    let db = new sqlite3.Database('./database.db')

    db.run('UPDATE users SET password = ? WHERE name = ?', [newPassword, name], (err) => {
        if (err) {
            console.error(err)
        }
    })
    
    db.close()
}