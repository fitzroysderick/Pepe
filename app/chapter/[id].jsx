import React from "react";
import { View, Text, Pressable, Image, ScrollView } from "react-native";
import { useLocalSearchParams, router } from "expo-router";

import { chapters } from "../../constants/chapters";

import { Ionicons } from "@expo/vector-icons";

export default function Chapter() {
  const id = useLocalSearchParams().id;
  const chapter = chapters.find((chapter) => chapter.id === id);

  return (
    <View className="gap-y-4">
      <View className="bg-[#2980B9] px-4 pt-4 pb-8 rounded-b-3xl">
        <View className="flex-row items-center gap-x-2 mt-8">
          <Pressable onPress={() => router.push("chapters")}>
            <Ionicons
              name="arrow-back-circle-outline"
              size={30}
              color="#FFFF"
            />
          </Pressable>
          <Text className="text-2xl font-bold text-white">{chapter.name}</Text>
        </View>
      </View>
      <ScrollView className="h-full px-4">
        <Image source={chapter.image} className="w-full h-60 rounded-3xl" />
        <View className="mt-4 pb-40">
          {chapter.data.map((d) => (
            <View key={d.title}>
              <Text className="text-3xl font-bold">{d.title}</Text>
              <View className="mt-4 space-y-4">
                {d.descriptions.map((desc, idx) => (
                  <View key={idx}>
                    <Text className="text-[18px] font-semibold">
                      {desc.title}
                      <Text className="font-normal">{desc.content}</Text>
                    </Text>
                  </View>
                ))}
              </View>
              <View className="mt-4 space-y-2">
                <Text className="text-lg font-semibold">
                  Proponents of the Rizal Law:
                </Text>
                {d.proponents.map((proponent) => (
                  <View
                    key={proponent.name}
                    style={{
                      elevation: 5,
                    }}
                    className="flex-row bg-white rounded-xl p-2"
                  >
                    <Image
                      source={proponent.image}
                      className="w-28 h-28 rounded-xl"
                    />
                    <View className="ml-2">
                      <Text className="text-xl font-bold">
                        {proponent.name}
                      </Text>
                      <Text>{proponent.description}</Text>
                    </View>
                  </View>
                ))}
              </View>
              <View className="mt-4 space-y-2">
                <Text className="text-lg font-semibold">
                  Opponents on the Rizal Law:
                </Text>
                {d.opponents.map((opponent) => (
                  <View
                    key={opponent.name}
                    style={{
                      elevation: 5,
                    }}
                    className="bg-white rounded-xl p-2"
                  >
                    <View className="flex-row gap-x-2">
                      <Image
                        source={opponent.image}
                        className="w-28 h-28 rounded-xl"
                      />
                      <Text className="text-xl font-bold">{opponent.name}</Text>
                    </View>
                    <Text className="mt-2">{opponent.description}</Text>
                  </View>
                ))}
              </View>
              <View className="mt-4 space-y-2">
                {d.others.map((other) => (
                  <View
                    key={other.title}
                    style={{
                      elevation: 5,
                    }}
                    className="bg-white rounded-xl p-2"
                  >
                    <Text className="text-lg font-semibold">{other.title}</Text>
                    <Text>{other.content}</Text>
                  </View>
                ))}
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
