import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal, Button, Form } from 'react-bootstrap';
import { FiEdit } from 'react-icons/fi';
import { AiFillFileAdd } from 'react-icons/ai';
import { addProject, editProject } from '../slices/projectSlice';

function ModalProject({ showedit, project }) {
  const dispatch = useDispatch();
  const [modalShow, setModalShow] = useState(false);
  const [file, setFile] = useState(null);
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
    project
      ? dispatch(editProject(project._id, input))
      : dispatch(addProject(input, file));
    setInput({
      title: '',
      img: '',
      desc: '',
    });
    setModalShow(false);
  };
  const handleProject = (e) => {
    setModalShow(true);
    setInput(project);
  };
  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <>
      {showedit ? (
        <FiEdit onClick={() => handleProject()} className='edit-icon icons' />
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
            <Form.Group controlId='formGroupName'>
              <Form.Label>Project name</Form.Label>
              <Form.Control
                required
                value={input.title}
                name='title'
                onChange={handleInput}
                type='text'
                placeholder='Enter a product name'
              />
            </Form.Group>
            <Form.Group controlId='formGroupDesc'>
              <Form.Label>Project description</Form.Label>
              <Form.Control
                required
                value={input.desc}
                name='desc'
                onChange={handleInput}
                type='text'
                placeholder='Enter a description'
              />
            </Form.Group>
            <Form.Group>
              <input type='file' onChange={handleFile} label='Example file input' />
              {/* <Form.File
                id='exampleFormControlFile1'
              /> */}
            </Form.Group>
            <Button variant='danger' onClick={() => setModalShow(false)}>
              Close
            </Button>
            {project ? (
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
export default ModalProject;
