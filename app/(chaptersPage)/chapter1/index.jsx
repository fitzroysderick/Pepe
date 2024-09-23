import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

import chapter1 from "../../../constants/chapters/chapter1";

import Header from "../../../components/ui/Header";

export default function Chapter1() {
  return (
    <View>
      <Header title={chapter1.title} />
      <View className="pt-4 gap-y-4 pb-32">
        <ScrollView className="h-full px-4">
          <Image source={chapter1.image} className="w-full h-60 rounded-3xl" />
          <View className="mt-4 pb-40">
            {chapter1.data.map((d) => (
              <View key={d.title}>
                <Text className="text-3xl font-bold">{d.title}</Text>
                <View className="mt-4 space-y-4">
                  {d.descriptions.map((desc, idx) => (
                    <View key={idx}>
                      <Text className="text-sm font-semibold">
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
                      <View className="ml-2 flex-shrink">
                        <Text className="text-xl font-bold">
                          {proponent.name}
                        </Text>
                        <Text className="flex-shrink">
                          {proponent.description}
                        </Text>
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
                        <Text className="text-xl font-bold">
                          {opponent.name}
                        </Text>
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
                      <Text className="text-lg font-semibold">
                        {other.title}
                      </Text>
                      <Text>{other.content}</Text>
                    </View>
                  ))}
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
