import React from "react";
import { Text, TouchableOpacity } from "react-native";

export default function Button({ onPress, variant, title }) {
  const solid = "text-white bg-[#2980B9]";
  const outline = "";

  return (
    <TouchableOpacity
      onPress={onPress}
      className={`w-[80%] mt-4 py-6 px-4 border border-[#2980B9] rounded-xl ${
        variant === "solid" ? solid : outline
      }`}
    >
      <Text
        className={`text-lg font-medium ${variant === "solid" && "text-white"}`}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
