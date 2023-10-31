import { FC }from 'react';
import carImage from '../../shoppin_car.png';
import './styles.scss';
import { useSelector } from 'react-redux';

export const ShoppingCar:FC = () => {
  const data = useSelector((state: any) => state.user);
  
  return (
    <div className='ShoppingCar-container'>
      <span className="dot">
        <span>{data.products.length | 0}</span>
        </span>
      <img className='img-car' src={`${carImage}`} alt="" />
      <br />
      <div className='total-span'>${data.total}</div>
    </div>
  );
};
