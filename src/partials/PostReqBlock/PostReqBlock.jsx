import React, { useState } from 'react';

export const PostReqBlock = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    photo: null,
  });

  const handleSubmit = event => {
    event.preventDefault();
    // Тут ви можете обробляти дані форми, наприклад, відправляти POST запит
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = event => {
    setFormData({ ...formData, photo: event.target.files[0] });
  };

  return (
    <section id="signup">
      <div className="container post-container">
        <h2 className="block-heading post-block-heading">
          Working with POST request
        </h2>
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleInputChange}
            className="field-input"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            className="field-input"
          />
          <input
            type="tel"
            name="phone"
            placeholder="+38 (XXX) XXX - XX - XX"
            value={formData.phone}
            onChange={handleInputChange}
            className="last field-input"
          />
          <div className="position-block">
            <p>Select your position</p>
            <ul>
              <li>
                <label>
                  <input
                    type="radio"
                    name="position"
                    value="Frontend developer"
                    checked={formData.position === 'Frontend developer'}
                    onChange={handleInputChange}
                  />
                  <span>Frontend developer</span>
                </label>
              </li>
              <li>
                <label>
                  <input
                    type="radio"
                    name="position"
                    value="Backend developer"
                    checked={formData.position === 'Backend developer'}
                    onChange={handleInputChange}
                  />
                  <span>Backend developer</span>
                </label>
              </li>
              <li>
                <label>
                  <input
                    type="radio"
                    name="position"
                    value="Designer"
                    checked={formData.position === 'Designer'}
                    onChange={handleInputChange}
                  />
                  <span>Designer</span>
                </label>
              </li>
              <li>
                <label>
                  <input
                    type="radio"
                    name="position"
                    value="QA"
                    checked={formData.position === 'QA'}
                    onChange={handleInputChange}
                  />
                  <span>QA</span>
                </label>
              </li>
            </ul>
          </div>
          <div className="upload">
            <label htmlFor="photo-upload" className="upload-label">
              Upload your photo
            </label>
            <input
              id="photo-upload"
              type="file"
              name="photo"
              onChange={handleFileChange}
              className="upload-input"
            />
          </div>
          <button type="submit" className="button get-btn">
            Sign up
          </button>
        </form>
      </div>
    </section>
  );
};
