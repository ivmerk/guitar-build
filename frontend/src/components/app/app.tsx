import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import MainScreen from '../../pages/main-screen/main-screen';
import ProductListScreen from '../../pages/product-list-screen/ product-list-screen';

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
