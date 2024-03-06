import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="header">
      <div className="header__container">
        <div className="header__logo-link">
          <div className="header__logo-box">
            <img src="#" className="header__logo" alt="logo" />
          </div>
          <div className="header__link">
            <Link to="dashboard" className="header__link--about">
              Services
            </Link>
            <a href="#" className="header__link--how">
              How it works
            </a>
            <a href="#" className="header__link--contact">
              Contacts
            </a>
          </div>
        </div>
        <div className="header__sign">
          <Link to="register">Login</Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
