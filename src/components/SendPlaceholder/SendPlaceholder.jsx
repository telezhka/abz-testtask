import successPic from '../../images/icons/registration-success.svg';

export const SendPlaceholder = () => {
  return (
    <div>
      <h2 className="block-heading post-block-heading">
        User successfully registered
      </h2>
      <img
        className="success-pic"
        src={successPic}
        alt="Registration is successfull!"
        title="Registration is successfull!"
      />
    </div>
  );
};
