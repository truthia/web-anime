
import { Route, Routes } from 'react-router';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Watch from './pages/Watch';

function App() {
  return (
   <div  className="bg-gray-800">
     <Navbar />
     <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/watch" element={<Watch />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/register" element={<Register />} />
     </Routes>
   </div>
  );
}

export default App;
