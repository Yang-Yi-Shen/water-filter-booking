import sqlite3 from "sqlite3";

import { DBResponse } from "./response";

export interface Booking {
    tsart: number; // dates are stored in milliseconds so datatype is number
    tend: number;
    revenue: number; // revenue is calculated depending on services ordered
}

export function makeBooking(
    tsart: number,
    tend: number,
    revenue: number
): Promise<DBResponse> {
    return new Promise<DBResponse>((resolve, reject) => {
        let db = new sqlite3.Database('./database.db')

        db.run('INSERT INTO bookings VALUES(?, ?, ?)', [tsart, tend, revenue], (err) => {
            if (err) {
                console.error(err)
                db.close()
                reject({
                    success: false
                })
                return
            }

            db.close()
            resolve({
                success: true
            })
        })
    })
}

export function getBookings(
):Promise<Booking[]> {
    return new Promise<Booking[]>((resolve, reject) => {
        let db = new sqlite3.Database('./database.db')

        db.all('SELECT * FROM bookings',[], (err, rows: Booking[]) => {
            if (err) {
                console.error(err)
                db.close()
                reject(err)
                return
            }

            db.close()
            resolve(rows)
        })
    })
}