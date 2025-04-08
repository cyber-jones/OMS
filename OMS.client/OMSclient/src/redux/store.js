import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import stateSlice from "./state/stateSlice";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";



const rootRedure = combineReducers({ auth: authSlice, appState: stateSlice });

const persistedReducer = persistReducer({ key: "root", storage, version: 1 }, rootRedure);


export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }),
    devTools: true
});

export const presistor = persistStore(store);