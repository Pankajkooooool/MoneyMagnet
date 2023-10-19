import {Routes,Route, Navigate} from "react-router-dom"
import "./App.css";
import { Home } from "./pages/Home";
import Login from "./pages/Login";
import Signin from "./pages/Signin";
import MidRisk from "./pages/MidRisk";
import LowRisk from "./pages/LowRisk";
import HighRisk from "./pages/HighRisk";
import Navbar from "./components/Navbar";
import Footer from './components/Footer'
import { useState } from "react";


function App() {
  let x = localStorage.getItem("token");
  let isAuth = true;
 
  if( x==null){
    isAuth = false;
  }else{
    isAuth = true;
  }

  const [Savings, setSavings] = useState(1000000);

  const updateSavings = (newMessage) => {
    setSavings(newMessage);
  };

  return (
  <>
  <Navbar/>
  <Routes>
    <Route path="/" element={localStorage.getItem("token") ? <Home savings={Savings} updateSavings={updateSavings} />: <Navigate to='/login' />} />
    <Route path="login" element={(!localStorage.getItem("token") || localStorage.getItem("token") == undefined )?<Login /> : <Navigate to='/' />} />
    <Route path="signin" element={(!localStorage.getItem("token") || localStorage.getItem("token") == undefined )?<Signin />: <Navigate to='/' />} />
    <Route path="/mid" element={localStorage.getItem("token") ? <MidRisk savings={Savings} />: <Navigate to='/login' />} />
    <Route path="/low" element={localStorage.getItem("token") ? <LowRisk savings={Savings}/>: <Navigate to='/login' />} />
    <Route path="/high" element={localStorage.getItem("token") ? <HighRisk savings={Savings}/>: <Navigate to='/login' />} />
  </Routes>
  <Footer />
    </>
  );
}

export default App;
