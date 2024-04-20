import React from "react";
import { useEffect, useState } from "react";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import User from "./components/User";
import Verify from "./components/Verify";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";
import { useLocation } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
 
function App() {
  const location=useLocation();
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Signup/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/user" element={<User/>}/>
        <Route path="/verify" element={<Verify/>}/>
      
      </Routes>
      

    </div>
  );
}

export default App;
