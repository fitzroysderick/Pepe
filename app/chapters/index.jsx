import React from "react";
import { View, Text, Pressable, FlatList } from "react-native";
import { router } from "expo-router";

import ChapterCard from "../../components/cards/ChapterCard";

import { Ionicons } from "@expo/vector-icons";

export default function index() {
  const chapters = [
    {
      label: "Chapter 1",
      image: require("../../assets/c1.png"),
      route: "chapter1",
    },
    {
      label: "Chapter 2",
      image: require("../../assets/c2.png"),
      route: "chapter2",
    },
    {
      label: "Chapter 3",
      image: require("../../assets/c3.png"),
      route: "chapter3",
    },
    {
      label: "Chapter 4",
      image: require("../../assets/c4.png"),
      route: "chapter4",
    },
    {
      label: "Chapter 5",
      image: require("../../assets/c5.png"),
      route: "chapter5",
    },
    {
      label: "Chapter 6",
      image: require("../../assets/c6.png"),
      route: "chapter6",
    },
  ];
  return (
    <View className="flex-1 gap-y-20">
      <View className="bg-[#2980B9] px-4 pt-4 pb-8 rounded-b-3xl">
        <View className="flex-row items-center gap-x-2 mt-8">
          <Pressable onPress={() => router.push("home")}>
            <Ionicons
              name="arrow-back-circle-outline"
              size={30}
              color="#FFFF"
            />
          </Pressable>
          <Text className="text-2xl font-bold text-white">Chapters</Text>
        </View>
      </View>
      <View className="items-center">
        <FlatList
          data={chapters}
          numColumns={2}
          renderItem={({ item }) => (
            <ChapterCard
              label={item.label}
              image={item.image}
              route={item.route}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}
