import React from "react";
import { View, Text, Image } from "react-native";
import { Link } from "expo-router";
import Animated, { FadeIn, FadeInDown, FadeOut } from "react-native-reanimated";

export default function ChapterCard({ label, image, route }) {
  return (
    <Link href={route} className="m-2">
      <Animated.View
        entering={FadeInDown.duration(500)}
        style={{
          elevation: 5,
        }}
        className="items-center bg-white p-2 rounded-lg space-y-4"
      >
        <Image source={image} className="w-32 h-32 rounded-lg" />
        <Text className="font-semibold">{label}</Text>
      </Animated.View>
    </Link>
  );
}
