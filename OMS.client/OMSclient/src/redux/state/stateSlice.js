import { createSlice } from "@reduxjs/toolkit";


const stateSlice = createSlice({
    name: "appState",
    initialState: { loading: false, message: "", type: "" },
    reducers: {
        isLoading: (state, action) => {
            state.loading = action.payload;;
        }, 
        isMessage: (state, action) => {
            const { message, type } = action.payload;
            state.message = message;
            state.type = type;
        }
    }
});




export const { isLoading, isMessage } = stateSlice.actions;

export default stateSlice.reducer;