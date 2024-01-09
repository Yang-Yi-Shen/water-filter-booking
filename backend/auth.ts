import sqlite3 from 'sqlite3';

export interface User {
    name: string;
    password: string;
}

export interface LoginResponse {
    success: boolean;
}

function getPassword(
    name: string
): Promise<string> {
    return new Promise<string>((resolve, reject) => {
        let db = new sqlite3.Database('./database.db')

        db.get('SELECT password FROM users WHERE name = ?', [name], (err, row: User) => {
            if (err) {
                console.error(err)
                db.close()
                reject(err)
                return
            }

            const passwordValue = row.password;
            db.close()
            resolve(passwordValue)
        })
    })
}

export async function userLogin(
    userPassword: string
): Promise<LoginResponse> {
    const password = await getPassword('mrluo') // username hardcoded as only one user, Mr. Luo
    const successValue = (userPassword == password)

    return {
        success: successValue
    }
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