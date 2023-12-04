import { useState } from 'react';
import {Button,Form,Modal} from 'react-bootstrap';
import ForumIcon from '@mui/icons-material/Forum';

function AddNewsComment() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>

      <ForumIcon onClick={handleShow} style={{color:'grey'}}/>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>comment section</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Control className='border rounded p-2' type="text" placeholder="add your option" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Post</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddNewsComment;