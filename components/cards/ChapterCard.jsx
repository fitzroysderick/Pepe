import React from "react";
import { Text, Image, Pressable } from "react-native";
import { router } from "expo-router";

export default function ChapterCard({ label, image, route }) {
  return (
    <Pressable
      onPress={() => router.push(route)}
      style={{
        elevation: 5,
      }}
      className="m-2 items-center bg-white p-2 rounded-lg space-y-4"
    >
      <Image source={image} className="w-32 h-32 rounded-lg" />
      <Text className="font-semibold">{label}</Text>
    </Pressable>
  );
}
