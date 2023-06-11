import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Registration from '../../components/registration/registration';

function RegistrationScreen():JSX.Element{
  return(
    <>
      <title>Авторизация — Guitar-shop</title>
      <div className="wrapper">
        <Header />
        <main className="page-content">
          <div className="container">
            <Registration />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default RegistrationScreen;
