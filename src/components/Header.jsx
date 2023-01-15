import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

const Header = ({ text, bgColor, textColor }) => {
  const location = useLocation();

  return (
    <header style={{ backgroundColor: bgColor, color: textColor }}>
      <div className="container">
        <div className="nav-headers">
          <Link
            className={`nav-headers-link ${
              location.pathname === "/" && "active"
            }`}
            to="/"
          >
            {text}
          </Link>
          <Link
            className={`nav-headers-link ${
              location.pathname === "/about" && "active"
            }`}
            to="/about"
          >
            About
          </Link>
        </div>
      </div>
    </header>
  );
};

Header.defaultProps = {
  text: "Feedback UI",
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "#ff6a95",
};

Header.propTypes = {
  text: PropTypes.string,
};

export default Header;
