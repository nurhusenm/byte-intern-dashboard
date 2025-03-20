import { FaRegClipboard, FaTrophy, FaCheck } from "react-icons/fa";

const QuickStatistics = ({
  rank = 10, // Default value for rank
  percentile = 90, // Default value for percentile
  correctAnswers = 8, // Default value for correct answers
}) => {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-100 w-full">
      <h2 className="text-xl font-semibold mb-4">Quick Statistics</h2>
      <div className="space-x-4 flex pl-4">
        <div className="flex items-center space-x-2 border-r border-gray-50 pr-4 w-1/3">
          <div className="p-4 bg-gray-100 rounded-full">
            <FaTrophy className="text-amber-600" size={20} />
          </div>
          <div className="flex flex-col space-y-2">
            <p className="text-lg font-bold">{rank}</p>
            <p className="text-xs text-gray-600 w-full whitespace-nowrap">
              YOUR RANK
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2 border-r border-gray-50 pr-4 w-1/3">
          <div className="p-4 bg-gray-100 rounded-full">
            <FaRegClipboard className="text-amber-800" size={24} />
          </div>
          <div className="space-y-2">
            <p className="text-lg font-bold">{percentile}%</p>
            <p className="text-xs text-gray-600">PERCENTILE</p>
          </div>
        </div>

        <div className="flex items-center space-x-2 w-1/3">
          <div className="p-4 bg-gray-100 rounded-full">
            <FaCheck className="text-white bg-green-500 rounded-sm" size={20} />
          </div>
          <div className="space-y-2">
            <p className="text-lg font-bold">{correctAnswers}/15</p>
            <p className="text-xs text-gray-600 whitespace-nowrap">
              CORRECT ANSWERS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickStatistics;
