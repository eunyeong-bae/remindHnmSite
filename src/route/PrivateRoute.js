import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import ProductsDetailPage from '../page/ProductsDetailPage';

const PrivateRoute = ({authenticate}) => {

  return authenticate ? <ProductsDetailPage /> : <Navigate to='/login' />
}

export default PrivateRoute
