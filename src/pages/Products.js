import '../css/productPage.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getProducts } from '../slices/productSlice';

const Products = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  const products = useSelector((state) => state.products.productList);
  return (
    <div>
      <div className='productPage-title'>
        <h1>Our Products</h1>
        <h5>Photovoltaic panels, inverters,batteries...</h5>
      </div>
      <div className='products-page'>
        {products ? (
          products.map((product) => <ProductCard key={product._id} {...product} />)
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

const ProductCard = ({ name, img, desc, price }) => {
  return (
    <div className='productPage-card'>
      <img src={img} alt='product' />
      <h4>{name} </h4>
      <p>{desc} </p>
      <p>{price} TND </p>
    </div>
  );
};

export default Products;
