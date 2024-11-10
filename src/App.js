import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    email: 'bhavya.vaghela@georgebrown.ca',
    fullName: 'Bhavya vaghela',
    address: '160 kendel ave',
    address2: 'Toronto',
    province: 'Ontario',
    postalCode: 'M5R 1M3',
    agree: false,
  });
  const [submitted, setSubmitted] = useState(false); // New state to control when to show the data

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true); // Set submitted to true on submit
  };

  return (
      <div className="App">
        <header className="App-header">
          <h1>Data Entry Form</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                  name="email"
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={handleChange}
              />
              <input
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
              />
            </div>
            <div>
              <input
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleChange}
              />
              <input
                  name="address2"
                  placeholder="Address 2"
                  value={formData.address2}
                  onChange={handleChange}
              />
            </div>
            <div>
              <select
                  name="province"
                  value={formData.province}
                  onChange={handleChange}
              >
                <option value="">Choose...</option>
                <option value="Ontario">Ontario</option>
                <option value="Quebec">Quebec</option>
                <option value="British Columbia">British Columbia</option>
                <option value="Alberta">Alberta</option>
                {/* Add other provinces here */}
              </select>
              <input
                  name="postalCode"
                  placeholder="Postal Code"
                  value={formData.postalCode}
                  onChange={handleChange}
              />
            </div>
            <div>
              <label>
                <input
                    name="agree"
                    type="checkbox"
                    checked={formData.agree}
                    onChange={handleChange}
                />
                Agree to Terms & Conditions?
              </label>
            </div>
            <button type="submit">Submit</button>
          </form>

          {/* Display entered data only after submit */}
          {submitted && (
              <div className="output">
                <p>Email: {formData.email}</p>
                <p>Full Name: {formData.fullName}</p>
                <p>Address: {formData.address}</p>
                <p>Address 2: {formData.address2}</p>
                <p>Province: {formData.province}</p>
                <p>Postal Code: {formData.postalCode}</p>
              </div>
          )}
        </header>
      </div>
  );
}

export default App;
