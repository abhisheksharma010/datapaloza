import logo from './logo.svg';
import './App.css';
import Layout from './components/layout';
import DashBoard from './Pages/DashBoard';
import { Route, Routes } from 'react-router-dom';
import Setting from './Pages/Setting';
import Features from './Pages/Features';
import Login from './Pages/Auth/Login';
// import Subscriptio from './Pages/Subscription';
import Subscription from './Pages/Subscription';
import Register from './Pages/Auth/Register';

function App()  {
    return (
      <Routes>
          <Route path="/" element={<DashBoard/>}/>
          <Route path="/subscription" element={<Subscription/>}/>
          <Route path="/features" element={<Features/>}/>
          <Route path="/setting" element={<Setting/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
    )
  }

export default App;
