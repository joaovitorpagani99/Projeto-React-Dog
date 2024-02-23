import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home";
import User from "./Components/User/User";
import Login from "./Components/Login/Login";
import { UserStorage } from "./UseContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./Components/Helper/ProtectedRoute";

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <Route path="conta/*" element={<ProtectedRoute element={<User />} />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
