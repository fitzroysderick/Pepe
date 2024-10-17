import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { Link, useLocalSearchParams } from "expo-router";

import Header from "../../../components/ui/Header";
import { useSelectedLevel } from "../../../hooks/use-selected-level";

export default function index() {
  const { chapterName } = useLocalSearchParams();
  const updateSelectedLevel = useSelectedLevel(
    (state) => state.updateSelectedLevel
  );

  const onClick = (selectedLevel) => {
    updateSelectedLevel(selectedLevel);
  };

  return (
    <View className="flex-1 relative">
      <Header title={chapterName} />
      <View className="absolute top-60 self-center space-y-8">
        <Text className="text-[25px] font-bold text-center">
          Choose Difficulty Level
        </Text>
        <View className="items-center justify-center gap-y-4">
          <View className="flex-row gap-x-4">
            <Link href="/quiz-assessment/difficulty-level/quiz" asChild>
              <Pressable
                onPress={() => onClick("Easy")}
                className="p-4 bg-white rounded-3xl"
              >
                <View>
                  <Text className="text-[20px] font-medium">Easy</Text>
                  <Image
                    source={require("../../../assets/easy.png")}
                    className="w-28 h-28"
                    resizeMode="contain"
                  />
                </View>
              </Pressable>
            </Link>
            <Link href="/quiz-assessment/difficulty-level/quiz" asChild>
              <Pressable
                onPress={() => onClick("Medium")}
                className="p-4 bg-white rounded-3xl"
              >
                <View>
                  <Text className="text-[20px] font-medium">Medium</Text>
                  <Image
                    source={require("../../../assets/medium.png")}
                    className="w-28 h-28"
                    resizeMode="contain"
                  />
                </View>
              </Pressable>
            </Link>
          </View>
          <Link href="/quiz-assessment/difficulty-level/quiz" asChild>
            <Pressable
              onPress={() => onClick("Hard")}
              className="p-4 bg-white rounded-3xl"
            >
              <View>
                <Text className="text-[20px] font-medium">Hard</Text>
                <Image
                  source={require("../../../assets/hardnew.png")}
                  className="w-28 h-28"
                  resizeMode="contain"
                />
              </View>
            </Pressable>
          </Link>
        </View>
      </View>
    </View>
  );
}
