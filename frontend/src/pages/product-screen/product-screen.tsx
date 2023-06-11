import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import GoodCard from '../../components/my-card/my-card';

function ProductScreen(): JSX.Element{
  return(

    <>
      <title>Товар — Guitar-shop</title>
      <div className="wrapper">
        <Header />
        <main className="page-content">
          <div className="container">
            <GoodCard />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
export default ProductScreen;
