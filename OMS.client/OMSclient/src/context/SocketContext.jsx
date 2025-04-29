import { createContext, useState } from "react";
import connectSocket from "../config/socket.io.config";
import { useSelector } from "react-redux";



const SocketContext = createContext({});

export const SocketProvider = ({ children }) => {
    const { authUser } = useSelector(state => state.authUser) 
    const [socket, setSocket] = useState(null);

    const disconnectSocket = () => {
        if (socket) {
            socket.disconnect();
            setSocket(null);
        }
    }

    useState(() => {
        if (authUser) setSocket(connectSocket(authUser._id));
    }, []);

    return <SocketContext.Provider value={{ socket, setSocket, disconnectSocket }}>
        { children }
    </SocketContext.Provider>
}


export default SocketContext;