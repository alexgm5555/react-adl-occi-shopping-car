import { FC } from 'react';
import { useSelector } from 'react-redux';

import './styles.scss';

import { AllProducts, SelectedProducts, ShoppingCar } from '../../components';

export const Main:FC = () => {
  const [ ...data ] = useSelector((state: any) => state.user.products);
  return (
    <div className='Main-container'>
      <div className='children-container'>
        <div className='panel-left'>
          <AllProducts/>
        </div>
        {data.length  !== 0 && 
          <div className='panel-right'>
            <ShoppingCar/>
            <SelectedProducts/>
          </div>
        }
      </div>
    </div>
  );
};
