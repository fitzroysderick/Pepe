import React, { useState } from "react";
import { View, Text, Image, Pressable } from "react-native";

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
          <View className="absolute top-44 left-40 items-center">
            <Pressable onPress={() => handlePinClick("Laguna")}>
              <Entypo name="location-pin" size={30} color="#2980B9" />
            </Pressable>
            <Text className="text-[8px]">Laguna</Text>
          </View>
          <View className="absolute top-[120px] left-[140px] items-center">
            <Pressable onPress={() => handlePinClick("Manila")}>
              <Entypo name="location-pin" size={30} color="#2980B9" />
            </Pressable>
            <Text className="text-[8px]">Manila</Text>
          </View>
          <View className="absolute top-[440px] left-[190px] items-center">
            <Pressable onPress={() => handlePinClick("Dapitan")}>
              <Entypo name="location-pin" size={30} color="#2980B9" />
            </Pressable>
            <Text className="text-[8px]">Dapitan</Text>
          </View>
          <View className="absolute top-[377px] left-[205px] items-center">
            <Pressable onPress={() => handlePinClick("Dumaguete")}>
              <Entypo name="location-pin" size={30} color="#2980B9" />
            </Pressable>
            <Text className="text-[8px]">Dumaguete</Text>
          </View>
          <View className="absolute top-[130px] left-[100px] items-center">
            <Pressable onPress={() => handlePinClick("Pampanga")}>
              <Entypo name="location-pin" size={30} color="#2980B9" />
            </Pressable>
            <Text className="text-[8px]">Pampanga</Text>
          </View>
          <View className="absolute top-40 left-[130px] items-center">
            <Pressable onPress={() => handlePinClick("Bulacan")}>
              <Entypo name="location-pin" size={30} color="#2980B9" />
            </Pressable>
            <Text className="text-[8px]">Bulacan</Text>
          </View>
          <View className="absolute top-72 left-[190px]  items-center">
            <Pressable onPress={() => handlePinClick("Iloilo")}>
              <Entypo name="location-pin" size={30} color="#2980B9" />
            </Pressable>
            <Text className="text-[8px]">Iloilo</Text>
          </View>
          <View className="absolute top-80 left-[250px]  items-center">
            <Pressable onPress={() => handlePinClick("Cebu")}>
              <Entypo name="location-pin" size={30} color="#2980B9" />
            </Pressable>
            <Text className="text-[8px]">Cebu</Text>
          </View>
          <View className="absolute top-[170px] left-[141px] items-center">
            <Pressable onPress={() => handlePinClick("Cavite")}>
              <Entypo name="location-pin" size={30} color="#2980B9" />
            </Pressable>
            <Text className="text-[8px]">Cavite</Text>
          </View>
          <View className="absolute top-[350px] left-[266px]  items-center">
            <Pressable onPress={() => handlePinClick("Bohol")}>
              <Entypo name="location-pin" size={30} color="#2980B9" />
            </Pressable>
            <Text className="text-[8px]">Bohol</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
