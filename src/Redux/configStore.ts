import { configureStore } from '@reduxjs/toolkit'
import productReducer from './reducers/productReducer';


export const store = configureStore({
    reducer: {
        productReducer: productReducer
    }
})

// ============= Lấy ra kiểu dữ liệu của store ============
export type RootState = ReturnType<typeof store.getState>       //useSelector

export type DispatchType = typeof store.dispatch;               //useDispatch