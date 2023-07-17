import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
  Navigate,
} from 'react-router-dom';
import Login from './screans/login';
import Home from './screans/home/';
import Signup from './screans/signup';

export default function RoutesConfig() {
  const PrivateRoutes = () => {
    let validateToken = localStorage.getItem('token') == null ? false : true;
    return <>{validateToken ? <Outlet /> : <Navigate to="/login" />};</>;
  };

  return (
    <Router>
      <Routes>
        <Route exact element={<PrivateRoutes />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path='*' element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
}
