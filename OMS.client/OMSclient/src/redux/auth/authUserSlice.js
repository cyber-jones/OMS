import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name: "authUser",
    initialState: { authUser: null,  token: null },
    reducers: {
        setAuthUser: (state, action) => {
            const { authUser, accessToken } = action.payload;
            state.authUser = authUser;
            state.token = accessToken;
        },
        logOut: (state) => {
            state.authUser = null;
            state.token = null;
        }
    }
});


export const { setAuthUser, logOut } = authSlice.actions;

export default authSlice.reducer;