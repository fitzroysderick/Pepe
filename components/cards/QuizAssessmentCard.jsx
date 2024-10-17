import React from "react";
import { Link } from "expo-router";
import { Pressable, Text } from "react-native";
import { useSelectedChapter } from "../../hooks/use-selected-chapter";

export default function QuizAssessmentCard({ id, label }) {
  const updateSelectedChapter = useSelectedChapter(
    (state) => state.updateSelectedChapter
  );

  const onClick = () => {
    updateSelectedChapter(id);
  };

  return (
    <Link href={`/quiz-assessment/difficulty-level/${label}`} asChild>
      <Pressable
        onPress={onClick}
        className="mb-4 p-8 bg-[#2980B9] rounded-2xl"
      >
        <Text className="text-[16px] font-bold text-white">{label}</Text>
      </Pressable>
    </Link>
  );
}
