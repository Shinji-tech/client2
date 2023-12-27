import React, { useState } from "react";
import { Col, Container, Form, Row, Button, Spinner } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin(e) {
        e.preventDefault();
        //login logic
    }

    return (
        <Container className='Container__lo'>
            <Row>
                    <Col md={5} className='login__bg'></Col>
                    <Col md={7} className="d-flex align-items-center justify-content-center flex-direction-column">
                        <Form style={{width: "80%" , maxWidth: "500"}} onSubmit={handleLogin}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} value={email} />
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                        
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Login
                            </Button>
                            <div className='rs'>
                                <p className='text-center'>
                                    Don't have an account ? <Link to="/Signup">Signup</Link>
                                </p>

                            </div>
                        </Form>
                </Col>
            </Row>
        </Container>
      );
}

export default Login;