import { createSlice } from "@reduxjs/toolkit";


const staffSlice = createSlice({
    name: "staff",
    initialState: { staff: null },
    reducers: {
        setStaff: (state, action) => {
            state.staff = action.payload;
        }
    }
});


export const { setStaff } = staffSlice.actions;

export default staffSlice.reducer;