import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaTrash } from 'react-icons/fa';
import ModalService from './ModalServices';
import { deleteService } from '../action/AdminActions';

const Services = () => {
  const services = useSelector((state) => state.auth.services);
  return (
    <div>
      <div className='mini-navbar'>
        <span>
          <h3>Services</h3>
          <ModalService showedit={false} />
        </span>
      </div>
      <div className='products-container'>
        {services
          ? services.map((service) => <ServiceCard key={service._id} {...service} />)
          : true}
      </div>
    </div>
  );
};

export const ServiceCard = ({ _id, title, desc, img }) => {
  const dispatch = useDispatch();
  return (
    <div className='black card'>
      <span>
        <img src={img} alt='service' />
      </span>
      <h4 className='name'>{title}</h4>
      <h6 className='desc'>{desc}</h6>
      <span className='buttons' style={{ paddingTop: '30px' }}>
        <button className='card-btn edit-btn'>
          <ModalService showedit={true} services={{ _id, title, img, desc }} />
        </button>
        <button
          onClick={() => dispatch(deleteService(_id))}
          className='card-btn delete-btn'
        >
          <FaTrash className='delete-icon icons' />
        </button>
      </span>
    </div>
  );
};

export default Services;
