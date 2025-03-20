"use client";
import Modal from "@/app/components/modal/Modal";
import ComparisonGraph from "@/app/components/SkillTest/ComparisonGraph";
import HeaderSection from "@/app/components/SkillTest/HeaderSection";
import QuestionAnalysis from "@/app/components/SkillTest/QuestionAnalysis";
import QuickStatistics from "@/app/components/SkillTest/QuickStatistics";
import SyllabusAnalysis from "@/app/components/SkillTest/SyllabusAnalysis";
import React from "react";
import { useState } from "react";

const page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formValues, setFormValues] = useState({
    rank: "10",
    percentile: "70",
    score: "12",
    correctAnswers: "10",
  });

  return (
    <div className="pl-4 pt-4 ">
      <p className="mb-4">Skill Test</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        <div className="col-span-2 space-y-4">
          <HeaderSection onOpenModal={() => setIsModalOpen(true)} />
          <QuickStatistics
            rank={formValues.rank}
            percentile={formValues.percentile}
            correctAnswers={formValues.correctAnswers}
          />
          <ComparisonGraph percentile={formValues.percentile} />
        </div>
        <div className="gap-4">
          <SyllabusAnalysis />
          <QuestionAnalysis
            percentile={formValues.percentile}
            rank={formValues.rank}
          />
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={(values) => setFormValues(values)}
      />
    </div>
  );
};

export default page;
