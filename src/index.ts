import http from 'http';
import app from './app';
import env from './config/env';
import DataSource from './database/db';

const server = http.createServer(app);

server
    .listen(env.port)
    .on('listening', async () => {
        console.log(`Sever on port ${env.port}`);
        await Promise.all([new DataSource().connection()]);
    })
    .on('error', (err: Error) => {
        console.log(`Error: ${err.message}`);
        process.exit(1);
    })