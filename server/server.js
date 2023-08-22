// import config from 'dotenv';
// import express from 'express';
// import { cors } from 'cors';
// import cookieParser from 'cookie-parser';
// import SocketServer from './SocketServer.js';
// import { ExpressPeerServer } from 'peer';
// import path from 'path';

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const SocketServer = require('./SocketServer.js');
const { ExpressPeerServer } = require('peer')
const path = require('path');

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());


// Socket
const http = require('http').createServer(app)
const io = require('socket.io')(http)

io.on('connection', socket => {
    SocketServer(socket);
})

// Create peer server
ExpressPeerServer(http, { path: '/' });

// Routes
app.use('/api', require('./src/routes/authRouter.js'));
app.use('/api', require('./src/routes/userRouter.js'));
app.use('/api', require('./src/routes/postRouter.js'));
app.use('/api', require('./src/routes/commentRouter.js'));
app.use('/api', require('./src/routes/notifyRouter'));
app.use('/api', require('./src/routes/messageRouter.js'));


const URI = process.env.MONGODB_URL;

// mongoose.connect(URI, {
//     useCreateIndex: true,
//     useFindAndModify: false,
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })   
// console.log('Connected to mongodb')


const connectToMongo = async () => {
    await mongoose.connect(URI);
    console.log("Connected to MongoDB");
  };
  
  connectToMongo();

if(process.env.NODE_ENV === 'production') {

    app.use(express.static('Social Media App\client\lokigram\build'));
    
    app.get('*', (req, res) => {

        res.sendFile(path.join(__dirname, 'Social Media App', 'client', 'lokigram', 'build', 'index.html'));
        
        res.sendFile('index.html' , { root : __dirname});
        
        app.use(express.static('../Frontend/client/lokigram/build/index.html'));

        app.get('*', (req, res) => {
            res.sendFile('index.html', { root : __dirname});
        } );
    } );
}

const port = process.env.PORT || 5000;


// http.get("/", (req, res) => {
//     res.status(200).send("<h1>Hello</h1>");
// });

http.listen(port, () => {
    console.log('Server is running on port', port)
})
