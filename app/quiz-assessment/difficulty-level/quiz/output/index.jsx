import React from "react";
import { View, Text } from "react-native";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import Button from "../../../../../components/ui/Button";
import Label from "../../../../../components/ui/Label";
import { useScore } from "../../../../../hooks/use-score";
import { useOutOf } from "../../../../../hooks/use-out-of";

import { Feather } from "@expo/vector-icons";

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

  const outOf = useOutOf((state) => state.outOf);

  return (
    <SafeAreaView className="flex-1 items-center justify-center relative">
      <View className="mb-8 h-52 w-52 bg-[#2980B9] rounded-full items-center justify-center">
        <Text className="text-5xl text-white">{score}</Text>
        <View className="w-[50%] h-1 bg-white"></View>
        <Text className="text-5xl text-white mt-2">{outOf}</Text>
      </View>
      <Label title="Your Score" />
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
      <Link href="/" className="absolute top-4 right-4">
        <Feather name="home" size={25} color="black" />
      </Link>
    </SafeAreaView>
  );
}
