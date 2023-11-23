import React from 'react';
import { Col, Form } from 'react-bootstrap';
import VisibilityIcon from '@mui/icons-material/Visibility';

function NewsLogin() {
    return (
        <div className='vh-100 d-flex justify-content-center align-items-center'>
            <div className='row w-100 d-flex justify-content-center align-items-center'>
                <Col lg={4} sm={12}>
                    <img
                        className='w-100'
                        src="https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                        srcSet=""
                    />
                </Col>
                <Col lg={4} sm={12}>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <div className='d-flex justify-content-between'><Form.Label>Password</Form.Label><span><button className='icon-link' style={{border:'none', backgroundColor:'white'}}><VisibilityIcon style={{color:'#6CB4EE'}}/></button></span></div>
                            <Form.Control type="password" placeholder="password" />
                            <div className='d-flex justify-content-center mt-5'>
                                <div>
                                    <button className='btn btn-primary m-3'>Login</button>
                                    <button className='btn btn-primary m-3'>Register</button>
                                </div>
                            </div>
                        </Form.Group>
                    </Form>
                </Col>
            </div>
        </div>
    );
}

export default NewsLogin;
