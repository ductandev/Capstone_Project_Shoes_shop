import ReactDOM from "react-dom/client";

import { unstable_HistoryRouter as HistoryRouter, Routes, Route } from "react-router-dom";

import { createBrowserHistory } from "history";
import HomeTemplate from "./Templates/HomeTemplate";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Cart from "./Pages/Cart/Cart";
import Favourite from "./Pages/Favourite/Favourite";
import ShoeStore from "./Pages/ShoeStore/ShoeStore";
import { store } from "./Redux/configStore";
import { Provider } from "react-redux";
import Loading from "./Components/Loading/Loading";
import "./globalStyles.css";
import ResponsiveItem from "./Templates/ResponsiveItem";
import Home from "./Pages/Home/Home";
import HomeMobile from "./Pages/Home/HomeMobile";
import Detail from "./Pages/Detail/Detail";
import Category from "./Components/Header/Category/Category";
import DetailMobile from "./Pages/Detail/DetailMobile";

export const history: any = createBrowserHistory();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <Loading></Loading>
    <HistoryRouter history={history}>
      <Routes>
        <Route path="" element={<HomeTemplate />}>
          <Route index element={<ResponsiveItem component={Home} tabletComponent={HomeMobile} />}></Route>
          <Route path="category" element={<Category />}></Route>
          <Route path="detail">
            <Route path=':id' element={<ResponsiveItem component={Detail} largeTableComponent={DetailMobile}/>}></Route>
          </Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Register />} />
          <Route path="cart" element={<Cart />} />
          <Route path="shoestore" element={<ShoeStore />} />
          <Route path="favourite" element={<Favourite />} />
        </Route>
      </Routes>
    </HistoryRouter>
  </Provider>
);

/*
  type React
  <div></div>: JSX.element
  function (props) => jsx : React.FC

*/
