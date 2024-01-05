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
      <div>
        <h2>Working with POST request</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="+38 (XXX) XXX - XX - XX"
            value={formData.phone}
            onChange={handleInputChange}
          />
          <div>
            Select your position
            <label>
              <input
                type="radio"
                name="position"
                value="Frontend developer"
                checked={formData.position === 'Frontend developer'}
                onChange={handleInputChange}
              />
              Frontend developer
            </label>
            <label>
              <input
                type="radio"
                name="position"
                value="Backend developer"
                checked={formData.position === 'Backend developer'}
                onChange={handleInputChange}
              />
              Backend developer
            </label>
            <label>
              <input
                type="radio"
                name="position"
                value="Designer"
                checked={formData.position === 'Designer'}
                onChange={handleInputChange}
              />
              Designer
            </label>
            <label>
              <input
                type="radio"
                name="position"
                value="QA"
                checked={formData.position === 'QA'}
                onChange={handleInputChange}
              />
              QA
            </label>
          </div>
          <div>
            <label htmlFor="photo-upload">
              Upload your photo
              <input
                id="photo-upload"
                type="file"
                name="photo"
                onChange={handleFileChange}
              />
            </label>
          </div>
          <button type="submit">Sign up</button>
        </form>
      </div>
    </section>
  );
};
