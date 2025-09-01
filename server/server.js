// import express from 'express';
// import { cors } from 'cors';
// import cookieParser from 'cookie-parser';
// import SocketServer from './SocketServer.js';
// import { ExpressPeerServer } from 'peer';
// import path from 'path';
// import dotenv from 'dotenv';
// import mongoose from 'mongoose';

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const SocketServer = require('./SocketServer.js');
const { ExpressPeerServer } = require('peer')
const path = require('path');

// dotenv.config();
const app = express();

app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD", "OPTIONS"],
    credentials: true
}));
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
app.use('/api/v1', require('./src/routes/authRouter.js'));
app.use('/api/v1', require('./src/routes/userRouter.js'));
app.use('/api/v1', require('./src/routes/postRouter.js'));
app.use('/api/v1', require('./src/routes/commentRouter.js'));
app.use('/api/v1', require('./src/routes/notifyRouter.js'));
app.use('/api/v1', require('./src/routes/messageRouter.js'));

app.use("/uploads", express.static("uploads"));


const URI = process.env.MONGODB_URL;
const port = process.env.PORT || 5000;

const MONGO_DB = async () => {
    await mongoose
        .connect(URI)
        .then((c) => console.log("DB Connected succesfully"))
        .catch((e) => console.log(e));
  };

  MONGO_DB();

// if(process.env.NODE_ENV === 'production') {

//     app.use(express.static(path.join(__dirname, '../client/public')));

//     app.get('/{*any}', (req, res) => {
//         res.sendFile(path.join(__dirname, '..', 'client', 'public', 'index.html'));
//     });
// } else {
    app.get("/", (req, res) => {
        res.send(`API is working with /api/v1`);
    });
//}

http.listen(port, () => {
    console.log('Server is running on port', port)
});
