import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: "prescription",
    initialState: { patient: null, prescribedDrugs: [] },
    reducers: {
        setPatientForPrescription: (state, action) => {
            state.patient = action.payload;
        },
        setPrescribedDrugs: (state, action) => {
            state.prescribedDrugs = action.payload;
        }
    }
});


export const { setPatientForPrescription, setPrescribedDrugs } = userSlice.actions;

export default userSlice.reducer;