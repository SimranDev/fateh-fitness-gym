import "./MarqueeSlider.css";
import { ReactComponent as FreemotionSvg } from "../../images/brands/freemotion.svg";
import { ReactComponent as IonSvg } from "../../images/brands/ion.svg";
import { ReactComponent as NautilusSvg } from "../../images/brands/nautilus.svg";
import { ReactComponent as SteelflexSvg } from "../../images/brands/steelflex.svg";
import { ReactComponent as TrueSvg } from "../../images/brands/true.svg";

const MarqueeSlider = () => {
  return (
    <div className="m-slider-container">
      <ul className="marquee-content">
        <li>
          <FreemotionSvg />
        </li>
        <li>
          <IonSvg />
        </li>
        <li>
          <NautilusSvg />
        </li>
        <li>
          <SteelflexSvg />
        </li>
        <li>
          <TrueSvg />
        </li>

        <li>
          <FreemotionSvg />
        </li>
        <li>
          <IonSvg />
        </li>
        <li>
          <NautilusSvg />
        </li>
        <li>
          <SteelflexSvg />
        </li>
        <li>
          <TrueSvg />
        </li>
      </ul>
    </div>
  );
};

export default MarqueeSlider;
