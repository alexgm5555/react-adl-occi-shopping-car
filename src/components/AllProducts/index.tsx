import { FC, useEffect, useState }from 'react';
import { useDispatch } from 'react-redux';

import './styles.scss';

import { findAllProducts } from "../../services";
import { ProductsInterface, addProduct } from '../../redux/userSlice';
import { Products } from '../../components';

export const AllProducts:FC = () => {
  const [products, setProducts] = useState<ProductsInterface[]>();
  const dispatch =  useDispatch();
  
  const handleAddProduct = (product: ProductsInterface)=>{
    dispatch(addProduct({
      product
    }));
  };

  useEffect(() => {
    setProducts(findAllProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='ListProducts-container'>
      <Products
        products={products}
        productSelected={handleAddProduct}
        title='Add product'
      />
    </div>
  );
};
