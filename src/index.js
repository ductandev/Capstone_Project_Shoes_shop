import ReactDOM from "react-dom/client";
//Cấu hình react router dom
import {
  BrowserRouter,
  unstable_HistoryRouter as HistoryRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomeTemplate from "./Templates/HomeTemplate";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Cart from "./Pages/Cart/Cart";
import Favourite from "./Pages/Favourite/Favourite";
import ShoeStore from "./Pages/ShoeStore/ShoeStore";
import { createBrowserHistory } from "history";

//tạo ra 1 history tương tự useNavigate
export const history = createBrowserHistory();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <Provider store={store}>
  <HistoryRouter history={history}>
    <Routes>
      <Route path="" element={<HomeTemplate />}>
        <Route path="login" element={<Login />}></Route>
        <Route path="register" element={<Register />} />
        <Route path="cart" element={<Cart />} />
        <Route path="shoestore" element={<ShoeStore />} />
        <Route path="favourite" element={<Favourite />} />
      </Route>
    </Routes>
  </HistoryRouter>
  // </Provider>
);
