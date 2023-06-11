import { PayloadAction, createSlice } from '@reduxjs/toolkit'


export interface ProductCart {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
}
export interface ProductQuantity {
  id: number;
  quantity: number;
}

export interface CartState {
    arrProductCart: ProductCart[]
    idProductCart: number
    idQuantity: ProductQuantity[]
}

const initialState: CartState = {
    arrProductCart: [],
    idProductCart: 0,
    idQuantity: [],
}

const cartReducer = createSlice({
  name: 'cartReducer',
  initialState,
  reducers: {
    getProductCartAction: (state:CartState, action: PayloadAction<ProductCart>) => {
        // immutable redux: tính bất biến
        let productClick = { ...action.payload }; // Tạo một bản sao của đối tượng
        productClick.quantity = 1;
                
        let existingProduct  = state.arrProductCart.find(prod => prod.id === productClick.id);
        if(existingProduct ){
          existingProduct.quantity += 1;
        } else {
          state.arrProductCart.push(productClick)
        }
    },
    delProductCartAction: (state:CartState, action: PayloadAction<number>) => {
        let id = action.payload;
        let indexDel = state.arrProductCart.findIndex(prod => prod.id === id);
        if (indexDel !== -1){
          state.arrProductCart.splice(indexDel, 1);
        }
    },
    changeQuantityAction: (state:CartState, action: PayloadAction<ProductQuantity>) => {
      let {id, quantity} = action.payload;
      let quantityProdCart = state.arrProductCart.find(prod => prod.id === id);
      if (quantityProdCart){
        quantityProdCart.quantity += quantity;
      }
    }
  }
});

export const {getProductCartAction, delProductCartAction, changeQuantityAction} = cartReducer.actions

export default cartReducer.reducer