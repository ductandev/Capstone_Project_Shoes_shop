//rxslice

import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { USER_LOGIN, getStoreJson, http } from "../../utils/config";
import { UserLoginFrm } from "../../Pages/Login/Login";

export interface UserLoginApi {
  email: "";
  password: "";
}

export interface UserState {
  userLogin: UserLoginApi | undefined;
  isLoading: boolean;
}

const initialState = {
  userLogin: getStoreJson(USER_LOGIN),
  isLoading: false,
};

const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    /*
            Các trạng thái của 1 action api
            + pending: Khi api đang được thực hiện
            + fulfilled: khi kết quả api trả về thành công
            + rejected: Khi kết quả api trả về thất bại
         */
    // Xử lý dữ liệu trả về api
    builder
      .addCase(loginAsyncAction.pending, (state: UserState, action) => {
        state.isLoading = true;
      })
      .addCase(
        loginAsyncAction.fulfilled,
        (state: UserState, action: PayloadAction<UserLoginApi>) => {
          state.userLogin = action.payload;
          state.isLoading = false;
        }
      )
      .addCase(loginAsyncAction.rejected, (state: UserState, action) => {
        alert("Đăng nhập thất bại !");
        state.isLoading = false;
      });
  },
});

export const { } = userReducer.actions;

export default userReducer.reducer;
// ------------------ create asycn action ----------------------
export const loginAsyncAction = createAsyncThunk(
  "loginAsyncAction",
  async (userLogin: UserLoginFrm) => {
    //call api

    const res = await http.post("/api/Users/signin", userLogin);

    console.log(res);
    return res.data.content;
  }
);
