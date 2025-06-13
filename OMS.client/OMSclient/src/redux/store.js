import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authUserSlice from "./auth/authUserSlice";
import userSlice from "./user/userSlice";
import chatSlice from "./chat/chatSlice";
import prescriptionSlice from "./prescription/prescriptionSlice";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";



const rootRedure = combineReducers({ 
    authUser: authUserSlice, 
    user: userSlice, 
    chat: chatSlice,
    prescription: prescriptionSlice,
});

const persistedReducer = persistReducer({ key: "root", storage, version: 1 }, rootRedure);


export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }),
    devTools: true
});

export const presistor = persistStore(store);