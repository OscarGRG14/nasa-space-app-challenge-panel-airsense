import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layouts
import MainLayout from './layouts/MainLayout';
import UserLayout from './layouts/UserLayout';

// Protected Routes
import LoginRoutes from './secure/LoginRoutes';
import PublicRoutes from './secure/PublicRoutes';

// Public Routes
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';

// User Routes
import Panel from './pages/Panel';


export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />

            <Route path='register' element={<Register />} />

            <Route path='login' element={
              <PublicRoutes>
                <Login />
              </PublicRoutes>
            } />

            <Route path='home' element={
              <LoginRoutes>
                <UserLayout />
              </LoginRoutes>
            }>
              <Route index element={<Panel />} />
            </Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}