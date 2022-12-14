import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";
import { Products } from "./Pages/Products";
import { Blogposts } from "./Pages/Blogposts";
import { Contact } from "./Pages/Contact";
import { Getaccess } from "./Pages/Getaccess";
import { Header } from "./Components/Header";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Products" element={<Products />} />
      <Route path="/Blogposts" element={<Blogposts />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/GetAccess" element={<Getaccess />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
