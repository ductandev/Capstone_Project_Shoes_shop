import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getStoreJson, httpNonAuth, setStoreJson, http, USER_LOGIN } from "../../utils/config";
import { UserLoginFrm } from "../../Pages/Login/Login";
import { UserRegisterFrm } from "../../Pages/Register/Register";
import { history } from "../../index";
import { RootState } from "../../Redux/configStore";

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

export interface UserState {
  userLogin: UserLoginApi | undefined;
  isLoading: boolean;
  userProfile: UserProfile | undefined;
}

const initialState: UserState = {
  userLogin: getStoreJson(USER_LOGIN),
  isLoading: false,
  userProfile: undefined,
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
      if (accessToken) {
        const res = await http.post(`/api/Users/getProfile`, { accessToken });
        console.log("🚀 ~ file: userReducer.ts:107 ~ res.data.content:", res.data.content)
        return res.data.content;
      } else {
        // Xử lý khi accessToken không tồn tại
      }

    } catch (err) {
      // Xử lý lỗi tại đây
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
      });
  },
});

export default userReducer.reducer;
