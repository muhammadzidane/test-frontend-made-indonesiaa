// React
import React from "react";
import { useNavigate } from "react-router-dom";

// Components
import { AppButton } from "@/features/app/components/base";

// Hooks
import { useAppDispatch } from "@/features/app/hooks";
import { useHome } from "@/features/home/hooks";

// Constants
import { HOME_QUESTIONS } from "@/features/home/constants";

// Slice
import { homeResetAll } from "@/features/home/redux/slice";
import { type IHomeAnswer } from "@/features/home/interfaces";

const HomeResult: React.FC = () => {
  const dispatch = useAppDispatch();
  const { homeStore } = useHome();

  const navigate = useNavigate();

  const onClickReset = (): void => {
    dispatch(homeResetAll());
    navigate("/");
  };

  return (
    <div className="p-12 flex-1 overflow-x-hidden">
      <div className="text-[24px] mb-5 font-bold">Result</div>
      <div className="mb-5">
        <AppButton onClick={onClickReset}>Reset</AppButton>
      </div>
      {homeStore.answers.length > 0 ? (
        <ol className="space-y-4 text-gray-500 list-decimal list-inside dark:text-gray-400">
          {homeStore.answers.map((answer: IHomeAnswer, answerIndex: number) => (
            <li key={answer.id}>
              {HOME_QUESTIONS[answerIndex].question}
              <ul className="ps-5 mt-2 space-y-1 list-disc list-inside">
                <li>
                  {
                    HOME_QUESTIONS[answerIndex].answers.find(
                      (homeQuestionAnswer) =>
                        homeQuestionAnswer.id === answer.value
                    )?.value
                  }
                </li>
              </ul>
            </li>
          ))}
        </ol>
      ) : (
        <div>TIDAK ADA DATA</div>
      )}
    </div>
  );
};

export default HomeResult;
