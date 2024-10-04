import React from "react";
import { Link } from "expo-router";
import { Text } from "react-native";

export default function QuizAssessmentCard({ id, label }) {
  return (
    <Link
      href={{
        pathname: `/quiz-assessment/difficulty-level/${label}`,
        params: { selectedChapter: id },
      }}
      className="mb-4 p-8 bg-[#2980B9] rounded-2xl"
    >
      <Text className="text-[16px] font-bold text-white">{label}</Text>
    </Link>
  );
}
