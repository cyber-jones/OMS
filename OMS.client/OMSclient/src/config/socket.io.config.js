import { io } from "socket.io-client";
import { socket_connect_dev_url } from "../utils/SD";



const connectSocket = (id) => {
    const socket = io(socket_connect_dev_url, { query: { authUserId: id } });

    socket.connect();
    return socket;
}



export default connectSocket;

