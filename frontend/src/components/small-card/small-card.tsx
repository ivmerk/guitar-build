import { GuitarCard } from '../../types/guitar-card.type';
import { formatStringToDate } from '../../utils/util';

type SmallCardScreenProps = {
  card: GuitarCard;
}

function SmallCard({card}: SmallCardScreenProps):JSX.Element{
  return (
    <div className="catalog-item">
      <div className="catalog-item__data"><img src="img/content/catalog-product-1.png" srcSet="img/content/catalog-product-1@2x.png 2x" width="36" height="93" alt="Картинка гитары"/>
        <div className="catalog-item__data-wrapper">
          <a className="link" href="./product.html"><p className="catalog-item__data-title">{card.name}</p></a>
          <p className="catalog-item__data-date">Дата добавления {formatStringToDate(card.data)}</p>
          <p className="catalog-item__data-price">{card.price} ₽</p>
        </div>
      </div>
      <div className="catalog-item__buttons"><a className="button button--small button--black-border" href="edit-item.html" aria-label="Редактировать товар">Редактировать</a>
        <button className="button button--small button--black-border" type="submit" aria-label="Удалить товар">Удалить</button>
      </div>
    </div>
  );
}
export default SmallCard;
