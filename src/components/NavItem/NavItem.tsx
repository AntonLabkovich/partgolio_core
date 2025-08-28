import { NavLink } from "react-router-dom";
import styles from "./NavItem.module.scss";

interface NavItemProps {
  to: string;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ to, label }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${styles.navLink} ${isActive ? styles.active : ""}`
      }
    >
      {label}
    </NavLink>
  );
};

export default NavItem;