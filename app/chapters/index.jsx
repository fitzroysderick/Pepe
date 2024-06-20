import React from "react";
import { View, Text, Pressable, FlatList } from "react-native";
import { router } from "expo-router";

import { chapters } from "../../constants/chapters";
import ChapterCard from "../../components/cards/ChapterCard";

import { Ionicons } from "@expo/vector-icons";

export default function index() {
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
            <ChapterCard id={item.id} name={item.name} image={item.image} />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}
