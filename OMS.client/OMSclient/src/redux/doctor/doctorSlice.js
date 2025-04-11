import { createSlice } from "@reduxjs/toolkit";


const doctorSlice = createSlice({
    name: "doctor",
    initialState: { doctor: null, specialty: null },
    reducers: {
        setDoctor: (state, action) => {
            state.doctor = action.payload;
        },
        setSpecialty: (state, action) => {
            state.specialty = action.payload;
        }, 
    }
});


export const { setDoctor, setSpecialty } = doctorSlice.actions;

export default doctorSlice.reducer;