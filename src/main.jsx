import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import LoginPage from "./pages/login";
import SignUpPage from "./pages/signup";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
        <Route path="/signup" element={<SignUpPage/>}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
