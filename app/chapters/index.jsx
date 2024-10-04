import React from "react";
import { View, FlatList } from "react-native";

import Header from "../../components/ui/Header";
import ChapterCard from "../../components/cards/ChapterCard";

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
    <View>
      <Header title="Chapters" />
      <View className="pt-8 items-center">
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
          keyExtractor={(item) => item.label}
        />
      </View>
    </View>
  );
}
