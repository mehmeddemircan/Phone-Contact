import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import HomePage from './pages/HomePage';

import {ToastContainer} from 'react-toastify'
function App() {
  return (
    <Router>
           <ToastContainer />
      <Routes>
        <Route index element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
