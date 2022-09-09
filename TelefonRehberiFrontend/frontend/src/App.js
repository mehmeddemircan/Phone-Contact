import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

import { ToastContainer } from "react-toastify";
import GroupPage from "./pages/GroupPage";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isUserLoggedIn } from "./redux/actions/AuthAction";
import MyGroupPage from "./pages/MyGroupPage";
import MyContactsTablePage from "./pages/MyContactsTablePage";
import NotFoundPage from "./pages/NotFoundPage";
import AllUserPage from "./pages/AllUserPage";
import AccountPage from "./pages/AccountPage";
import CommentPage from "./pages/CommentPage";

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
 
        <Route path="/user/:id/my-groups" element={<MyGroupPage />} />
        <Route path="/my-contacts" element={<MyContactsTablePage  />} />
        <Route path="/users/all" element={<AllUserPage  />} />
        <Route path="/user/:id/account" element={<AccountPage  />} />
        <Route path="my-comments" element={<CommentPage />} />
        <Route path="*" element={<NotFoundPage />} />
   
      </Routes>
    </Router>
  );
}

export default App;
