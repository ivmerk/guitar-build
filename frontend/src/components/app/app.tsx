import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import MainScreen from '../../pages/main-screen/main-screen';
import ProductListScreen from '../../pages/product-list-screen/ product-list-screen';
import ProductScreen from '../../pages/product-screen/product-screen';
import RegistrationScreen from '../../pages/registration-screen/registration-screen';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={
          <MainScreen />
        }
        />
        <Route path={AppRoute.ProductList} element={
          <ProductListScreen />
        }
        />
        <Route path={AppRoute.Registration} element={
          <RegistrationScreen />
        }
        />
        <Route path={AppRoute.Product} element={
          <ProductScreen />
        }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
