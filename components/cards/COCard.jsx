import React from "react";
import { Text, Image, Pressable } from "react-native";
import { router } from "expo-router";

export default function COCard({ id, label, image }) {
  return (
    <Pressable
      onPress={() => router.push(`course-material`)}
      style={{
        elevation: 10,
      }}
      className="bg-[#FFFF] p-4 w-32 m-2 rounded-3xl items-center"
    >
      <Image source={image} className="w-20 h-20" resizeMode="contain" />
      <Text className="text-center font-semibold text-xs">{label}</Text>
    </Pressable>
  );
}
