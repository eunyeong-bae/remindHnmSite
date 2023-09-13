import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import ProductsDetailPage from './ProductsDetailPage';

const PrivateRoute = () => {
    const [authenticate, setAuthenticate] = useState(false);

  return authenticate ? <ProductsDetailPage /> : <Navigate to='/login' />
}

export default PrivateRoute
