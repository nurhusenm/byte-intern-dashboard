const SyllabusWiseAnalysis = () => {
  // Sample data for syllabus analysis
  const syllabusData = [
    {
      topic: "HTML Tools, Forms, History",
      progress: 80,
      color: "bg-blue-500",
      bgColor: "bg-blue-100",
      textColor: "text-blue-500",
    },
    {
      topic: "Tags & References in HTML",
      progress: 60,
      color: "bg-amber-600",
      bgColor: "bg-amber-100",
      textColor: "text-amber-600",
    },
    {
      topic: "Tables & References in HTML",
      progress: 24,
      color: "bg-red-500",
      bgColor: "bg-red-100",
      textColor: "text-red-500",
    },
    {
      topic: "Tables & CSS Basics",
      progress: 96,
      color: "bg-green-500",
      bgColor: "bg-green-100",
      textColor: "text-green-500",
    },
  ];

  return (
    <div className="bg-white p-7 rounded-lg border border-gray-100 ">
      {/* Header */}
      <h2 className="text-base font-bold text-gray-800 mb-12">
        Syllabus Wise Analysis
      </h2>

      {/* Topics and Progress */}
      <div className="space-y-6">
        {syllabusData.map((item, index) => (
          <div key={index}>
            {/* Topic */}
            <p className="text-sm text-gray-700 mb-3">{item.topic}</p>

            {/* Progress Bar and Number */}
            <div className="flex items-center space-x-6">
              <div className={`w-full h-2 ${item.bgColor} rounded-full`}>
                <div
                  className={`h-full rounded-full ${item.color}`}
                  style={{ width: `${item.progress}%` }}
                ></div>
              </div>
              <p className={`text-sm ${item.textColor}`}>{item.progress}%</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SyllabusWiseAnalysis;
