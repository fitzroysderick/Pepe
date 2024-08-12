import React from "react";
import { Text } from "react-native";

export default function Label({ title }) {
  return <Text className="text-[25px] font-bold text-center">{title}</Text>;
}
