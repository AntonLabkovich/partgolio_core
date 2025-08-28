import { useLayoutEffect } from "react";
import type { ThemeState } from "../../store/themeStore";
import styles from "./ToggleMode.module.scss";
import cn from 'classnames'
import gsap from "gsap"
import TurnOn from "../svgIcons/TurnOn/TurnOn";
import TurnOff from "../svgIcons/TurnOff/TurnOff";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(MorphSVGPlugin)

const ToggleMode: React.FC<ThemeState> = ({ theme, setTheme }) => {
  const toggleModeClasses = cn([styles.toggleModeContainer])
  const turnOnClass = styles.turnOn
  const turnOffClass = styles.turnOff

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const turnOnPath = `.${turnOnClass} path`;
      const turnOffPath = `.${turnOffClass} path`;
      console.log(turnOnPath, 'turnOnPath')
      if (theme === "light") {
        gsap.to(turnOffPath, {
          duration: 0.2,
          morphSVG: turnOnPath,
          ease: "power2.inOut"
        });
      } else {
        gsap.to(turnOnPath, {
          duration: 0.2,
          morphSVG: turnOffPath,
          ease: "power2.inOut"
        });
      }
    });

    return () => ctx.revert();
  }, [theme]);

  return (
    <div className={toggleModeClasses} onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      {theme === 'light' ? <TurnOff className={turnOffClass} /> : <TurnOn className={turnOnClass} />}


    </div>
  );
};

export default ToggleMode;