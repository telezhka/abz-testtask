import logo from '../../images/icons/logo.svg';

export const Header = () => {
  return (
    <header id="top">
      <div>
        <a href="#top">
          <img src={logo} className="logo" alt="logo" />
        </a>
        <nav>
          <a href="#users">Users</a>
          <a href="#signup">Sign up</a>
        </nav>
      </div>
    </header>
  );
};
