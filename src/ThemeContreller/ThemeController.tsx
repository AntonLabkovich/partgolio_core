import { useEffect } from "react";
import { useThemeStore } from "../store/themeStore"; // пример Zustand

const ThemeController =() => {
  const theme = useThemeStore(state => state.theme); // "light" | "dark"

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [theme]);

  return null; // компонент не рендерит ничего
}

export default ThemeController;