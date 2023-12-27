import React from 'react'
import { Row, Col, Button} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LinkContainer } from 'react-router-bootstrap';
import './Home.css';
const Home = () => {
  return (
    <Row>
        <Col md={6} className='d-flex flex-direction-column align-items-center justify-content-center'>
            <div>
                <h1>Share the world with your friends</h1>
                <p>Travel beyond the world with Chat App</p>
                <LinkContainer to="/chat">
                    <Button variant='success'>
                        Get Started Now! <i className="fa-solid fa-comments home-message-icon"></i>
                    </Button>
                </LinkContainer>
                </div>       
        </Col>
        <Col md={6} className='home__bg'></Col>
    </Row>
  )
}

export default Home;