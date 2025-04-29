import express from "express";
import { Server } from "socket.io";
import http from "http";
import { ALLOWEDORIGINS } from "../utils/SD.js";

const app = express();
const server = new http.createServer(app);
const io = new Server(server, { cors: { origin: ALLOWEDORIGINS } });


let users = new Object();

io.on("connection", socket => {
    console.log("A user connected", socket.id);

    const authUserId = socket.handshake.query.authUserId
    users[authUserId] = socket.id;

    socket.broadcast.emit("new-connection", authUserId);

    socket.emit("list-of-online-users", users);

    socket.on("disconnect", () => {
        socket.broadcast.emit("new-disconnection", authUserId);
    });
});

export { app, server, io };