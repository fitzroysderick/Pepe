import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { router } from "expo-router";

import Header from "../../../../components/ui/Header";
import quizzes from "../../../../constants/quizzes";
import { useSelectedChapter } from "../../../../hooks/use-selected-chapter";
import { useSelectedLevel } from "../../../../hooks/use-selected-level";
import { useScore } from "../../../../hooks/use-score";

export default function SelectedLevel() {
  const [randomQuestion, setRandomQuestion] = useState("");
  const [userAnswer, setUserAnswer] = useState("");
  const { score, updateScore } = useScore((state) => ({
    score: state.score,
    updateScore: state.updateScore,
  }));
  const [questionNumber, setQuestionNumber] = useState(1);
  const [usedQuestions, setUsedQuestions] = useState([]);

  const selectedLevel = useSelectedLevel((state) => state.selectedLevel);
  const selectedChapter = useSelectedChapter((state) => state.selectedChapter);

  const content = quizzes.find((q) => q.id === selectedChapter)?.content;
  const filteredContent = content.filter((c) => c.level === selectedLevel);

  const [outOf, _] = useState(filteredContent.length);

  const generateRandomQuestion = () => {
    const availableQuestions = filteredContent.filter(
      (question) => !usedQuestions.includes(question)
    );

    const question =
      availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
    setRandomQuestion(question);
    setUsedQuestions([...usedQuestions, question]);
  };

  useEffect(() => {
    generateRandomQuestion();
  }, []);

  const isMultipleChoice = !randomQuestion.choices;

  const handleNext = () => {
    if (!userAnswer) {
      return Alert.alert("Please answer this question first!");
    }

    const isCorrectAnswer =
      randomQuestion.answer.toLowerCase() === userAnswer.toLowerCase();
    if (isCorrectAnswer) {
      updateScore(score + 1);
      console.log("Its correct");
    }

    setUserAnswer("");
    setQuestionNumber(questionNumber + 1);

    if (questionNumber === outOf) {
      router.push("/quiz-assessment/difficulty-level/quiz/output");
    } else {
      generateRandomQuestion();
    }
  };

  return (
    <View className="h-full relative">
      <Header title={selectedLevel} />
      <View className="pt-8 px-4 space-y-8">
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
                <Text className="ml-4 text-lg font-bold text-white">
                  {c.words}
                </Text>
              </TouchableOpacity>
            ))
          )}
        </View>
      </View>
      <TouchableOpacity
        onPress={() => handleNext()}
        className="absolute bottom-10 w-[90%] p-4 border border-[#2980B9] rounded-2xl self-center"
      >
        <Text className="text-lg font-bold text-[#2980B9] text-center">
          {questionNumber === outOf ? "Submit" : "Next"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
