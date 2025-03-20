"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const Modal = ({ isOpen, onClose, onSave }) => {
  const [rank, setRank] = useState("10");
  const [percentile, setPercentile] = useState("70");
  const [score, setScore] = useState("10");
  const [errors, setErrors] = useState({});

  // Validate form fields on every change
  useEffect(() => {
    validateForm();
  }, [rank, percentile, score]);

  const validateForm = () => {
    let newErrors = {};
    if (!rank) newErrors.rank = "Required! | Should be a number";
    if (!percentile) newErrors.percentile = "Percentile is required!";
    if (!score) newErrors.score = "Score is required!";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSave({ rank, percentile, score });
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white bg-opacity-80 backdrop-blur-lg p-6 rounded-lg w-[600px] shadow-lg">
        {/* Header with Image */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Update Scores</h2>
          <Image
            src="/images/htmlicon.png"
            alt="Update Icon"
            width={40}
            height={40}
          />
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          {/* Rank */}
          <div className="col-span-2 flex items-center justify-between">
            <div className="col-span-2 flex items-center justify-between">
              <div className="flex items-center">
                <span className="font-bold  mr-2 bg-blue-900 text-white px-4 py-2 rounded-full">
                  1
                </span>
                <label className="font-semibold text-gray-700">
                  Update your Rank
                </label>
              </div>
            </div>
            <div>
              <input
                type="number"
                className={`border p-2 rounded ${
                  errors.rank ? "border-red-500" : "border-gray-300"
                }`}
                value={rank}
                onChange={(e) => setRank(e.target.value)}
              />
              {errors.rank && (
                <p className="text-red-500 text-sm">{errors.rank}</p>
              )}
            </div>
          </div>

          {/* Percentile */}
          <div className="col-span-2 flex items-center justify-between">
            <div>
              <span className="font-bold  mr-2 bg-blue-900 text-white px-4 py-2 rounded-full mr-2">
                2
              </span>
              <label className="font-semibold text-gray-700">
                Update your Percentile
              </label>
            </div>
            <div>
              <input
                type="number"
                className={`border p-2 rounded ${
                  errors.percentile ? "border-red-500" : "border-gray-300"
                }`}
                value={percentile}
                onChange={(e) => setPercentile(e.target.value)}
              />
              {errors.percentile && (
                <p className="text-red-500 text-sm">{errors.percentile}</p>
              )}
            </div>
          </div>

          {/* Score */}
          <div className="col-span-2 flex items-center">
            <div className="flex-2/3">
              <span className="font-bold  mr-2 bg-blue-900 text-white px-4 py-2 rounded-full">
                3
              </span>
              <label className="font-semibold text-gray-700">
                Update your Score (out of 15)
              </label>
            </div>
            <div>
              <input
                type="number"
                className={`border p-2 rounded ${
                  errors.score ? "border-red-500" : "border-gray-300"
                }`}
                value={score}
                onChange={(e) => setScore(e.target.value)}
              />
              {errors.score && (
                <p className="text-red-500 text-sm">{errors.score}</p>
              )}
            </div>
          </div>

          {/* Buttons */}
          <div className="col-span-2 flex justify-end gap-4 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded border border-black"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-800 text-white rounded-lg"
            >
              Save →
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
