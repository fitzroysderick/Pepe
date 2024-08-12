import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { router, useLocalSearchParams } from "expo-router";

import Header from "../../../components/ui/Header";
import { useSelectedLevel } from "../../../hooks/use-selected-level";

export default function index() {
  const { chapterName } = useLocalSearchParams();
  const updateSelectedLevel = useSelectedLevel(
    (state) => state.updateSelectedLevel
  );

  const handleEasy = () => {
    router.push("/quiz-assessment/difficulty-level/quiz");
    updateSelectedLevel("Easy");
  };

  const handleMedium = () => {
    router.push("/quiz-assessment/difficulty-level/quiz");
    updateSelectedLevel("Medium");
  };

  const handleHard = () => {
    router.push("/quiz-assessment/difficulty-level/quiz");
    updateSelectedLevel("Hard");
  };

  return (
    <View className="flex-1">
      <Header title={chapterName} />
      <View className="mt-40 space-y-8">
        <Text className="text-[25px] font-bold text-center">
          Choose Difficulty Level
        </Text>
        <View className="items-center justify-center">
          <View className="flex-row gap-x-4">
            <TouchableOpacity
              onPress={() => handleEasy()}
              className="p-4 bg-white rounded-3xl"
            >
              <Text className="text-[20px] font-medium">Easy</Text>
              <Image
                source={require("../../../assets/medium.png")}
                className="w-28 h-28"
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleMedium()}
              className="p-4 bg-white rounded-3xl"
            >
              <Text className="text-[20px] font-medium">Medium</Text>
              <Image
                source={require("../../../assets/medium.png")}
                className="w-28 h-28"
                resizeMode="contain"
                s
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => handleHard()}
            className="p-4 bg-white rounded-3xl mt-4"
          >
            <Text className="text-[20px] font-medium">Hard</Text>
            <Image
              source={require("../../../assets/medium.png")}
              className="w-28 h-28"
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
