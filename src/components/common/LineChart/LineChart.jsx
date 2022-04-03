import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
        drawBorder: false,
      },
      ticks: {
        font: {
          size: 14,
          family: "Gelion",
          lineHeight: 3,
        },
        color: "#696D8C",
      },
    },
    y: {
      grid: {
        drawBorder: false,
      },
      ticks: {
        maxTicksLimit: 10,
        font: {
          size: 14,
          family: "Gelion",
          lineHeight: 3,
        },
        padding: 20,
        color: "#696D8C",
      },
    },
  },
  layout: {
    padding: {
      right: 30,
    },
  },
};

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"];

const LineChart = ({ chartData, color, criteria }) => {
  const chartValues = chartData.map((item) => item.value);
  const data = {
    labels,
    datasets: [
      {
        label: criteria,
        data: chartValues,
        borderColor: color,
        borderWidth: 2,
        pointStyle: "circle",
        pointRadius: 5,
        pointBorderWidth: 1,
        backgroundColor: "rgb(255, 255, 255)",
      },
    ],
  };
  return <Line options={options} data={data} />;
};

export default LineChart;
