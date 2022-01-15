import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaTrash } from 'react-icons/fa';
import ModalButton from './Modal';
import { deleteProduct } from '../action/AdminActions';

const Products = () => {
  const products = useSelector((state) => state.auth.products);

  return (
    <>
      <div className='mini-navbar'>
        <span>
          <h3>Products</h3>
          <ModalButton showedit={false} />
        </span>
      </div>
      <div className='products-container'>
        {products
          ? products.map((product) => <ProductCard key={product._id} {...product} />)
          : true}
      </div>
    </>
  );
};

const ProductCard = ({ _id, name, img, price, desc, status }) => {
  const dispatch = useDispatch();
  return (
    <div className='productAD-card'>
      <span>
        <img src={img} alt='product' />
      </span>
      <h4 className='name' style={status ? { color: 'black' } : { color: 'darkred' }}>
        {name}
      </h4>
      <h6 className='desc'>{desc}</h6>
      <p className='user-email'>{price} TND</p>
      <span>
        <button className='card-btn edit-btn'>
          <ModalButton
            showedit={true}
            product={{ _id, name, img, price, desc, status }}
          />
        </button>
        <button
          onClick={() => dispatch(deleteProduct(_id))}
          className='card-btn delete-btn'
        >
          <FaTrash className='delete-icon icons' />
        </button>
      </span>
    </div>
  );
};

export default Products;
