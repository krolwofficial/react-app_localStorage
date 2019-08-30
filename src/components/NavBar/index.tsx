import React from "react";
import MenuButton from "./MenuButton";
import cn from "classnames";
import { NavLink } from "react-router-dom";

const NavBar: React.FC = () => {
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <nav
      className={cn({
        "nav-wrapper": true,
        open: open
      })}
    >
      <ul className="nav-wrapper__ul">
        <li className="nav-wrapper__li">
          <NavLink
            exact={true}
            activeClassName="is-active"
            to="/"
            className="nav-wrapper__a"
          >
            Dashboard
          </NavLink>
        </li>
        <li className="nav-wrapper__li">
          <NavLink
            activeClassName="is-active"
            to="/gallery"
            className="nav-wrapper__a"
          >
            Gallery
          </NavLink>
        </li>
      </ul>
      <MenuButton handleClick={() => setOpen(!open)} />
    </nav>
  );
};

export default NavBar;
