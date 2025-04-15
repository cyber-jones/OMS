import { createSlice } from "@reduxjs/toolkit";


const doctorSlice = createSlice({
    name: "doctors",
    initialState: { doctors: null, specialty: null },
    reducers: {
        setDoctor: (state, action) => {
            state.doctors = action.payload;
        },
        setSpecialty: (state, action) => {
            state.specialty = action.payload;
        }, 
    }
});


export const { setDoctor, setSpecialty } = doctorSlice.actions;

export default doctorSlice.reducer;