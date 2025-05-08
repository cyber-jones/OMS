import { createSlice } from "@reduxjs/toolkit";


const socketSlice = createSlice({
    name: "chat",
    initialState: { messages: [], onlineUsers: [], selectedUser: null },
    reducers: {
        setMessages: (state, action) => { state.messages = action.payload },
        setOnlineUsers: (state, action) => { state.onlineUsers = action.payload },
        setSelectedUser: (state, action) => { state.selectedUser = action.payload },
        chatLogOut: (state) => {
            state.messages = [],
            state.onlineUsers = [],
            state.selectedUser = null
        }
    }
});




export const { setMessages, setOnlineUsers, setSelectedUser, chatLogOut } = socketSlice.actions;

export default socketSlice.reducer;