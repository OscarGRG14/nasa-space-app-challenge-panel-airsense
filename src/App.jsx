import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layouts
import MainLayout from './layouts/MainLayout';

// Public Routes
import Home from './pages/Home';
import Login from './pages/Login';

// User Routes

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home/>}/>
            <Route path='login' element={<Login/>}/>

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}