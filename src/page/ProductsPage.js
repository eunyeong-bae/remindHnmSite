import React, { useEffect, useState } from 'react'
import axios from 'axios';
import CardItem from '../component/CardItem';
import { useSearchParams} from 'react-router-dom';
import {productAction} from '../redux/actions/productAction';
import {useDispatch, useSelector} from 'react-redux';

const ProductsPage = () => {
  
  const [query, setQuery] = useSearchParams();

  const dispatch = useDispatch();
    /* redux middleware version */
  const getProductLists = () => {
    const searchkeyword = query.get('q') || '';
    setQuery(searchkeyword)
    dispatch(productAction.getProductLists(searchkeyword));

  };

  useEffect(() => {
    getProductLists();
  }, []);

  useEffect(()=>{
    getProductLists();
  }, [query])

  const productList = useSelector(state => state.product.productList);

    /* original version 
    const getProductLists = async() => {
      const searchkeyword = query.get('q') || '';
      const result = await axios.get(`https://my-json-server.typicode.com/eunyeong-bae/remindHnmSite/products?q=${searchkeyword}`)
                      .then(res => {
                        return res.data;
                      })
                      .catch(error=>{
                        console.log(error,'eeroro');
                      })
  
      setCardItemList(result);
    };
    */

    return (
    <div className='d-flex main-content'>
        <CardItem cardItemList={productList}/>
    </div>
  )
}

export default ProductsPage;
