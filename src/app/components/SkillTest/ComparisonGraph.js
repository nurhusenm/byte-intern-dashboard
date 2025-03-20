"use client";

import { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
} from "chart.js";

import { MdOutlineShowChart } from "react-icons/md";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip
);

const ComparisonGraph = ({ percentile = 30, numberOfStudents = 4 }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Define X-axis labels
  const labels = [0, 25, 50, 75, 100];

  // Define dataset values (differentiated dots)
  const fullData = [10, 15, 35, 20, 5];

  // Find index for percentile position on X-axis
  const cutoffIndex = Math.floor((percentile / 100) * (labels.length - 1));

  const data = {
    labels,
    datasets: [
      {
        label: "Percentile Distribution",
        data: fullData,
        borderColor: "#4A90E2",
        backgroundColor: "rgba(74, 144, 226, 0.2)",
        tension: 0.4,
        borderWidth: 2, // Reduced line thickness
        pointRadius: 5,
        pointBackgroundColor: "#4A90E2",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: false, // Custom tooltip handling
      },
    },
    scales: {
      x: {
        type: "category",
        grid: { color: "rgba(0, 0, 0, 0.1)" }, // Light grid
        ticks: { color: "#333" }, // Ensure X-axis labels are visible
      },
      y: {
        display: false, // Hide Y-axis
        grid: { display: false },
      },
    },
    elements: {
      point: {
        radius: 5,
        hoverRadius: 7,
      },
    },
    onHover: (event, chartElements) => {
      if (chartElements.length > 0) {
        setHoveredIndex(chartElements[0].index);
      } else {
        setHoveredIndex(null);
      }
    },
  };

  return (
    <div className="bg-white shadow-lg  p-6 w-full border border-gray-100">
      <div className="items-center justify-center flex">
        {/* Header */}
        <div className=" justify-between items-center ">
          <h3 className="text-lg font-semibold mb-4">Comparison Graph</h3>
          {/* Dynamic Text */}
          <p className="text-gray-600 text-sm mb-2">
            You scored{" "}
            <span className="font-bold">{percentile}% percentile</span>, which
            is lower than the average percentile 72% of all the engineers who
            took this assessment.
          </p>
        </div>
        <div className="bg-gray-200 rounded-full p-4">
          <MdOutlineShowChart
            className="text-red-500 cursor-pointer bg-gray-400"
            size={20}
          />
        </div>
      </div>

      {/* Chart Container */}
      <div className="relative h-56">
        <Line data={data} options={options} />

        {/* Hover Vertical Line & Text */}
        {hoveredIndex !== null && (
          <>
            {/* Vertical Line */}
            <div
              className="absolute top-0 bottom-0 w-[1px] bg-gray-400"
              style={{
                left: `${(labels[hoveredIndex] / 100) * 100}%`,
                height: "100%",
              }}
            ></div>

            {/* Hover Text Box */}
            <div
              className="absolute px-2 py-1 text-xs border border-gray-300 bg-white shadow-md rounded"
              style={{
                left: `${(labels[hoveredIndex] / 100) * 100 - 5}%`,
                top: "10px",
              }}
            >
              {percentile}% | numberOfStudents: {numberOfStudents}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ComparisonGraph;
