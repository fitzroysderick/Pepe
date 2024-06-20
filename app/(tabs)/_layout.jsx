import React from "react";
import { View } from "react-native";
import { Tabs } from "expo-router";

import { Feather } from "@expo/vector-icons";

export default function _layout() {
  return (
    <View className="flex-1">
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#FFFF",
          tabBarInactiveTintColor: "#D0D3D4",
          tabBarStyle: {
            backgroundColor: "#2980B9",
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
            alignSelf: "center",
            height: 70,
            width: "100%",
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            tabBarIcon: ({ color, size }) => (
              <View className="-mr-24">
                <Feather name="home" size={size} color={color} />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="chapters"
          options={{
            tabBarIcon: ({ color, size }) => (
              <View className="-ml-24">
                <Feather name="book" size={size} color={color} />
              </View>
            ),
          }}
        />
      </Tabs>
    </View>
  );
}
