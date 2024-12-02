import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import Header from "../../../../components/ui/Header";

export default function C() {
  return (
    <View className="flex-1">
      <Header title="C. Nostalgic Historian" />
      <ScrollView className="flex-1 p-4 space-y-4">
        <Text className="font-bold">The Philippines a Century Hence</Text>
        <Image
          source={require("../../../../assets/chapter6-f6.png")}
          className="w-40 h-60 rounded-3xl mt-2 self-center"
          resizeMode="stretch"
        />
        <View className="flex-row space-x-2 ml-4">
          <Text>
            A plant I am, that scarcely grown, Was torn from out its Eastern
            bed, Where all around perfume is shed, And life but as a dream is
            known; The land that I can call my own, By me forgotten ne’er to be,
            Where trilling birds their song taught me, And cascades with their
            ceaseless roar, And all along the spreading shore The murmurs of the
            sounding sea. While yet in childhood’s happy day, I learned upon its
            sun to smile,
          </Text>
        </View>
        <View className="flex-row space-x-2 ml-4">
          <Text>
            And in my breast there seemed the while Seething volcanic fires to
            play; A bard I was, and my wish alway To call upon the fleeting
            wind, With all the force of verse and mind: “Go forth, and spread
            around its fame, From zone to zone with glad acclaim, And earth to
            heaven together bind!”
          </Text>
        </View>
        <Text className="font-bold">Sucesos de las Islas filipinas</Text>
        <View className="flex-row space-x-2 ml-4">
          <Text>
            - Sucesos de las Islas Filipinas (English: Events in the Philippine
            Islands) is a book written and published by Antonio de Morga
            considered one of the most important works on the early history of
            the Spanish colonization of the Philippines. It was published in
            1609 after he was reassigned to Mexico in two volumes by Casa de
            Geronymo Balli, in Mexico City. The first English translation was
            published in London in 1868 and another English translation by Blair
            and Robertson was published in Cleveland in 1907.
          </Text>
        </View>
        <View className="flex-row space-x-2 ml-4">
          <Text>
            - The work greatly impressed the Philippine national hero José Rizal
            and decided to annotate it and publish a new edition and began
            working on it in London and completing it in Paris in 1890
          </Text>
        </View>
        <Text className="font-bold">HISTORY</Text>
        <View className="flex-row space-x-2 ml-4">
          <Text>
            - Antonio de Morga's Sucesos de las Islas Filipinas has been
            recognized as a first-hand account of Spanish colonial ventures in
            Asia during the 16th century. The book was first published in Mexico
            in 1609 and has been re-edited a number of times. The Hakluyt
            Society, a text publication society, in 1851 caught its attention,
            and an edition was prepared by H. E. J. Stanley but was only
            published in 1868.
          </Text>
        </View>
        <View className="flex-row space-x-2 ml-4 mb-10">
          <Text>
            - Sucesos de las Islas Filipinas is based on Antonio de Morga's
            personal experiences and other documentations from eye-witnesses of
            the events such as the survivors of Miguel López de Legazpi's
            Philippine expedition.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
