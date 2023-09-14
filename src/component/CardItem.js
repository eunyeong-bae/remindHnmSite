import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import PrivateRoute from '../route/PrivateRoute';

const CardItem = ({cardItemList}) => {
    const navigate = useNavigate();

   const showDetail = (id) => {
    navigate(`/products/${id}`)
   };

  return (
    <>
        { cardItemList && cardItemList.map(item => {
            return (
                <div className='card-item' onClick={showDetail.bind(this, item.id)}>
                    <div className='item-img'>
                        <img src={item.img} width='100%' height='100%'/>
                    </div>
                    <div className='d-flex item-description'>
                        <p style={{fontSize:'13px', fontWeight:'600',marginBottom:'5px'}}>{item.choice ? 'Conscious choice' : ''}</p>
                        <p>{item.title}</p>
                        <p>₩{item.price}</p>
                        <p style={{fontSize:'13px'}}>{item.new ? '신제품' : ''}</p>
                    </div>
                </div>
            )
        })}
    </>
  )
}

export default CardItem;
