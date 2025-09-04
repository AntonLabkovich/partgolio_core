import { useEffect } from "react";
import { useThemeStore } from "../store/themeStore";

const ThemeController =() => {
  const theme = useThemeStore(state => state.isDarkMode);
  console.log(theme, 'theme')

  useEffect(() => {
    if (theme) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [theme]);

  return null; 
}

export default ThemeController;