import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EventInfo from "./pages/info";
import Register from "./pages/register";
import Review from "./pages/review";
import Confirmation from "./pages/Confirmation";
import MyRegistration from "./pages/mypage";
import "./App.css";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EventInfo />} />
        <Route path="/register" element={<Register />} />
        <Route path="/review" element={<Review />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/my-registration" element={<MyRegistration />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;