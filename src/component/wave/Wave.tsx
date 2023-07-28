import React, { useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";

import styles from "../../styles.module.css";
import Percent from "../../asset/Percent";
import { motion } from "framer-motion";

const AnimFeTurbulence = animated("feTurbulence");
const AnimFeDisplacementMap = animated("feDisplacementMap");

const Wave = () => {
  const [open, toggle] = useState(false);
  const [{ freq, factor }] = useSpring(
    () => ({
      reverse: open,
      from: { factor: 5, freq: "0.01399, 0.01993999" },
      to: { factor: 165, freq: "0.01399, 0.00029999" },
      config: { duration: 800 },
    }),
    [open]
  );

  // value는 1~10이 10% ~ 100%

  const innerW = 141;
  const value = 8;
  const innerH = 20;
  // let topV =
  const svgAreaW = innerW - value * -0.5 * innerW + "px";
  const svgAreaH = innerH - value * 0.1 + "px";

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
    position: "absolute",
    float: "left",
    height: innerH + 10,
    // 길이 변화 여기로 ****
    width: svgAreaW + 30,
    bottom: innerH * value - 10,
  };

  const container: any = {
    alignItems: "center",
    height: "200px",
    justifyContent: "center",
    width: Number(innerW + 2) + "px",
    border: "1px solid red",
  };

  const percent: any = {
    position: "relative",

    bottom: "0px",
    right: "0.1px",
    // height: innerH + 138 + value + "px",
    height: "200px",
    width: Number(innerW) + "px",
    margin: "0 auto",
    background: "white",

    overflow: "hidden",
  };

  const percent_inner: any = {
    position: "absolute",
    bottom: 0,
    height: innerH * value + "px",
    // width: innerW + value + "px",
    width: innerW + value + "px",
    background: "pink",
    // top: innerH - value + "px",
  };

  const svgW = svgAreaW;
  const svgH = svgAreaH;

  const view = `0 0 ${svgW} ${svgH}`;

  return (
    <div className="page">
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
    </div>
  );
};

export default Wave;
