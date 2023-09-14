import './App.css';
import Header from './component/Header';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './page/LoginPage';
import ProductsPage from './page/ProductsPage';
import PrivateRoute from './route/PrivateRoute';
import { useEffect, useState } from 'react';

function App() {
  const [authenticate, setAuthenticate] = useState(false);

  return (
    <div className="container">
      <div className='main-wrap'>
        <Header />
        <Routes>
          <Route path='/' element={<ProductsPage/>} />
          <Route path='/login' element={<LoginPage setAuthenticate={setAuthenticate}/>}/>
          <Route path='/products/:id' element={<PrivateRoute authenticate={authenticate}/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
