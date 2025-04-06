import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name: "auth",
    initialState: { user: null, loading: false, error: null },
    reducers: {
        logIn: (state, action) => {
            const { user, loading, error } = action.payload;
            state.user = user;
            state.loading = loading;
            state.error = error;
        }, 
        logOut: (state) => {
            state.user = null;
            state.token = null;
        }
    }
});


export const { logIn, logOut } = authSlice.actions;

export default authSlice.reducer;