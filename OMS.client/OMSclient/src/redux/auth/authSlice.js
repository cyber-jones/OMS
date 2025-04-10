import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name: "auth",
    initialState: { user: null, token: null },
    reducers: {
        setUser: (state, action) => {
            const { user, accessToken } = action.payload;
            state.user = user;
            state.token = accessToken;
        }, 
        logOut: (state) => {
            state.user = null;
            state.token = null;
        }
    }
});


export const { setUser, logOut } = authSlice.actions;

export default authSlice.reducer;