"use client";

import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Image from "next/image";

ChartJS.register(ArcElement, Tooltip, Legend);

const QuestionAnalysis = ({ percentile = 30, rank = 10 }) => {
  const data = {
    datasets: [
      {
        data: [percentile, 100 - percentile],
        backgroundColor: ["#3B82F6", "#E0E0E0"], // Blue for percentile, Gray for the rest
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: "60%", // Ensures a proper donut look
    rotation: -150, // Adjust positioning
    circumference: 360, // Ensures full donut shape
    plugins: {
      tooltip: { enabled: false },
    },
  };

  return (
    <div className="bg-white border border-gray-100 p-5 rounded-lg text-center">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-bold text-gray-800">Question Analysis</h3>
        <span className="text-blue-500 text-sm font-semibold px-2 py-1 rounded-md">
          {rank}/15
        </span>
      </div>

      {/* Description Text */}
      <p className="text-gray-500 text-sm mt-1 text-start">
        You scored <span className="font-semibold">{rank}/15</span> percentile.
        However, improvements can still be made.
      </p>

      {/* Donut Chart with Centered Image */}
      <div className="relative w-32 h-32 mx-auto mt-4 flex items-center justify-center">
        <Doughnut data={data} options={options} />
        <div className="absolute inset-0 flex items-center justify-center top-4">
          <Image
            src="/images/target.png"
            alt="Target"
            width={45}
            height={45}
            className="w-10 h-10"
          />
        </div>
      </div>
    </div>
  );
};

export default QuestionAnalysis;
