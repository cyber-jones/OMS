import { createSlice } from "@reduxjs/toolkit";


const socketSlice = createSlice({
    name: "chat",
    initialState: { messages: [], users: [] },
    reducers: {
        setMessages: (state, action) => { state.messages = action.payload },
        setOnlineUsers: (state, action) => { state.users = action.payload }
    }
});




export const { setMessages, setOnlineUsers } = socketSlice.actions;

export default socketSlice.reducer;