import PropTypes from "prop-types";
import styles from "./Slider.module.scss";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const bindStyle = classNames.bind(styles);
function Slider({ images }) {
  const [index, setIndex] = useState(0);

  let sliderItem = images[index];
  let isActive1;
  let isActive2;
  let isActive3;
  let isActive4;

  useEffect(() => {
    setTimeout(() => 
      setIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      ), 1500
    );

    return () => {};
  }, [index]);

  const onPrevClicked = function () {
    if (index > 0 && index < images.length) {
      setIndex((preState) => preState - 1);
    } else if (index <= 0) {
      setIndex(3);
    }
  };

  const onNextClicked = function () {
    if (index >= 0 && index < images.length - 1) {
      setIndex((preState) => preState + 1);
    } else if (index >= images.length - 1) {
      setIndex(0);
    }
  };

  for (let i = 0; i < images.length; i++) {
    if (images[i] === index) {
      sliderItem = images[i];
    }
  }

  if (index === 0) {
    isActive1 = true;
    isActive2 = false;
    isActive3 = false;
    isActive4 = false;
  } else if (index === 1) {
    isActive1 = false;
    isActive2 = true;
    isActive3 = false;
    isActive4 = false;
  } else if (index === 2) {
    isActive1 = false;
    isActive2 = false;
    isActive3 = true;
    isActive4 = false;
  } else if (index === 3) {
    isActive1 = false;
    isActive2 = false;
    isActive3 = false;
    isActive4 = true;
  }

  return (
    <div className={bindStyle("container")}>
      <div className={bindStyle("wrapper")}>
        <button onClick={onPrevClicked}>Prev</button>

        <div className={bindStyle("slider-show")}>
          <img
            className={bindStyle("image")}
            src={sliderItem.res}
            alt={sliderItem.title}
          />
        </div>

        <button onClick={onNextClicked}>Next</button>
      </div>
      <div className={bindStyle("slide-show-dot")}>
        <div className={bindStyle("dot")}>
          <FontAwesomeIcon
            style={isActive1 || { display: "none" }}
            className={bindStyle("dot-active")}
            icon={faCircle}
          />
          <FontAwesomeIcon
            style={isActive1 && { display: "none" }}
            className={bindStyle("dot-inactive")}
            icon={faCircle}
          />
        </div>
        <div className={bindStyle("dot")}>
          <FontAwesomeIcon
            style={isActive2 || { display: "none" }}
            className={bindStyle("dot-active")}
            icon={faCircle}
          />
          <FontAwesomeIcon
            style={isActive2 && { display: "none" }}
            className={bindStyle("dot-inactive")}
            icon={faCircle}
          />
        </div>
        <div className={bindStyle("dot")}>
          <FontAwesomeIcon
            style={isActive3 || { display: "none" }}
            className={bindStyle("dot-active")}
            icon={faCircle}
          />
          <FontAwesomeIcon
            style={isActive3 && { display: "none" }}
            className={bindStyle("dot-inactive")}
            icon={faCircle}
          />
        </div>
        <div className={bindStyle("dot")}>
          <FontAwesomeIcon
            style={isActive4 || { display: "none" }}
            className={bindStyle("dot-active")}
            icon={faCircle}
          />
          <FontAwesomeIcon
            style={isActive4 && { display: "none" }}
            className={bindStyle("dot-inactive")}
            icon={faCircle}
          />
        </div>
      </div>
    </div>
  );
}

Slider.propTypes = {
  images: PropTypes.array.isRequired,
};

export default Slider;
