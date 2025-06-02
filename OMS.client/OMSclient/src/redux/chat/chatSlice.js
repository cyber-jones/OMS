import { createSlice } from "@reduxjs/toolkit";


const socketSlice = createSlice({
    name: "chat",
    initialState: { messages: [], onlineUsers: [], loading: false, selectedUser: null },
    reducers: {
        setMessages: (state, action) => { state.messages = action.payload },
        setOnlineUsers: (state, action) => { state.onlineUsers = action.payload },
        setLoading: (state, action) => { state.loading = action.payload },
        setSelectedUser: (state, action) => { state.selectedUser = action.payload },
        chatLogOut: (state) => {
            state.messages = [],
            state.onlineUsers = [],
            state.loading = false,
            state.selectedUser = null
        }
    }
});




export const { setMessages, setOnlineUsers, setSelectedUser, chatLogOut, setLoading } = socketSlice.actions;

export default socketSlice.reducer;