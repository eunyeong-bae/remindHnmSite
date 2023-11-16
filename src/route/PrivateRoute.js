import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import ProductsDetailPage from '../page/ProductsDetailPage';
import { useSelector } from 'react-redux';
import CartPage from '../page/CartPage';
import FavoritePage from '../page/FavoritePage';

const PrivateRoute = ({page}) => {
  const authenticate = useSelector(state => state.auth.authenticate);

  let currentPage = '';

  if(page === 'detailPg'){
    currentPage = <ProductsDetailPage />
  }else if(page === 'cartPg'){
    currentPage = <CartPage />
  }else {
    currentPage = <FavoritePage />
  }
  
  return authenticate ? currentPage : <Navigate to='/login' />
}

export default PrivateRoute
