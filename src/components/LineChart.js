import { Line } from "vue-chartjs"

import data from "./data.json"
import data2 from "./data2.json"
const applicantCount = []
const reachCount = []

data.data.map(item => applicantCount.push(item.value))
data2.data.map(item => reachCount.push(item.value))

const chartData = {
  labels: [
    "2018/4/1",
    "2018/4/2",
    "2018/4/3",
    "2018/4/4",
    "2018/4/5",
    "2018/4/6",
    "2018/4/7",
    "2018/4/8",
    "2018/4/9",
    "2018/4/10",
    "2018/4/11",
    "2018/4/12",
    "2018/4/13",
    "2018/4/14",
    "2018/4/15",
    "2018/4/16",
    "2018/4/17",
    "2018/4/18",
    "2018/4/19",
    "2018/4/20",
    "2018/4/21",
    "2018/4/22",
    "2018/4/23",
    "2018/4/24",
    "2018/4/25",
    "2018/4/26",
    "2018/4/27",
    "2018/4/28",
    "2018/4/29",
    "2018/4/30",
  ],
  datasets: [
    {
      label: "Customers",
      fill: false,
      backgroundColor: "#f25b8d",
      borderColor: "#f25b8d",
      pointBorderColor: "#f25b8d",
      pointHoverBackgroundColor: "#f25b8d",
      pointHoverBorderColor: "#f25b8d",
      pointRadius: 3,
      pointHitRadius: 10,
      lineTension: 0,
      data: applicantCount,
      spanGaps: false,
      yAxisID: "y-axis-1",
    },
    {
      label: "Sales",
      fill: false,
      backgroundColor: "#26a69a",
      borderColor: "#26a69a",
      pointBorderColor: "#26a69a",
      pointHoverBackgroundColor: "#26a69a",
      pointHoverBorderColor: "#26a69a",
      pointRadius: 3,
      pointHitRadius: 10,
      lineTension: 0,
      data: reachCount,
      spanGaps: false,
      yAxisID: "y-axis-2",
    },
  ],
}

export default {
  extends: Line,
  mounted() {
    this.renderChart(chartData, {
      maintainAspectRatio: false,
      legend: {
        position: "bottom",
      },
      hoverMode: "index",
      stacked: false,
      scales: {
        yAxes: [
          {
            type: "linear",
            display: true,
            position: "left",
            id: "y-axis-1",
          },
          {
            type: "linear",
            display: true,
            position: "right",
            id: "y-axis-2",
            gridLines: {
              drawOnChartArea: false,
            },
          },
        ],
      },
    })
  },
}
