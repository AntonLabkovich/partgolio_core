import styles from "./Header.module.scss";
import NavItem from "../NavItem/NavItem";
import ToggleMode from "../ToggleMode/ToggleMode";
import { useThemeStore } from "../../store/themeStore";

const Header = () => {
  const { theme, setTheme } = useThemeStore();

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <NavItem to="/" label="Проекты" />
      </nav>

      <ToggleMode {...{ theme, setTheme }} />
    </header>
  );
};

export default Header;