import React from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import { router } from "expo-router";

import quizAssessment from "../../constants/quizAssessment";
import QuizAssessmentCard from "../../components/cards/QuizAssessmentCard";
import Label from "../../components/ui/Label";

import { AntDesign } from "@expo/vector-icons";

export default function index() {
  return (
    <View className="flex-1">
      <View className="bg-[#2980B9] px-4 pt-4 pb-8 rounded-b-3xl">
        <View className="flex-row items-center gap-x-2 mt-8">
          <Pressable onPress={() => router.push("/home")}>
            <AntDesign name="arrowleft" size={30} color="#FFFF" />
          </Pressable>
          <Text className="text-2xl font-bold text-white">Quiz Assessment</Text>
        </View>
      </View>
      <ScrollView className="flex-1 pt-8 space-y-4">
        <Label title="Choose a Chapter" />
        <View className="mx-8 pb-20">
          {quizAssessment.map((qa) => (
            <QuizAssessmentCard key={qa.id} id={qa.id} label={qa.label} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
