import express from "express";
import { Server } from "socket.io";
import http from "http";
import { ALLOWEDORIGINS } from "../utils/SD.js";
import message from "../models/messageModel.js";

const app = express();
const server = new http.createServer(app);
const io = new Server(server, { cors: { origin: ALLOWEDORIGINS } });


let users = {};

io.on("connection", socket => {
    console.log("A user connected", socket.id);

    const userId = socket.handshake.query.userId
    users[userId] = socket.id;

    console.log(users);

    socket.broadcast.emit("new-connection", userId);

    socket.emit("online-users", Object.keys(users));

    socket.on("new-message", message => {
        console.log(message);
        socket.to(message.reciever_Id).emit("send-message", message);
    });

    socket.on("disconnect", () => {
        console.log("A user disconnected", socket.id);
        socket.broadcast.emit("new-disconnection", userId);
         
        delete users[userId];
        socket.emit("online-users", Object.keys(users));
    });
});

export { app, server, io };