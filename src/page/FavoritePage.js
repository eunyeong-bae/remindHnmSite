import React from 'react'
import { useSelector } from 'react-redux'
import CardItem from '../component/CardItem';

const FavoritePage = () => {
  const favoriteList = useSelector(state => state.product.favoriteList);

  return (
    <div className='cart-container'>
    <h2>Favorite Page</h2>
    <div className='d-flex cart-content'>
      <div style={{display:'flex', flexDirection:'row', width:'100%', flexWrap:'wrap'}}>
          <CardItem 
              cardItemList={favoriteList}
              page ={'Favorite'}
          />
      </div>
    </div>
  </div>
  )
}

export default FavoritePage
