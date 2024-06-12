import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';
import ContactForm from './ContactForm';
import './HomePage.css'; // Импортируем пользовательские стили

const HomePage = () => {
  return (
    <div>
      <Header />

      <main className="container mt-4">
        <section id="home" className="section">
          <Container>
            <Row>
              <Col>
                <div className="home-content">
                  <h1 className="title">Welcome to PHOENIX STUDIO!</h1>
                  <p className="subtitle">This is a sample homepage created with React and Bootstrap.</p>
                  
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section id="about" className="section">
          <Container>
            <Row>
              <Col>
                <h2 className="about-title">About Us</h2>
                <p className="about-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Col>
            </Row>
          </Container>
        </section>

        <section id="contact" className="section">
          <Container>
            <h2 className="contact-title">Contact Us</h2>
            <ContactForm />
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
