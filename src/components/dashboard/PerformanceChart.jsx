import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip
);

export default function PerformanceChart() {

  const data = {
    labels: ["9am", "10am", "11am", "12pm", "1pm"],
    datasets: [
      {
        label: "Temperature",
        data: [28, 29, 30, 31, 32],
        borderColor: "#111827",
        backgroundColor: "#111827",
        tension: 0.4,              // smooth curve
        borderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
      {
        label: "Water Level",
        data: [22, 40, 55, 61, 32],
        borderColor: "#9CA3AF",
        backgroundColor: "#9CA3AF",
        tension: 0.4,
        borderWidth: 2,
        pointRadius: 4,
      },
      {
        label: "pH",
        data: [6, 7, 7.5, 8, 8.1],
        borderColor: "#D1D5DB",
        backgroundColor: "#D1D5DB",
        tension: 0.4,
        borderWidth: 2,
        pointRadius: 4,
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        align: "start",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
        }
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        grid: {
          color: "rgba(0,0,0,0.05)"
        },
        ticks: {
          display: false
        }
      }
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-lg font-semibold mb-4">Performance</h2>
      <Line data={data} options={options} />
    </div>
  );
}