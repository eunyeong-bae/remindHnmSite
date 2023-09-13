import './App.css';
import Header from './component/Header';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './page/LoginPage';
import ProductsPage from './page/ProductsPage';
import PrivateRoute from './page/PrivateRoute';

function App() {
  return (
    <div className="container">
      <div className='main-wrap'>
        <Header />
        <Routes>
          <Route path='/' element={<ProductsPage/>} />
          <Route path='/login' element={<LoginPage />}/>
          <Route path='/product/:id' element={<PrivateRoute />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
