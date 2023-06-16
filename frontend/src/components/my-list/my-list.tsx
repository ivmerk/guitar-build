import { useAppSelector } from '../../hooks';
import { getCards, getIsCardsLoading } from '../../store/card-data/selectors';
import CatalogFilter from '../catalog-filter/catalog-filter';
import CatalogSort from '../catalog-sort/catalog-sort';
import SmallCard from '../small-card/small-card';
import { HelmetProvider } from 'react-helmet-async';
import ErrorScreen from '../../pages/error-screen/error-screen';

function MyList(): JSX.Element{

  const cards = useAppSelector(getCards);
  const isCardsLoading = useAppSelector(getIsCardsLoading);

  if(isCardsLoading){
    return(
      <HelmetProvider>
        <ErrorScreen />
      </HelmetProvider>
    );
  }
  console.log(cards);
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
          <div className="catalog-cards">
            <div className="catalog-cards__list">
              <SmallCard card={cards[0]}/ >
              <SmallCard card={cards[0]}/>

            </div>
          </div>
        </div>
        <button className="button product-list__button button--red button--big">Добавить новый товар</button>
        <div className="pagination product-list__pagination">
          <ul className="pagination__list">
            <li className="pagination__page pagination__page--active"><a className="link pagination__page-link" href="1">1</a>
            </li>
            <li className="pagination__page"><a className="link pagination__page-link" href="2">2</a>
            </li>
            <li className="pagination__page"><a className="link pagination__page-link" href="3">3</a>
            </li>
            <li className="pagination__page pagination__page--next" id="next"><a className="link pagination__page-link" href="2">Далее</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default MyList;
