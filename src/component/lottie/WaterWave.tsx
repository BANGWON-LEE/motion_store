import React from "react";
// import "./styles.css";
import "../../styles/waterWave.css";
import Lottie from "react-lottie";
import AniWater from "../../asset/animationWater.json";
import { motion } from "framer-motion";

const WaterWave = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: AniWater,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const back_inner = {
    width: "300px",
    height: "600px",
    transformOrigin: "bottom",
    transform: "scaleY(2)",
  };

  return (
    <div className="page">
      <div className="ground">
        <div className="back">
          <div className="back_inner">
            <Lottie
              options={defaultOptions}
              height={370}
              width={200}
              style={{ stroke: "rgb(254, 245, 189)" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaterWave;
