import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal, Button, Form } from 'react-bootstrap';
import { addProduct, editProduct } from '../action/AdminActions';
import { FiEdit } from 'react-icons/fi';
import { AiFillFileAdd } from 'react-icons/ai';

function ModalButton({ showedit, product }) {
  const dispatch = useDispatch();
  const [modalShow, setModalShow] = useState(false);
  const [input, setInput] = useState({
    name: '',
    img: '',
    desc: '',
    price: 0,
    status: true,
  });
  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    product ? dispatch(editProduct(product._id, input)) : dispatch(addProduct(input));
    setInput({
      name: '',
      img: '',
      desc: '',
      price: 0,
      status: true,
    });
    setModalShow(false);
  };
  const handleProduct = (e) => {
    setModalShow(true);
    setInput(product);
  };

  return (
    <>
      {showedit ? (
        <FiEdit onClick={() => handleProduct()} className='edit-icon icons' />
      ) : (
        <AiFillFileAdd className='add-icon' onClick={() => setModalShow(true)} />
        // <Button variant='primary' onClick={() => setModalShow(true)}>
        //   Add a Product
        // </Button>
      )}
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id='contained-modal-title-vcenter'>Add a new Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId='formGroupName'>
              <Form.Label>Product name</Form.Label>
              <Form.Control
                required
                value={input.name}
                name='name'
                onChange={handleInput}
                type='text'
                placeholder='Enter a product name'
              />
            </Form.Group>
            <Form.Group controlId='formGroupDesc'>
              <Form.Label>Product description</Form.Label>
              <Form.Control
                required
                value={input.desc}
                name='desc'
                onChange={handleInput}
                type='text'
                placeholder='Enter a description'
              />
            </Form.Group>
            <Form.Group controlId='formGroupPrice'>
              <Form.Label>Product price(TND)</Form.Label>
              <Form.Control
                required
                value={input.price}
                name='price'
                onChange={handleInput}
                type='text'
                placeholder='Enter a price'
              />
            </Form.Group>
            <Form.Group controlId='formGroupImg'>
              <Form.Label>Product image</Form.Label>
              <Form.Control
                required
                value={input.img}
                name='img'
                onChange={handleInput}
                type='text'
                placeholder='Enter an image link'
              />
            </Form.Group>
            {product ? (
              <Form.Group controlId='formGroupStatus'>
                <Form.Check
                  type='switch'
                  name='status'
                  onChange={(e) => setInput({ ...input, status: e.target.checked })}
                  label={input.status ? 'Product in Stock' : 'Product out of Stock'}
                  checked={input.status}
                />
              </Form.Group>
            ) : (
              <></>
            )}
            <Button variant='danger' onClick={() => setModalShow(false)}>
              Close
            </Button>
            {product ? (
              <Button variant='success' type='submit'>
                Edit
              </Button>
            ) : (
              <Button variant='success' type='submit'>
                Add
              </Button>
            )}
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default ModalButton;
