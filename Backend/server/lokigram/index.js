import { config } from 'dotenv';
import mongoose from 'mongoose';
import app from './src/app.js';
import config from './src/config/index.js';

( async() => {
    try{
        await mongoose.connect(config.MONGODB_URL);
        console.log('DataBase Conected !');

        app.on('error' , (err) => {
            console.log('Error:', err);
            throw err;
        } )

        const onListening = () => {console.log(`Listening to port ${config.PORT}`);
        }

        app.listen(config.PORT, onListening);
        
    }

    catch(err){
        console.log('Error: ', err);
        
    }
}) ()
// PHASE ONE COMPLETED