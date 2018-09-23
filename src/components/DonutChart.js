import { Doughnut } from "vue-chartjs"

const chartData = {
  labels: ["China", "India", "United States", "Indonesia", "Brazil", "Pakistan",],
  datasets: [{
    label: 'Population',
    data: [13793021, 1935911, 325791, 80739, 2073391, 24924861],
    backgroundColor: [
      'rgba(255, 99, 132, 0.6)',
      'rgba(54, 162, 235, 0.6)',
      'rgba(255, 206, 86, 0.6)',
      'rgba(75, 192, 192, 0.6)',
      'rgba(153, 102, 255, 0.6)',
      'rgba(255, 159, 64, 0.6)',
      'rgba(255, 99, 132, 0.6)'
    ]
  }],
  options:{
    rotation: Math.PI * 1,
    circumference: Math.PI * 1,
  }
}

export default {
  extends: Doughnut,
  mounted() {
    this.renderChart(chartData, {
      legend: {
        position: "bottom",
      },
      hoverMode: "index",
      stacked: false,
    })
  },
}
