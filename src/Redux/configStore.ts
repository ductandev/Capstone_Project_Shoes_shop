import { configureStore } from '@reduxjs/toolkit'
import productReducer from './reducers/productReducer';
import userReducer from './reducers/userReducer';


export const store = configureStore({
    reducer: {
        productReducer: productReducer,
        userReducer: userReducer
    }
});

//Lấy ra kiểu dữ liệu của store 
export type RootState = ReturnType<typeof store.getState>

export type DispatchType = typeof store.dispatch;

