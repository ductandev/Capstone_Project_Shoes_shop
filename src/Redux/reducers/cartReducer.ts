import { PayloadAction, createSlice } from '@reduxjs/toolkit'


export interface ProductCart {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
}

export interface CartState {
    arrProductCart: ProductCart[]
}

const initialState: CartState = {
    arrProductCart: [],
}

const cartReducer = createSlice({
  name: 'cartReducer',
  initialState,
  reducers: {
    getProductCartAction: (state:CartState, action: PayloadAction<ProductCart[]>) => {
        state.arrProductCart = action.payload;
    }
  }
});

export const {getProductCartAction} = cartReducer.actions

export default cartReducer.reducer