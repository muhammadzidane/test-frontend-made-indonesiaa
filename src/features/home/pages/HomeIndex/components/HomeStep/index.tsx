// React
import React from "react";

// Hooks
import { useHome } from "@/features/home/hooks/index";

// Constants
import { HOME_QUESTIONS } from "@/features/home/constants";

const HomeStep: React.FC = () => {
  const { homeStore } = useHome();

  return (
    <div className="flex gap-1 mb-4">
      {HOME_QUESTIONS.map((question, questionIndex) => (
        <div
          key={question.id}
          className={`flex-1 h-[3px] w-[42px] shadow-md${
            homeStore.currentStep >= questionIndex
              ? " bg-facebook"
              : " bg-gray-1"
          }`}
        ></div>
      ))}
    </div>
  );
};

export default HomeStep;
