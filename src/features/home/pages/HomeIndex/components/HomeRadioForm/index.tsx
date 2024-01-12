/* eslint-disable @typescript-eslint/restrict-template-expressions */
// React
import { useCallback, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";

// Ant
import { Form, Radio, type RadioChangeEvent } from "antd";

// Components
import { AppButton } from "@/features/app/components/base";

// Hooks
import { useHome } from "@/features/home/hooks";
import { useAppDispatch } from "@/features/app/hooks";

// SLices
import {
  homeSetAnswer,
  homeSetCurrentStep,
  homeSetLimitSeconds,
  homeSetLimitMinutes,
  homeResetLimit,
} from "@/features/home/redux/slice";

// Constants
import { HOME_QUESTIONS } from "@/features/home/constants";

const HomeRadioForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { homeStore } = useHome();

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      if (homeStore.limit.seconds > 0) {
        dispatch(homeSetLimitSeconds(homeStore.limit.seconds - 1));
      } else {
        if (homeStore.limit.minutes === 0) {
          clearInterval(countdownInterval);
          alert("Waktu sudah habis!");
          navigate("/result");
        } else {
          dispatch(homeSetLimitMinutes(homeStore.limit.minutes - 1));
          dispatch(homeSetLimitSeconds(59));
        }
      }
    }, 1000);

    return () => {
      clearInterval(countdownInterval);
    };
  }, [dispatch, homeStore.limit.minutes, homeStore.limit.seconds, navigate]);

  const formattedTime = useMemo(() => {
    return `${homeStore.limit.minutes
      .toString()
      .padStart(2, "0")}:${homeStore.limit.seconds
      .toString()
      .padStart(2, "0")}`;
  }, [homeStore.limit.minutes, homeStore.limit.seconds]);

  const next = useCallback((): void => {
    const value = parseInt(homeStore.currentStep) + 1;
    dispatch(homeSetCurrentStep(value));
  }, [dispatch, homeStore.currentStep]);

  const onFinish = useCallback((): void => {
    if (homeStore.currentStep !== HOME_QUESTIONS.length - 1) {
      next();
    } else {
      alert("Successfull !");
      dispatch(homeResetLimit());
      navigate("/result");
    }
  }, [dispatch, homeStore.currentStep, navigate, next]);

  const onChangeRadio = useCallback(
    (event: RadioChangeEvent): void => {
      const answerValue = {
        id: HOME_QUESTIONS[homeStore.currentStep].id,
        value: event.target.value,
      };
      dispatch(homeSetAnswer(answerValue));
    },
    [homeStore.currentStep, dispatch]
  );

  const initialValues = useMemo(() => {
    return homeStore.answers.reduce((acc: any, obj: any) => {
      acc[obj.id] = obj.value;
      return acc;
    }, {});
  }, [homeStore.answers]);

  return (
    <div className="w-[500px] rounded-lg p-7 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]">
      <div className="flex justify-between items-center">
        <div className="text-[24px] font-bold mb-3">
          {HOME_QUESTIONS[homeStore.currentStep].title}
        </div>
        <div className="text-[15px]">{formattedTime}</div>
      </div>
      <div className="mb-3">
        {HOME_QUESTIONS[homeStore.currentStep].question}
      </div>

      <Form onFinish={onFinish} form={form} initialValues={initialValues}>
        {HOME_QUESTIONS.filter(
          (_, answerIndex) => answerIndex === homeStore.currentStep
        ).map((question) => (
          <Form.Item
            key={question.id}
            name={question.id}
            rules={[{ required: true, message: "Please input your answer!" }]}
          >
            <Radio.Group onChange={onChangeRadio}>
              <div className="flex flex-col gap-2">
                {question.answers.map((answer) => (
                  <Radio key={answer.id} value={answer.id}>
                    {answer.value}
                  </Radio>
                ))}
              </div>
            </Radio.Group>
          </Form.Item>
        ))}

        <div className="mt-8">
          {homeStore.currentStep < HOME_QUESTIONS.length - 1 && (
            <AppButton
              className="w-full h-[42px]"
              rounded="large"
              color="facebook"
              htmlType="submit"
            >
              Next
            </AppButton>
          )}
          {homeStore.currentStep === HOME_QUESTIONS.length - 1 && (
            <AppButton
              className="w-full h-[42px]"
              rounded="large"
              htmlType="submit"
            >
              Done
            </AppButton>
          )}
        </div>
      </Form>
    </div>
  );
};

export default HomeRadioForm;
