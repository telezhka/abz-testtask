import logo from '../../images/icons/logo.svg';

export const Header = () => {
  return (
    <header id="top">
      <div className="container header-container">
        <a href="#top">
          <img src={logo} className="logo" alt="logo" />
        </a>
        <nav>
          <a href="#users" className="button">
            Users
          </a>
          <a href="#signup" className="button">
            Sign up
          </a>
        </nav>
      </div>
    </header>
  );
};
