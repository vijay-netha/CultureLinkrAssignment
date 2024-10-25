import React, { useState } from 'react';
import "./index.css"


const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    
    setSubmitted(true);
  };

  return (
    <div className="form-container">
      <h2 className='contact' >Contact Us</h2>
      {submitted ? (
        <div className="success-message">
          <p>Thank you, {formData.name}! Your message has been submitted.</p>
          
        </div>
      ) : (
        <form onSubmit={onFormSubmit}>
          <div>
            <label htmlFor='nameId'>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              id='nameId'
              required
            />
          </div>
          <div>
            <label htmlFor='emailId'>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              id='emailId'
              required
            />
          </div>
          <div>
            <label htmlFor='messageId'>Message:</label>
            <textarea
              name="message"
              cols={25} rows={5}
              value={formData.message}
              onChange={handleChange}
              id='messageId'
              required
            />
          </div>
          <button className='button' type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default Home;