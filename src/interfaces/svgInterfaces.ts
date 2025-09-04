import gsap from "gsap";

export interface MorphSwitchProps {
    SVGFrom: React.FC<React.SVGProps<SVGSVGElement>>;
    SVGTo: React.FC<React.SVGProps<SVGSVGElement>>;
    animationFrom?: gsap.TweenVars;
    animationTo?: gsap.TweenVars;
}