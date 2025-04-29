import { io } from "socket.io-client";
import { socket_connect_dev_url } from "../utils/SD";



const connectSocket = (id) => {
    return io(socket_connect_dev_url, { query: { authUserId: id } });
}



export default connectSocket;

