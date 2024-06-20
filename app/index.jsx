import React from "react";
import { View, Text } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

export default function index() {
  return (
    <View className="mt-20">
      <Text>index</Text>
      <Link href="/home">Go to home</Link>
      <StatusBar style="light" />
    </View>
  );
}
