import React from "react";
import { View, Text, Modal, Pressable, ScrollView, Image } from "react-native";

import { useMapModal } from "../../hooks/use-map-modal";

import AntDesign from "@expo/vector-icons/AntDesign";

export default function MapModal({ province }) {
  const { isOpen, onClose } = useMapModal((state) => ({
    isOpen: state.isOpen,
    onClose: state.onClose,
  }));

  const modalDesc = () => {
    switch (province) {
      case "Laguna":
        return <LagunaDesc />;
      case "Manila":
        return <ManilaDesc />;
      case "Dapitan":
        return <DapitanDesc />;
      case "Dumaguete":
        return <DumagueteDesc />;
      case "Pampanga":
        return <PampangaDesc />;
      case "Bulacan":
        return <BulacanDesc />;
      case "Iloilo":
        return <IloiloDesc />;
      case "Cebu":
        return <CebuDesc />;
      case "Cavite":
        return <CaviteDesc />;
      case "Bohol":
        return <BoholDesc />;
      case "Antipolo":
        return <AntipoloDesc />;
      case "Tarlac":
        return <TarlacDesc />;
      default:
        break;
    }
  };

  return (
    <Modal
      visible={isOpen}
      animationType="slide"
      transparent
      statusBarTranslucent
    >
      <View className="flex-1 items-center justify-center">
        <View className="w-[90%] h-[70%] p-4 bg-white rounded-xl relative">
          <Pressable onPress={() => onClose()} className="self-end">
            <AntDesign name="close" size={30} color="black" />
          </Pressable>
          <ScrollView showsVerticalScrollIndicator={true}>
            {modalDesc()}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}

const LagunaDesc = () => {
  return (
    <View className="space-y-4">
      <Text className="text-xl font-bold">
        Rizal's Birth and Background in Calamba
      </Text>
      <Text className="mt-2 text-lg">
        Born in Calamba on June 19, 1861, and passing away in Manila on December
        30, 1896, José Rizal was a Filipino nationalist, physician, and author.
        His full name is José Protasio Rizal Mercado y Alonso Realonda. Jose
        Protacio Rizal Mercado y Alonso Realonda (June 19, 1861 – December 30,
        1896) He was born on June 19, 1861, (Wednesday) between 11-12 o’clock
        midnight, a few days before the full moon, in Calamba, Laguna. June 22,
        1861 (3 days after his birth) he was baptized at the Catholic church of
        Calamba by Fr. Rufino Collantes.
      </Text>
      <Text className="mt-2 text-lg">
        His godfather was Pedro Casañas. June 22, 1861 (3 days after his birth)
        he was baptized at the Catholic church of Calamba by Fr. Rufino
        Collantes. His godfather was Pedro Casañas. During the baptismal
        ceremony, Fr. Collantes was impressed by the baby’s big head. And he
        said, “Take good care of this child, for someday he will become a great
        man”. Rizal’s house is One of the distinguished stone houses in Calamba
        during Spanish times. It was a two-storey building, rectangular in
        shape, built of adobe stones and hard-woods, and roofed with red tiles.
      </Text>
      <Text className="mt-2 text-lg">
        First to have a home Library with almost 1,000 volumes, and probably,
        the first to send their children to Manila to study in college. Jose
        Rizal obtained his early schooling at a private school in Biñan, because
        Biñan at that time was famous for its private school. Rizal studied
        under Maestro Justiniano Aquino Cruz, A well-known teacher of young
        boys. Rizal was nine years old when his parents sent to him to study in
        Biñan.
      </Text>
      <View className="space-y-2">
        <Text className="text-lg font-semibold">Rizal Birthplace</Text>
        <Image
          source={require("../../assets/rizal-birthplace.png")}
          className="w-full h-48 rounded-xl"
          resizeMode="stretch"
        />
        <Text className="mt-2 text-lg">
          Rizal remembered many things about the house. The nipa hut in the
          garden was where he sketched and sculpted. In the kitchen he learned
          the alphabet and in the bedroom his prayers. In the library, he
          discovered books and a vast world beyond his hometown.
        </Text>
        <Text className="mt-2 text-lg">
          On the azotea, he listened to his yaya’s stories of skeletons and
          buries treasures, and trees that bloomed with diamonds. The Rizal
          House, now a shrine, recaptures the era of Jose’s boyhood. It is built
          along the architectural style of the Spanish period.
        </Text>
      </View>
      <View className="space-y-2">
        <Text className="text-lg font-semibold">
          Calamba Church where Rizal was baptized
        </Text>
        <Image
          source={require("../../assets/calamba-church.png")}
          className="w-full h-48 rounded-xl"
          resizeMode="stretch"
        />
        <Text className="mt-2 text-lg">
          The original baptismal font was restored including original church
          items and reliquaries during Rizal's time. A transcript of Rizal's
          existing baptismal record is displayed on the left side of the
          baptistery entrance. The original baptismal records including the
          canonical books were lost on September 28, 1862, when Calamba Church
          was burned.
        </Text>
      </View>
      <View className="space-y-2">
        <Text className="text-lg font-semibold">
          The Private School where Rizal went in Elementary
        </Text>
        <Image
          source={require("../../assets/private-school.png")}
          className="w-full h-48 rounded-xl"
          resizeMode="stretch"
        />
        <Text className="mt-2 text-lg">
          It’s well-known that the nine-year-old Jose Rizal went to Biñan,
          Laguna to study under the tutelage of Justiniano Aquino Cruz. From
          their hometown in Calamba, Jose’s brother Paciano accompanied him to
          Biñan where he stayed at the house of their paternal aunt, Tomasa
          Alejandro Mercado.
        </Text>
        <Text className="mt-2 text-lg">
          In 1948, the Philippine Historical Commission placed a National
          Historical Marker in the property, and in the following decade, the
          Gonzales family restored the hut in honor of the famous maestro.
          Unfortunately, when Jacobo’s wife Cresenciana died, the heritage site
          was left to deteriorate.
        </Text>
      </View>
    </View>
  );
};

const ManilaDesc = () => {
  return (
    <View className="space-y-4">
      <Text className="text-xl font-bold">Rizal In Manila</Text>
      <Text className="mt-2 text-lg">
        Rizal studied at the Ateneo, a private high school, and then to the
        University of St. Thomas in Manila. Also in Ateneo De manila When he was
        11 years old, Rizal entered the Ateneo Municipal de Manila. He earned
        excellent marks in subjects like philosophy, physics, chemistry, and
        natural history. At this school, he read novels wrote prize-winning
        poetry and even a melodrama “Junto al Pasig”, practiced drawing,
        painting, and clay modeling, all of which remained lifelong interests
        for him.
      </Text>
      <View className="space-y-4">
        <Text className="text-lg font-semibold">
          Ateneo Municipal de Manila in Rizal’s Time in Highschool
        </Text>
        <Image
          source={require("../../assets/ateneo-manila.png")}
          className="w-full h-48 rounded-xl"
          resizeMode="stretch"
        />
      </View>
      <View className="space-y-4">
        <Text className="text-xl font-bold">Life and Studies in Ateneo</Text>
        <Text className="mt-2 text-lg">
          - Ateneo De Municipal established by the Jesuits
        </Text>
        <Text className="mt-2 text-lg">- Rizal entered in 1872</Text>
        <Text className="mt-2 text-lg">
          - He belonged to the class composed of Spaniards, mestizos and
          Filipinos
        </Text>
        <Text className="mt-2 text-lg">- His teacher was Fr. Jose Bech</Text>
        <Text className="mt-2 text-lg">
          - He was considered as an inferior and was placed at the buttom of the
          class
        </Text>
        <Text className="mt-2 text-lg">
          - By the end of the month he became the emperor and received a prize,
          a religious picture
        </Text>
        <Text className="mt-2 text-lg">
          - To improve his Spanish Rizal took private lessons in Santa Isabel
          College
        </Text>
        <Text className="mt-2 text-lg">
          - During his 4th year in Ateneo he received 5 medals and graduated as
          sobresaliente
        </Text>
        <Text className="mt-2 text-lg">
          - He graduated on March 23, 1877 (16 years old)
        </Text>
        <Text className="mt-2 text-lg">
          - Received the degree of bachelor of arts, with highest honors not a
          valedictiorian
        </Text>
        <View className="space-y-4">
          <Text className="text-xl font-bold">
            Rizal Enters University of Sto.Tomas
          </Text>
          <Text className="mt-2 text-lg">
            After graduating, he continued his education in UST where he
            finished a year in Philosophy and Letters. Then he decided to shift
            to a medical course as the school was under the Dominicanos, rival
            of the Jesuits in education. As a Thomasian, he won more literary
            laurels. During his first term in 1877-1878, he studied Cosmology,
            Metaphysics, Theodicy and History of Philosophy.
          </Text>
        </View>
        <View className="space-y-4">
          <Text className="text-lg font-semibold">
            University of Sto Tomas (1877-1882)
          </Text>
          <Image
            source={require("../../assets/ust-manila.png")}
            className="w-full h-48 rounded-xl"
            resizeMode="stretch"
          />
          <Text className="mt-2 text-lg">
            It was during the school term 1878-1879 that Rizal pursued his
            studies in medicine. Rizal wanted to study medicine because he
            wanted to be a physician so that he could cure his mother's failing
            eyesight.
          </Text>
        </View>
        <View className="space-y-4">
          <Text className="text-xl font-bold">
            Rizal Imprisonment in Fort Santiago
          </Text>
          <Text className="mt-2 text-lg">
            On December 26, 1896, the military court tried Jose Rizal and later
            found him guilty of rebellion, sedition, and conspiracy. The Spanish
            authorities believed that Rizal’s writings “fatally and necessarily”
            incited the rebellion which, by 1896, had already become a
            revolution.
          </Text>
          <View className="space-y-4">
            <Text className="text-lg font-semibold">
              Rizal Statue in Fort Santiago
            </Text>
            <Image
              source={require("../../assets/fortsantiago-manila.png")}
              className="w-full h-48 rounded-xl"
              resizeMode="stretch"
            />
            <Text className="mt-2 text-lg">
              On December 29 at 6 am, Capt. Rafael Dominguez read before Rizal
              his death sentence. His execution was scheduled the following day.
              At around 7 am of December 29, Rizal was transferred to his death
              cell in Fort Santiago. There he received numerous visitors,
              including his counsel, some Spanish officials, and several
              priests, his former professors, with whom he supposedly discussed
              reason and religion.
            </Text>
          </View>
        </View>
        <View className="space-y-4">
          <Text className="text-xl font-bold">Rizal's Final Hours</Text>
          <View className="space-y-4">
            <Image
              source={require("../../assets/bagumbayan-manila.png")}
              className="w-full h-48 rounded-xl"
              resizeMode="stretch"
            />
            <Text className="mt-2 text-lg">
              Rizal was transferred from his cell in Fort Santiago to
              Bagumbayan, where he was executed by firing squad on the morning
              of Dec. 30, 1896. He was 35 years old. Bagumbayan was a known
              execution ground for "rebels and mutineers" against the Spanish
              government from 1823 to 1897, a total of 158 patriots and martyrs
              were executed in Bagumbayan, including Fathers Gomez, Burgos, and
              Zamora. Bagumbayan was later changed to Luneta, then renamed Rizal
              Park.
            </Text>
          </View>
        </View>
        <View className="space-y-4">
          <Text className="text-xl font-bold">Rizal's Burial in Paco Park</Text>
          <View className="space-y-4">
            <Image
              source={require("../../assets/rizalburial-manila.png")}
              className="w-full h-48 rounded-xl"
              resizeMode="stretch"
            />
            <Text className="mt-2 text-lg">
              Before Rizal received a proper burial in Rizal Park, the Spanish
              authorities buried his remains in an unmarked grave in Paco Park,
              then known as the Cementerio General de Dilao (Paco Cemetery). In
              1898, the American authorities allowed his family to exhume his
              remains. His remains were brought to the Rizal's family house on
              Estraude Street in Binondo and kept in an ivory urn until 1912.
              Rizal's remains were eventually transferred to his final resting
              place at the base of the Rizal monument in Rizal Park.
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const DapitanDesc = () => {
  return (
    <View className="space-y-4">
      <Text className="text-xl font-bold">Rizal in Dapitan</Text>
      <Text className="mt-2 text-lg">
        Rizal was brought under a maximum security to the steamer S.S. Cebu
        headed by Capt. Delgras on the 15th of July. Rizal carried a letter by
        Father Pablo Pastells, Superior of the Jesuit Society in the
        Philippines, to Father Antonio Obach, Jesuit misssionary in Dapitan.
        Consequently, he lived in the house of the commandant, Captain Carnicero
        the relations between carnicero and rizal were warm and friendly.
      </Text>
      <Text className="mt-2 text-lg">
        In August 1892, a Spaniard from Manila brought lottery tickets to
        Dapitan. Dr. Jose Rizal, Capt. Ricardo Carnicero, the politico military
        governor of Dapitan at that time and a Spaniard residing in Dipolog
        bought a ticket which luckily won for them 20,000 peso. Rizal’s share
        was 6,200 pesos. He gave 2,000 pesos to his father and 200 pesos to
        Basa, his friend in Hongkong. He invested his remaining winnings in
        business and bought lands and built houses in Talisay which is now the
        Rizal Shrine.
      </Text>
      <View className="space-y-4">
        <Text className="text-lg font-semibold">The House Rizal Built</Text>
        <Image
          source={require("../../assets/house-dapitan.png")}
          className="w-full h-48 rounded-xl"
          resizeMode="stretch"
        />
      </View>
      <View className="space-y-4">
        <Text className="text-xl font-bold">
          Rizal-Pastells Debate on Religion
        </Text>
        <Text className="mt-2 text-lg">
          The debate started when Pastels sent Rizal a book by Sarda along with
          an advice that Rizal should desist from his majaderas (foolishness) in
          viewing religion from the perspective of individual judgement and
          self-esteem. The debate can be read in four letters. Rizal was bitter
          against the friars because they commit abuses under the cloak of
          religion. Father Pastells tired to bring back to Catholicism Rizal by
          telling him that human intelligence is limited, thus he needs the
          guidance of God.
        </Text>
      </View>
      <View className="space-y-4">
        <Text className="text-lg font-semibold">
          Imitacion de Cristo by Fr. Thomas Kempis
        </Text>
        <Image
          source={require("../../assets/book-dapitan.png")}
          className="w-full h-48 rounded-xl"
          resizeMode="stretch"
        />
      </View>
      <View className="space-y-4">
        <Text className="text-xl font-bold">
          Rizal Challenges a Frenchman to a Duel
        </Text>
        <Text className="mt-2 text-lg">
          Mr. Juan Lardet, a French businessman whom Rizal had a conflict.
        </Text>
      </View>
      <View className="space-y-4">
        <Text className="text-xl font-bold">
          Rizal Encounter with the Friar's Spy
        </Text>
        <Text className="mt-2 text-lg">
          Pablo Mercado, assumed name of the spy who visited Rizal at his house
          and pretended to be a relative by showing a photo of Rizal and a pair
          of buttons with the initials P.M. as evidence of kinship. The spy
          offered to be Rizal's courier of letters for the patriots in Manila.
          Rizal became suspicious and wanted to throw the spy outside but
          considering his values and late hour of the night, he offered the spy
          to spend the night at his house. The next day, he went to spy away.
        </Text>
      </View>
      <View className="space-y-4">
        <Text className="text-xl font-bold">Rizal as a Physician</Text>
        <View className="space-y-4">
          <Image
            source={require("../../assets/physician-dapitan.png")}
            className="w-full h-48 rounded-xl"
            resizeMode="stretch"
          />
        </View>
        <Text className="mt-2 text-lg">
          Dona Teodora and Maria lived with Rizal for a year and a half. It is
          here when Rizal operated his mother's right eye. Through the operation
          was succesful, his mother had a wound infection after ignoring Rizal's
          instrucction of not removing the bandages. However, the infection was
          immediately treated. Rizal also prescribed medical plants to his
          patients.
        </Text>
      </View>
      <View className="space-y-4">
        <Text className="text-xl font-bold">Rizal as an Engineer</Text>
        <Text className="mt-2 text-lg">
          As a perito agrimensor (expert surveyor), Rizal applied his
          engineering knowledge by constructing a system of waterworks to
          furnish clean water to the townspeople.
        </Text>
        <Text className="mt-2 text-lg">
          Rizal had drained the marshes to get rid of malaria that was infesting
          dapitan, equiped with using 500 hundred pesos from his one patient.
          The ligthing system consisted of coconut oil lamps in the town by
          remodelling the plaza and making huge relief map of Mindanao out of
          stones and grass.
        </Text>
        <View className="space-y-4">
          <Text className="text-xl font-bold">Talisay Water System</Text>
          <View className="space-y-4">
            <Image
              source={require("../../assets/talisay-dapitan.png")}
              className="w-full h-48 rounded-xl"
              resizeMode="stretch"
            />
          </View>
        </View>
        <View className="space-y-4">
          <Text className="text-xl font-bold">
            Rizal as an Educator and Linguist
          </Text>
          <Text className="mt-2 text-lg">
            Rizal established a school in Dapitan. It began with 3 pupils who
            increased to 16 and eventually 21. 16 of his pupils did not pay
            tuition. Instead of charging them fees, Rizal made them work in
            gardens and construction projects.
          </Text>
          <Text className="mt-2 text-lg">
            Formal classes were between 2:00 to 4:00 p.m. he also applied the
            "emperor" system like that of Ateneo. Continuing his study of
            languages, Rizal learned in the Dapitan. Bisayan, Subanun, Malay. He
            knew by that time 22 languages.
          </Text>
        </View>
      </View>
      <View className="space-y-4">
        <Text className="text-xl font-bold">Rizal as an Artist</Text>
        <Text className="mt-2 text-lg">
          To pursue his artistic activities, Rizal contributed paintings to the
          Sisters of Charity who were preparing the sanctuary of the Holy
          Virgin. He also amde sketches of persons and things that attracted him
          in Dapitan.
        </Text>
      </View>
      <View className="space-y-4">
        <Text className="text-xl font-bold">The Mothers Revenge</Text>
        <Image
          source={require("../../assets/art1-dapitan.png")}
          className="w-full h-48 rounded-xl"
          resizeMode="stretch"
        />
        <Text className="mt-2 text-lg">
          Rizal modeled a statuette called "The Mother's Revenge" to stress the
          moral of the incident where a puppy of his dog, Syria, was eaten by a
          crocodile.
        </Text>
      </View>
      <View className="space-y-4">
        <Text className="text-xl font-bold">The Dapitan Girl</Text>
        <Image
          source={require("../../assets/art2-dapitan.png")}
          className="w-full h-48 rounded-xl"
          resizeMode="stretch"
        />
        <Text className="mt-2 text-lg">
          Lastly, constructed a statue of a girl called "The Dapitan Girl", a
          woodcarving of Josephine Bracken.
        </Text>
      </View>
      <View className="space-y-4">
        <Text className="text-xl font-bold">Farming and Fishing</Text>
        <Text className="mt-2 text-lg">
          He cleared the land to sow rice and corn, and invited his
          brother-in-law, Manuel Hidalgo, to engage in the sale of abaca, which
          they could grow in Dapitan and ship to Manila to be sold at a higher
          price.
        </Text>
        <Text className="mt-2 text-lg">
          Rizal would later set up the Association of Dapitan Farmers, the first
          commercial association in the town and drew up its constitution and
          by-laws. When he found out that the locals did not know how to fish
          with nets despite their proximity to the sea, Rizal asked Hidalgo to
          send over large fishing nets and taught them how to fish himself.
        </Text>
      </View>
      <View className="space-y-4">
        <Text className="text-xl font-bold">
          Rizal as an Businessman and Inventor
        </Text>
        <Text className="mt-2 text-lg">
          Rizal business partner Ramon Carreon made profitable business ventures
          in fishing, copra and hemp industries. Once he shipped 150 bales of
          hemp to Manila. He purchased hemp in Dapitan at 7 pesos and 4 reales
          per picul and he sold it to Manila at 10pesos and 4 reales. Rizal also
          engaged in lime manufacturing.
        </Text>
        <Text className="mt-2 text-lg">
          Their lime burner had a monthly capacity of more than 400 bags of
          lime. He organized the Cooperative Association of Dapitan Farmers to
          break Chinese Monolopy. Among Rizal's inventions were a Cigarette
          ligther which he sent as a gift to Blumentritt called "sulpakan". And
          a wooden machine for making bricks.
        </Text>
      </View>
    </View>
  );
};

const DumagueteDesc = () => {
  return (
    <View className="space-y-4">
      <Text className="text-xl font-bold">Rizal in Dumaguete</Text>
      <Text className="mt-2 text-lg">
        Rizal visited Dumaguete twice in July 1892 on his way to exile in
        Dapitan, and again in August 1896 on his return from Dapitan. During his
        first brief stopover, he described Dumaguete's people as "gentle". His
        second and longer visit allowed him to meet with local elites like
        Mariano Pinili and see the town's charm with its decorated houses and
        gardens. He performed an eye surgery and spent time with friends,
        getting a firsthand experience of Dumaguete and forming his impression
        of its people.
      </Text>
      <View className="space-y-4">
        <Text className="text-xl font-bold">
          Port of Dumaguete during Rizal's time
        </Text>
        <Image
          source={require("../../assets/port-dumaguete.png")}
          className="w-full h-48 rounded-xl"
          resizeMode="stretch"
        />
        <Text className="mt-2 text-lg">
          The port of Dumaguete is an important transit port between Cebu and
          Western Mindanao, dating back to the 1800s. Espana, one of the
          streamer boats that docked in the port, brought Rizal to the shores of
          Dumaguete on his second time.
        </Text>
      </View>
      <View className="space-y-4">
        <Text className="text-xl font-bold">Meeting of People</Text>
        <Text className="mt-2 text-lg">
          He met Mariano Pinili and group of Masonic at his farm house in
          Tacolobo, where he said I learned about many cases and things
          concerning provincial etiquette.
        </Text>
        <Text className="mt-2 text-lg">
          It turned out that that while I was going to visit my friend and
          former classmate Mr. Faustino Herrero Regidor, the provincial judge,
          the eye operation for a person was set for that afternoon. The
          patients he did an eye operation were Don Clemente Diago y Gil and
          Mariano Larena. Prequit and Ybanez, the two families that Rizal met
          after lunch.
        </Text>
      </View>
      <View className="space-y-4">
        <Text className="text-xl font-bold">Jose Rizal Boulevard in 1916</Text>
        <Image
          source={require("../../assets/blvd1-dumaguete.png")}
          className="w-full h-48 rounded-xl"
          resizeMode="stretch"
        />
        <Text className="mt-2 text-lg">
          Paseo de Rizal, or the Rizal Boulevard, follows the shoreline of
          Dumaguete City, and is lined with the beautiful formerly private
          houses, the so-called sugar housesof local hacenderos and the
          buildings of Silliman University.
        </Text>
        <Text className="mt-2 text-lg">
          When the latter was still Silliman Institute in the early years of the
          20th century, it had become a popular school for many students from
          other places to matriculate in, and people started arriving in droves
          in Dumaguete, which had no pier.
        </Text>
        <Text className="mt-2 text-lg">
          To land in Dumaguete then, according to historian Caridad Aldecoa
          Rodriguez, passengers had to be carried over the shoulders of some
          husky cargadores from the boat to the shore to avoid becoming wet.
          This was a common sight at the beach in those times.
        </Text>
        <Text className="text-xl font-bold">Jose Rizal Boulevard in 2016</Text>
        <Image
          source={require("../../assets/blvd2-dumaguete.png")}
          className="w-full h-48 rounded-xl"
          resizeMode="stretch"
        />
        <Text className="mt-2 text-lg">
          By June 1919, Vicente Flagrante, the local district engineer, had
          finished the plans for a pier in Dumaguete, and an appropriation for
          P50,000 was approved, with succeeding appropriations coming until
          1935.
        </Text>
        <Text className="mt-2 text-lg">
          It was the greatest improvement Dumaguete had ever undertaken at that
          time. Before the building of the pier, however, the construction of a
          boulevard running parallel to the seashore of Dumaguete was a stroke
          of genius for the town planners. It was designed to connect the
          provincial road with the port, and four principal streets of Dumaguete
          now declared first-class roads and were joined with the boulevard by
          1916.
        </Text>
      </View>
    </View>
  );
};

const PampangaDesc = () => {
  return (
    <View className="space-y-4">
      <Text className="text-xl font-bold">Rizal in Pampanga</Text>
      <Text className="mt-2 text-lg">
        Rizal had a mission when he visited the province. And it was to drum up
        support for the La Liga Filipina. One of the houses visited by Rizal was
        the Hilario house in San Juan, San Fernando, where Rizal met with
        brothers Tiburcio, grandfather of Dr. Lacson, and Cecilio. According to
        Dr. Lacson, this visit was a turning point for their family. And this is
        best described by her sister, Ambassador Rafaelita H. Soriano, in her
        book entitled Shaft of Light.
      </Text>
      <Text className="mt-2 text-lg">
        From legal defenders, reformers and propagandists, they became rebels
        and leaders of the revolution. In fact, before the visit, Rizal and the
        Hilario brothers had not even met. Rizal had heard of the brothers only
        through a common friend, Valentin Ventura, Rizal's companion in Spain.
        The word of Rizal's visit spread around that many leaders of Pampanga
        came to meet him.
      </Text>
      <Text className="mt-2 text-lg">
        Before he departed, he distributed pamphlets and booklets on his
        proposed organization, to the local leaders assembled at the house. He
        expressed his desire to visit a third Hilario brother, Procopio, who was
        then residing in Tarlac. The next day, he passed by Bacolor on his way
        back to Manila, where he was said to visit the Malig and Joven
        residences.
      </Text>
      <Text className="mt-2 text-lg">
        After that visit, those who attended the meetings were suspected by the
        Spanish authorities to be collaborators of Rizal. Governor-General
        Eulogio Despujol ordered the guardia civil to monitor the towns of Lipa
        and Taal in Batangas, and the provinces of Bulacan, Cavite, Pampanga,
        and Laguna.
      </Text>
      <Text className="mt-2 text-lg">
        The houses visited by Rizal were immediately inspected, including those
        of the Hilarios, which yielded the pamphlets distributed by Rizal. Many
        were jailed, exiled and deported. Tiburcio Hilario was thrown to Siassi,
        and his brother Cecilio to Balabac. Accroding to Soriano, among the
        other deportees were Maximino Hizon, Mamerto Lacsamana, Mariano and
        Felix David, and a Balbuena from Guagua who were all sent to Jolo.
      </Text>
      <Text className="mt-2 text-lg">
        She adds that Mariano Alejandrino was exiled closer to home, in the
        mountains of the Cordillera, while Ceferino Joven was denounced and
        threatened by the Spanish provincial governor. Ruperto Lacsamana and
        Antonio Consunji were removed from office.
      </Text>
      <View className="space-y-4">
        <Text className="text-xl font-bold">Rizal Monument In Pampanga</Text>
        <Image
          source={require("../../assets/mono-pampanga.png")}
          className="w-full h-48 rounded-xl"
          resizeMode="stretch"
        />
        <Text className="mt-2 text-lg">
          According to Dr. Lacson, Balbino Ventura, the brother of Valentin, and
          father of Honorio Ventura, died the very same night he was arrested. A
          number of the houses visited by Rizal were burned down, including that
          of the Hilarios. Putting this information into context, many people
          claim that Kapampangans did not participate in the early phases of the
          revolution.
        </Text>
        <Text className="mt-2 text-lg">
          But Dr. Lacson counters that Kapampangans were not able to do so
          because their leaders were exiled early on. How could Pampanga join
          the revolution when they had no leaders, most of whom were already
          suffering as early as 1892.
        </Text>
        <Text className="mt-2 text-lg">
          Under the hands of the Spanish authorities, the revolution in Pampanga
          thus finds its roots to 1892, when its leaders were exiled to various
          parts of the country. She adds however, that Kapampangans did in fact
          participate in the early part, as soldiers of other revolutionary
          leaders.
        </Text>
      </View>
      <View className="space-y-4">
        <Text className="text-xl font-bold">
          Rizal Recruitment for La Liga Filipina in the Town of San Fernando
        </Text>
        <Image
          source={require("../../assets/recruit-pampanga.png")}
          className="w-full h-48 rounded-xl"
          resizeMode="stretch"
        />
        <Text className="mt-2 text-lg">
          It is thus unfair to say that Kapampangans were lukewarm to the aims
          of the revolution. In fact, Dr. Jose P. Rizal approached many
          Kapampangans on the La Liga Filipina. It is also vital to look at the
          timeline of events that followed the visit. Shortly after his trip to
          Bulacan, Pampanga and Tarlac, Rizal established the La Liga Filipina
          on July 3, 1892.
        </Text>
        <Text className="mt-2 text-lg">
          Rizal was deported shortly after, on July 7, shocking the leaders of
          the independence movement who saw Rizal as a symbol of freedom. Andres
          Bonifacio was one of those present when La Liga was established. And
          during the evening of July 7, Bonifacio established the Katipunan.
        </Text>
      </View>
    </View>
  );
};

const BulacanDesc = () => {
  return (
    <View className="space-y-4">
      <Text className="text-xl font-bold">Rizal in Bulacan</Text>
      <Text className="mt-2 text-lg">
        Rizal wrote a letter to a group of young women of Malolos on Feb. 22,
        1889, in support of their plan of putting up a night school. The Women
        of Malolos, which consisted of 20 women from prominent Chinese-Filipino
        families, signed and came out with a letter to Governor-General
        Valeriano Weyler on December 12, 1888.
      </Text>
      <Text className="mt-2 text-lg">
        A committee of 20 young ladies of Malolos presented to General Weyler a
        memorial petitioning for authority to open a night school for Spanish
        language. This greatly impressed Rizal, who expressed his joy and
        satisfaction through his letters and works. Rizal's letter to the women
        of Malolos emphasized reason and supported the education of women so
        that they may be enlightened.
      </Text>
      <View className="space-y-4">
        <Text className="text-xl font-bold">Women of Malolos</Text>
        <Image
          source={require("../../assets/malolos-bulacan.png")}
          className="w-full h-48 rounded-xl"
          resizeMode="stretch"
        />
        <Text className="mt-2 text-lg">
          He shared with the young women these lessons. First, the tyranny of
          some is possible only through cowardice and negligence on the part of
          others. Second, what makes one contemptible is lack of dignity and
          abject fear of him who holds one in contempt.
        </Text>
        <Text className="mt-2 text-lg">
          Third, ignorance is servitude, because as a man thinks, so he is a man
          who does not think for himself lacks personality. the blind man who
          allows himself to be guided by the thought of another is like the
          beast led by a halter. Fourth, he who loves his independence must
          first aid his fellow man, because he who refuses protection to others
          will find himself without it the isolated rib of the buri palm is
          easily broken, but not so the broom made of the ribs of the palm bound
          together.
        </Text>
        <Text className="mt-2 text-lg">
          Fifth, if the Filipino will not change her mode of being, let her rear
          no more children, let her merely give birth to them. She must cease to
          be the mistress of the home, otherwise she will unconsciously betray
          husband, child, native land, and all. Sixth, all men are born equal,
          naked, without bonds. God did not create man to be a slave nor did he
          endow him with intelligence to have him hoodwinked, or adorn him with
          reason to have him deceived by others.
        </Text>
        <Text className="mt-2 text-lg">
          And for Seventh, consider well what kind of religion they are teaching
          you. See whether it is the will of God or according to the teachings
          of Christ that the poor be succored and those who suffer alleviated.
        </Text>
      </View>
    </View>
  );
};

const IloiloDesc = () => {
  return (
    <View className="space-y-4">
      <Text className="text-xl font-bold">Rizal In Iloilo</Text>
      <Text className="mt-2 text-lg">
        August 4, 1896 , Dr. Jose Rizal, passing through Iloilo on his way from
        Dapitan to Manila, was much impressed by the appearance of the city. He
        wrote: "The entrance to Iloilo is beautiful". The liveliness of the
        Escolta (Calle Real) pleased me.
      </Text>
      <Text className="mt-2 text-lg">
        The Calle Real or High Street is a winding road, which leads through the
        town into the country. The houses are indescribable they are of all
        styles. Without any pretence at architectural adornment, some are high,
        others low, some stand back with several feet of pavement before them,
        others come forward and oblige one to walk in the road. From afar can be
        seen the white city set in water, a nymph of galvanized iron, a modern
        creation, poetic in spirit of its iron uniform.
      </Text>
      <View className="space-y-4">
        <Text className="text-xl font-bold">Calle Real</Text>
        <Image
          source={require("../../assets/callereal-iloilo.png")}
          className="w-full h-48 rounded-xl"
          resizeMode="stretch"
        />
        <Text className="mt-2 text-lg">
          Rizal went to a bazaar that was located at present-day Regent Theater.
          The bazaar, owned by a Lebanese, occupied a wide space in a
          squat-looking building, similar to the other neighboring stores. The
          Lebanese store was selling stamps, buri hats, and other souvenir
          items.
        </Text>
        <Text className="mt-2 text-lg">
          Rizal bought a presentable buri hat and took again a quiles for Molo
          or Parian Don Raymundo Melliza, a close friend and a classmate in
          Manila and Madrid who have just arrived from Cuba , a magistrate in
          the Supreme Court of Cuba that should have valuable information of
          increasing tension of Cuban fight for independence from Spain.
        </Text>
      </View>
      <View className="space-y-4">
        <Text className="text-xl font-bold">Monument of Rizal in Iloilo</Text>
        <Image
          source={require("../../assets/mono-iloilo.png")}
          className="w-full h-48 rounded-xl"
          resizeMode="stretch"
        />
        <Text className="mt-2 text-lg">
          The spot identified where to erect Rizal’s statue here was the center
          of Plaza Libertad. It was an inspired choice. It was in Plaza Libertad
          where the Philippine flag was raised on Dec. 25, 1898 during the
          Philippine Revolution two years after Rizal’s execution after
          Spaniards surrendered to the local troops led by Ilonggo hero General
          Martin Delgado.
        </Text>
      </View>
    </View>
  );
};

const CebuDesc = () => {
  return (
    <View className="space-y-4">
      <Text className="text-xl font-bold">Rizal In Cebu</Text>
      <Text className="mt-2 text-lg">
        It was four months before his eventual execution in Bagumbayan when he
        arrived in Cebu through Calle Morga which is now M.C. Briones St. as
        steamship España docked at Cebu Port on August 2, 1896. While on board,
        Dr. Jose Rizal saw at Cebu harbor a fisherman whom he invited to come
        aboard. A skilled opthalmologist himself, Rizal must have diagnosed the
        man of eye disability even by far sight messianic as it would seem, the
        fisherman was one-eye blind.
      </Text>
      <View className="space-y-4">
        <Text className="text-xl font-bold">Calle Morga</Text>
        <Image
          source={require("../../assets/callemorga-cebu.png")}
          className="w-full h-48 rounded-xl"
          resizeMode="stretch"
        />
        <Text className="mt-2 text-lg">
          As soon as the vessel docked, Dr. Jose Rizal went down from the
          steamship and treated the fisherman with an eye treatment medicine and
          bandage from his pocket kit. The news of the eye treatment had quickly
          spread among Cebuano fisherfolk villages.
        </Text>
        <Text className="mt-2 text-lg">
          Jaime Enriquez of Pasil, the cross-eyed (libat) brother of Carcar
          City’s former Justice of the Peace (Juez de Paz) Tanbiyo Enriquez,
          sought eye treatment from Dr. Rizal. He was accompanied by Fr. Ricardo
          Alonso, a Cebuano priest who in later years was assigned in Mindanao.
        </Text>
      </View>
    </View>
  );
};

const CaviteDesc = () => {
  return (
    <View className="space-y-4">
      <Text className="text-xl font-bold">Rizal In Cavite</Text>
      <Text className="mt-2 text-lg">
        Jose Rizal dedicated his novel, "El Filibusterismo" to the three
        priests, Mariano Gomez, 85 years, Jose Burgos, 30, and Jacinto Zamora,
        35, executed at Bagumbayan Field on February 17, 1872. History books
        state that with this tragic event, Philippine nationalism was born. The
        assumption is that, before this date, the people did not feel they were
        one nation, and any sign of protest against the foreign presence that
        was Spain was a localized act of rebellion to which the rest of the
        country did not relate.
      </Text>
      <View className="space-y-4">
        <Text className="text-xl font-bold">Cavite Mutiny</Text>
        <Image
          source={require("../../assets/mutiny-cavite.png")}
          className="w-full h-48 rounded-xl"
          resizeMode="stretch"
        />
      </View>
      <Text className="mt-2 text-lg">
        The connection between Rizal's El Filibusterismo and the Cavite Mutiny
        is that the revolt in Cavite is seen as a frustrated separatist
        revolution, while El Filibusterismo explores themes of revolution and
        colonial suffering.
      </Text>
      <Text className="mt-2 text-lg">
        The revolt in Cavite is generally portrayed as a mutiny of Filipino
        soldiers and arsenal workers over local grievances, but this article
        rejects that characterization and points to the real authors of the
        revolt who escaped execution due to their Masonic ties to Governor
        Izquierdo.
      </Text>
      <Text className="mt-2 text-lg">
        El Filibusterismo, on the other hand, is described as an experiment in
        revolution, testing the viability of revolution in the Philippines
        through the character of Simoun. The novel raises questions about how a
        people should earn their liberty and depicts the difficulties faced by
        adherents of scientific thought in the Philippines during the late
        nineteenth century.
      </Text>
    </View>
  );
};

const BoholDesc = () => {
  return (
    <View className="space-y-4">
      <Text className="text-xl font-bold">Rizal In Bohol</Text>
      <Text className="mt-2 text-lg">
        In 1892, Dr Rizal was exiled to Dapitan, Zamboanga del Norte. There he
        continued his medical practice. While there, he wrote a letter to the
        Governor General to ask permission to search for an agricultural colony.
        This was granted.
      </Text>
      <Text className="mt-2 text-lg">
        One day, Dr Rizal had a Boholano patient, Gregorio Penaflor, who later
        went on to become Mayor of Tagbilaran in 1918-1919. Gregorio had an eye
        ailment and was brought to Dr Rizal by his father Don Andres Penaflor, a
        wealthy merchant. When Gregorio was healed Don Andres prepared their
        banca to go home to Tagbilaran.
      </Text>
      <Text className="mt-2 text-lg">
        Remembering his search for an agricultural colony, Dr Rizal asked Don
        Andres whether there was a good site for one. Don Andres replied that
        there was a good site in the central part of Bohol. Dr Rizal decided to
        joint the Penaflors during their voyage back to Tagbilaran.
      </Text>
      <View className="space-y-4">
        <Text className="text-xl font-bold">
          Tagbiliran City, Bohol during Rizal's Time
        </Text>
        <Image
          source={require("../../assets/bohol.png")}
          className="w-full h-48 rounded-xl"
          resizeMode="stretch"
        />
        <Text className="mt-2 text-lg">
          They arrived at Tonggo, Taloto, Tagbilaran City and Dr Rizal stayed at
          the house of the Penaflors. While there, he also treated the eye
          ailment of a relative of Don Andres. The next day, their trip in
          search of an agricultural colony started.
        </Text>
        <Text className="mt-2 text-lg">
          They first visited the house where Don Timoteo Hidalgo, Dr Rizal's
          brother-in-law, was exiled. Then they passed by Baclayon, where Dr
          Rizal treated some patients. In the afternoon, they resumed their trip
          towards Dimiao where they spent the night. The road from Dimiao to
          Bilar was difficult to travel at night.
        </Text>
        <Text className="mt-2 text-lg">
          The following day, the trip was resumed and they reached Bilar and
          stayed with the Dolotina family. Bilar was the end of the
          horse-carriage road so Dr Rizal's group proceeded to Candagaz, Sierra
          Bullones on horseback to view the wide plain that was suited for an
          agricultural colony. When they returned to Bilar, Dr Rizal treated
          some more patients.
        </Text>
      </View>
    </View>
  );
};
const AntipoloDesc = () => {
  return (
    <View className="space-y-4">
      <Text className="text-xl font-bold">
        Rizal and the Virgin of Antipolo
      </Text>
      <Text className="mt-2 text-lg">
        This historical shrine takes its name from the miraculous image of Our
        Lady of Peace and Good Voyage. The wooden image which was believed to
        have been carved in Mexico since it came from there was brought to our
        country on 29 June 1626 by then incoming Governor General Juan Niño de
        Tabora who governed our country until 1632.
      </Text>
      <Text className="mt-2 text-lg">
        Rizal’s mother, Teodora Alonso, was a devotee of this image. While
        carrying Rizal in her womb, she fervently prayed here for a safe
        delivery because her pregnancy back then was a difficult one.
      </Text>
      <Text className="mt-2 text-lg">
        Rizal’s attachment to Our Lady of Peace and Good Voyage carried over to
        his early masterpiece, the one-act play Junto al Pásig (Along the
        Pásig). In this piece, Our Lady of Antipolo was mentioned twice. She was
        also mentioned in Rizal’s Noli Me Tangere, but not exactly in a pious
        light, for Rizal was already a Freemason when he wrote this first novel
        of his.
      </Text>
      <View className="space-y-4">
        <Text className="text-xl font-bold">
          Our Lady of Peace and Good Voyage (Viva La Virgen de Antipolo)
        </Text>
        <Image
          source={require("../../assets/antipolonew.png")}
          className="w-full h-48 rounded-xl"
          resizeMode="stretch"
        />
        <Text className="mt-2 text-lg">
          Also, during his brief stay in Biñan, Laguna as a student, Rizal used
          to pray at a chapel which was also dedicated to Our Lady Of Peace and
          Good Voyage. He was then living with his father’s relatives at the
          población (town proper), and the nearest church to his place was the
          Iglesia de San Isidro Labrador. But he bypassed it and opted to walk
          for about a kilometer or two just to reach the chapel of Our Lady of
          Peace and Good Voyage to attend Mass or to offer his personal prayers.
        </Text>
        <Text className="mt-2 text-lg">
          It was because his mother was a devotee of Our Lady of Peace and Good
          Voyage in faraway Antipolo. As mentioned earlier, it was said that
          Doña Teodora had suffered so much because of baby Rizal’s unusually
          large head. For a safe delivery, she pledged her son to the Virgin of
          Antipolo, vowing to one day bring him in a pilgrimage to that mountain
          shrine to the north.
        </Text>
        <Text className="mt-2 text-lg">
          It would take seven years for that pledge to be fulfilled. On 6 June
          1868, Don Francisco, Rizal’s father, was the one who took the young
          José to the Virgin of Antipolo as thanksgiving for that safe delivery
          (Rizal would later write a least-known poem titled A la Virgen de
          Antipolo in honor of Our Lady of Peace and Good Voyage). This explains
          Rizal’s devotion to Our Lady of Peace and Good Voyage. It was passed
          on to him from his mother.
        </Text>
      </View>
    </View>
  );
};
const TarlacDesc = () => {
  return (
    <View className="space-y-4">
      <Text className="text-xl font-bold">Rizal In Tarlac</Text>
      <Text className="mt-2 text-lg">
        Rizal visited friends in Tarlac in 1892, an event that is memorialized
        by a marker restored on Nov. 8. The national hero intended to visit
        friends in Central Luzon who supported his crusade for governmental
        reforms in order to end Spanish abuses.
      </Text>
      <View className="space-y-4">
        <Text className="text-xl font-bold">Rizal Monument in Tarlac</Text>
        <Image
          source={require("../../assets/tarlac.png")}
          className="w-full h-48 rounded-xl"
          resizeMode="stretch"
        />
        <Text className="mt-2 text-lg">
          The marker says Rizal stopped by the house of Capt. Evaristo Puno on
          June 27, 1892, after dropping by Pampanga province, arriving on a
          train from Manila’s Tutuban station in what is now Pangasinan’s
          Dagupan City. Days later, Rizal helped form the movement La Liga
          Filipina.
        </Text>
        <Text className="mt-2 text-lg">
          Rizal organized La Liga by linking together the ilustrados (19th
          century Filipinos who were educated) of the different provinces of
          Central Luzon, including Tarlac. Rizal met Don Cecilio and Don
          Tiburcio Hilario in San Fernando, Pampanga. They participated in the
          Pampanga leg of the revolution.
        </Text>
        <Text className="mt-2 text-lg">
          Rizal then sought out Procopio Hilario in Tarlac but failed to see
          him, so he then met Puno. Rizal was introduced to Hilario, who became
          a revolutionary leader, through Pampanga-born Valentin Ventura.
          Ventura is reputed to have financed the publication of Rizal’s second
          novel, El Filibusterismo.
        </Text>
        <Text className="text-xl font-bold">Love Connection</Text>
        <Image
          source={require("../../assets/tarlac-second.png")}
          className="w-full h-48 rounded-xl"
          resizeMode="stretch"
        />
        <Text className="mt-2 text-lg">
          Many accounts about Rizal’s Tarlac trip allude to his romance with
          Tarlac-born Leonor Rivera, who some say was the hero’s inspiration for
          Maria Clara in “Noli me tangere". Rizal pursued his medical degree at
          the University of Santo Tomas and stayed in Casa Tomasina, which was
          run by Antonio Rivera, the father of Leonor who was then studying in
          La Concordia College.
        </Text>
        <Text className="mt-2 text-lg">
          Rizal met Leonor in 1880 when she was 13 years old. Born in Camiling
          town, Leonor was not yet 15 when she and Rizal got engaged. In the
          book “Rizal Without the Overcoat" by Ambeth Ocampo, Leonor used
          “Taimis” as a code word in order to conceal their affair from her
          parents and friends. They corresponded for six years but never saw
          each other after Rizal left the country in 1882.
        </Text>
      </View>
    </View>
  );
};
