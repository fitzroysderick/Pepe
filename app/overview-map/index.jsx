import React, { useState } from "react";
import { View, Text, Image, Pressable } from "react-native";
import Animated, { FadeIn, FadeInDown } from "react-native-reanimated";

import Header from "../../components/ui/Header";

import MapModal from "../../components/modals/MapModal";
import { useMapModal } from "../../hooks/use-map-modal";

import Entypo from "@expo/vector-icons/Entypo";

export default function index() {
  const onOpen = useMapModal((state) => state.onOpen);
  const [openedProvince, setOpenedProvince] = useState("");

  const handlePinClick = (province) => {
    setOpenedProvince(province);
    onOpen();
  };

  return (
    <View>
      <MapModal province={openedProvince} />
      <Header title="Overview Map" />
      <Text className="mt-8 ml-8 text-xl font-bold text-gray-400">
        Select a Pin Point
      </Text>
      <View className="mt-10 p-4">
        <View className="w-full relative rounded-3xl overflow-hidden">
          <Image
            source={require("../../assets/map.png")}
            resizeMode="cover"
            className="w-full"
          />
          <Animated.View
            entering={FadeIn}
            className="absolute top-44 left-[165px] items-center"
          >
            <Pressable onPress={() => handlePinClick("Laguna")}>
              <Entypo name="location-pin" size={30} color="#2980B9" />
            </Pressable>
            <Text className="text-[8px]">Laguna</Text>
          </Animated.View>
          <Animated.View
            entering={FadeIn.delay(100)}
            className="absolute top-[162px] left-[123px] items-center"
          >
            <Pressable onPress={() => handlePinClick("Manila")}>
              <Entypo name="location-pin" size={30} color="#2980B9" />
            </Pressable>
            <Text className="text-[8px]">Manila</Text>
          </Animated.View>
          <Animated.View
            entering={FadeIn.delay(300)}
            className="absolute top-[440px] left-[190px] items-center"
          >
            <Pressable onPress={() => handlePinClick("Dapitan")}>
              <Entypo name="location-pin" size={30} color="#2980B9" />
            </Pressable>
            <Text className="text-[8px]">Dapitan</Text>
          </Animated.View>
          <Animated.View
            entering={FadeIn.delay(500)}
            className="absolute top-[377px] left-[205px] items-center"
          >
            <Pressable onPress={() => handlePinClick("Dumaguete")}>
              <Entypo name="location-pin" size={30} color="#2980B9" />
            </Pressable>
            <Text className="text-[8px]">Dumaguete</Text>
          </Animated.View>
          <Animated.View
            entering={FadeIn.delay(700)}
            className="absolute top-[130px] left-[90px] items-center"
          >
            <Pressable onPress={() => handlePinClick("Pampanga")}>
              <Entypo name="location-pin" size={30} color="#2980B9" />
            </Pressable>
            <Text className="text-[8px]">Pampanga</Text>
          </Animated.View>
          <Animated.View
            entering={FadeIn.delay(900)}
            className="absolute top-[125px] left-[130px] items-center"
          >
            <Pressable onPress={() => handlePinClick("Bulacan")}>
              <Entypo name="location-pin" size={30} color="#2980B9" />
            </Pressable>
            <Text className="text-[8px]">Bulacan</Text>
          </Animated.View>
          <Animated.View
            entering={FadeIn.delay(1100)}
            className="absolute top-72 left-[190px]  items-center"
          >
            <Pressable onPress={() => handlePinClick("Iloilo")}>
              <Entypo name="location-pin" size={30} color="#2980B9" />
            </Pressable>
            <Text className="text-[8px]">Iloilo</Text>
          </Animated.View>
          <Animated.View
            entering={FadeIn.delay(1300)}
            className="absolute top-80 left-[250px]  items-center"
          >
            <Pressable onPress={() => handlePinClick("Cebu")}>
              <Entypo name="location-pin" size={30} color="#2980B9" />
            </Pressable>
            <Text className="text-[8px]">Cebu</Text>
          </Animated.View>
          <Animated.View
            entering={FadeIn.delay(1500)}
            className="absolute top-[170px] left-[141px] items-center"
          >
            <Pressable onPress={() => handlePinClick("Cavite")}>
              <Entypo name="location-pin" size={30} color="#2980B9" />
            </Pressable>
            <Text className="text-[8px]">Cavite</Text>
          </Animated.View>
          <Animated.View
            entering={FadeIn.delay(1700)}
            className="absolute top-[350px] left-[266px]  items-center"
          >
            <Pressable onPress={() => handlePinClick("Bohol")}>
              <Entypo name="location-pin" size={30} color="#2980B9" />
            </Pressable>
            <Text className="text-[8px]">Bohol</Text>
          </Animated.View>
          <Animated.View
            entering={FadeIn.delay(1900)}
            className="absolute top-[135px] left-[152px]  items-center"
          >
            <Pressable onPress={() => handlePinClick("Antipolo")}>
              <Entypo name="location-pin" size={30} color="#2980B9" />
            </Pressable>
            <Text className="text-[8px]">Antipolo</Text>
          </Animated.View>
          <Animated.View
            entering={FadeIn.delay(2100)}
            className="absolute top-[110px] left-[110px]  items-center"
          >
            <Pressable onPress={() => handlePinClick("Tarlac")}>
              <Entypo name="location-pin" size={30} color="#2980B9" />
            </Pressable>
            <Text className="text-[8px]">Tarlac</Text>
          </Animated.View>
        </View>
      </View>
    </View>
  );
}
