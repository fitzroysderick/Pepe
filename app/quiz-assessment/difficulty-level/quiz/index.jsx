import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Keyboard,
  ScrollView,
} from "react-native";
import { router, useLocalSearchParams } from "expo-router";

import Header from "../../../../components/ui/Header";
import quizzes from "../../../../constants/quizzes";
import { useScore } from "../../../../hooks/use-score";
import { useOutOf } from "../../../../hooks/use-out-of";
import { useSelectedChapter } from "../../../../hooks/use-selected-chapter";
import { useSelectedLevel } from "../../../../hooks/use-selected-level";

export default function SelectedLevel() {
  const selectedChapter = useSelectedChapter((state) => state.selectedChapter);
  const selectedLevel = useSelectedLevel((state) => state.selectedLevel);
  const [randomQuestion, setRandomQuestion] = useState("");
  const [userAnswer, setUserAnswer] = useState("");
  const { score, updateScore } = useScore((state) => ({
    score: state.score,
    updateScore: state.updateScore,
  }));
  const [questionNumber, setQuestionNumber] = useState(1);
  const [usedQuestions, setUsedQuestions] = useState([]);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  const content = quizzes.find((q) => q.id === selectedChapter)?.content;
  const filteredContent = content.filter((c) => c.level === selectedLevel);

  const resetQuiz = () => {
    setQuestionNumber(1);
    setUsedQuestions([]);
  };

  const { outOf, updateOutOf } = useOutOf((state) => ({
    outOf: state.outOf,
    updateOutOf: state.updateOutOf,
  }));

  const generateRandomQuestion = () => {
    const availableQuestions = filteredContent?.filter(
      (question) => !usedQuestions.includes(question)
    );

    const question =
      availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
    setRandomQuestion(question);
    setUsedQuestions([...usedQuestions, question]);
  };

  useEffect(() => {
    generateRandomQuestion();
    updateOutOf(filteredContent.length);

    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const isMultipleChoice = !randomQuestion.choices;

  const handleNext = () => {
    if (!userAnswer && !isMultipleChoice) {
      return Alert.alert("Please answer this question first!");
    }

    const isCorrectAnswer =
      randomQuestion.answer.toLowerCase() === userAnswer.toLowerCase();
    if (isCorrectAnswer) {
      updateScore(score + 1);
    }

    setUserAnswer("");
    setQuestionNumber(questionNumber + 1);

    if (questionNumber === outOf) {
      resetQuiz();
      router.push("/quiz-assessment/difficulty-level/quiz/output");
    } else {
      generateRandomQuestion();
    }
  };

  return (
    <View className="flex-1 relative">
      <Header title={selectedLevel} />
      <ScrollView className="flex-1 pt-8 px-4 space-y-8">
        <Text>
          {questionNumber} / {outOf}
        </Text>
        <Text className="text-[20px] font-medium text-center">
          {randomQuestion.question}
        </Text>
        <View>
          {isMultipleChoice ? (
            <TextInput
              placeholder="Enter your answer"
              className="p-6 border border-[#2980B9] rounded-2xl"
              value={userAnswer}
              onChangeText={setUserAnswer}
            />
          ) : (
            randomQuestion.choices?.map((c, idx) => (
              <TouchableOpacity
                key={idx}
                onPress={() => setUserAnswer(c.letter)}
                className={`mb-4 p-4 flex-row items-center rounded-2xl ${
                  c.letter === userAnswer ? "bg-[#7FB3D5]" : "bg-[#2980B9]"
                }`}
              >
                <View className="h-10 w-10 items-center justify-center bg-white rounded-full">
                  <Text className="font-bold">{c.letter}</Text>
                </View>
                <Text className="ml-4 text-lg font-bold text-white flex-shrink">
                  {c.words}
                </Text>
              </TouchableOpacity>
            ))
          )}
        </View>
      </ScrollView>
      {!isKeyboardVisible && (
        <TouchableOpacity
          onPress={() => handleNext()}
          className="absolute right-4 bottom-4 p-4 bg-white border border-[#2980B9] rounded-xl self-center z-50"
        >
          <Text className="font-bold text-[#2980B9] text-center">
            {questionNumber === outOf ? "Submit" : "Next"}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
