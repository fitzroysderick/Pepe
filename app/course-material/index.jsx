import React from "react";
import { View, Text, ScrollView } from "react-native";

import Header from "../../components/ui/Header";

export default function index() {
  return (
    <View className="flex-1">
      <Header title="Course Objectives" />
      <ScrollView className="flex-1 p-4 space-y-4">
        <View className="gap-y-2">
          <Text className="text-xl font-bold">Course Description:</Text>
          <Text>
            This course is a study of the life and writings of Dr. Jose P. Rizal
            and its crucial role behind the making of the Filipino nation. The
            study of his novels and other writings would allow the students a
            view into the historical realities of the Philippines and the world
            in the 19th century and relate them to the contemporary social and
            global situations.
          </Text>
        </View>
        <View className="gap-y-2">
          <Text className="text-xl font-bold">Learning Outcomes (LO):</Text>
          <Text>
            LO1: Higher levels of comprehension (Textual, Visual, etc.)
          </Text>
          <Text>
            LO2: Proficiency in communication: Writing, speaking, and use of new
            technologies.
          </Text>
          <Text>
            LO3: Understanding of basic concepts across the domains of
            knowledge.
          </Text>
          <Text>LO4: Critical, analytical and creative thinking.</Text>
          <Text>
            LO5: Application of different analytical modes (quantitative and
            qualitative, artistic and scientific. Textual and visual,
            experimental, observation, etc.) in tackling problems
            methodologically.
          </Text>
          <Text>LO6: Appreciation of various human conditions.</Text>
          <Text>LO7: Capacity to personally interpret human experience.</Text>
          <Text>
            LO8: Ability to view the contemporary world from both Philippine and
            global perspective.
          </Text>
          <Text>LO9: Self-assuredness in knowing and being a Filipino.</Text>
          <Text>
            LO10: Capacity to reflect critically and shared concerns and think
            of innovative, creative solutions guided by ethical standards.
          </Text>
          <Text>
            LO11: Ability to reflect on moral norms/imperatives as they affect
            individuals and society.
          </Text>
          <Text>LO12: Understanding and respect for human rights.</Text>
          <Text>
            LO13: The ability to contribute personally and meaningfully to the
            country’s development.
          </Text>
          <Text>LO14: Working effectively in a group.</Text>
          <Text>
            LO15: The ability to negotiate the world of technology responsibly.
          </Text>
          <Text>
            LO16: Ability to solve problems (including real world problems)
          </Text>
          <Text>LO17: Knowledge of basic work-related skills.</Text>
        </View>
        <View className="gap-y-2 pb-10">
          <Text className="text-xl font-bold">References:</Text>
          <Text>
            • Agoncillo, Teodoro A. Mangahas, Fe B. (2010). Philippine history
            expanded and updated edition. Quezon City. C & E publishing, Inc.
          </Text>
          <Text>
            • Agoncillo, Teodoro. 1990. History of the filipino people (8th
            Edition). Garotech Publications.
          </Text>
          <Text>
            • Ancheta, Celedonio. 1969. Jose Rizal’s life and his complete
            works. Quezon City. University of the Philippines.
          </Text>
          <Text>
            • Bonoan, Raul SJ. 1994. The Rizal-Pastell’s correspondence. Quezon
            City. Ateneo de Manila University.
          </Text>
          <Text>
            • Coates, Austin. Rizal: 1986. Philippine nationalist and martyr.
            Hongkong. Oxford University Press.
          </Text>
          <Text>
            • De la Costa, Horacio SJ. 1992. Reading in Philippine History.
            Manila. Bookmark.
          </Text>
          <Text>
            • 1961. The trial of Rizal.W. E. Retana’s transcription of the
            official Spanish documents. Quezon City. Ateneo de Manila
            University.
          </Text>
          <Text>
            • Guerrero, León Maria III. 2003 The first Filipino: A biography of
            Jose Rizal. Manila. National Historical Institute of the
            Philippines.
          </Text>
          <Text>
            • Joaquin Nick. 1977. A question of heroes: Essays in criticism on
            ten key figures of Philippine History. Makati Filipinas Foundation.
          </Text>
          <Text>
            • Locsin- Lacson, Ma. Soledad(Translators). 1996. Noli Me Tangere.
            Makati City. Bookmark Inc.
          </Text>
          <Text>
            • Ocampo, Ambeth. 1990. Rizal without the overcoat. Manila. Anvil
            Publishing Inc.
          </Text>
          <Text>
            • Quibuyen, Floro. 1999. A nation aborted: Rizal, American hegemony,
            and Philippine nationalism. Quezon City. Ateneo de Manila
            University. Romero, Ma. Corona, Julieta Sta. Romana and Lourdes
            Santos 1978. Rizal and the development of national consciousness.
            Quezon City. JMC. Press, Schumacher, John. 1999 The Making of a
            nation: Nineteenth Century Philippine nationalism. Quezon City.
            Ateneo de Manila University Press. Zaide, Gregorio F. Zaide, Sonia
            M.1992. Jose Rizal: life, works, and writings of a genuis, writer,
            scientist, and national hero. ALL NATIONS Publishing Co. Inc.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
