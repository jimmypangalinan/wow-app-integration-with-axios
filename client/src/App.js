import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// pages
import LandingPage from "./pages/landingPage";
import AfterLogin from "./pages/afterLogin";
import Detailbooks from "./pages/detailBooks";
import ReadBook from "./pages/readBook";
import Subscribe from "./pages/subscribe";
import ProfileActive from "./pages/profileActive";
import Transaction from "./pages/admin/transaction";
import AddBook from "./pages/admin/addBook";

// private route
import PrivateRoute from "./pages/components/privateRoute/private";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/afterLogin" element={<AfterLogin />} />
        <Route exact path="/detailBooks" element={<Detailbooks />} />
        <Route exact path="/subscribe" element={<Subscribe />} />
        <Route exact path="/transaction" element={<Transaction />} />
        <Route exact path="/addBook" element={<AddBook />} />
        <Route exact path="/readBook" element={<ReadBook />} />
        {/* Private Route */}

        <Route exact path="/" element={<PrivateRoute />}>
          <Route exact path="/profileActive" element={<ProfileActive />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
