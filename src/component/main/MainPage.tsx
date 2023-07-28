import React, { useEffect, useState } from "react";
import WaterWave from "../lottie/WaterWave";
import Wave from "../wave/Wave";
import "../../styles/main.css";

const MainPage = () => {
  const [showComponent2, setShowComponent2] = useState(false);

  const handleButtonClick = () => {
    setShowComponent2((prevShowComponent2) => !prevShowComponent2);
  };
  return (
    <div className="app-container">
      <div
        className={`content-container ${
          showComponent2 ? "hide-component-2" : ""
        }`}
      >
        <WaterWave />
        <Wave />
      </div>
      <button className="turn-page-button" onClick={handleButtonClick}>
        넘기기
      </button>
    </div>
  );
};

export default MainPage;
