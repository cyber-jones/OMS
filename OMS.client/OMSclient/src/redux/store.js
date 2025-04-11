import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import doctorSlice from "./doctor/doctorSlice";
import patientSlice from "./patient/patientSlice";
import staffSlice from "./staff/staffSlice";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";



const rootRedure = combineReducers({ auth: authSlice, doctor: doctorSlice, patient: patientSlice, staff: staffSlice });

const persistedReducer = persistReducer({ key: "root", storage, version: 1 }, rootRedure);


export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }),
    devTools: true
});

export const presistor = persistStore(store);