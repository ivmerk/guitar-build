import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import MyList from '../../components/my-list/my-list';

function ProductListScreen():JSX.Element{
  return(

    <>
      <title>Просмотр товаров — Guitar-shop</title>
      <div className="wrapper">
        <Header />
        <main className="page-content">
          <div className="container">
            <MyList />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );

}

export default ProductListScreen;
