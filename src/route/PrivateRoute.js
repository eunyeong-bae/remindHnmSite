import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import ProductsDetailPage from '../page/ProductsDetailPage';
import { useSelector } from 'react-redux';

const PrivateRoute = () => {
  const authenticate = useSelector(state => state.auth.authenticate);

  return authenticate ? <ProductsDetailPage /> : <Navigate to='/login' />
}

export default PrivateRoute
