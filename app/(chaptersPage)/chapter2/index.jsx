import React from "react";
import { View, Text, Pressable, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

import { Ionicons } from "@expo/vector-icons";

export default function Chapter2() {
  return (
    <SafeAreaView className="flex-1">
      <View className="h-full gap-y-4">
        <View className="bg-[#2980B9] px-4 pt-4 pb-8 rounded-b-3xl">
          <View className="flex-row items-center gap-x-2 mt-8">
            <Pressable onPress={() => router.push("chapters")}>
              <Ionicons
                name="arrow-back-circle-outline"
                size={30}
                color="#FFFF"
              />
            </Pressable>
            <Text className="text-2xl font-bold text-white">Chapter 2</Text>
          </View>
        </View>
        <ScrollView className="h-full px-4 space-y-4">
          <Image
            source={require("../../../assets/c2.png")}
            className="w-full h-60 rounded-3xl"
          />
          <Text className="text-3xl font-bold">
            Concept of Heroism and Choosing a National Hero(Why is Rizal our
            National Hero?)
          </Text>
          <View className="space-y-4">
            <Text className="text-sm font-semibold">What is Heroism?</Text>
            <View className="flex-row space-x-2">
              <Text>-</Text>
              <Text className="text-sm">
                Heroism comes from the Greek word heroes, which is referred to
                as a demigod. As someone who shows great courage and valor is
                referred to as a hero, their actions are considered to be acts
                of heroism.
              </Text>
            </View>
            <View className="flex-row space-x-2">
              <Text>-</Text>
              <Text className="text-sm">
                Heroism is the quality of exhibiting exceptional courage,
                selflessness, and sacrifice in the face of challenges or danger.
              </Text>
            </View>
          </View>
          <View className="space-y-4">
            <Text className="text-sm font-semibold">
              What is a National Hero?
            </Text>
            <View className="flex-row space-x-2">
              <Text>-</Text>
              <Text className="text-sm">
                A National Hero is someone who beyond that has made significant
                positive contributions to the growth and development of society,
                and represents all of us.
              </Text>
            </View>
            <View className="flex-row space-x-2">
              <Text>-</Text>
              <Text className="text-sm">
                A national hero is someone who is widely admired and celebrated
                for their significant contributions to their country's
                well-being, often in the realms of history, culture, politics,
                or social change. The process of choosing a national hero
                involves considering their impact, character, and legacy, along
                with their ability to inspire and unite the nation.
              </Text>
            </View>
          </View>
          <Text className="text-sm">
            Heroes are those who help to define and contribute to a country’s
            system of liberty and order. As a result, the heroes are those who
            create the country’s constitution and laws. A hero is a person who
            exemplifies goodness. Jose Rizal utilized goodness to provide us
            freedom. He became a national hero as he fought for freedom for all
            filipinos.
          </Text>
          <Text className="text-sm">
            In the history of heroism, Jose Rizal is an outlier. He was a
            scientist, a scholar, and a writer, and he was regarded as a model
            son and a ladies’ man by many young filipinos. Jose Rizal is
            recognized as a hero, which is a prominent or central individual who
            plays an exceptional part in any notable action or event, a person
            of amazing heroism or enterprise in danger, a man who is honored by
            public worship after death for significant service to mankind. Jose
            Rizal was declared a national hero of the Philippines because he met
            the criteria of being the first Filipino to inspire and push the
            entire country to unify as a single race and revolt against the
            Spaniards, as well as having a moral character that respects all
            filipinos. As proven by his services to the people, he has his
            sensitivity to respond to the needs of others.
          </Text>
          <Text className="text-sm">
            Jose Rizal became the Philippines' national hero because he battled
            for freedom in a quiet but effective manner. Instead of using
            violence or hostility, he wrote books, essays, and articles to show
            his love for the Philippines. He was a very remarkable individual
            for his period. He was modest, preferring to speak out in favor of
            improvements using his words rather than starting a revolution. He
            used his intellect, skills, and abilities in a more peaceful manner
            than behaving violently. To analyze the life of Jose Rizal, this
            chapter will outline and discuss his personal life and his public
            contribution.
          </Text>
          <Image
            source={require("../../../assets/chapter2-img1.png")}
            className="w-full h-60 rounded-3xl"
          />
          <Text className="text-sm">
            Born in Calamba on June 19, 1861, and passing away in Manila on
            December 30, 1896, José Rizal was a Filipino nationalist, physician,
            and author. His full name is{" "}
            <Text className="font-bold">
              José Protasio Rizal Mercado y Alonso Realonda.
            </Text>{" "}
          </Text>
          <Text>
            The son of a wealthy landowner, Rizal attended school in Manila and
            the University of Madrid. He was a brilliant medical student who
            soon committed himself to modifying Spanish colonial rule in the
            Philippines while never advocating for independence. He spent the
            most of his writing time in Europe between 1882 and 1892, where he
            also lived (Rizal, 2023). Noli Me Tangere, Rizal's debut book, which
            vehemently criticized Spanish colonial governance in the
            Philippines, was released in 1887. El Filibusterismo (1891), a
            sequel about the "reign of greed," cemented his position as the
            leading voice of the Philippine reform movement. He released an
            annotated edition (1890, republished 1958) of Antonio Morga’s
            Sucesos de las Islas Filipinas, intending to illustrate that the
            native inhabitants of the Philippines had a lengthy history before
            the entrance of the Spaniards. He became the leader of the
            Propaganda Movement, writing several pieces to its publication, La
            Solidaridad, published in Barcelona.
          </Text>
          <View className="space-y-2">
            <Text className="font-bold">
              Noli Me Tangere, El Filibusterismo
            </Text>
            <Image
              source={require("../../../assets/chapter2-noli-el.png")}
              className="w-full h-60 rounded-3xl"
            />
            <Text>
              The inclusion of the Philippines as a province of Spain,
              representation in the Cortes (the Spanish parliament), the
              substitution of Filipino priests for Spanish friars, freedom of
              assembly and speech, and legal equality between Filipinos and
              Spaniards were all part of Rizal's political platform. Rizal
              returned to the Philippines in 1892. Before being exiled to
              Dapitan in northwest In Mindanao, he founded the Liga Filipina, a
              nonviolent reform group. He remained in exile for the next four
              years. A secret club of Filipino nationalists called the Katipunan
              revolted against Spain in 1896. Rizal was detained and put on
              trial for sedition by the military despite the fact that he had no
              ties to that group and had not participated in the uprising. He
              was publicly killed by a firing squad in Manila after being found
              guilty. His sacrifice persuaded the Filipinos that breaking away
              from Spain was their only option. While imprisoned in Fort
              Santiago on the eve of his death, Rizal composed "Ultimo adiós," a
              classic of 19th-century Spanish lyricism, often known as "Last
              Farewell".
            </Text>
          </View>
          <View className="space-y-2">
            <Text className="font-bold">Jose Rizal’s Mi Ultimo Adios</Text>
            <Image
              source={require("../../../assets/chapter2-f2.png")}
              className="w-full h-60 rounded-3xl"
            />
            <Text>
              Through his literary works, Dr. José Rizal, the revered national
              hero of the Philippines, expressed his vehement opposition to the
              mistreatment of Spaniards and transmitted messages that He
              believed would motivate his fellow citizens. We compile his finest
              works and analyze their underlying themes. Today, Rizal's literary
              creations specifically, his two novels remain relevant and are
              still being studied by academics and other experts.
            </Text>
          </View>
          <View className="space-y-2">
            <Text className="font-bold">
              Why is Jose Rizal our National Hero?
            </Text>
            <Image
              source={require("../../../assets/chapter2-f3.png")}
              className="w-full h-60 rounded-3xl"
            />
            <View className="flex-row space-x-2">
              <Text>-</Text>
              <View className="space-y-2">
                <Text className="text-sm">
                  A hero symbolizes goodness. Rizal gave us freedom by using
                  goodness. Jose Rizal became the Philippine national hero
                  because he fought for freedom in a silent but powerful way. He
                  expressed his love for the Philippines through his novels,
                  essays and articles rather than through the use of force or
                  aggression. He was a very amazing person at his time. He was
                  humble, fighting for reforms through his writings instead of
                  through a revolution. He used his intelligence, talents and
                  skills in a more peaceful way rather than the aggressive way.
                </Text>
                <Text className="text-sm">
                  Rizal is an American-sponsored hero: he opted for a non
                  violence reform in the government. Instead he used his
                  writings to open the eyes of the Filipinos. He dedicated his
                  life for his countrymen without hesitation.
                </Text>
                <Text className="text-sm">
                  He was known for his meekness and coolness, but he never
                  fought in a war. Most of the world Heroes were elevated as
                  such because of their war exploits. Rizal never did it. He was
                  using his pen for criticism about the handling of the Spanish
                  government in the Philippines. He fought to have the
                  Philippines a permanent representation in the Spanish Cortes.
                  That's why when the US accepted the Philippines as a vassal
                  country, Gen. Taft, who was the Governor general here,
                  appointed Jose Rizal as the National Hero for the Philippines,
                  to douse the fighting fervor of the Filipinos who were
                  fighting for freedom at that time.
                </Text>
                <Text className="text-sm">
                  The Americans decided for him to be a national hero during
                  their time in the country. It is said that the Americans,
                  Civil Governor William Howard Taft, chose Jose Rizal to be the
                  national hero as a strategy. Rizal didn't want a bloody
                  revolution in his time. So they wanted him to be a "good
                  example" to the Filipinos so that the people will not revolt
                  against the Americans. Rizal became a National Hero because he
                  passed the criteria by being a National Hero during the
                  American period.
                </Text>
              </View>
            </View>
          </View>
          <View className="space-y-2">
            <Text className="font-bold">
              Adding that, Rizal passed Criteria for National Heroes
            </Text>
            <Text>
              1. Heroes are those who have a concept of nation and thereafter
              aspire and struggle for the nation’s freedom. In reality, however,
              a revolution has no end. Revolutions are only the beginning. One
              cannot aspire to be free only to sink back into bondage.
            </Text>
            <Text>
              2. Heroes are those who define and contribute to a system or life
              of freedom and order for a nation. Freedom without order will only
              lead to anarchy. Therefore, heroes are those who make the nation’s
              constitution and laws. To the latter, constitutions are only the
              beginning, for it is the people living under the constitution that
              truly constitute a nation.
            </Text>
            <Text>
              3. Heroes are those who contribute to the quality of life and
              destiny of a nation. (As defined by Dr. Onofre D. Corpuz).
            </Text>
          </View>
          <View className="space-y-2">
            <Text className="font-bold">Additional Criteria for Heroes</Text>
            <Text>
              1. A hero is part of the people’s expression. But the process of a
              people’s internalization of a hero’s life and works takes time,
              with the youth forming a part of the internalization.
            </Text>
            <Text>
              2. A hero thinks of the future, especially the future generations.
            </Text>
            <Text>
              3. The choice of a hero involves not only the recounting of an
              episode or events in history, but of the entire process that made
              this particular person a hero.
            </Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
