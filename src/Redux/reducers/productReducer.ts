import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { DispatchType } from '../configStore';
import axios from 'axios';
import { httpNonAuth } from '../../utils/config';


export interface ProductModel {
    id: number;
    name: string;
    alias: string;
    price: number;
    description: string;
    size: string;
    shortDescription: string;
    quantity: number;
    deleted: boolean;
    categories: string;
    relatedProducts: string;
    feature: boolean;
    image: string;
}
export interface ProductState {
    arrProduct: ProductModel[]
    arrPaging: ProductModel[]
    arrCategory: ProductModel[]
}
const initialState:ProductState = {
    arrProduct: [],
    arrPaging:[],
    arrCategory:[],

}
const productReducer = createSlice({
    name: 'productReducer',
    initialState,
    reducers: {
        getProductsAction: (state:ProductState, action:PayloadAction<ProductModel[]>) => {
            state.arrProduct =action.payload;
        },
        getPagingAction: (state:ProductState, action:PayloadAction<ProductModel[]>) => {
            state.arrPaging =action.payload;
        },
        getCategoryAction: (state:ProductState, action:PayloadAction<ProductModel[]>) => {
            state.arrCategory =action.payload;
        },

    }
});

export const { getProductsAction, getPagingAction, getCategoryAction} = productReducer.actions

export default productReducer.reducer


// ---------------- action async --------------

export const getDataProductApi = () => {
    return async (dispatch:DispatchType) => {
        
        const res = await httpNonAuth.get('/api/product');

        const action:PayloadAction<ProductModel[]> = getProductsAction(res.data.content);
        dispatch(action);
    }
}

export const getPagingApi = (pageIndex:number,pageSize:number ) => {
    return async (dispatch:DispatchType) => {

        const res = await httpNonAuth.get(`/api/Product/getpaging?pageIndex=${pageIndex}&pageSize=${pageSize}`);

        const action:PayloadAction<ProductModel[]> = getPagingAction(res.data.content.items);
        dispatch(action);
    }
}

export const getProductByCategoryApi = (categoryId:string) => {
    return async (dispatch:DispatchType) => {

        const res = await httpNonAuth.get(`/api/Product/getProductByCategory?categoryId=${categoryId}`);

        const action:PayloadAction<ProductModel[]> = getCategoryAction(res.data.content);
        dispatch(action);
    }
}