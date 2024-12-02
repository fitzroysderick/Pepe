import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import Header from "../../../../components/ui/Header";

export default function E() {
  return (
    <View className="flex-1">
      <Header title="E. From Hong Kong to Exile in Dapitan (1891-1892)" />
      <ScrollView className="flex-1 p-4 space-y-4">
        <Text className="font-bold">LA LIGA FILIPINA</Text>
        <Image
          source={require("../../../../assets/chapter6-f8.png")}
          className="w-full h-60 rounded-3xl"
        />
        <View className="flex-row space-x-2 ml-4">
          <Text>
            - La Liga Filipina (lit. 'The Philippine League') was a secret
            society. It was founded by José Rizal in the house of Doroteo
            Ongjunco at Ilaya Street, Tondo, Manila on July 3, 1892.
          </Text>
        </View>
        <View className="flex-row space-x-2 ml-4">
          <Text>
            - The organization derived from La Solidaridad and the Propaganda
            movement.The purpose of La Liga Filipina was to build a new group
            that sought to involve the people directly in the reform movement.
            The league was to be a sort of mutual aid and self-help society
            dispensing scholarship funds and legal aid, loaning capital and
            setting up cooperatives, the league became a threat to Spanish
            authorities that they arrested Rizal on July 6, 1892, then he was
            sent to Dapitan.
          </Text>
        </View>
        <View className="flex-row space-x-2 ml-4">
          <Text>
            - During the exile of Rizal, the organization became inactive,
            though through the efforts of Domingo Franco and Andrés Bonifacio,it
            was reorganized. The organization decided to declare its support for
            La Solidaridad and the reforms it advocated, raise funds for the
            paper, and defray the expenses of deputies advocating reforms for
            the country before the Spanish Cortes. Eventually after some
            disarray in the leadership of the group, the Supreme Council of the
            League dissolved the society.
          </Text>
        </View>
        <View className="flex-row space-x-2 ml-4">
          <Text>
            - Liga membership split into two groups when it was about to be
            revealed: the conservatives formed the Cuerpo de Compromisarios
            which pledged to continue supporting the La Solidaridad while the
            radicals led by Bonifacio devoted themselves to a new and secret
            society, the Katipunan.
          </Text>
        </View>
        <Text className="font-bold">AIMS</Text>
        <View className="flex-row space-x-2 ml-4">
          <Text>
            - To unite the whole archipelago into one vigorous and homogeneous
            organization Mutual protection in every want and necessity Defense
            against all violence and injustice Encouragement of
            instruction,agriculture, and commerce Study the application of
            reforms.
          </Text>
        </View>
        <Text className="font-bold">Members of the La liga Filipina</Text>
        <View
          style={{
            elevation: 5,
          }}
          className="bg-white rounded-xl p-2"
        >
          <View className="flex-row gap-x-2">
            <Image
              source={require("../../../../assets/chapter6-f9.png")}
              className="w-28 h-28 rounded-xl"
            />
            <Text className="flex-shrink">Jose P. Rizal, Founder</Text>
          </View>
        </View>
        <View
          style={{
            elevation: 5,
          }}
          className="bg-white rounded-xl p-2"
        >
          <View className="flex-row gap-x-2">
            <Image
              source={require("../../../../assets/chapter6-f10.png")}
              className="w-28 h-28 rounded-xl"
            />
            <Text className="flex-shrink">
              Ambrosio Salvador, President of the League
            </Text>
          </View>
        </View>
        <View
          style={{
            elevation: 5,
          }}
          className="bg-white rounded-xl p-2"
        >
          <View className="flex-row gap-x-2">
            <Image
              source={require("../../../../assets/chapter6-f11.png")}
              className="w-28 h-28 rounded-xl"
            />
            <Text className="flex-shrink">Agustín de la Rosa, Fiscal</Text>
          </View>
        </View>
        <View
          style={{
            elevation: 5,
          }}
          className="bg-white rounded-xl p-2"
        >
          <View className="flex-row gap-x-2">
            <Image
              source={require("../../../../assets/chapter6-f12.png")}
              className="w-28 h-28 rounded-xl"
            />
            <Text className="flex-shrink">Bonifacio Arévalo, treasurer</Text>
          </View>
        </View>
        <View
          style={{
            elevation: 5,
          }}
          className="bg-white rounded-xl p-2"
        >
          <View className="flex-row gap-x-2 flex-shrink">
            <Image
              source={require("../../../../assets/chapter6-f13.png")}
              className="w-28 h-28 rounded-xl"
            />
            <Text className="flex-shrink">
              Deodato Arellano, First Supreme Leader of Katipunan
            </Text>
          </View>
        </View>

        <Text className="font-bold">Exile of Rizal</Text>
        <View
          style={{
            elevation: 5,
          }}
          className="bg-white rounded-xl p-2"
        >
          <View className="flex-row gap-x-2">
            <Image
              source={require("../../../../assets/chapter6-f14.png")}
              className="w-28 h-28 rounded-xl"
            />
            <Text className="flex-shrink">
              Domingo Franco, president and supreme leader
            </Text>
          </View>
        </View>
        <View
          style={{
            elevation: 5,
          }}
          className="bg-white rounded-xl p-2"
        >
          <View className="flex-row gap-x-2">
            <Image
              source={require("../../../../assets/chapter6-f15.png")}
              className="w-28 h-28 rounded-xl"
            />
            <Text className="flex-shrink">
              Deodato Arellano, Secretary-Treasurer
            </Text>
          </View>
        </View>
        <View
          style={{
            elevation: 5,
          }}
          className="bg-white rounded-xl p-2"
        >
          <View className="flex-row gap-x-2">
            <Image
              source={require("../../../../assets/chapter6-f16.png")}
              className="w-28 h-28 rounded-xl"
            />
            <Text className="flex-shrink">Apolinario Mabini, Secretary</Text>
          </View>
        </View>
        <View
          style={{
            elevation: 5,
          }}
          className="bg-white rounded-xl p-2"
        >
          <View className="flex-row gap-x-2">
            <Image
              source={require("../../../../assets/chapter6-f17.png")}
              className="w-28 h-28 rounded-xl"
            />
            <Text className="flex-shrink">
              Marcelo H. del Pilar, editor-in-chief
            </Text>
          </View>
        </View>
        <View
          style={{
            elevation: 5,
          }}
          className="bg-white rounded-xl p-2"
        >
          <View className="flex-row gap-x-2">
            <Image
              source={require("../../../../assets/chapter6-f32.png")}
              className="w-28 h-28 rounded-xl"
            />
            <Text className="flex-shrink">
              Graciano López-Jaena, former editor-in-chief
            </Text>
          </View>
        </View>

        <Text className="font-bold">Other members</Text>
        <View
          style={{
            elevation: 5,
          }}
          className="bg-white rounded-xl p-2"
        >
          <View className="flex-row gap-x-2">
            <Image
              source={require("../../../../assets/chapter6-f18.png")}
              className="w-28 h-28 rounded-xl"
            />
            <Text className="flex-shrink">
              Andrés Bonifacio, supreme leader of Katipunan and led the Cry of
              Pugad Lawin
            </Text>
          </View>
        </View>
        <View
          style={{
            elevation: 5,
          }}
          className="bg-white rounded-xl p-2"
        >
          <View className="flex-row gap-x-2">
            <Image
              source={require("../../../../assets/chapter6-f19.png")}
              className="w-28 h-28 rounded-xl"
            />
            <Text className="flex-shrink">
              Mamerto Natividad, one of the leaders of the revolution in Nueva
              Ecija
            </Text>
          </View>
        </View>
        <View
          style={{
            elevation: 5,
          }}
          className="bg-white rounded-xl p-2"
        >
          <View className="flex-row gap-x-2">
            <Image
              source={require("../../../../assets/chapter6-f20.png")}
              className="w-28 h-28 rounded-xl"
            />
            <Text className="flex-shrink">
              Moises Salvador, master of lodge of the mason in Balagtas
            </Text>
          </View>
        </View>
        <View
          style={{
            elevation: 5,
          }}
          className="bg-white rounded-xl p-2"
        >
          <View className="flex-row gap-x-2">
            <Image
              source={require("../../../../assets/chapter6-f21.png")}
              className="w-28 h-28 rounded-xl"
            />
            <Text className="flex-shrink">
              Numeriano Adriano, chief guard of lodge of the mason in Balagtas
            </Text>
          </View>
        </View>
        <View
          style={{
            elevation: 5,
          }}
          className="bg-white rounded-xl p-2"
        >
          <View className="flex-row gap-x-2">
            <Image
              source={require("../../../../assets/chapter6-f22.png")}
              className="w-28 h-28 rounded-xl"
            />
            <Text className="flex-shrink">
              José A. Dizon, master of lodge of the mason in Taliba
            </Text>
          </View>
        </View>
        <View
          style={{
            elevation: 5,
          }}
          className="bg-white rounded-xl p-2"
        >
          <View className="flex-row gap-x-2">
            <Image
              source={require("../../../../assets/chapter6-f23.png")}
              className="w-28 h-28 rounded-xl"
            />
            <Text className="flex-shrink">
              Ambrosio Rianzares Bautista, war adviser during First Philippine
              Republic, author of Philippine Declaration of Independence
            </Text>
          </View>
        </View>
        <View
          style={{
            elevation: 5,
          }}
          className="bg-white rounded-xl p-2"
        >
          <View className="flex-row gap-x-2">
            <Image
              source={require("../../../../assets/chapter6-f24.png")}
              className="w-28 h-28 rounded-xl"
            />
            <Text className="flex-shrink">
              Marcelino de Santos, bidder y assistant of La Solidaridad
            </Text>
          </View>
        </View>
        <View
          style={{
            elevation: 5,
          }}
          className="bg-white rounded-xl p-2"
        >
          <View className="flex-row gap-x-2">
            <Image
              source={require("../../../../assets/chapter6-f25.png")}
              className="w-28 h-28 rounded-xl"
            />
            <Text className="flex-shrink">
              Paulino Zamora, master of lodge of the mason in Lusong
            </Text>
          </View>
        </View>
        <View
          style={{
            elevation: 5,
          }}
          className="bg-white rounded-xl p-2"
        >
          <View className="flex-row gap-x-2">
            <Image
              source={require("../../../../assets/chapter6-f26.png")}
              className="w-28 h-28 rounded-xl"
            />
            <Text className="flex-shrink">Procopio Bonifacio</Text>
          </View>
        </View>
        <View
          style={{
            elevation: 5,
          }}
          className="bg-white rounded-xl p-2"
        >
          <View className="flex-row gap-x-2">
            <Image
              source={require("../../../../assets/chapter6-f27.png")}
              className="w-28 h-28 rounded-xl"
            />
            <Text className="flex-shrink">
              Juan Zulueta, member of lodge of the mason in Lusong, Member of
              Supreme Council
            </Text>
          </View>
        </View>
        <View
          style={{
            elevation: 5,
          }}
          className="bg-white rounded-xl p-2"
        >
          <View className="flex-row gap-x-2">
            <Image
              source={require("../../../../assets/chapter6-f28.png")}
              className="w-28 h-28 rounded-xl"
            />
            <Text className="flex-shrink">
              Doroteo Ongjunco, member of lodge of the mason in Lusong
            </Text>
          </View>
        </View>
        <View
          style={{
            elevation: 5,
          }}
          className="bg-white rounded-xl p-2"
        >
          <View className="flex-row gap-x-2">
            <Image
              source={require("../../../../assets/chapter6-f29.png")}
              className="w-28 h-28 rounded-xl"
            />
            <Text className="flex-shrink">
              Timoteo Páez, a member of Supreme Council
            </Text>
          </View>
        </View>
        <View
          style={{
            elevation: 5,
          }}
          className="bg-white rounded-xl p-2"
        >
          <View className="flex-row gap-x-2">
            <Image
              source={require("../../../../assets/chapter6-f30.png")}
              className="w-28 h-28 rounded-xl"
            />
            <Text className="flex-shrink">
              Mariano Limjap, financier of La Liga Filipina
            </Text>
          </View>
        </View>
        <View
          style={{
            elevation: 5,
          }}
          className="bg-white rounded-xl p-2"
        >
          <View className="flex-row gap-x-2">
            <Image
              source={require("../../../../assets/chapter6-f31.png")}
              className="w-28 h-28 rounded-xl"
            />
            <Text className="flex-shrink">
              Francisco Nakpil, brother of Julio Nakpila
            </Text>
          </View>
        </View>

        <Text>
          Timoteo Lanuza, stated the desire to dispel the Spanish frail in the
          Philippine in 1889.
        </Text>
        <Text className="mb-10">
          Arcadio del Rosario, publicist of lodge of the mason in Balagtas.
        </Text>
      </ScrollView>
    </View>
  );
}
