import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import HomePage from './pages/HomePage';

import {ToastContainer} from 'react-toastify'
import GroupPage from './pages/GroupPage';
function App() {
  return (
    <Router>
           <ToastContainer />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='/groups' element={<GroupPage />} />
      </Routes>
    </Router>
  );
}

export default App;
