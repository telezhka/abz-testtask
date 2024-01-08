import loader from '../../images/icons/loader.svg';

export const Loader = () => {
  return (
    <div className="loader-bg">
      <img
        src={loader}
        alt="Loading... Please wait a sec."
        title="Loading... Please wait a sec."
        className="loader-circle"
      />
    </div>
  );
};
