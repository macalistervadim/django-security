import React, { useState, useEffect } from 'react';
import { Card, Form, Button } from 'react-bootstrap';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    if (city.trim()) {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`);
      const data = await response.json();
      setWeather(data);
    }
  };

  return (
    <div>
      <h2 className="text-center">Weather</h2>
      <Form inline className="justify-content-center mb-3">
        <Form.Control
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
        />
        <Button onClick={fetchWeather} variant="primary" className="ml-2">Get Weather</Button>
      </Form>
      {weather && (
        <Card className="text-center">
          <Card.Body>
            <Card.Title>{weather.name}</Card.Title>
            <Card.Text>
              {weather.weather[0].description}
              <br />
              Temperature: {weather.main.temp} °C
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default Weather;
