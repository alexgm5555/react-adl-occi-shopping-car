import { FC, useEffect, useState }from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './styles.scss';

import { findAllProducts } from "../../services";
import { ProductsInterface, addProduct } from '../../redux/userSlice';
import { Products } from '../../components';

export const AllProducts:FC = () => {
  const [products, setProducts] = useState<ProductsInterface[]>();
  const dispatch =  useDispatch();
  const data = useSelector((state: any) => state.user.products);
  
  const handleAddProduct = (product: ProductsInterface)=>{
    if(!data?.find((prod: ProductsInterface) => prod.id === product.id ))
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
      />
    </div>
  );
};
