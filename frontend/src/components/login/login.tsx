import { ChangeEvent, FormEvent, useRef, useState } from 'react';
import { useAppDispatch} from '../../hooks';
import { Link, useNavigate } from 'react-router-dom';
import { AuthData } from '../../types/auth-data';
import { logInAction } from '../../store/api-action';
import { AppRoute, EMAIL_REGEXP } from '../../const';

function Login(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const [validPassword, setValidPassword] = useState(false);
  const [validLogin, setValidLogin] = useState(false);


  const onSubmit = (authData: AuthData) => {
    if (validPassword && validLogin) {
      dispatch(logInAction(authData));
      navigate(AppRoute.ProductList);}
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (loginRef.current !== null && passwordRef.current !== null) {
      onSubmit({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      });
    }
  };

  const onKeyDownCaptureHandle = (evt: ChangeEvent<HTMLInputElement>) =>{
    evt.preventDefault();
    if (loginRef.current !== null && passwordRef.current !== null) {
      setValidPassword(/^.{6,12}$/.test(passwordRef.current.value));
      setValidLogin(EMAIL_REGEXP.test(loginRef.current.value));
    }
  };

  return(
    <section className="login">
      <h1 className="login__title">Войти</h1>
      <p className="login__text">Hовый пользователь?
        <Link className="login__link" to={AppRoute.Registration}>
          Зарегистрируйтесь
        </Link> прямо сейчас
      </p>
      <form
        method="post"
        action=""
        onSubmit={handleSubmit}
      >
        <div className="input-login">
          <label htmlFor="email">Введите e-mail</label>
          <input
            ref={loginRef}
            type="email"
            onChange={onKeyDownCaptureHandle}
            id="email"
            name="email"
            autoComplete="off"
          />
          {(!validLogin) ? <p className="input-login__error">Заполните поле</p> : ''}
        </div>
        <div className="input-login">
          <label htmlFor="passwordLogin">Введите пароль</label>
          <span>
            <input
              ref={passwordRef}
              type="password"
              placeholder="• • • • • • • • • • • •"
              id="passwordLogin"
              onChange={onKeyDownCaptureHandle}
              name="password"
              autoComplete="off"
            />
            <button className="input-login__button-eye" type="button">
              <svg width="14" height="8" aria-hidden="true">
                <use xlinkHref="#icon-eye"></use>
              </svg>
            </button>
          </span>
          {(!validPassword) ? <p className="input-login__error">Заполните поле</p> : ''}

        </div>
        <button className="button login__button button--medium" type="submit">Войти</button>
      </form>
    </section>
  );
}

export default Login;
