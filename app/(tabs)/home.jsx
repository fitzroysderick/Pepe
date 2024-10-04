import React from "react";
import { View, Text, Image } from "react-native";
import { Link } from "expo-router";

export default function home() {
  return (
    <View className="flex-1 gap-y-8">
      <View className="bg-[#2980B9] px-4 pt-10 pb-4 rounded-b-3xl flex-row items-center">
        <Image
          source={require("../../assets/home-nobg.png")}
          className="w-32 h-32"
          resizeMode="contain"
        />
        <View>
          <Text className="text-2xl font-bold text-gray-200">
            Life and Works
          </Text>
          <Text className="text-2xl font-bold text-gray-200">
            of <Text className="font-black text-white">Dr. Jose Rizal</Text>
          </Text>
        </View>
      </View>
      <View className="p-4 gap-y-2">
        <Text className="text-lg font-bold text-gray-400">Course Overview</Text>
        <View className="items-center gap-y-4">
          <View className="flex-row gap-x-4">
            <Link href="/course-material">
              <View
                style={{
                  elevation: 10,
                }}
                className="bg-[#FFFF] p-4 w-32 rounded-3xl items-center"
              >
                <Image
                  source={require("../../assets/cm.png")}
                  className="w-20 h-20"
                  resizeMode="contain"
                />
                <Text className="text-center font-semibold text-xs">
                  Course Material
                </Text>
              </View>
            </Link>
            <Link href="/chapters">
              <View
                style={{
                  elevation: 10,
                }}
                className="bg-[#FFFF] p-4 w-32 rounded-3xl items-center"
              >
                <Image
                  source={require("../../assets/c.png")}
                  className="w-20 h-20"
                  resizeMode="contain"
                />
                <Text className="text-center font-semibold text-xs">
                  Chapters
                </Text>
              </View>
            </Link>
          </View>
          <View className="flex-row gap-x-4">
            <Link href="/quiz-assessment">
              <View
                style={{
                  elevation: 10,
                }}
                className="bg-[#FFFF] p-4 w-32 m-2 rounded-3xl items-center"
              >
                <Image
                  source={require("../../assets/q.png")}
                  className="w-20 h-20"
                  resizeMode="contain"
                />
                <Text className="text-center font-semibold text-xs">
                  Quiz Assessment
                </Text>
              </View>
            </Link>
            <Link href="/overview-map">
              <View
                style={{
                  elevation: 10,
                }}
                className="bg-[#FFFF] p-4 w-32 m-2 rounded-3xl items-center"
              >
                <Image
                  source={require("../../assets/m.png")}
                  className="w-20 h-20"
                  resizeMode="contain"
                />
                <Text className="text-center font-semibold text-xs">
                  Overview Map
                </Text>
              </View>
            </Link>
          </View>
        </View>
      </View>
    </View>
  );
}
