import { useDispatch } from 'react-redux';

function AddCardsButton():JSX.Element{
  const dispatch = useDispatch();


  return(
    <button className="button product-list__button button--red button--big" type="button">Добавить новый товар</button>
  );
}
export default AddCardsButton;
