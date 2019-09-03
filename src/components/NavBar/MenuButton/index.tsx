import React from "react";
import MaterialIcon from "material-icons-react";
import { MenuButtonProps } from "../../../types/components";

const MenuButton: React.FC<MenuButtonProps> = ({ handleClick }) => (
  <div className="menu-button hide-on-large-only" onClick={handleClick}>
    <MaterialIcon icon="menu" size="medium" color="white" />
  </div>
);

export default MenuButton;
