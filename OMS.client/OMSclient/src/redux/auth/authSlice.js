import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name: "auth",
    initialState: { user: null, token: null },
    reducers: {
        logIn: (state, action) => {
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


export const { logIn, logOut } = authSlice.actions;

export default authSlice.reducer;