import React from "react";
import { View, Text } from "react-native";

import Header from "../../components/ui/Header";

export default function index() {
  return (
    <View>
      <Header title="Course Material" />
      <View className="pt-20 mx-8 gap-y-2">
        <Text className="text-xl font-bold">Course Description:</Text>
        <Text className="text-xl">
          This course is a study of the life and writings of Dr. Jose P. Rizal
          and its crucial role behind the making of the Filipino nation. The
          study of his novels and other writings would allow the students a view
          into the historical realities of the Philippines and the world in the
          19th century and relate them to the contemporary social and global
          situations
        </Text>
      </View>
    </View>
  );
}
