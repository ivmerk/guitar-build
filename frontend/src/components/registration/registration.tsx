import { ChangeEvent, useRef, useState } from 'react';
import { EMAIL_REGEXP } from '../../const';

function Registration():JSX.Element{


  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const [validName, setValidName] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);

  const onKeyDownCaptureHandle = (evt: ChangeEvent<HTMLInputElement>) =>{
    evt.preventDefault();
    if (nameRef.current !== null && passwordRef.current !== null && emailRef.current !== null) {
      setValidPassword(/^.{6,12}$/.test(passwordRef.current.value));
      setValidEmail(EMAIL_REGEXP.test(emailRef.current.value));
      setValidName(/^.{1,15}$/.test(nameRef.current.value));
    }
  };
  return(
    <section className="login registration">
      <h1 className="login__title">Регистрация</h1>
      <form
        method="post"
        action="/"
      >
        <div className="input-login">
          <label htmlFor="name">Введите имя</label>
          <input
            ref={nameRef}
            type="text"
            id="name" name="name"
            onChange={onKeyDownCaptureHandle}
            autoComplete="off"
          />
          {(!validName) ? <p className="input-login__error">Заполните поле</p> : ''}
        </div>
        <div className="input-login">
          <label htmlFor="email">Введите e-mail</label>
          <input
            ref={emailRef}
            type="email"
            id="email"
            name="email"
            onChange={onKeyDownCaptureHandle}
            autoComplete="off"
          />
          {(!validEmail) ? <p className="input-login__error">Заполните поле</p> : ''}
        </div>
        <div className="input-login">
          <label htmlFor="password">Придумайте пароль</label>
          <span>
            <input
              ref={passwordRef}
              type="password"
              placeholder="• • • • • • • • • • • •"
              id="password"
              name="password"
              onChange={onKeyDownCaptureHandle}
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
        <button className="button login__button button--medium" type="submit">Зарегистрироваться</button>
      </form>
    </section>
  );
}

export default Registration;
