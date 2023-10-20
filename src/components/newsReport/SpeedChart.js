import React from "react";
import ReactSpeedometer from "react-d3-speedometer";

export default function SpeedChart({ data }) {
  const customSegmentStops = [
    0,
    +data.lN_Range01,
    +data.lN_Range02,
    +data.lN_Range03,
    +data.lN_Range04,
    +data.lN_Range05,
    +data.lN_Range06,
    +data.lN_Range07,
    +data.lN_Range08,
    +data.lN_Range09,
    +data.lN_Range10,
  ];

  return (
    <div>
      <ReactSpeedometer
        maxValue={0}
        minValue={+data.lN_Range10}
        value={10}
        valueFormat={"d"}
        customSegmentStops={customSegmentStops.reverse()}
        segmentColors={[
          "#860000",
          "#AE0000",
          "#FF4700",
          "#FF6C00",
          "#FF9D00",
          "#FFCE00",
          "#FFF100",
          "#B3B700",
          "#71AC00",
          "#128837",
        ]}
        currentValueText={" ${value} "}
        textColor={"black"}
      />
      <div className="amount-arrow">
        <div>عالی</div>
        <div className="line"></div>
        <div>خوب</div>
        <div className="line"></div>
        <div>ضعیف</div>
        <div className="line"></div>
        <div>خیلی ضعیف</div>
      </div>
    </div>
  );
}
