import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./header.css";

const Header = () => {
  const history = useHistory();
  return (
    <nav>
      <h2
        className='name'
        onClick={() => history.push("/")}
        style={{ cursor: "pointer" }}>
        Monu Shukla
      </h2>

      <ul className='navigation-items'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
