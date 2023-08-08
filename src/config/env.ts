import dotenv from 'dotenv';
dotenv.config();

class Environment{
    env(){
        return{
            port: process.env.PORT || 3000,
        }
    }
}

export default new Environment().env();