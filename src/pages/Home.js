import React from 'react'
import { Row, Col, Button} from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
const Home = () => {
  return (
    <Row>
        <Col md={6} className='d-flex flex-direction-column align-items-center justify-content-center'>
            <div>
                <h1>Share the world with your friends</h1>
                <p>Travel beyond the world with Chat App</p>
                <LinkContainer to="/chat">
                    <Button variant='success'>
                        Get Started Now!
                    <i className='fas fa-comments home-message-icon'></i>
                    </Button>
                </LinkContainer>
                </div>       
        </Col>
    </Row>
  )
}

export default Home;