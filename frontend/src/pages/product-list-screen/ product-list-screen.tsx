import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import MyList from '../../components/my-list/my-list';
import { GuitarCard } from '../../types/guitar-card.type';

type ProductListScreenProps = {
  cards: GuitarCard[];
}

function ProductListScreen({cards}:ProductListScreenProps):JSX.Element{
  return(

    <>
      <title>Просмотр товаров — Guitar-shop</title>
      <div className="wrapper">
        <Header />
        <main className="page-content">
          <div className="container">
            <MyList
              cards = {cards}
            />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );

}

export default ProductListScreen;
