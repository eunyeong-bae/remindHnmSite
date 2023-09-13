import { useEffect, useState } from 'react';
import './App.css';
import CardItem from './component/CardItem';
import Header from './component/Header';
import axios from 'axios';

function App() {
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
    <div className="container">
      <div className='main-wrap'>
        <Header />
        <div className='d-flex main-content'>
          <CardItem cardItemList={cardItemList}/>
        </div>
      </div>
    </div>
  );
}

export default App;
