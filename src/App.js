import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { ProtectedRoutes } from './hooks/protectedRoutes';
import Home from './pages/Home';
import Login from './pages/Login';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={ <Navigate to='home' exact /> } />
      <Route path='/login' element={ <Login /> } />

      <Route element={ <ProtectedRoutes /> }>
        <Route path='/home' element={ <Home /> } />
      </Route>
    </Routes>
  )
}
