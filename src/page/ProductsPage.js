import React, { useEffect, useState } from 'react'
import axios from 'axios';
import CardItem from '../component/CardItem';
import { useSearchParams} from 'react-router-dom';

const ProductsPage = () => {
    const [ cardItemList, setCardItemList] = useState([]);
    const [query, setQuery] = useSearchParams();

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

    useEffect(() => {
      getProductLists();
    }, []);

    useEffect(()=>{
      getProductLists();
    }, [query])

    return (
    <div className='d-flex main-content'>
        <CardItem cardItemList={cardItemList}/>
    </div>
  )
}

export default ProductsPage;
