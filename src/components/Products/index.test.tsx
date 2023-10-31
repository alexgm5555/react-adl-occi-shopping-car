import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';
import { Products } from './';
import { findAllProducts } from "../../services";
import { ProductsInterface } from '../../redux/userSlice';

describe('Products testing', () => {
  const productSelected=(e: ProductsInterface)=>{
    expect(e.id).toEqual('1');
  }
  beforeEach(() => {
    render(
      <Products
          products={findAllProducts()}
          productSelected={productSelected}
        />,
    )
  });

  test('render', () => {
    const product1 = screen.getByText('Product 1');
    expect(product1).toBeTruthy();
  });

  test('click item', () => {
    fireEvent.click(screen.getByTestId('item1'));
  });
});
 