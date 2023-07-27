import React from "react";

const Percent = ({ w, h }: any | undefined) => {
  // const { width, height } = props;

  // value 값을 활용하여 SVG 내부의 요소들을 조작할 수 있습니다.
  // const height = 100 * value; // 예시: value 값에 따라 높이 조절

  return (
    <svg width={w} height={h} xmlns="http://www.w3.org/2000/svg">
      <rect x={0} y={0} width={w} height={h} fill="white" />
    </svg>
  );
};

export default Percent;
