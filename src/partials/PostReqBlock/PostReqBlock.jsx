import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPositions, getToken } from '../../redux/selectors';
import { PositionsList } from 'components/PositionsList/PositionsList';
import { addContact, fetchNewContacts } from '../../redux/operations';

export const PostReqBlock = () => {
  const token = useSelector(getToken);
  const positions = useSelector(getPositions);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position_id: '',
    photo: null,
  });

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      await dispatch(addContact({ formData, token }));
      dispatch(fetchNewContacts());
    } catch (error) {
      console.error('Error in sent contact occured:', error.message);
    }
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleInputRadioChange = (event, id) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value, position_id: id });
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
            required
            minLength={2}
            maxLength={60}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            className="field-input"
            required
            minLength={2}
            maxLength={100}
          />

          <input
            type="tel"
            name="phone"
            placeholder="+380 (XX) XXX - XX - XX"
            value={formData.phone}
            onChange={handleInputChange}
            className="last field-input"
            pattern="^(\+380[0-9]{9})$"
            required
          />
          <div className="position-block">
            <p>Select your position</p>
            <PositionsList
              positions={positions}
              handleInputRadioChange={handleInputRadioChange}
              formData={formData}
            />
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
              required
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
