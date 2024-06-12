import React, { useState } from 'react';
import { Form, Button, Collapse } from 'react-bootstrap';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    checked: false
  });
  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });
  const [openForm, setOpenForm] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    validateInput(name, value);
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFormData({ ...formData, [name]: checked });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Проверяем валидность формы перед отправкой
    if (validateForm()) {
      // Отправляем данные формы
      console.log('Form submitted:', formData);
    } else {
      console.log('Form validation failed.');
    }
  };

  const validateInput = (name, value) => {
    let errorMsg = '';
    switch (name) {
      case 'email':
        // Проверяем валидность email
        errorMsg = value ? '' : 'Email is required.';
        break;
      case 'password':
        // Проверяем длину пароля
        errorMsg = value.length >= 6 ? '' : 'Password must be at least 6 characters long.';
        break;
      default:
        break;
    }
    setErrors({ ...errors, [name]: errorMsg });
  };

  const validateForm = () => {
    // Проверяем, есть ли ошибки в состоянии errors
    return Object.values(errors).every((error) => error === '');
  };

  return (
    <div>

    <Button
        className="contact-btn"
        onClick={() => setOpenForm(!openForm)}
        aria-controls="example-collapse-text"
        aria-expanded={openForm}
    >
        Contact Us
    </Button>

      <Collapse in={openForm} className="collapse-container">
        <div id="example-collapse-text" className={openForm ? 'expanded' : 'collapsed'}>
          <Form onSubmit={handleSubmit} className="form-container">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control 
                type="email" 
                name="email" 
                placeholder="Enter email" 
                value={formData.email} 
                onChange={handleChange} 
                isInvalid={!!errors.email}
                className="form-control"
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control 
                type="password" 
                name="password" 
                placeholder="Password" 
                value={formData.password} 
                onChange={handleChange} 
                isInvalid={!!errors.password}
                className="form-control"
              />
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox">
              <Form.Check 
                type="checkbox" 
                name="checked" 
                label="Check me out" 
                checked={formData.checked} 
                onChange={handleCheckboxChange} 
              />
            </Form.Group>

            <Button type="submit" className="btn btn-purple">Submit</Button>
          </Form>
        </div>
      </Collapse>
    </div>
  );
};

export default ContactForm;
