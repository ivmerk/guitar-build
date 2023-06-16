import { HelmetProvider } from 'react-helmet-async';
import { useAppSelector } from '../../hooks';
import { getCards, getIsCardsLoading } from '../../store/card-data/selectors';
import SmallCard from '../small-card/small-card';
import ErrorScreen from '../../pages/error-screen/error-screen';

function CardsCatalog():JSX.Element{
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
    <div className="catalog-cards">
      <div className="catalog-cards__list">
        <SmallCard card={cards[0]}/ >
        <SmallCard card={cards[0]}/>

      </div>
    </div>
  );
}
export default CardsCatalog;
