import React, { useEffect, useState } from 'react'
import axios from 'axios';
import CardItem from '../component/CardItem';
import { Routes, Route} from 'react-router-dom';

const ProductsPage = () => {
    const [ cardItemList, setCardItemList] = useState(null);

    useEffect(() => {
      getProductLists();
    }, []);
    
    const getProductLists = async() => {
      const result = await axios.get('http://localhost:3000/products')
                      .then(res => {
                        return res.data;
                      })
                      .catch(error=>{
                        console.log(error);
                      })
  
      setCardItemList(result);
    };

    return (
    <div className='d-flex main-content'>
        <CardItem cardItemList={cardItemList}/>
    </div>
  )
}

export default ProductsPage;
