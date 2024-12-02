import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";

import Header from "../../../components/ui/Header";
import { Link } from "expo-router";

export default function Chapter6() {
  const routes = [
    {
      label: "A. Period of Preparation for Expedition (1882-1888)",
      route: "(chaptersPage)/chapter6/a",
    },
    {
      label: "B. Period of Research and Writings (1888-1891)",
      route: "(chaptersPage)/chapter6/b",
    },
    {
      label: "C. Nostalgic Historian",
      route: "(chaptersPage)/chapter6/c",
    },
    {
      label: "D. The Relactant Revolutionary",
      route: "(chaptersPage)/chapter6/d",
    },
    {
      label: "E. From Hong Kong to Exile in Dapitan (1891-1892)",
      route: "(chaptersPage)/chapter6/e",
    },
    {
      label: "F. Rizal in Dapitan",
      route: "(chaptersPage)/chapter6/f",
    },
    {
      label: "G. Going to Cuba up to the second arrest",
      route: "(chaptersPage)/chapter6/g",
    },
    {
      label: "H. Trial and Execution",
      route: "(chaptersPage)/chapter6/h",
    },
    {
      label: "I. Last Farewell",
      route: "(chaptersPage)/chapter6/i",
    },
    {
      label: "J. Other interpritations of the study of Dr. Jose Rizal's Life",
      route: "(chaptersPage)/chapter6/j",
    },
  ];

  return (
    <View className="flex-1">
      <Header title="Chapter 6" hasHome />
      <ScrollView className="p-4 flex-1 gap-y-4">
        <View className="space-y-2">
          <Text className="text-xl font-bold">
            Rizal And The Campaign Of Nationalism
          </Text>
          <Image
            source={require("../../../assets/c6.png")}
            resizeMode="stretch"
            className="w-full h-52 rounded-3xl"
          />
        </View>
        {routes.map((route, idx) => (
          <Animated.View
            key={idx}
            entering={
              (idx === 0 && FadeInDown) ||
              (idx === 1 && FadeInDown.delay(100)) ||
              (idx === 2 && FadeInDown.delay(300)) ||
              (idx === 3 && FadeInDown.delay(500)) ||
              (idx === 4 && FadeInDown.delay(700)) ||
              (idx === 5 && FadeInDown.delay(900)) ||
              (idx === 6 && FadeInDown.delay(1100)) ||
              (idx === 7 && FadeInDown.delay(1300)) ||
              (idx === 8 && FadeInDown.delay(1500)) ||
              (idx === 9 && FadeInDown.delay(1700))
            }
          >
            <Link
              href={route.route}
              className="bg-white px-4 py-6 shadow-xl rounded-xl font-bold"
            >
              {route.label}
            </Link>
          </Animated.View>
        ))}
        <View className="pb-4"></View>
      </ScrollView>
    </View>
  );
}
