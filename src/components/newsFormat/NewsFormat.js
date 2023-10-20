import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import ProgressBar from "./ProgressBar";
// import "./newsFormat.css";
import { data } from "../../data";

const NewsFormat = ({ data }) => {
  const [chartData, setChartData] = useState({
    series: [],
    options: {
      chart: {
        type: "donut",
      },
      labels: [],
      colors: [
        "#F9A11D",
        "#FFDD00",
        "#5FBA46",
        "#10B0E7",
        "#C14A9C",
        "#EC1F23",
      ],
      dataLabels: {
        style: {
          colors: ["#000"],
          fontSize: "25px",
        },
        formatter: function (val) {
          return Math.floor(val) + "%";
        },
      },
      fill: {
        type: "gradient",
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
          breakpoint: 700,
          options: {
            chart: {
              width: 500,
            },
            legend: {
              fontSize: "12px",
              // position: "right",
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
          breakpoint: 480,
          options: {
            chart: {
              width: "100%",
            },
            dataLabels: {
              style: {
                colors: ["#000"],
                fontSize: "15px",
              },
              formatter: function (val) {
                return Math.floor(val) + "%";
              },
            },
            legend: {
              fontSize: "14px",
              // position: "right",
            },
          },
          plotOptions: {
            pie: {
              donut: {
                size: "25%",
              },
            },
          },
        },
      ],
    },
  });
  const fetchData = () => {
    let newsFormatData = [];
    let newsFormatLabel = [];

    data.forEach((item) => {
      item.fieldPercent && newsFormatData.push(+item.fieldPercent);
      item.fieldText && newsFormatLabel.push(item.fieldText);
    });

    setChartData({
      ...chartData,
      series: newsFormatData,
      options: { ...chartData.options, labels: newsFormatLabel },
    });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="center-section">
      <div className="format-chart">
        <Chart
          options={chartData.options}
          series={chartData.series}
          type="donut"
          width={700}
        />
      </div>
      <div class="title-center-sec">
        <h2>قالب های خبری</h2>
      </div>
      <ProgressBar data={76} />
      <div style={{ textAlign: "right" }}>
        <h2>جامعیت (خبری خوری)</h2>
      </div>
    </div>
  );
};

export default NewsFormat;
