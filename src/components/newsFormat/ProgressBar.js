import React from "react";

function ProgressBar() {
  const value = Math.floor((76 * 20) / 100);
  const remain = ((76 * 20) % 100) / 100;

  const List = () => {
    let progress = [];
    for (let index = 1; index <= 20; index++) {
      let progressValue = index <= value ? 1 : index === value + 1 ? remain : 0;
      progress.push({ value: progressValue });
    }
    return progress;
  };
  List();
  const color = [
    "#8E0303",
    "#9F0202",
    "#B80A01",
    "#DC2B03",
    "#FB4A05",
    "#e05301",
    "#dd5404",
    "#8E0303",
    "#9F0202",
    "#B80A01",
    "#DC2B03",
    "#FB4A05",
    "#e05301",
    "#dd5404",
    "#8E0303",
    "#9F0202",
    "#B80A01",
    "#DC2B03",
    "#FB4A05",
    "#e05301",
  ];

  console.log();

  return (
    <div className="progress-bar">
      {List()?.map((item, index) => (
        <progress
          className="progress-bar-segment"
          key={index}
          style={{
            accentColor: color[index],
          }}
          value={item.value}
          title={
            item.value !== 1 && item.value !== 0
              ? item.value * 5 + index * 5
              : ""
          }
          // title="30% Complete"
        />
      ))}
    </div>
  );
}
export default ProgressBar;
