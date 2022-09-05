import React, { useCallback } from 'react';
import { View } from 'react-native';
import { Indent, Radio, Typography } from '../../ui';

type TProps = {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  answers: Record<any, any>;
  setAnswers: (answers: Record<any, any>) => void;
  currentQuestions: any;
};

export const CarPoll = (props: TProps) => {
  const { currentStep, answers, setAnswers, currentQuestions } = props;

  const onPressAnswer = useCallback(
    (value: any) => {
      const answersCopy = { ...answers };
      answersCopy[currentStep] = value;
      setAnswers(answersCopy);
    },
    [currentStep, answers],
  );

  return (
    <View>
      {Array.isArray(currentQuestions?.options) ? (
        <>
          <Typography.BoldText fontSize={22}>
            {currentQuestions.title}
          </Typography.BoldText>
          <Indent height={25} />
          {currentQuestions?.options?.map((qBlock: any, index: number) => {
            return (
              <>
                {index !== 0 ? <Indent height={15} /> : <></>}
                <Radio
                  initialChecked={answers[currentStep] === qBlock.value}
                  onPress={() => {
                    onPressAnswer(qBlock.value);
                  }}>
                  <Typography.BoldText fontSize={16}>
                    {qBlock.label}
                  </Typography.BoldText>
                </Radio>
              </>
            );
          })}
        </>
      ) : (
        <></>
      )}
    </View>
  );
};
