import './App.css';
import Header from './component/Header';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './page/LoginPage';
import ProductsPage from './page/ProductsPage';
import PrivateRoute from './route/PrivateRoute';
import CartPage from './page/CartPage';
import FavoritePage from './page/FavoritePage';

function App() {
  return (
    <div className="container">
      <div className='main-wrap'>
        <Header />
        <Routes>
          <Route path='/' element={<ProductsPage/>} />
          <Route path='/login' element={<LoginPage />}/>
          <Route path='/products/:id' element={<PrivateRoute />}/>
          <Route path='/cart' element={<CartPage />} />
          <Route path='/favorite' element={<FavoritePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
