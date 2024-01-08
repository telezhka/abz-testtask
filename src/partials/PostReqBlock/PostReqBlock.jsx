import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPositions, getSentSuccess, getToken } from '../../redux/selectors';
import { PositionsList } from 'components/PositionsList/PositionsList';
import { addContact, fetchNewContacts } from '../../redux/operations';
import { SendPlaceholder } from 'components/SendPlaceholder/SendPlaceholder';

export const PostReqBlock = () => {
  const token = useSelector(getToken);
  const positions = useSelector(getPositions);
  const sentSuccess = useSelector(getSentSuccess);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position_id: '',
    photo: null,
  });

  const [inputValidity, setInputValidity] = useState({
    name: true,
    email: true,
    phone: true,
    photo: true,
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
        {sentSuccess.success === true ? (
          <SendPlaceholder />
        ) : (
          <>
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
                className={
                  inputValidity.name ? 'field-input' : 'field-input invalid'
                }
                required
                minLength={2}
                maxLength={60}
                onInvalid={() =>
                  setInputValidity({ ...inputValidity, name: false })
                }
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className={
                  inputValidity.email ? 'field-input' : 'field-input invalid'
                }
                required
                minLength={2}
                maxLength={100}
                onInvalid={() =>
                  setInputValidity({ ...inputValidity, email: false })
                }
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={
                  inputValidity.phone
                    ? 'last field-input'
                    : 'last field-input invalid'
                }
                pattern="^(\+380[0-9]{9})$"
                required
                onInvalid={() =>
                  setInputValidity({ ...inputValidity, phone: false })
                }
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
                <label
                  htmlFor="photo-upload"
                  className={
                    inputValidity.photo
                      ? 'upload-label'
                      : 'upload-label invalid'
                  }
                >
                  Upload your photo
                </label>
                <input
                  id="photo-upload"
                  type="file"
                  name="photo"
                  onChange={handleFileChange}
                  className={
                    inputValidity.photo
                      ? 'upload-input'
                      : 'upload-input invalid'
                  }
                  required
                  accept=".jpg, .jpeg"
                  onInvalid={() =>
                    setInputValidity({ ...inputValidity, photo: false })
                  }
                />
              </div>
              <button type="submit" className="button get-btn">
                Sign up
              </button>
            </form>
          </>
        )}
      </div>
    </section>
  );
};
