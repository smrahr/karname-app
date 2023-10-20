import React from "react";
import ReactSpeedometer from "react-d3-speedometer";

export default function ClickChart({ data }) {
  const customSegmentStops = [
    0,
    +data.cR_Range1,
    +data.cR_Range2,
    +data.cR_Range3,
    +data.cR_Range4,
    +data.cR_Range5,
    +data.cR_Range6,
    +data.cR_Range7,
    +data.cR_Range8,
    +data.cR_Range9,
    +data.cR_Range10,
  ];
  return (
    <div>
      <ReactSpeedometer
        maxValue={0}
        minValue={+data.cR_Range10}
        value={60}
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
