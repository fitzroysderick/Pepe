import React from "react";
import { router } from "expo-router";
import { Text, TouchableOpacity } from "react-native";

import { useSelectedChapter } from "../../hooks/use-selected-chapter";

export default function QuizAssessmentCard({ id, label }) {
  const changeSelectedChapter = useSelectedChapter(
    (state) => state.changeSelectedChapter
  );

  const handlePress = (id, label) => {
    router.push(`/quiz-assessment/difficulty-level/${label}`);
    changeSelectedChapter(id);
  };

  return (
    <TouchableOpacity
      onPress={() => handlePress(id, label)}
      className="mb-4 p-8 bg-[#2980B9] rounded-2xl"
    >
      <Text className="text-[16px] font-bold text-white">{label}</Text>
    </TouchableOpacity>
  );
}
