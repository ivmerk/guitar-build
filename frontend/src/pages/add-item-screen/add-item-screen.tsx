import { Link } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { AppRoute, PICTURE_URL_TMP, PriceLimit, numberOfStrings } from '../../const';
import { ChangeEvent, FormEvent, useRef, useState } from 'react';
import { guitarTypes, pagesGuitarTypes } from '../../types/guitar-type.enum';
import { CardData } from '../../types/card-data';
import { useAppDispatch } from '../../hooks';
import { postCardAction } from '../../store/api-action';

function AddItemScreen():JSX.Element{

  const titleRef = useRef<HTMLInputElement | null>(null);
  const descriptionRef = useRef<HTMLTextAreaElement | null>(null);
  const dateRef = useRef<HTMLInputElement | null>(null);
  const articleRef = useRef<HTMLInputElement | null>(null);
  const priceRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();

  const [validTitle, setValidTitle] = useState(false);
  const [validDescription, setValidDescription] = useState(false);
  const [validDate, setValidDate] = useState(false);
  const [validArticle, setValidArticl] = useState(false);
  const [validPrice, setValidPrice] = useState(false);
  const [stringCount, setStringCount ] = useState(Number(numberOfStrings[0]));
  const [guitarType, setGuitarType] = useState(guitarTypes[0]);

  const onTitleKeyDownCaptureHandle = (evt: ChangeEvent<HTMLInputElement>) =>{
    evt.preventDefault();
    if(titleRef.current !== null){
      setValidTitle(/^.{10,100}$/.test(titleRef.current.value));
    }
  };
  const onDescriptionKeyDownCaptureHandle = (evt: ChangeEvent<HTMLTextAreaElement>) =>{
    evt.preventDefault();
    if(descriptionRef.current !== null){
      setValidDescription(/^.{20,1024}$/.test(descriptionRef.current.value));
    }
  };

  const onDateKeyDownCaptureHandle = (evt: ChangeEvent<HTMLInputElement>) =>{
    evt.preventDefault();
    if(dateRef.current !== null){
      setValidDate(/^\d{1,2}\.\d{1,2}\.\d{4}$/.test(dateRef.current.value));
    }
  };

  const onArticleKeyDownCaptureHandle = (evt: ChangeEvent<HTMLInputElement>) =>{
    evt.preventDefault();
    if(articleRef.current !== null){
      setValidArticl(/^.{5,40}$/.test(articleRef.current.value));
    }
  };
  const onPriceKeyDownCaptureHandle = (evt: ChangeEvent<HTMLInputElement>) =>{
    evt.preventDefault();
    if(priceRef.current !== null){
      setValidPrice((Number(priceRef.current.value) > PriceLimit.Min) && (Number(priceRef.current.value) < PriceLimit.Max));
    }
  };

  const onStringCountClickHandle = (evt: ChangeEvent<HTMLInputElement>) => {
    evt.preventDefault();
    setStringCount(Number(evt.currentTarget.value));

  };

  const onGuitarTypesPropsHandle = (evt: ChangeEvent<HTMLInputElement>) => {
    evt.preventDefault();
    setGuitarType(guitarTypes[guitarTypes.findIndex((item) => String(item) === evt.currentTarget.value)]);

  };

  const onSubmit = (cardData: CardData ) => {
    if(validTitle && validDescription && validDate && validArticle && validPrice){
      dispatch(postCardAction(cardData));
    }

  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if(titleRef.current && descriptionRef.current && dateRef.current && articleRef.current && priceRef.current){
      onSubmit({
        title: titleRef.current.value,
        description: descriptionRef.current.value,
        postDate: dateRef.current.value,
        picture: PICTURE_URL_TMP,
        typeOfGuitar: guitarType,
        article: articleRef.current.value,
        numberOfStrings: stringCount,
        price: Number(priceRef.current.value),
      });
    }
  };

  type ShowStringsProps = {
    item: number;
  }
  function ShowStringsCount({item}:ShowStringsProps):JSX.Element{
    return(
      <>
        <input
          type="radio"
          id={`string-qty-${item}`}
          name="string-qty"
          value={item}
          onChange={onStringCountClickHandle}
          checked={stringCount === item}
        />
        <label
          htmlFor={`string-qty-${item}`}
        >
          {item}
        </label>
      </>

    );
  }

type ShowGuitarTypesProps = {
  item: string;
}
function ShowGuitarTypes ({item}:ShowGuitarTypesProps):JSX.Element{
  return(
    <>
      <input
        type="radio"
        id={item}
        name="item-type"
        onChange={onGuitarTypesPropsHandle}
        value={item}
        checked={String(guitarType) === item}
      />
      <label
        htmlFor={item}
      >
        {pagesGuitarTypes[guitarTypes.findIndex((guitar) => guitar === item)]}
      </label>
    </>
  );
}

return(
  <>
    <title>Добавление товара — Guitar-shop</title>
    <div className="wrapper">
      <Header />
      <main className="page-content">
        <section className="add-item">
          <div className="container">
            <h1 className="add-item__title">Новый товар</h1>
            <ul className="breadcrumbs">
              <li className="breadcrumbs__item"><Link className="link" to={AppRoute.Main}>Вход</Link>
              </li>
              <li className="breadcrumbs__item"><Link className="link" to={AppRoute.AddItem}>Товары</Link>
              </li>
              <li className="breadcrumbs__item"><Link className="link" to={AppRoute.AddItem}>Новый товар</Link>
              </li>
            </ul>
            <form className="add-item__form"
              action=""
              onSubmit={handleSubmit}
            >
              <div className="add-item__form-left">
                <div className="edit-item-image add-item__form-image">
                  <div className="edit-item-image__image-wrap">
                  </div>
                  <div className="edit-item-image__btn-wrap">
                    <button className="button button--small button--black-border edit-item-image__btn">Добавить
                    </button>
                    <button className="button button--small button--black-border edit-item-image__btn">Удалить</button>
                  </div>
                </div>
                <div className="input-radio add-item__form-radio"><span>Выберите тип товара</span>
                  {guitarTypes.map((item)=> (<ShowGuitarTypes item={item} key={String(item)} />))}
                </div>
                <div className="input-radio add-item__form-radio"><span>Количество струн</span>
                  {numberOfStrings.map((item)=> (<ShowStringsCount item={item} key={String(item)} />))}
                </div>
              </div>
              <div className="add-item__form-right">
                <div className="custom-input add-item__form-input">
                  <label><span>Дата добавления товара</span>
                    <input
                      ref={dateRef}
                      type="text"
                      name="date"
                      onChange={onDateKeyDownCaptureHandle}
                      style={(validDate) ? {borderColor:'green'} : {borderColor:'red'}}
                      placeholder="Дата в формате 00.00.0000"
                    />
                  </label>
                  {(!validDate) ? <p>Заполните поле</p> : ''}
                </div>
                <div className="custom-input add-item__form-input">
                  <label><span>Введите наименование товара</span>
                    <input
                      ref={titleRef}
                      type="text"
                      name="title"
                      onChange={onTitleKeyDownCaptureHandle}
                      style={(validTitle) ? {borderColor:'green'} : {borderColor:'red'}}
                      placeholder="Наименование"
                    />
                  </label>
                  {(!validTitle) ? <p>Заполните поле</p> : ''}
                </div>
                <div className="custom-input add-item__form-input add-item__form-input--price is-placeholder">
                  <label><span>Введите цену товара</span>
                    <input
                      ref={priceRef}
                      type="text"
                      name="price"
                      onChange={onPriceKeyDownCaptureHandle}
                      style={(validPrice) ? {borderColor:'green'} : {borderColor:'red'}}
                      placeholder="Цена в формате 00 000"
                    />
                  </label>
                  {(!validPrice) ? <p>Заполните поле</p> : ''}
                </div>
                <div className="custom-input add-item__form-input">
                  <label><span>Введите артикул товара</span>
                    <input
                      ref={articleRef}
                      type="text"
                      name="sku"
                      onChange={onArticleKeyDownCaptureHandle}
                      style={(validArticle) ? {borderColor:'green'} : {borderColor:'red'}}
                      placeholder="Артикул товара"
                    />
                  </label>
                  {(!validArticle) ? <p>Заполните поле</p> : ''}
                </div>
                <div className="custom-textarea add-item__form-textarea">
                  <label><span>Введите описание товара</span>
                    <textarea
                      ref={descriptionRef}
                      name="description"
                      onChange={onDescriptionKeyDownCaptureHandle}
                      style={(validDescription) ? {borderColor:'green'} : {borderColor:'red'}}
                      placeholder=""
                    />
                  </label>
                  {(!validDescription) ? <p>Заполните поле</p> : ''}
                </div>
              </div>
              <div className="add-item__form-buttons-wrap">
                <button className="button button--small add-item__form-button" type="submit">Сохранить изменения</button>
                <button className="button button--small add-item__form-button" type="button">Вернуться к списку товаров</button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  </>
);
}

export default AddItemScreen;
