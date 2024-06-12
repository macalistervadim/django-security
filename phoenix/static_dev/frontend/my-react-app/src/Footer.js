import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css'; // Импортируем пользовательские стили

const Footer = () => {
  return (
    <footer className="footer-container">
      <Container>
        <Row>
          <Col>
            <h5>Contact Information</h5>
            <p>Email: info@phoenixstudio.com</p>
            <p>Phone: +1234567890</p>
          </Col>
          <Col>
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">LinkedIn</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
