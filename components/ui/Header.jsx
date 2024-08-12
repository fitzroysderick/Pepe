import React from "react";
import { View, Text, Pressable } from "react-native";
import { router } from "expo-router";

import { AntDesign } from "@expo/vector-icons";

export default function Header({ title }) {
  return (
    <View className="bg-[#2980B9] px-4 pt-4 pb-8 rounded-b-3xl">
      <View className="flex-row items-center gap-x-2 mt-8">
        <Pressable onPress={() => router.back()}>
          <AntDesign name="arrowleft" size={30} color="#FFFF" />
        </Pressable>
        <Text className="text-2xl font-bold text-white">{title}</Text>
      </View>
    </View>
  );
}
