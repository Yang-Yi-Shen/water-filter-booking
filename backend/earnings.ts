import sqlite3 from "sqlite3";

interface GetEarningsResponse {
    earnings: number;
}

export function getEarnings(
): Promise<GetEarningsResponse> {
    return new Promise<GetEarningsResponse>((resolve, reject) => {
        let db = new sqlite3.Database('./database.db')

        db.get('SELECT SUM(revenue) AS earnings FROM bookings', (err, row:GetEarningsResponse) => {
            if (err) {
                console.error(err)
                db.close()
                reject(err)
                return
            }

            resolve(row)
            db.close()
        })
    })
}