import { configureStore } from '@reduxjs/toolkit';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

import productReducer, { ProductState } from './reducers/productReducer';
import userReducer, { UserState } from './reducers/userReducer';

export interface RootState {
  productReducer: ProductState;
  userReducer: UserState;
}

export const store = configureStore({
  reducer: {
    productReducer: productReducer,
    userReducer: userReducer
  }
});

export type AppDispatch = ThunkDispatch<RootState, void, AnyAction>;
export type DispatchType = typeof store.dispatch;
