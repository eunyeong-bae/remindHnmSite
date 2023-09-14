import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { productAction } from '../redux/actions/productAction';

const ProductsDetailPage = () => {
  const {id} = useParams();
  const productList = useSelector(state => state.product.productList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productAction.getProductDetailInfo(id));
  }, []);

  return (
    <div className='d-flex product-detail'>
      <div className='product-img'>
          <img src={productList?.img} width='100%' height='100%'/>
      </div>
      <div className='d-flex product-description'>
          <p style={{fontSize:'20px', marginBottom:'10px'}}>{productList?.title}</p>
          <p style={{fontSize:'16px', marginBottom:'10px', fontWeight:'600'}}>₩{productList?.price}</p>
          <p style={{fontSize:'13px', fontWeight:'600',marginBottom:'15px', color:'grey'}}>{productList?.choice ? 'Conscious choice' : ''}</p>
          <select>
            { productList?.size?.map(size => {
              return (
                <option value='사이즈 선택'>{size}</option>
              )
            })}
          </select>
          <button>추가</button>
      </div>
    </div>
  )
}

export default ProductsDetailPage
