import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getStoreJson, httpNonAuth, setStoreJson, http, USER_LOGIN } from "../../utils/config";
import { UserLoginFrm } from "../../Pages/Login/Login";
import { UserRegisterFrm } from "../../Pages/Register/Register";
import { history } from "../../index";
import { RootState } from "../../Redux/configStore";
import { AxiosRequestConfig } from 'axios';
export interface UserLoginApi {
  email: string;
  password: string;
  accessToken: string;
}

export interface UserProfile {
  ordersHistory: [];
  email: string;
  name: string;
  password: null | string;
  gender: boolean;
  phone: string;
  facebookId: string;
  deleted: boolean;
  avatar: string;
}

export interface ProductFavourite {
  id: number;
  name: string;
  image: string;
}

export interface UserState {
  userLogin: UserLoginApi | undefined;
  isLoading: boolean;
  userProfile: UserProfile | undefined;
  productFavourite: ProductFavourite[] | undefined;
}

const initialState: UserState = {
  userLogin: getStoreJson(USER_LOGIN),
  isLoading: false,
  userProfile: undefined,
  productFavourite: undefined
};

export const loginAsyncAction = createAsyncThunk(
  "loginAsyncAction",
  async (userLogin: UserLoginFrm) => {
    try {
      const res = await httpNonAuth.post("/api/Users/signin", userLogin);

      console.log(res);

      setStoreJson(USER_LOGIN, res.data.content);
      history.push("/profile");

      return res.data.content;
    } catch (err) {
      alert(err);
      throw err;
    }
  }
);

export const registerAsyncAction = createAsyncThunk(
  "registerAsyncAction",
  async (userRegister: UserRegisterFrm) => {
    const res = await httpNonAuth.post("/api/Users/signup", userRegister);
    console.log(res);
    return res.data.content;
  }
);

export const getProfileActionApi = createAsyncThunk(
  "getProfileActionApi",
  async (_, { getState }) => {
    try {
      const state = getState() as RootState; // Thêm kiểu RootState cho state
      const accessToken = state.userReducer.userLogin?.accessToken; // Sử dụng optional chaining để tránh lỗi khi userLogin là undefined
      // console.log("🚀 ~ file: userReducer.ts:72 ~ accessToken:", accessToken)
      if (accessToken) {
        const res = await http.post(`/api/Users/getProfile`, { accessToken });
        return res.data.content;
      } else {
      }
    } catch (err) {
      throw err;
    }
  }
);



export const getFavouriteActionApi = createAsyncThunk(
  "getFavouriteActionApi",
  async (_, { getState }) => {
    try {
      console.log("call api");

      const state = getState() as RootState;
      const accessToken = state.userReducer.userLogin?.accessToken;
      if (accessToken) {
        const config: AxiosRequestConfig = {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        };
        console.log("🚀 ~ file: userReducer.ts:115 ~ config:", config)

        const res = await http.get(`/api/Users/getproductfavorite`, config);
        console.log("🚀 ~ file: userReducer.ts:118 ~ res:", res.data.content.productsFavorite)
        return res.data.content.productsFavorite;

      } else {
        // Xử lý trường hợp không có accessToken
      }

    } catch (err) {
      throw err;
    }
  }
);


const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginAsyncAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginAsyncAction.fulfilled, (state, action) => {
        state.userLogin = action.payload;
        state.isLoading = false;
      })
      .addCase(loginAsyncAction.rejected, (state) => {
        alert("Đăng nhập thất bại !");
        state.isLoading = false;
      })
      .addCase(getProfileActionApi.fulfilled, (state, action) => {
        state.userProfile = action.payload;
      })
      .addCase(getFavouriteActionApi.fulfilled, (state, action) => {
        state.productFavourite = action.payload;
      });
  },
});



export default userReducer.reducer;
