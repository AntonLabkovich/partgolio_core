import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import styles from "./BackgroundTheme.module.scss";
import { useThemeStore } from "../../store/themeStore";
import sunIcon from "../../assets/images/themeIcon/sun.svg";
import moonIcon from "../../assets/images/themeIcon/moon.svg";

const BackgroundTheme = () => {
  const { theme } = useThemeStore();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      const sun = document.getElementById("sun-icon");
      const moon = document.getElementById("moon-icon");

      const activeIcon = theme === "light" ? sun : moon;
      const inactiveIcon = theme === "light" ? moon : sun;

      if (inactiveIcon) {
        gsap.to(inactiveIcon, {
          duration: 0.8,
          x: screenWidth,
          y: -screenHeight,
          autoAlpha: 0,
          ease: "power2.in",
        });
      }

      if (activeIcon) {
        gsap.set(activeIcon, {
          x: -screenWidth,
          y: screenHeight,
          autoAlpha: 0,
        });

        gsap.to(activeIcon, {
          duration: 0.8,
          x: 0,
          y: 0,
          autoAlpha: 1,
          ease: "power2.out",
        });
      }
    });

    return () => ctx.revert(); // очищаем анимацию при размонтировании
  }, [theme]);

  return (
    <div className={styles.backgroundTheme}>
      <img id="sun-icon" src={sunIcon} alt="sun-icon" />
      <img id="moon-icon" src={moonIcon} alt="moon-icon" />
    </div>
  );
};

export default BackgroundTheme;