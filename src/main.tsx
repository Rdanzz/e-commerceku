import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import LoginPage from './pages/login.tsx'
import { HashRouter, Routes, Route } from "react-router-dom";
import RegisterPage from './pages/register.tsx'
import ProductsPage from './pages/products.tsx'
import ErrorPage from './pages/404.tsx'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </HashRouter>
  </StrictMode>
);
