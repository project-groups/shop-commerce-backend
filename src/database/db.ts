import { connect } from 'mongoose';

export default class DataSource{
    connection(): Promise<any>{
        return new Promise(async (resolve, reject) => {
            try {
                const db = await connect('mongodb://localhost:27017/ecommerce')
                console.log(`Connected to ${db.connection.name}`);
                resolve(db);
            } catch (error) {
                console.log(`An error has ocurred to connect to database: ${error}`);
                reject(error);
            }
        });
    }
}