import './App.css';
import {
  Routes,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import Header from './pages/header';
import Sidebar from './pages/sidebar';
import Dashboard from './pages/dashboard';
import AllRequest from './pages/allRequest';

const App = () => {
  return (
    <div className='grid-container'>
      <Router>
        <Header />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/requests" element={<AllRequest />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App