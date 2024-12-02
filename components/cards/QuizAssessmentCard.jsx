import React from "react";
import { Link } from "expo-router";
import { Pressable, Text } from "react-native";
import { useSelectedChapter } from "../../hooks/use-selected-chapter";
import Animated, { FadeInRight } from "react-native-reanimated";

export default function QuizAssessmentCard({ idx, id, label }) {
  const updateSelectedChapter = useSelectedChapter(
    (state) => state.updateSelectedChapter
  );

  const onClick = () => {
    updateSelectedChapter(id);
  };

  return (
    <Animated.View
      entering={
        (idx === 0 && FadeInRight) ||
        (idx === 1 && FadeInRight.delay(100)) ||
        (idx === 2 && FadeInRight.delay(300)) ||
        (idx === 3 && FadeInRight.delay(500)) ||
        (idx === 4 && FadeInRight.delay(700)) ||
        (idx === 5 && FadeInRight.delay(900))
      }
    >
      <Link href={`/quiz-assessment/difficulty-level/${label}`} asChild>
        <Pressable
          onPress={onClick}
          className="mb-4 p-8 bg-[#2980B9] rounded-xl"
        >
          <Text className="text-[16px] font-bold text-white">{label}</Text>
        </Pressable>
      </Link>
    </Animated.View>
  );
}
