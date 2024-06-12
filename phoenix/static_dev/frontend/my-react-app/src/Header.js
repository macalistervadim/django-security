import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Header.css'; // Импортируем пользовательские стили

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Очистка слушателя событий при размонтировании компонента
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={isSticky ? 'header-fixed' : ''}>
      <Navbar bg="light" expand="lg" className="navbar-container">
        <Container>
          <Navbar.Brand href="#" className="brand-text">PHOENIX STUDIO</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home">Главная</Nav.Link>
              <Nav.Link href="#about">О нас</Nav.Link>
              <Nav.Link href="#contact">Контакты</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
