import Header from '../../components/header/header';
import Login from '../../components/login/login';
import Footer from '../../components/footer/footer';

function MainScreen() :JSX.Element {

  return(
    <>
      <title>Авторизация — Guitar-shop</title>
      <div className="wrapper">
        <Header />
        <main className="page-content">
          <div className="container">
            <Login />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}


export default MainScreen;
