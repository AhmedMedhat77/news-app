import React from "react";
import Logo from "../../assets/logo.svg";
import BurgerMenu from "../../assets/icon-menu.svg";
import Close from "../../assets/icon-menu-close.svg";
import { Link } from "react-router-dom";

function Navbar(props) {
  const [isActive, setIsActive] = React.useState(false);

  const handleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <header>
      {isActive && <div className="overlay" />}
      <nav className="navbar">
        <div className="navbar__logo">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="navbar__menu-icon" onClick={handleMenu}>
          <img src={BurgerMenu} alt="menu" />
        </div>
        <ul
          className={isActive ? "navbar__menu mobile-active" : "navbar__menu"}
        >
          <div className="navbar__menu__icon-close">
            <img src={Close} alt="close" onClick={handleMenu} />
          </div>
          <div className="navbar__menu__list">
            {props?.routes?.map((route) => {
              return (
                <li className="navbar__menu__list__item" key={route.id}>
                  <Link to={route.path}>{route.name}</Link>
                </li>
              );
            })}
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default React.memo(Navbar);
