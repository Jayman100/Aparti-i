import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <nav className="nav">
        <div className="nav__img">
          <img src="#" alt="logo" />
        </div>

        <div className="nav__links">
          <NavLink className="nav__link" to="rent">
            For rent
          </NavLink>
          <NavLink className="nav__link">Request</NavLink>
          <button>My Account</button>
          <button>Alerts</button>
          <NavLink className="nav__link" to="login">
            Login
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
