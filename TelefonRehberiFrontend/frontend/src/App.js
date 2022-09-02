import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

import { ToastContainer } from "react-toastify";
import GroupPage from "./pages/GroupPage";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isUserLoggedIn } from "./redux/actions/AuthAction";
function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  // When we fresh the page if you are in logged in  stay logged in
  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
  }, [auth.authenticate]);

  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/groups" element={<GroupPage />} />
      </Routes>
    </Router>
  );
}

export default App;
