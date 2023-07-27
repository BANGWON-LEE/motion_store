import React, { useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";

import styles from "../../styles.module.css";
import Percent from "../../asset/Percent";

const AnimFeTurbulence = animated("feTurbulence");
const AnimFeDisplacementMap = animated("feDisplacementMap");

const Wave = () => {
  const [open, toggle] = useState(false);
  const [{ freq, factor }] = useSpring(
    () => ({
      reverse: open,
      from: { factor: 5, freq: "0.00399, 0.01993999" },
      to: { factor: 165, freq: "0.00399, 0.00029999" },
      config: { duration: 800 },
    }),
    [open]
  );

  const innerW = 141;
  const value = 1;
  const innerH = 25 * value;

  // toggle(!open);
  setTimeout(() => {
    toggle(!open);
  }, 800);

  const body: any = {
    width: "100%",
  };

  const block = {
    width: "20rem",
    margin: "0 auto",
  };

  const svg: any = {
    // width: "fit-content",
    position: "relative",
    height: innerH + value,
    // 길이 변화 여기로 ****
    width: innerW + 10,
  };

  const container: any = {
    alignItems: "center",
    height: "160px",
    justifyContent: "center",
    width: Number(innerW + 2) + "px",
    border: "1px solid red",
  };

  const percent: any = {
    position: "relative",

    bottom: "0px",
    right: "0.1px",
    height: innerH + 138 + value + "px",
    width: Number(innerW) + "px",
    margin: "0 auto",
    background: "white",

    overflow: "hidden",
  };

  const percent_inner: any = {
    position: "absolute",
    height: innerH + 122 * value + "px",
    width: innerW + value + "px",
    background: "pink",
    bottom: "0px",
  };

  const svgW = 250;
  const svgH = 36 * value;

  const view = "0 0 220 36";

  return (
    <div style={{ ...body }}>
      <div style={{ ...block }}>
        <div style={{ ...container }}>
          <div style={{ ...percent }}>
            <div style={{ ...percent_inner }} />
            <animated.svg style={{ ...svg }} viewBox={view}>
              <defs>
                <filter id="water">
                  <AnimFeTurbulence
                    type="fractalNoise"
                    baseFrequency={freq}
                    numOctaves="2"
                    result="TURB"
                    seed="8"
                  />
                  <AnimFeDisplacementMap
                    xChannelSelector="R"
                    yChannelSelector="G"
                    in="SourceGraphic"
                    in2="TURB"
                    result="DISP"
                    scale={factor}
                  />
                </filter>
              </defs>
              <g filter="url(#water)">
                <Percent w={svgW} h={svgH} />
              </g>
            </animated.svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wave;
