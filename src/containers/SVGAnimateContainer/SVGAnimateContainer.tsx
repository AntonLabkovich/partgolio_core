import { useLayoutEffect, useState, useMemo } from "react";
import styles from "./SVGAnimateContainer.module.scss";
import gsap from "gsap"
import type { MorphSwitchProps } from "../../interfaces/svgInterfaces";
import { defaultTween } from "../../constants/theme";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";



const SVGAnimateContainer: React.FC<MorphSwitchProps> = ({ SVGFrom, SVGTo, animationFrom, animationTo }) => {
  const [flag, setFlag] = useState(false);

  const animFrom = useMemo(() => ({ ...defaultTween, ...(animationFrom ?? {}) }), [animationFrom]);
  const animTo = useMemo(() => ({ ...defaultTween, ...(animationTo ?? {}) }), [animationTo]);

  gsap.registerPlugin(MorphSVGPlugin)


  useLayoutEffect(() => {
    console.log(flag, 'flag')
    const ctx = gsap.context(() => {
      const turnFromPath = `.${styles.iconFrom} path`;
      const turnToPath = `.${styles.iconTo} path`;

      if (flag) {
        gsap.to(turnFromPath, { morphSVG: turnToPath, ...animFrom });
      } else {
        gsap.to(turnToPath, { morphSVG: turnFromPath, ...animTo });
      }
    });

    return () => ctx.revert();
  }, [flag, animFrom, animTo]);

  return (
    <div className={styles.iconContainer} onClick={() => setFlag(!flag)}>
      {flag ? <SVGFrom className={styles.iconFrom} /> : <SVGTo className={styles.iconTo} />}
    </div>
  );
};

export default SVGAnimateContainer;