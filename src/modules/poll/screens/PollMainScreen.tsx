import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useMemo, useState } from 'react';
import { Alert } from 'react-native';
import { NavigationProps } from '../../../navigation/types';
import { colors } from '../../../theme';
import { translate } from '../../translation';
import { Button, Indent, ScreenContainer, Typography } from '../../ui';
import { CarPoll } from '../components';
import { carTestQuestions } from '../constant';

export const PollMainScreen = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<any, any>>({});

  const currentQuestions: any = useMemo(() => {
    return carTestQuestions[currentStep];
  }, [currentStep, carTestQuestions]);

  const navigation = useNavigation<NavigationProps>();

  useEffect(() => {
    if (Object.keys(answers).length && !currentQuestions) {
      navigation.navigate('PollResultScreen', { answers });
    }
  }, [currentQuestions, navigation, answers]);

  return (
    <ScreenContainer
      headerProps={{ backButton: true }}
      footer={
        <>
          <Button
            isWhite
            onPress={() => {
              if (answers[currentStep] === undefined) {
                Alert.alert('Please, choose an answer');
                return false;
              }
              setCurrentStep(currentStep + 1);
            }}>
            <Typography.BoldText color={colors.totalBlack}>
              {translate('testNextQuestion')}
            </Typography.BoldText>
          </Button>
          {currentStep !== 0 ? (
            <Button onPress={() => setCurrentStep(currentStep - 1)}>
              <Typography.BoldText>
                {translate('testPrevQuestion')}
              </Typography.BoldText>
            </Button>
          ) : (
            <></>
          )}
        </>
      }>
      <Typography.BoldText color={colors.secondaryText}>
        TEST: Which car will suit you?
      </Typography.BoldText>
      <Indent height={15} />
      <CarPoll
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        answers={answers}
        setAnswers={setAnswers}
        currentQuestions={currentQuestions}
      />
    </ScreenContainer>
  );
};
