import { GuitarCard } from '../../types/guitar-card.type';
import CatalogFilter from '../catalog-filter/catalog-filter';
import CatalogSort from '../catalog-sort/catalog-sort';
import SmallCard from '../small-card/small-card';

type MyListScreenProps = {
  cards: GuitarCard[];
}
function MyList({cards}:MyListScreenProps): JSX.Element{
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
              <SmallCard card={cards[0]} key={cards[0].id} />
              <SmallCard card={cards[0]} key={cards[0].id} />
              {cards.map((card, _id) => (
                <SmallCard card={card} key={card.id} />
              ))}
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
