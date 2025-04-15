import { createSlice } from "@reduxjs/toolkit";


const patientSlice = createSlice({
    name: "patients",
    initialState: { patients: null },
    reducers: {
        setPatient: (state, action) => {
            state.patients = action.payload;
        }
    }
});


export const { setPatient } = patientSlice.actions;

export default patientSlice.reducer;