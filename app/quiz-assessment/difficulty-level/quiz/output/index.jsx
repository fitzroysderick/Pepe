import React from "react";
import { View, Text } from "react-native";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import Button from "../../../../../components/ui/Button";
import Label from "../../../../../components/ui/Label";
import { useScore } from "../../../../../hooks/use-score";

export default function Score() {
  const { score, updateScore } = useScore((state) => ({
    score: state.score,
    updateScore: state.updateScore,
  }));

  const handleRetake = () => {
    router.push("/quiz-assessment/difficulty-level/quiz");
    updateScore(0);
  };

  const handleGoBack = () => {
    router.push("/quiz-assessment");
    updateScore(0);
  };

  return (
    <SafeAreaView className="flex-1 items-center justify-center relative">
      <Label title="Your Score:" />
      <View className="mt-8 h-40 w-40 bg-[#2980B9] rounded-full items-center justify-center">
        <Text className="text-5xl text-white">{score}</Text>
      </View>
      <View className="absolute bottom-8 w-full items-center">
        <Button
          onPress={() => handleRetake()}
          variant="solid"
          title="Retake quiz"
        />
        <Button
          onPress={() => handleGoBack()}
          variant="outline"
          title="Go back to assessment"
        />
      </View>
    </SafeAreaView>
  );
}
