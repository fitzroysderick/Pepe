import React from "react";
import { View, Text, Image } from "react-native";
import { Link, useLocalSearchParams } from "expo-router";

import Header from "../../../components/ui/Header";

export default function index() {
  const { chapterName, selectedChapter } = useLocalSearchParams();

  return (
    <View className="flex-1 relative">
      <Header title={chapterName} />
      <View className="absolute top-60 self-center space-y-8">
        <Text className="text-[25px] font-bold text-center">
          Choose Difficulty Level
        </Text>
        <View className="items-center justify-center">
          <View className="flex-row gap-x-4">
            <Link
              href={{
                pathname: "/quiz-assessment/difficulty-level/quiz",
                params: { selectedLevel: "Easy", selectedChapter },
              }}
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
            </Link>
            <Link
              href={{
                pathname: "/quiz-assessment/difficulty-level/quiz",
                params: { selectedLevel: "Medium", selectedChapter },
              }}
              className="p-4 bg-white rounded-3xl"
            >
              <View>
                <Text className="text-[20px] font-medium">Medium</Text>
                <Image
                  source={require("../../../assets/mediumnew.png")}
                  className="w-28 h-28"
                  resizeMode="contain"
                  s
                />
              </View>
            </Link>
          </View>
          <Link
            href={{
              pathname: "/quiz-assessment/difficulty-level/quiz",
              params: { selectedLevel: "Hard", selectedChapter },
            }}
            className="p-4 bg-white rounded-3xl mt-4"
          >
            <View>
              <Text className="text-[20px] font-medium">Hard</Text>
              <Image
                source={require("../../../assets/hardnew.png")}
                className="w-28 h-28"
                resizeMode="contain"
              />
            </View>
          </Link>
        </View>
      </View>
    </View>
  );
}
