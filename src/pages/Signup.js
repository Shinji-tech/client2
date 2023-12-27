import React, { useState } from "react";
import { Col, Container, Form, Row, Button, Spinner } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.css';
import "./Signup.css";
import bot from "../assets/bot.jpg";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const navigate = useNavigate();
    //image upload states
    const [image, setImage] = useState(null);
    const [upladingImg, setUploadingImg] = useState(false);
    const [imagePreview, setImagePreview] = useState(null);

    function validateImg(e) {
        const file = e.target.files[0];
        if (file.size >= 1048576) {
            return alert("Max file size is 1mb");
        } else {
            setImage(file);
            setImagePreview(URL.createObjectURL(file));
        }
    }

    async function uploadImage() {
        const data = new FormData();
        data.append("file", image);
        data.append("upload_preset", "onhj8yam");
        try {
            setUploadingImg(true);
            let res = await fetch("https://api.cloudinary.com/v1_1/dnsngumit/image/upload", {
                method: "post",
                body: data,
            });
            const urlData = await res.json();
            setUploadingImg(false);
            return urlData.url;
        } catch (error) {
            setUploadingImg(false);
            console.log(error);
        }
    }

    return (
    <Container className='Container__si'>
            <Row>
                    <Col md={7} className="d-flex align-items-center justify-content-center flex-direction-column">
                        <Form style={{width: "80%" , maxWidth: "500"}}>
                        <h1 className="text-center">Create account</h1>
                        <div className="signup-profile-pic__container">
                            <img src={bot} className="signup-profile-pic" />
                            <label htmlFor="image-upload" className="image-upload-label">
                                <i className="fas fa-plus-circle add-picture-icon"></i>
                            </label>
                            <input type="file" id="image-upload" hidden accept="image/png, image/jpg" onChange={validateImg} />
                        </div>
                        
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Account Name" onChange={(e) => setName(e.target.value)} value={name}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} value={email} />
                                <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                {upladingImg ? "Signing you up..." : "Signup"}
                            </Button>
                            <div className='rs'>
                                <p className='text-center'>
                                    Already have an account ? <Link to="/Login">Login</Link>
                                </p>

                            </div>
                        </Form>
                </Col>
                <Col md={5} className='signup__bg'></Col>
            </Row>
        </Container>
  )
}

export default Signup;