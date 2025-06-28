import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import LoginPage from "./pages/login";
import SignUpPage from "./pages/signup";
import  PredictionPage from "./pages/prediction"
import { NotFound } from "./pages/not-found";
import InsightsPage from "./pages/insights";
import AboutPage from "./pages/about";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
        <Route path="/signup" element={<SignUpPage/>}></Route>
        <Route path="/prediction" element={<PredictionPage/>}></Route>
        <Route path="/about" element={<AboutPage/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
        <Route path="/insights" element={<InsightsPage/>}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
