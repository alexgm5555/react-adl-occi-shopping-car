import { FC, useEffect, useState } from "react";
import { Products } from '../../components';
import { useDispatch, useSelector } from "react-redux";

import './styles.scss';

import { ProductsInterface, removeProduct, sumTotal } from "../../redux/userSlice";

export const SelectedProducts:FC = () => {
  const [products, setProducts] = useState<ProductsInterface[]>();

  const data = useSelector((state: any) => state.user.products);
  const dispatch =  useDispatch();
  
  const handleRemoveProduct = (product: ProductsInterface)=>{
    const index = data.findIndex((prod: ProductsInterface) => prod.id === product.id );
    let _data = [...data]
    _data.splice(index, 1);
    dispatch(removeProduct({
      products: _data
    }));
  };

  useEffect(() => {
    setProducts(data);
    let result = 0;
    for (let i in data) {
      result += parseFloat(data[i].cost) ;
    }
    dispatch(sumTotal({
      total: result.toString()
    }));
  }, [data]);
  
  return (
    <div className='SeletedProducts-container'>
      <Products
        products={products}
        productSelected={handleRemoveProduct}
      />
    </div>
  );
};
