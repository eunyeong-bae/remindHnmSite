import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductsDetailPage = () => {
  const {id} = useParams();
  const [ detailInfo, setDetailInfo] = useState({});

  const getProductDetailInfo = async() => {
    const response = await axios(`https://my-json-server.typicode.com/eunyeong-bae/remindHnmSite/products/${id}`)
              .then((res) => {
                return res.data;
              })
              .catch(e => {
                console.log('error',e);
              })
              console.log(response)
    setDetailInfo(response);
  };

  useEffect(() => {
    getProductDetailInfo();
  }, []);

  return (
    <div className='d-flex product-detail'>
      <div className='product-img'>
          <img src={detailInfo?.img} width='100%' height='100%'/>
      </div>
      <div className='d-flex product-description'>
          <p style={{fontSize:'20px', marginBottom:'10px'}}>{detailInfo?.title}</p>
          <p style={{fontSize:'16px', marginBottom:'10px', fontWeight:'600'}}>₩{detailInfo?.price}</p>
          <p style={{fontSize:'13px', fontWeight:'600',marginBottom:'15px', color:'grey'}}>{detailInfo?.choice ? 'Conscious choice' : ''}</p>
          <select>
            { detailInfo?.size?.map(size => {
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
