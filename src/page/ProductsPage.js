import React, { useEffect, useState } from 'react'
import axios from 'axios';
import CardItem from '../component/CardItem';
import { Routes, Route} from 'react-router-dom';

const ProductsPage = () => {
    const [ cardItemList, setCardItemList] = useState([]);

    const getProductLists = async() => {
      const result = await axios.get('http://localhost:5000/products')
                      .then(res => {
                        return res.data;
                      })
                      .catch(error=>{
                        console.log(error,'eeroro');
                      })
  
      setCardItemList(result);
    };

    useEffect(() => {
      getProductLists();
    }, []);

    return (
    <div className='d-flex main-content'>
        <CardItem cardItemList={cardItemList}/>
    </div>
  )
}

export default ProductsPage;
