import TurnOn from "../../assets/images/toggleIcons/light-switch-on.svg?react";
import TurnOff from "../../assets/images/toggleIcons/light-switch-off.svg?react";
import SVGAnimateContainer from "../../containers/SVGAnimateContainer/SVGAnimateContainer";
import styles from "./ToggleMode.module.scss";



const ToggleMode: React.FC = () => {

  return (
    <div className={styles.toggleModeContainer}>
      <SVGAnimateContainer SVGFrom={TurnOn} SVGTo={TurnOff}/>
    </div>
  );
};

export default ToggleMode;