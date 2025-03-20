import Image from "next/image";
import React from "react";

const HeaderSection = ({ onOpenModal }) => {
  return (
    <div className="flex items-center justify-between px-2 py-6 border border-gray-100 rounded-lg">
      <Image
        src="/images/htmlicon.png"
        alt="HTML Icon"
        width={50} // Reduced width
        height={80}
        priority
        className="h-20 w-[50px]" // Adjusted width
      />
      <div className="ml-2 space-y-2">
        <h3 className="font-semibold text-lg">Hyper Text Markup Language</h3>
        <p className="text-sm text-gray-600 ">
          Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
        </p>
      </div>
      <button
        onClick={onOpenModal}
        className="bg-blue-900 font-bold px-5 py-4 rounded-lg text-white hover:bg-blue-800 transition duration-200 poi cursor-pointer"
      >
        Update
      </button>
    </div>
  );
};

export default HeaderSection;
