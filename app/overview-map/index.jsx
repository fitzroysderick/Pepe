import React from "react";
import { View, Text, Pressable } from "react-native";
import { router } from "expo-router";

import { Ionicons } from "@expo/vector-icons";

export default function index() {
  return (
    <View className="flex-1 gap-y-20">
      <View className="bg-[#2980B9] px-4 pt-4 pb-40 rounded-b-3xl">
        <View className="flex-row items-center gap-x-2 mt-8">
          <Pressable onPress={() => router.push("home")}>
            <Ionicons
              name="arrow-back-circle-outline"
              size={30}
              color="#FFFF"
            />
          </Pressable>
          <Text className="text-2xl font-bold text-white">Course Material</Text>
        </View>
      </View>
      <View className="mx-8 gap-y-2">
        <Text className="text-lg">
          This course is a study of the life and writings of Dr. Jose P. Rizal
          and its crucial role behind the making of the Filipino nation. The
          study of his novels and other writings would allow the students a view
          into the historical realities of the Philippines and the world in the
          19th century and relate them to the contemporary social and global
          situations
        </Text>
      </View>
    </View>
  );
}
