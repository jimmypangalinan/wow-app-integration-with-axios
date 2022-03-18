import "bootstrap/dist/css/bootstrap.min.css";
import { useContext, useEffect } from "react";

import {
  // BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

// pages
import LandingPage from "./pages/landingPage";
import AfterLogin from "./pages/afterLogin";
import Detailbooks from "./pages/detailBooks";
import ReadBook from "./pages/readBook";
import Subscribe from "./pages/subscribe";
import ProfileActive from "./pages/profileActive";
import Transaction from "./pages/admin/transaction";
import AddBook from "./pages/admin/addBook";

import { API, setAuthToken } from "./config/api";
// private route
import PrivateRoute from "./pages/components/privateRoute/private";

import { UserContextToken } from "./context/useContextToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  let navigate = useNavigate();
  const [state, dispatch] = useContext(UserContextToken);
  // console.clear();
  console.log(state);
  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    // Redirect Auth
    if (!state.isLogin) {
      navigate("/");
    } else {
      if (state.user.role == "admin") {
        navigate("/transaction");
      } else if (state.user.role == "user") {
        navigate("/afterLogin");
      }
    }
  }, [state]);

  const checkUser = async () => {
    try {
      const response = await API.get("/check-auth");

      // If the token incorrect
      if (response.status === 404) {
        return dispatch({
          type: "AUTH_ERROR",
        });
      }

      // Get user data
      let payload = response.data.data;
      // Get token from local storage
      payload.token = localStorage.token;

      // Send data to useContext
      dispatch({
        type: "USER_SUCCESS",
        payload,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  return (
    // <Router>
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route exact path="/transaction" element={<Transaction />} />
      <Route exact path="/addBook" element={<AddBook />} />
      <Route exact path="/afterLogin" element={<AfterLogin />} />
      <Route exact path="/subscribe" element={<Subscribe />} />
      <Route exact path="/profileActive" element={<ProfileActive />} />
      <Route exact path="/detailBooks/:id" element={<Detailbooks />} />
      <Route exact path="/readBook/:id" element={<ReadBook />} />
      <Route exact path="/" element={<PrivateRoute />}>
        {/* for rpivate routes */}
      </Route>
    </Routes>
    // </Router>
  );
}

export default App;
