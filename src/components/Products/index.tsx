import { FC }from 'react';

import './styles.scss';

import { ProductsInterface } from '../../redux/userSlice';

interface props {
  products?: ProductsInterface[];
  title?: string
  productSelected(products: ProductsInterface): void;
}

export const Products:FC<props> = ({products, title, productSelected}) => {
  const handleClick = (product: ProductsInterface)=>{
    productSelected(product);
  };

  return (
    <div className='Products-container'>
      {products && products.map((product: ProductsInterface)=>(
        <div
          key={product.id}
          onClick={()=>handleClick(product)}
          className='item'
          title={title}
          data-testid={`item${product.id}`}
        >
          <p> {product.name}</p>
          <p> {product.description}</p>
          <p> ${product.cost}</p>
          {product.quantity && <p> 
            Quatity: {product.quantity}
          </p>}
        </div>
      ))}
    </div>
  );
};
