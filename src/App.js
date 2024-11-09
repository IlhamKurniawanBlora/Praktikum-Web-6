// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, useNavigate } from 'react-router-dom';
import './App.css';

function Home() {
  return (
    <div className="container">
      <div className="page-content">
        <h2>Welcome to Our Website</h2>
        <p>We are a dedicated team passionate about creating amazing web experiences.</p>
        <div style={{ marginTop: '1rem' }}>
          <h3>Our Services</h3>
          <ul style={{ marginLeft: '2rem', marginTop: '0.5rem' }}>
            <li>Web Development</li>
            <li>Mobile Applications</li>
            <li>UI/UX Design</li>
            <li>Digital Marketing</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="container">
      <div className="page-content">
        <h2>About Us</h2>
        <p>We are a team of passionate developers and designers working together to create amazing digital experiences.</p>
        <div style={{ marginTop: '1rem' }}>
          <h3>Our Values</h3>
          <ul style={{ marginLeft: '2rem', marginTop: '0.5rem' }}>
            <li>Innovation</li>
            <li>Quality</li>
            <li>Integrity</li>
            <li>Customer Satisfaction</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function Contact() {
  const [formData, setFormData] = React.useState({
    name: '',
    message: ''
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.message) {
      alert(`Thank you for your message, ${formData.name}!`);
      navigate('/');
    } else {
      alert('Please fill in all fields');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="container">
      <div className="page-content">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              rows="4"
            />
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;