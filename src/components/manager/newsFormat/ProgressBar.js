import React from "react";

function ProgressBar({ data }) {
  const filledProgress = Math.floor((data * 20) / 100);
  const remain = ((data * 20) % 100) / 100;

  const progresses = () => {
    let progress = [];
    for (let index = 1; index <= 20; index++) {
      let progressValue =
        index <= filledProgress ? 1 : index === filledProgress + 1 ? remain : 0;
      progress.push({ value: progressValue });
    }
    return progress;
  };
  progresses();
  const color = [
    "#8E0303",
    "#9F0202",
    "#B80A01",
    "#DC2B03",
    "#FB4A05",
    "#e05301",
    "#dd5404",
    "#EC6501",
    "#F48309",
    "#FEA211",
    "#FFB916",
    "#FFD119",
    "#FDE10D",
    "#F8E902",
    "#DDD714",
    "#FFCE00",
    "#FFF100",
    "#9cb700",
    "#71AC00",
    "#128837",
  ];

  return (
    <div className="progress-bar">
      {progresses()?.map((item, index) => {
        return (
          <progress
            className="progress-bar-segment"
            key={index}
            style={
              item.value == "0"
                ? {
                    accentColor: "#8E0303",
                  }
                : {
                    accentColor: color[index],
                  }
            }
            value={item.value}
            title={item.value !== 1 && item.value !== 0 ? `% ${data}` : ""}
          />
        );
      })}
    </div>
  );
}
export default ProgressBar;
