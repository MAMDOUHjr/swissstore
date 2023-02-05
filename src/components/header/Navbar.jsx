import { Link } from "react-router-dom";

const Navbar = ({ toggle, setToggle }) => {
  return (
    <nav style={{ left: toggle && "0" }} className="navbar">
      <ul className="navbar-links">
        <Link to="/" onClick={() => setToggle(false)} className="navbar-link">
          Home
        </Link>

        <Link
          to="/about"
          onClick={() => setToggle(false)}
          className="navbar-link"
        >
          About Us
        </Link>
        <Link
          to="/contact"
          onClick={() => setToggle(false)}
          className="navbar-link"
        >
          Contact Us
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
