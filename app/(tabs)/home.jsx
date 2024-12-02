import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { Link } from "expo-router";
import Animated, { FadeInDown } from "react-native-reanimated";

export default function home() {
  return (
    <View className="flex-1 gap-y-4">
      <View className="bg-[#2980B9] p-4 pb-4 rounded-b-3xl flex-row items-center">
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
      <ScrollView className="flex-1 p-4">
        <Text className="text-lg font-bold text-gray-400 mb-2">
          Course Overview
        </Text>
        <View className="items-center gap-y-4">
          <View className="flex-row gap-x-4">
            <Link href="/course-material">
              <Animated.View
                entering={FadeInDown.delay(100)}
                style={{
                  elevation: 10,
                }}
                className="bg-[#FFFF] p-4 w-32 rounded-xl items-center"
              >
                <Image
                  source={require("../../assets/cm.png")}
                  className="w-20 h-20"
                  resizeMode="contain"
                />
                <Text className="text-center font-semibold text-xs">
                  Course Objective
                </Text>
              </Animated.View>
            </Link>
            <Link href="/chapters">
              <Animated.View
                entering={FadeInDown.delay(300)}
                style={{
                  elevation: 10,
                }}
                className="bg-[#FFFF] p-4 w-32 rounded-xl items-center"
              >
                <Image
                  source={require("../../assets/c.png")}
                  className="w-20 h-20"
                  resizeMode="contain"
                />
                <Text className="text-center font-semibold text-xs">
                  Chapters
                </Text>
              </Animated.View>
            </Link>
          </View>
          <View className="flex-row gap-x-4">
            <Link href="/quiz-assessment">
              <Animated.View
                entering={FadeInDown.delay(500)}
                style={{
                  elevation: 10,
                }}
                className="bg-[#FFFF] p-4 w-32 m-2 rounded-xl items-center"
              >
                <Image
                  source={require("../../assets/q.png")}
                  className="w-20 h-20"
                  resizeMode="contain"
                />
                <Text
                  className="text-center font-semibold text-xs"
                  numberOfLines={1}
                >
                  Quiz Assessment
                </Text>
              </Animated.View>
            </Link>
            <Link href="/overview-map">
              <Animated.View
                entering={FadeInDown.delay(700)}
                style={{
                  elevation: 10,
                }}
                className="bg-[#FFFF] p-4 w-32 m-2 rounded-xl items-center"
              >
                <Image
                  source={require("../../assets/m.png")}
                  className="w-20 h-20"
                  resizeMode="contain"
                />
                <Text className="text-center font-semibold text-xs">
                  Overview Map
                </Text>
              </Animated.View>
            </Link>
          </View>
          <Link href="/international-travels">
            <Animated.View
              entering={FadeInDown.delay(900)}
              style={{
                elevation: 10,
              }}
              className="bg-[#FFFF] p-4 w-32 m-2 rounded-xl items-center"
            >
              <Image
                source={require("../../assets/i.png")}
                className="w-20 h-20"
                resizeMode="contain"
              />
              <Text className="text-center font-semibold text-xs">
                International Travels
              </Text>
            </Animated.View>
          </Link>
        </View>
      </ScrollView>
    </View>
  );
}
