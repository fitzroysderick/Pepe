import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { router } from "expo-router";

export default function home() {
  return (
    <View className="flex-1 gap-y-8">
      <View className="bg-[#2980B9] px-4 py-10 rounded-b-3xl flex-row items-center">
        <View className="mt-8">
          <Text className="text-2xl font-bold text-gray-200">
            Life and Works
          </Text>
          <Text className="text-2xl font-bold text-gray-200">
            of <Text className="font-black text-white">Dr. Jose Rizal</Text>
          </Text>
        </View>
        <Image
          source={require("../../assets/home.png")}
          className="w-40 h-40 -mb-7"
          resizeMode="contain"
        />
      </View>
      <View className="p-4 gap-y-2">
        <Text className="text-lg font-bold text-gray-400">Course Overview</Text>
        <View className="items-center">
          <View className="flex-row">
            <Pressable
              onPress={() => router.push("/course-material")}
              style={{
                elevation: 10,
              }}
              className="bg-[#FFFF] p-4 w-32 m-2 rounded-3xl items-center"
            >
              <Image
                source={require("../../assets/cm.png")}
                className="w-20 h-20"
                resizeMode="contain"
              />
              <Text className="text-center font-semibold text-xs">
                Course Material
              </Text>
            </Pressable>
            <Pressable
              onPress={() => router.push("/chapters")}
              style={{
                elevation: 10,
              }}
              className="bg-[#FFFF] p-4 w-32 m-2 rounded-3xl items-center"
            >
              <Image
                source={require("../../assets/c.png")}
                className="w-20 h-20"
                resizeMode="contain"
              />
              <Text className="text-center font-semibold text-xs">
                Chapters
              </Text>
            </Pressable>
          </View>
          <View className="flex-row">
            <Pressable
              onPress={() => router.push("/quiz-assessment")}
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
            </Pressable>
            <Pressable
              onPress={() => router.push("/overview-map")}
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
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}
