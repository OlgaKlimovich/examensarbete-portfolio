import "./style.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Hi, my name is <em>Olga</em>
          </strong>
          <br />a frontend developer
        </h1>
        <div className="header__text">
          <p>with passion for learning and creating.</p>
        </div>
        <NavLink to="/projects" className="btn">
          To my portfolio
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
