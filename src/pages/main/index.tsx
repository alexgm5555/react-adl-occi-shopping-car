import { FC } from 'react';

import './styles.scss';

import { AllProducts, SelectedProducts, ShoppingCar } from '../../components';

export const Main:FC = () => {
  return (
    <div className='Main-container'>
      <div className='children-container'>
        <div className='panel-left'>
          <AllProducts/>
        </div>
        <div className='panel-right'>
          <ShoppingCar/>
          <SelectedProducts/>
        </div>
      </div>
    </div>
  );
};
