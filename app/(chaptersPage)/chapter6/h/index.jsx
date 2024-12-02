import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import Header from "../../../../components/ui/Header";

export default function H() {
  return (
    <View className="flex-1">
      <Header title="H. Trial and Execution" />
      <ScrollView className="flex-1 p-4 space-y-4">
        <Text className="font-bold">Trial and Execution</Text>
        <Image
          source={require("../../../../assets/chapter6-f41.png")}
          className="w-40 h-40 rounded-3xl mt-2 self-center"
        />
        <View className="flex-row space-x-2 ml-4">
          <Text>
            - On november 20, 1896, the assigned judge to summon Rizal was
            Colonel Francisco Olive, and advocate to the Spanish Military
            Tribunal.
          </Text>
        </View>
        <View className="flex-row space-x-2 ml-4">
          <Text>
            - Oral testimonies were taken and were used to implicate Rizal in
            the Philippine Revolution. He was accused of being the main
            organizer of the revolution by having profilerated the ideas of
            rebellion and of founding an illegal organization.
          </Text>
        </View>
        <Image
          source={require("../../../../assets/chapter6-f42.png")}
          className="w-40 h-40 rounded-3xl mt-2 self-center"
        />
        <View className="flex-row space-x-2 ml-4">
          <Text>
            - Rizal’s lawyer, Lt. Luis Taviel de Andrade, tried his best to save
            rizal. Rizal was charged with 3 crimes:
          </Text>
        </View>
        <View className="flex-row space-x-2 ml-4">
          <Text>
            - Rebellion, sedition, and formation of illegal association, In
            defending himself, Rizal presented 12 arguments. However,on December
            26, 1896, the trial ended and the sentence was read. Jose Rizal was
            found guilty and sentenced to death by firing squad. On December 28,
            1896, Governor-General Camilo de Polaveija, signed the court
            decision. He later decreed that Rizal would be executed by firing
            squad at 7:00 am, of December 30, Bagumbayan. Rizal signed the
            decree saying that he was innocent.
          </Text>
        </View>
        <Text className="font-bold">RIZAL’S FINAL DAYS</Text>
        <View className="flex-row space-x-2 ml-4">
          <Text>
            - Rizal was transferred to the prison chapel. Fr. Miguel Saddera
            Mata, Rector of the Ateneo Municipal and Fr. Luis Visa. Fr. Antonio
            Rosell, ate breakfast with Rizal. Lt. Taviel de Andrade also arrived
            and Rizal thanked him for his gallant services. Fr. Balaguer stayed
            until noon but when he went back in the afternoon, he tried to
            persuade Rizal to retract his masonic beliefs. Rizal remained firm.
          </Text>
        </View>
        <View className="flex-row space-x-2 ml-4">
          <Text>
            - When his mother and sisters visited him on December 29, 1896,
            Rizal gave away his remaining possessions. He handed his gas lamp to
            his sister Trinidad and murmured softly in English , “there’s
            something inside”. Eventually, Training and her sister Maria would
            extract from the lamp the copy of Rizal’s last poem. Rizal on his
            last remaining days, composed his longest poem Mi ultimo adios,
            which was about his farewell to the Filipino people.
          </Text>
        </View>
        <View className="flex-row space-x-2 ml-4">
          <Text>
            - Rizal also told his sisters to look inside his shoes after he was
            executed. At 5 am, Rizal had his last breakfast and autographed his
            remaining books that became his last souvenirs. Afterwards, he wrote
            3 farewell letters to his parents, Dr. Bluementritt, and his older
            brother Paciano. At 6:30 in the morning of December 30, 1896, Rizal
            in a black suit with his arm tied behind his back, walked to
            Bagumbayan.
          </Text>
        </View>
        <View className="flex-row space-x-2 ml-4">
          <Text>
            - Rizal requested to spare his head which was granted. He also
            requested to be shot in the front but was denied. Dr. Felipe Ruiz
            Castillo took his pulse and found out that it was normal. The orders
            were given and shots were fired. Consummatum Est! (“It is
            Finished!”) Rizal died offering his life for his country and its
            freedom.
          </Text>
        </View>
        <View className="flex-row space-x-2 ml-4">
          <Text>
            - The Spanish spectator shouted “Viva España!”. Rizal’s body was
            secretly buried at Paco Cemetery where it was later traced by his
            sister. The remains of Rizal were cleaned in Higino Mercado’s house
            in Binondo and were later given to Doña Teodora. His remains were
            laid to rest inside the monument in Luneta. Not all are buried,
            Rizal’s vertebra is in Rizal Shrine.
          </Text>
        </View>
        <Text className="font-bold">
          Rizal’s Execution in Bagumbayan (December 30, 1896)
        </Text>
        <Image
          source={require("../../../../assets/chapter6-f43.png")}
          className="w-full h-60 rounded-3xl mb-10"
        />
      </ScrollView>
    </View>
  );
}
