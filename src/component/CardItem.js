import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const CardItem = ({cardItemList, page}) => {
    const navigate = useNavigate();

   const showDetail = (id) => {
    navigate(`/products/${id}`)
   };

  return (
    <>
        { cardItemList && cardItemList.map(item => {
            return (
                page !== 'Cart'
                 ?
                    <div className='card-item' onClick={showDetail.bind(this, item.id)}>
                        <div className='card-width'>
                            <div className='item-img'>
                                <img src={item.img} width='100%' height='80%'/>
                            </div>
                            <div className='d-flex item-description'>
                                <p style={{fontSize:'13px', fontWeight:'600',marginBottom:'5px'}}>
                                    {item.choice ? 'Conscious choice' : ''}
                                </p>
                                <p>{item.title}</p>
                                <p style={{fontWeight:'600'}}>₩{item.price}</p>
                                <p style={{fontSize:'13px'}}>
                                    {item.new ? '신제품' : ''}
                                </p>
                            </div>
                        </div>
                    </div>
                 :
                    <div className='d-flex cart-div'>
                        <div className='cart-img' onClick={showDetail.bind(this, item.id)}>
                            <img src={item.img} width='100%' height='100%'/>
                        </div>
                        <div className='cart-description-div'>
                            <div className='d-flex cart-description'>
                                <p>{item.title}</p>
                                <p style={{fontWeight:'600', color:'red'}}>₩{item.price}</p>        
                            </div>
                            <div className='favorite-button' onClick={() => navigate('/favorite')}>
                                <FontAwesomeIcon className='heart' icon={faHeart} size="xl" />
                            </div>
                        </div>
                        <div className='cart-button'>
                            <FontAwesomeIcon icon={faTrash} size='lg'/>
                        </div>
                    </div>
            )
        })}
    </>
  )
}

export default CardItem;
