import { createSlice } from "@reduxjs/toolkit";


const socketSlice = createSlice({
    name: "chat",
    initialState: { messages: [], users: [], selectedUser: null },
    reducers: {
        setMessages: (state, action) => { state.messages = action.payload },
        setOnlineUsers: (state, action) => { state.users = action.payload },
        setSelectedUser: (state, action) => { state.selectedUser = action.payload }
    }
});




export const { setMessages, setOnlineUsers, setSelectedUser } = socketSlice.actions;

export default socketSlice.reducer;