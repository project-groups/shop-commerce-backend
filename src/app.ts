import express from 'express';
import morgan from 'morgan';

class Application{
    app: express.Application;

    constructor(){
        this.app = express();
        this.setting();
    }

    setting(){
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
        this.app.use(morgan('dev'))
    }
}

export default new Application().app;