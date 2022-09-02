import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { ProtectRoutes } from './hooks/protectRoutes';
import Home from './pages/Home';
import Login from './pages/Login';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={ <Navigate to='home' exact /> } />
      <Route path='/login' element={ <Login /> } />

      <Route element={ <ProtectRoutes /> }>
        <Route path='/home' element={ <Home /> } />
      </Route>
    </Routes>
  )
}
