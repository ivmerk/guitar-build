import { useAppSelector } from '../../hooks';
import { getCards, getIsCardsLoading } from '../../store/card-data/selectors';
import CatalogFilter from '../catalog-filter/catalog-filter';
import CatalogSort from '../catalog-sort/catalog-sort';
import SmallCard from '../small-card/small-card';
import { HelmetProvider } from 'react-helmet-async';
import ErrorScreen from '../../pages/error-screen/error-screen';
import AddCardsButton from '../add-cards-button/add-cards-button';
import PaginationList from '../../pagination-list/pagination-list';
import CardsCatalog from '../cards-catalog/cards-catalog';

function MyList(): JSX.Element{


  return(
    <section className="product-list">
      <div className="container">
        <h1 className="product-list__title">Список товаров</h1>
        <ul className="breadcrumbs">
          <li className="breadcrumbs__item"><a className="link" href="./main.html">Вход</a>
          </li>
          <li className="breadcrumbs__item"><a className="link">Товары</a>
          </li>
        </ul>
        <div className="catalog">
          <CatalogFilter/>
          <CatalogSort/>
          <CardsCatalog/>
        </div>
        <AddCardsButton/>
        <PaginationList/>
      </div>
    </section>
  );
}

export default MyList;
