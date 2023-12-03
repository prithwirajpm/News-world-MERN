import { useState } from 'react';
import { Form, Modal, Button,FloatingLabel } from 'react-bootstrap';

function AddNews() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add News
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add News</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Heading</Form.Label>
                            <Form.Control className='border rounded p-2' type="text" placeholder="Enter News Heading" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <FloatingLabel controlId="floatingTextarea2" label="Comments">
                                <Form.Control
                                    as="textarea"
                                    placeholder="Leave a comment here"
                                    style={{ height: '100px' }}
                                    className='border rounded p-3'
                                />
                            </FloatingLabel>
                            <Form.Label className='mt-2'>Date</Form.Label>
                            <Form.Control  className='border rounded p-2' type="date" placeholder="date" />
                            <Form.Label className='mt-2'>Upload Image</Form.Label>
                            <Form.Control type="file" className='border rounded p-2' placeholder="date" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Upload</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddNews;