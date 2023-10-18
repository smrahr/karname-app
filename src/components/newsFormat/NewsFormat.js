import React from "react";
import Chart from "react-apexcharts";
import ProgressBar from "./ProgressBar";
// import "./newsFormat.css";

const NewsFormat = () => {
  const series = [25, 10, 13, 25, 15, 12];
  const options = {
    chart: {
      type: "donut",
    },
    labels: [
      "خبر پوششی",
      "خبر دریافتی",
      "مصاحبه",
      "گزارش میدانی",
      "خبر تولیدی",
      "گزارش خبری",
    ],
    dataLabels: {
      style: {
        colors: ["#000"],
        fontSize: "25px",
      },
    },
    fill: {
      type: "gradient",
      // colors: [
      //   "#F9A11D",
      //   "#FFDD00",
      //   "#5FBA46",
      //   "#10B0E7",
      //   "#C14A9C",
      //   "#EC1F23",
      // ],
    },
    legend: {
      position: "top",
      fontSize: "18px",
    },
    plotOptions: {
      pie: {
        donut: {
          size: "25%",
        },
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 450,
          },
          legend: {
            fontSize: "10px",
            position: "right",
          },
        },
        plotOptions: {
          pie: {
            donut: {
              size: "20%",
            },
          },
        },
      },
      {
        breakpoint: 700,
        options: {
          chart: {
            width: 500,
          },
          legend: {
            fontSize: "12px",
            position: "right",
          },
        },
        plotOptions: {
          pie: {
            donut: {
              size: "20%",
            },
          },
        },
      },
    ],
  };
  return (
    <div className="center-section">
      <div className="format-chart">
        <Chart options={options} series={series} type="donut" width={700} />
      </div>
      <div class="title-center-sec">
        <h2>قالب های خبری</h2>
      </div>
      <ProgressBar />
      <div style={{ textAlign: "right" }}>
        <h2>جامعیت (خبری خوری)</h2>
      </div>
    </div>
  );
};

export default NewsFormat;
