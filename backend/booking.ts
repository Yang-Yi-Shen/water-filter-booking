import sqlite3 from "sqlite3";

export interface Booking {
    tsart: number; // dates are stored in milliseconds so datatype is number
    tend: number;
    revenue: number; // revenue is calculated depending on services ordered
}

// look into combining this & LoginResponse into one DBResponse
interface MakeBookingResponse {
    success: boolean;
}

export function makeBooking(
    tsart: number,
    tend: number,
    revenue: number
): Promise<MakeBookingResponse> {
    return new Promise<MakeBookingResponse>((resolve, reject) => {
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

export async function getBookings(
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