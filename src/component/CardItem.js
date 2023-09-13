import React from 'react';
import { Navigate } from 'react-router-dom';
import PrivateRoute from '../page/PrivateRoute';

const CardItem = ({cardItemList}) => {
    console.log(cardItemList)
  return (
    <>
        { cardItemList && cardItemList.map(item => {
            return (
                <div className='card-item'>
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
