import { createContext, useState } from "react";



const SocketContext = createContext({});

export const SocketProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);

    const disconnectSocket = () => {
        socket?.disconnect();
        setSocket(null);
    }

    return <SocketContext.Provider value={{ socket, setSocket, disconnectSocket }}>
        { children }
    </SocketContext.Provider>
}


export default SocketContext;