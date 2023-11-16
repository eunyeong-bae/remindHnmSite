import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import CardItem from '../component/CardItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcMastercard,faCcVisa,faCcPaypal} from '@fortawesome/free-brands-svg-icons';

const CartPage = () => {
    const cartList = useSelector(state => state.product.cartList);
    // console.log(cartList)

  return (
    <div className='cart-container'>
      <h2>Shopping Cart</h2>
      <div className='d-flex cart-content'>
        <div className='cart-item-wrap'>
            <CardItem 
                cardItemList={cartList}
                page ={'Cart'}
            />
        </div>
        { cartList && cartList.length > 0 
            ?   <div className='cart-payment-wrap'>
                    <div>
                        <div className='payment-price'>
                            <p>Order value</p>
                            <p>₩{99000}</p>
                        </div>
                        <div className='payment-price'>
                            <p>Discount</p>
                            <p style={{color:'red'}}>-₩ 0</p>
                        </div>
                        <div className='payment-price'>
                            <p>Delivery</p>
                            <p>₩{99000}</p>
                        </div>
                        <div className='payment-price total-price'>
                            <p>Total</p>
                            <p>₩{99000}</p>
                        </div>
                    </div>

                    <div className='policy-wrap'>
                        <p>We accept</p>
                        <div className='d-flex policy-card'>
                            <p>Cash on Delivery</p>
                            <div className='card-list'>
                                <FontAwesomeIcon className='icon' icon={faCcMastercard} size='2xl'/>
                                <FontAwesomeIcon className='icon' icon={faCcVisa} size='2xl'/>
                                <FontAwesomeIcon className='icon' icon={faCcPaypal} size='2xl'/>
                            </div>
                        </div>
                        <div className='policy-list'>
                            <p>Prices and delivery costs are not confirmed until you've reached the checkout.</p>
                            <p>15 days free returns. Read more about <span>return and refund policy.</span></p>
                            <p>Customers would receive an SMS/WhatsApp notifications regarding deliveries on the registered phone number.</p>
                        </div>
                    </div>
                </div>
            : <div style={{width:'100%'}}>
                <p style={{textAlign:'left', padding:'50px'}}>담긴 상품이 없습니다.</p>
              </div>
        }
      </div>
    </div>
  )
}

export default CartPage
