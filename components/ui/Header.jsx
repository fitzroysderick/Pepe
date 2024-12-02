import React from "react";
import { View, Text, Pressable } from "react-native";
import { Link, router } from "expo-router";

import { AntDesign, Feather } from "@expo/vector-icons";
export default function Header({ title, hasHome = false }) {
  return (
    <View className="bg-[#2980B9] px-4 pt-4 pb-8 rounded-b-3xl z-50 relative">
      <View className="flex-row items-center gap-x-2 mt-8">
        <Pressable onPress={() => router.back()}>
          <AntDesign name="arrowleft" size={30} color="#FFFF" />
        </Pressable>
        <Text className="text-2xl font-bold text-white flex-shrink">
          {title}
        </Text>
      </View>
      {hasHome && (
        <Link href="/" className="absolute mt-[51px] right-4">
          <Feather name="home" size={25} color="white" />
        </Link>
      )}
    </View>
  );
}
