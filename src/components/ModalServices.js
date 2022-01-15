import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal, Button, Form } from 'react-bootstrap';
import { addServices, editServices } from '../action/AdminActions';
import { FiEdit } from 'react-icons/fi';
import { AiFillFileAdd } from 'react-icons/ai';

function ModalServices({ showedit, services }) {
  const dispatch = useDispatch();
  const [modalShow, setModalShow] = useState(false);
  const [input, setInput] = useState({
    title: '',
    img: '',
    desc: '',
  });
  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    services ? dispatch(editServices(services._id, input)) : dispatch(addServices(input));
    setInput({
      title: '',
      img: '',
      desc: '',
    });
    setModalShow(false);
  };
  const handleService = (e) => {
    setModalShow(true);
    setInput(services);
  };

  return (
    <>
      {showedit ? (
        <FiEdit onClick={() => handleService()} className='edit-icon icons' />
      ) : (
        <AiFillFileAdd className='add-icon' onClick={() => setModalShow(true)} />
      )}
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id='contained-modal-title-vcenter'>Add a new Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId='formGroupTitle'>
              <Form.Label>Service name</Form.Label>
              <Form.Control
                required
                value={input.title}
                name='title'
                onChange={handleInput}
                type='text'
                placeholder='Enter a service name'
              />
            </Form.Group>
            <Form.Group controlId='formGroupDesc'>
              <Form.Label>Service description</Form.Label>
              <Form.Control
                required
                value={input.desc}
                name='desc'
                onChange={handleInput}
                type='text'
                placeholder='Enter a description'
              />
            </Form.Group>
            <Form.Group controlId='formGroupImg'>
              <Form.Label>Service image</Form.Label>
              <Form.Control
                required
                value={input.img}
                name='img'
                onChange={handleInput}
                type='text'
                placeholder='Enter an image link'
              />
            </Form.Group>
            <Button variant='danger' onClick={() => setModalShow(false)}>
              Close
            </Button>
            {services ? (
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
export default ModalServices;
