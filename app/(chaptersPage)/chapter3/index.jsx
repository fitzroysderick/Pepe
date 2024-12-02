import React from "react";
import { View, Text, ScrollView, Image } from "react-native";

import Header from "../../../components/ui/Header";

export default function Chapter3() {
  return (
    <View>
      <Header title="Chapter 3" hasHome />
      <View className="pt-4 h-full gap-y-4 pb-52">
        <ScrollView className="h-full px-4 space-y-4">
          <Image
            source={require("../../../assets/chapter3-f1.png")}
            className="w-full h-60 rounded-3xl"
          />
          <Text className="text-3xl font-bold">Nationalism</Text>
          <Text>
            Jose Rizal’s real name is Jose Protacio Rizal Mercado y Alonso
            Realonda . Rizal was born in the 19th century, a time of significant
            changes in the world, including the emergence of modernity, a
            transition from traditional ways of life to new ideas, attitudes,
            and institutions. During this era, the industrial revolution was
            taking place, resulting in new forms of work and leisure,
            urbanization, and the growth of cities. The 19th century was also
            characterized by various political upheavals, including the American
            and French Revolutions, influenced by the Enlightenment, a
            philosophical movement that valued reason, rationality, and
            individualism. This wave of political change challenged the power of
            the monarchy and paved the way for new forms of governance based on
            individual rights, nationalism, and freedom.
          </Text>
          <View className="space-y-2">
            <Text className="font-bold">
              Growth and Development of Nationalism
            </Text>
            <Text className="font-bold">Nationalism</Text>
            <View className="flex-row space-x-2">
              <Text>-</Text>
              <Text className="text-sm">
                Is a sense of loyalty or physiological attachment that members
                of a nation share, based on a common language, history, culture,
                and desire for independence.
              </Text>
            </View>
            <View className="flex-row space-x-2">
              <Text>-</Text>
              <Text className="text-sm">
                It is a feeling that drives a people together as a nation. It is
                the love of a country expressed in devotion to the advocacy of
                national interest and independence.
              </Text>
            </View>
            <View className="flex-row space-x-2">
              <Text>-</Text>
              <Text className="text-sm">
                Rizal on the Growth of Nationalism, In his letter to his
                Austrian friend Ferdinand Blumentritt, Rizal wrote," I would
                stimulate these Philippine studies which are like nosce te
                ipsum(Know Thyself) that gives the true concept of oneself and
                drives nation to greatness." When people become aware that they
                are different from other races, they become proud and willing to
                serve their nation. They become patriotic and develop pride in
                their country. All these are possible only if they know their
                country better.
              </Text>
            </View>
          </View>
          <View className="space-y-2">
            <Text>
              The growth of nationalism can be attributed to two major
              revolutions of the earlier century:
            </Text>
            <View className="ml-4">
              <View className="flex-row space-x-2">
                <Text className="font-bold">•</Text>
                <Text className="text-sm font-bold">
                  The American Revolution of 1776
                </Text>
              </View>
              <View className="flex-row space-x-2 ml-4">
                <Text className="font-bold">-</Text>
                <Text className="text-sm">
                  The American Revolution gave birth to the United States of
                  America. On the other hand, the French Revolution led to the
                  overthrow of the absolute rule of the Bourbon Dynasty and the
                  abolition of the feudal system.
                </Text>
              </View>
              <Image
                source={require("../../../assets/chapter3-f2.png")}
                className="w-full h-40 rounded-3xl mt-2"
                resizeMode="stretch"
              />
            </View>
            <View className="ml-4">
              <View className="flex-row space-x-2">
                <Text className="font-bold">•</Text>
                <Text className="text-sm font-bold">
                  The French Revolution of 1789
                </Text>
              </View>
              <View className="flex-row space-x-2 ml-4">
                <Text className="font-bold">-</Text>
                <Text className="text-sm">
                  The ideology of the French Revolution liberty, fraternity, and
                  Equality had influenced subject peoples to cast off the yoke
                  of colonialism by means of armed uprising.
                </Text>
              </View>
              <View className="flex-row space-x-2 ml-4">
                <Text className="font-bold">-</Text>
                <Text className="text-sm">
                  Rizal on the French Revolution and American War for
                  Independence Rizal wished that Spain would have benefited from
                  the gifts of Liberty, Equality and Progress and shared them
                  with the Philippines. However, "Spain did not plant in those
                  islands(The Phils) those inestimable gifts so that they might
                  be the exclusive patrimony and feudal dominion of the
                  reactionary friars".
                </Text>
              </View>
              <Image
                source={require("../../../assets/chapter3-f3.png")}
                className="w-full h-40 rounded-3xl mt-2"
                resizeMode="stretch"
              />
            </View>
          </View>
          <View>
            <View className="flex-row space-x-2">
              <Text>Struggle between the Liberals and the Conservatives:</Text>
            </View>
            <Image
              source={require("../../../assets/chapter3-f4.png")}
              className="w-full h-40 rounded-3xl mt-2"
              resizeMode="stretch"
            />
            <Text>
              Liberals believed a country should be free from domination by
              another and the people should enjoy liberty, equality, and
              oppurtunity.
            </Text>
            <Text>
              Conservatives supported the “Good old days” when monarchs and
              kings ruled over their subjects. Spirit of Nationalism spread
              outside europe. Canada became a self-governing nation in 1867,
              Spain lost its colonies in South America after its subjects
              liberated themselves for Independence.
            </Text>
          </View>
          <View>
            <Text className="font-bold">
              Two Major Changes in the Industries
            </Text>
            <View className="flex-row space-x-2 ml-4">
              <Text>•</Text>
              <Text>Shift from manual labor to machine works</Text>
            </View>
            <View className="flex-row space-x-2 ml-4">
              <Text>•</Text>
              <Text>From Domestic System to the factory system</Text>
            </View>
          </View>
          <View>
            <Text className="font-bold">Effects of Industrial Revolution</Text>
            <View className="flex-row space-x-2 ml-4">
              <Text>-</Text>
              <Text>
                Coal, iron and steel became basic materials in the industry,
                which led to the improvement of the transportation system also
                brought about by the invention of steamships, locomotives,
                automobiles.
              </Text>
            </View>
            <View className="flex-row space-x-2 ml-4">
              <Text>-</Text>
              <Text>
                The invention of telephone and telegraph, cable and postal
                service and newspaper revolutionized communication.
              </Text>
            </View>
            <View className="flex-row space-x-2 ml-4">
              <Text>-</Text>
              <Text>
                How Nationalism was Stimulated by Transportation and
                Communication. Rizal wrote, " The people go from island to
                another, naturally communication and exchange of ideas have
                increased and realizing they were all menaced with the same
                danger and their common sentiments are hurt, they become friends
                and they unite". Modern means of transportation and
                communication brought the people of a nation closer. They began
                to realize their common problems and aspirations. They felt the
                need for closer union in solving their problems and attaining
                their goals.
              </Text>
            </View>
          </View>
          <Image
            source={require("../../../assets/chapter3-f5.png")}
            className="w-full h-40 rounded-3xl mt-2"
            resizeMode="stretch"
          />
          <View>
            <Text className="font-bold">Advancement In Science</Text>
            <View className="flex-row space-x-2 ml-4">
              <Text>-</Text>
              <Text>
                The advancement in science and medicine improved public
                sanitation and health thereby increasing the average lifespan of
                the population. Rizal on the Advancement of Science In his novel
                Noli, Rizal hailed the " Jesuits whom the Philippines owes her
                dawning system of instruction in the natural sciences, the soul
                of the nineteenth century" As people become more interested in
                science, many of its secrets were discovered with systematized
                experimentation. Scientists around the world worked to know more
                about the facts of nature.Businessmen funded research which in
                turn, brought huge profits to the business.
              </Text>
            </View>
          </View>
          <View>
            <Text className="font-bold">Growth of Imperialism</Text>
            <View className="flex-row space-x-2 ml-4">
              <Text>-</Text>
              <Text>
                Imperialism is defined as the activity of a nation in extending
                its control and authority beyond its territorial boundaries
                through acquisition of a new territory" the desire of the
                civilized nation to rule over weak or backward”.
              </Text>
            </View>
            <View className="flex-row space-x-2 ml-4">
              <Text>-</Text>
              <Text>
                From an economic standpoint, imperialism is resorted to for the
                purpose of securing raw materials, markets for manufactured
                goods, outlet for surplus population and fields of expansion for
                investment for surplus capital.
              </Text>
            </View>
            <View className="flex-row space-x-2 ml-4">
              <Text>-</Text>
              <Text>
                From political standpoint, it maybe for the acquisition of
                regions necessary for national defense and territories
              </Text>
            </View>
            <View className="flex-row space-x-2 ml-4">
              <Text>-</Text>
              <Text>
                From a religious standpoint, expansion is an opportunity to
                spread religious mission.
              </Text>
            </View>
            <View className="flex-row space-x-2 ml-4">
              <Text>-</Text>
              <Text>
                Rizal on Imperialism. He said, "The Filipinos remained loyal and
                faithful to Mother Spain for three centuries, giving up their
                liberty and independence, now fascinated by the promised heaven,
                now flattered by the friendship offered them by a great and
                noble nation(Mother Spain), and now compelled to submission by
                the superiority of arms for persons with low opinion of
                themselves or now because of foreign invaders, taking advantage
                of the internal dissension, played the role of the third party
                of divide and rule".
              </Text>
            </View>
          </View>
          <View>
            <Text className="font-bold">A. Europe in the 19th Century</Text>
            <View className="ml-4">
              <Text className="font-bold">Departure Inception</Text>
              <View className="ml-8">
                <View className="flex-row space-x-2">
                  <Text>•</Text>
                  <Text>
                    May 4, 1882. Rizal departed on board the Spanish steamer
                  </Text>
                </View>
                <View className="flex-row space-x-2">
                  <Text>•</Text>
                  <Text>Salvadora bound for Singapore.</Text>
                </View>
                <View className="flex-row space-x-2">
                  <Text>•</Text>
                  <Text>May 9, 1882. The Salvadora docked at Singapore.</Text>
                </View>
                <View className="flex-row space-x-2">
                  <Text>•</Text>
                  <Text>May 11, 1882. Rizal boarded the ship Djemnah.</Text>
                </View>
                <View className="flex-row space-x-2">
                  <Text>•</Text>
                  <Text>
                    May 17, 1882. The Djemnah reached Point Galle, a seacoast
                    town in Ceylon.
                  </Text>
                </View>
              </View>
            </View>
            <View className="ml-4">
              <Text className="font-bold">To Marsellies</Text>
              <View className="ml-8">
                <View className="flex-row space-x-2">
                  <Text>•</Text>
                  <Text>
                    June 12, 1882. He arrived in Marseilles. Rizal went to
                    Marseilles in order to ride the train going toBarcelona.
                    Notably, he visited Chateau d'if, where Dantes(hero of the
                    Counte of Monte Cristo) was imprisoned.
                  </Text>
                </View>
                <View className="flex-row space-x-2">
                  <Text>•</Text>
                  <Text>
                    June 15, 1882. Rizal left Marseilles riding a train en route
                    to Barcelona via Bordeaux and Portbou.
                  </Text>
                </View>
              </View>
            </View>
            <View className="ml-4">
              <Text className="font-bold">To Barcelona</Text>
              <View className="ml-8">
                <View className="flex-row space-x-2">
                  <Text>•</Text>
                  <Text>
                    June 16, 1882. Rizal arrived in Barcelona. Rizal stayed in
                    Barcelona until the late part of the year.
                  </Text>
                </View>
                <View className="flex-row space-x-2">
                  <Text>•</Text>
                  <Text>
                    August 20, 1882. He wrote "El Amor Patrio"(Love of Country)
                    as his first publication abroad and sent it to friend
                    Basilio Teodoro Of Diariong Tagalog. Rizal left Barcelona
                    for Madrid at the end of 1882.
                  </Text>
                </View>
              </View>
            </View>
            <View className="ml-4">
              <Text className="font-bold">To Madrid</Text>
              <View className="ml-8">
                <View className="flex-row space-x-2">
                  <Text>•</Text>
                  <Text>
                    November 3, 1882. Rizal enrolled at Universidad Central de
                    Madrid and took medical clinic, surgical clinic, legal
                    medicine, and obstetrical clinic.He stayed here from August
                    1883 to November 1885. Studied sculpting and painting at
                    Academy of Fine Arts of San Fernando.
                  </Text>
                </View>
                <View className="flex-row space-x-2">
                  <Text>•</Text>
                  <Text>
                    In March 1882, he joined the Masonic Lodge called Acacia in
                    Madrid. Joined Circulo Hispano Filipino, a group of Filipino
                    Students in Madrid. He was with M. Del Pilar,J. Luna, and G.
                    Lopez Jaena. He wrote "Me Piden Versos"(They Asked me for
                    Verses) and"Las Dudas"(As Laong Laan).
                  </Text>
                </View>
                <View className="flex-row space-x-2">
                  <Text>•</Text>
                  <Text>
                    He finished Licentiate in Medicine at Universidad Central de
                    Madrid in 1884, Doctor of Medicine in 1885. Rizal decided to
                    leave Madrid once again for a return in Paris, this time as
                    an ophthalmology trainee. He boarded a train to Paris, where
                    he would spend his summer vacation.
                  </Text>
                </View>
              </View>
            </View>
            <View className="ml-4">
              <Text className="font-bold">To Paris</Text>
              <View className="ml-8">
                <View className="flex-row space-x-2">
                  <Text>•</Text>
                  <Text>
                    June 17, 1883. Arrived in Parison Sunday Morning. He spent
                    his summer vacation from 17th of June to 20th of August
                    1883. Rizal learned the French language and cultures in this
                    City. He stayed in Paris from November 1885 to February
                    1888. Practiced ophthalmology under Dr. Louis de Wreckert at
                    Crugen clinic. He encountered places such as Notre Dame
                    Cathedral, Versailles, Napoleon's grave etc.
                  </Text>
                </View>
                <View className="flex-row space-x-2">
                  <Text>•</Text>
                  <Text>
                    Visited 2 hospitals which are Laennec Hospital where he
                    observed Dr. Nicaise treating patients and Lariboisiere
                    Hospital where he observed the examination of different
                    diseases of women. He met Maximo Viola, a wealthy medical
                    student hailing from San Miguel, Bulacan.
                  </Text>
                </View>
                <View className="flex-row space-x-2">
                  <Text>•</Text>
                  <Text>
                    The Noli Me Tangere during his stay in Berlin was unable to
                    be published, but with the help of Maximo Viola, Noli Me
                    Tangere came off the printing press. Rizal left Paris for
                    Germany on February 1 1886.
                  </Text>
                </View>
              </View>
            </View>
            <View className="ml-4">
              <Text className="font-bold">To Germany</Text>
              <View className="ml-8">
                <View className="flex-row space-x-2">
                  <Text>•</Text>
                  <Text>
                    Rizal stayed in Heidelberg from Feb. 7 in Allo. 9. 1886. He
                    visited University of Heidelberg, Heidelberg Castle,
                    etc.Altended lectures of Dr. Otto Becker and Prof Wilhelm
                    Kuehne at University of Heidelberg.Worked for Dr. Becker at
                    University Eye Hospital. Rizal went to Wilhelmsfeld on April
                    26. 1886 to board with Lutheran pastor Dr.Karl Ullmer and
                    his family. Celebrated his 25th Birthday with Dr. Ullmer.
                  </Text>
                </View>
                <View className="flex-row space-x-2">
                  <Text>•</Text>
                  <Text>
                    Began a long-distance friendship with Prof. Ferdinand
                    Blumentritt of Litomerice.
                  </Text>
                </View>
                <View className="flex-row space-x-2">
                  <Text>•</Text>
                  <Text>
                    Bohemia on July 31st by sending arithmetic books in Spanish
                    and Tagalog. He left Heidelberg for Leipzig on Aug. 9. 1886
                    and traveled through the allies by the Rhine River on a
                    train.
                  </Text>
                </View>
                <View className="flex-row space-x-2">
                  <Text>•</Text>
                  <Text>
                    Rizal stayed in Leipzig from August 15 to October 29 1886_
                    He stayed longer there because it has the cheapest cost of
                    living in EuropeRizal was in Dresden from Oct 29 to Nov. 1
                    1886. In Vienna, Rizal and Viola were in Vienna from May 20
                    to 25, 1887.Stayed in Metropole and visited churches,
                    museums, art galleries, theaters and parks.
                  </Text>
                </View>
              </View>
            </View>
            <View className="ml-4">
              <Text className="font-bold">To Italy</Text>
              <View className="ml-8">
                <View className="flex-row space-x-2">
                  <Text>•</Text>
                  <Text>
                    Rizal visited cities süch as Turin, Milan, Venice, Florence
                    and Rome
                  </Text>
                </View>
                <View className="flex-row space-x-2">
                  <Text>•</Text>
                  <Text>
                    He visited places in Rome such as Rome Capitol, Forum, Roca
                    Tarperya and others.
                  </Text>
                </View>
              </View>
            </View>
            <View className="ml-4">
              <Text className="font-bold">To Philippines</Text>
              <View className="ml-8">
                <View className="flex-row space-x-2">
                  <Text>•</Text>
                  <Text>
                    Rizal returned to Marseilles on July 3, 1887 to ride Djemnah
                    en route back to Manila.
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View>
            <Text className="font-bold">
              B. Philippines In The 19th Century as Rizal’s Context
            </Text>
          </View>
          <View>
            <Text className="font-bold">Filipino Nationalism</Text>
            <View className="ml-8">
              <View className="flex-row space-x-2">
                <Text>-</Text>
                <Text>
                  Filipino Nationalism started in the Philippines in the 1800s
                  with an upsurge of patriotic feelings and nationalistic ideals
                  resulting from more than two decades of Spanish rule. This
                  served as the backbone of, and continues to this day, the
                  first nationalist revolution in Asia, the Philippine
                  Revolution. These nationalistic feelings have resulted in a
                  comprehensive campaign in the Philippines for political,
                  social and economic liberty.
                </Text>
              </View>
            </View>
          </View>
          <View className="space-y-2">
            <Text className="font-bold">
              HISTORICAL BACKGROUND OF FILIPINO NATIONALISM
            </Text>
            <Text>
              The Philippines had been split into various principalities known
              as "barangays" in the years before the 11th century, a name
              originating from Malayan ships called"balangays." Datus, rajahs or
              sultans governed these tiny political units. In 1565, when Spanish
              explorer Miguel Lopez de Legazpi arrived from Mexico and
              established the first European colonies in Cebu, European
              colonization started in earnest.
            </Text>
            <Text>
              Starting with only five ships and five hundred men accompanied by
              Augustinian monks and further strengthened by two hundred soldiers
              in 1567, he was able to repel competing Portuguese colonizers and
              lay the foundations for the Spanish colonization of the
              archipelago. The Spanish occupied the kingdoms of Manila and Tondo
              in 1571.
            </Text>
            <View className="w-40 h-40 rounded-3xl overflow-hidden self-center">
              <Image
                source={require("../../../assets/chapter3-f6.png")}
                className="self-center"
              />
            </View>
            <Text>
              It was Jose Rizal who first used the word Filipino to refer to the
              inhabitants of the country, whether they are of Spanish or
              Filipino blood.
            </Text>
            <View className="ml-4">
              <View className="flex-row space-x-2">
                <Text>•</Text>
                <Text>Indios - native inhabitants</Text>
              </View>
              <View className="flex-row space-x-2">
                <Text>•</Text>
                <Text>
                  Filipinos - inhabitants with Spanish blood (peninsulares,
                  insulares, mestizo)
                </Text>
              </View>
            </View>
            <Text>
              He realized that the people residing in the Philippines should be
              called one name Filipino.
            </Text>
            <View>
              <Text className="font-bold">Economic Development</Text>
              <View className="ml-8">
                <View className="flex-row space-x-2">
                  <Text>-</Text>
                  <Text>
                    Before the Spanish occupation our Forefathers had already
                    been trading with the Chinese, the Japanese, the inhabitants
                    of Siam, the Indians, Cambodians and with the natives of
                    Borneo and Moluccas. When the Spaniards arrived the Spanish
                    government carried on the existing trade relationships with
                    these countries for a period.
                  </Text>
                </View>
              </View>
            </View>
            {/* ---------- Galleon Trade( Manila- Acapulco Trade) ---------- */}
            <View>
              <Text className="font-bold">
                Galleon Trade( Manila- Acapulco Trade)
              </Text>
              <Image
                source={require("../../../assets/chapter3-f8.png")}
                className="w-40 h-40 rounded-3xl mt-2 self-center"
              />
              <View className="ml-8">
                <View className="flex-row space-x-2">
                  <Text>-</Text>
                  <Text>
                    Connected into the Philippines with Mexico for 250 years. It
                    was a government monopoly of two trading ships, one
                    navigated from Acapulco in Mexico to Manila for 120 days
                    with some 500,000 pesos worth of merchandise and the other
                    sailed from Manila to Acapulco for 90 days with some 250,000
                    pesos worth of goods.
                  </Text>
                </View>
                <View className="flex-row space-x-2">
                  <Text>-</Text>
                  <Text>
                    The Philippines sent mangoes, tamarinds, rice, carabao,
                    chinese tea textiles, tuba(coconut wine) to Mexico while
                    guava, avocado, papaya, pineapple etc. was sent by Mexico to
                    the Philippines.
                  </Text>
                </View>
                <View className="flex-row space-x-2">
                  <Text>-</Text>
                  <Text>
                    The economic transaction ended on September 14, 1815 when
                    Mexico gained its independence from Spain and it was
                    abolished because of the efforts of Valentin Delos Santos in
                    Spanish Cortes(1810-1813).
                  </Text>
                </View>
              </View>
            </View>
            {/* ---------- Suez Canal ---------- */}
            <View>
              <Text className="font-bold">Suez Canal</Text>
              <Image
                source={require("../../../assets/chapter3-f9.png")}
                className="w-40 h-40 rounded-3xl mt-2 self-center"
              />
              <View className="ml-8">
                <View className="flex-row space-x-2">
                  <Text>-</Text>
                  <Text>
                    It was an artificial way that connected the Red Sea and
                    Mediterranean Sea in Egypt.
                  </Text>
                </View>
                <View className="flex-row space-x-2">
                  <Text>-</Text>
                  <Text>
                    On November 17, 1869 afforded the Philippines and Spain a
                    relatively effortless maritime route for Spanish trading.
                    Started off as an agreement between Ferdinand de Lesseps,
                    Cairo's former French diplomat and the Ottoman governor of
                    Egypt in 1854 for the former to construct a 100-mile canal
                    across the Isthmus of Suez.
                  </Text>
                </View>
                <View className="flex-row space-x-2">
                  <Text>-</Text>
                  <Text>
                    The construction commenced in April 1859 with forced
                    laborers digging by hand with picks and shovels. European
                    workers, though with dredgers and steam shovels, later
                    arrived. It decreased the travel time of the Philippines to
                    Spain from 3 months to 32-40 days.
                  </Text>
                </View>
              </View>
            </View>
            {/* ---------- Jose V. Basco ---------- */}
            <View>
              <Text className="font-bold">Jose V. Basco</Text>
              <Image
                source={require("../../../assets/chapter3-f10.png")}
                className="w-40 h-40 rounded-3xl mt-2 self-center"
              />
              <View className="ml-8">
                <View className="flex-row space-x-2">
                  <Text>-</Text>
                  <Text>
                    Became the first Governor-General to the Philippines under
                    the Bourbon reign who arrived in the country in 1778 when
                    the Galleon Trade was a failing venture.
                  </Text>
                </View>
                <View className="flex-row space-x-2">
                  <Text>-</Text>
                  <Text>
                    Basco’s economic program of developing and promoting
                    agriculture in the country in order to transform the
                    Philippines into a financially sufficient colony.
                  </Text>
                </View>
              </View>
            </View>
            {/* ---------- Economic History: Opening the Philippines to the Word Commerce ---------- */}
            <View>
              <Text className="font-bold">
                Economic History: Opening the Philippines to the Word Commerce
              </Text>
              <View className="ml-8">
                <View className="flex-row space-x-2">
                  <Text>•</Text>
                  <Text>
                    1815-1830 -the last Galleon arrived in (Manila to Acapulco).
                  </Text>
                </View>
                <View className="flex-row space-x-2">
                  <Text>•</Text>
                  <Text>1834- Manila officially opened to world commerce.</Text>
                </View>
                <View className="flex-row space-x-2">
                  <Text>•</Text>
                  <Text>
                    The rise of Haciendas and the "cash-crop economy." Expansion
                    of export products in Europe to the Suez Canal (1869).
                  </Text>
                </View>
                <View className="flex-row space-x-2">
                  <Text>•</Text>
                  <Text>
                    The Philippines became a major exporter (sugar, tobacco,
                    coffee and abaca) and became well known in other parts of
                    the world.
                  </Text>
                </View>
                <View className="flex-row space-x-2">
                  <Text>•</Text>
                  <Text>
                    1834-1873- Different Ports were opened; Sual (Pangasinan),
                    Iloilo, Zamboanga, Cebu and Legazpi.
                  </Text>
                </View>
              </View>
            </View>
            {/* ---------- Effects to the Economy of The Philippines ---------- */}
            <View>
              <Text className="font-bold">
                Effects to the Economy of The Philippines
              </Text>
              <View className="ml-8">
                <Text>
                  1.Filipino's lives prosper due to the vigorous economic
                  activity in the colony.
                </Text>
                <Text>2. Modern methods of agriculture were introduced.</Text>
                <Text>
                  3. The means of transportation and communication improve.
                </Text>
                <Text>4. Emergence of the Middle-Class.</Text>
                <Text>5. More Filipinos able to study in Europe;and</Text>
                <Text>
                  6. Acquired material, wealth and improved social life.
                </Text>
              </View>
            </View>
            {/* ---------- Social Development: Birth of the Middle Class ---------- */}
            <View>
              <Text className="font-bold">
                Social Development: Birth of the Middle Class
              </Text>
              <Text className="font-bold">
                Five Social Classes in the Philippines:{" "}
                <Text className="font-normal">
                  Peninsulares(Spaniards born in Spain)
                </Text>
              </Text>
              <Image
                source={require("../../../assets/chapter3-f11.png")}
                className="w-40 h-40 rounded-3xl mt-2 self-center"
              />
              <View className="ml-8">
                <View className="flex-row space-x-2">
                  <Text>-</Text>
                  <Text>
                    They are the highest class in the Philippines, entrusted
                    with the offices of high rank. Pure blooded Spaniards born
                    from Spain and sent to Spanish colonies to govern.
                  </Text>
                </View>
              </View>
            </View>
            <View>
              <Text className="font-bold">
                Insulares(Spaniards born in the Philippines)
              </Text>
              <Image
                source={require("../../../assets/chapter3-f12.png")}
                className="w-40 h-40 rounded-3xl mt-2 self-center"
              />
              <View className="ml-8">
                <View className="flex-row space-x-2">
                  <Text>-</Text>
                  <Text>
                    The insulares are of European descent but born in the
                    Colonies of Spain. A son or daughter of a Spanish couple is
                    an insulare. Eventually, they may have been inter-marrying
                    with Filipinos or other races here in the country, thus
                    producing the mestizos.
                  </Text>
                </View>
              </View>
            </View>
            <View>
              <Text className="font-bold">Middle Class(Spanish Mestizos)</Text>
              <Image
                source={require("../../../assets/chapter3-f13.png")}
                className="w-40 h-40 rounded-3xl mt-2 self-center"
              />
              <View className="ml-8">
                <View className="flex-row space-x-2">
                  <Text>-</Text>
                  <Text>
                    They are the offspring of Spanish people interbreeding with
                    Filipinos. They may or may not have European or other racial
                    features despite popular belief. Originally, the term was
                    used in Latin America but was later adopted here in the
                    country for children or racial interchange.
                  </Text>
                </View>
              </View>
            </View>
            <View>
              <Text className="font-bold">MMestizo de Sangley</Text>
              <Image
                source={require("../../../assets/chapter3-f14.png")}
                className="w-40 h-40 rounded-3xl mt-2 self-center"
              />
              <View className="ml-8">
                <View className="flex-row space-x-2">
                  <Text>-</Text>
                  <Text>
                    A person of Filipino or any racial descent marrying a
                    Chinese, the result is children that will be called mestizo
                    de sangley. They developed commercial agriculture and owned
                    several haciendas of sugar, coffee and hemp. Later, they
                    became the education and finance leaders because of non-
                    non-existence of Spanish Mestizos ascending to positions of
                    power in Philippine society.
                  </Text>
                </View>
              </View>
            </View>
            <View>
              <Text className="font-bold">Tornatras</Text>
              <Image
                source={require("../../../assets/chapter3-f15.png")}
                className="w-40 h-40 rounded-3xl mt-2 self-center"
              />
              <View className="ml-8">
                <View className="flex-row space-x-2">
                  <Text>-</Text>
                  <Text>
                    Is an old Spanish term for a person of mixed ancestry from
                    Spanish, Filipino and Chinese.
                  </Text>
                </View>
              </View>
            </View>
            <View>
              <Text className="font-bold">
                Governor General Narciso Claveria
              </Text>
              <Image
                source={require("../../../assets/chapter3-f16.png")}
                className="w-40 h-40 rounded-3xl mt-2 self-center"
              />
              <View className="ml-8">
                <View className="flex-row space-x-2">
                  <Text>-</Text>
                  <Text>
                    In 1849, decree mandating people to take on surnames,
                    undergo registration and be in possession of cedula
                    indicating one’s name and residence as well as the
                    employment of guardia civil that assumed a facilitative
                    function of carrying out the colonial government policies.
                  </Text>
                </View>
              </View>
            </View>
            <View>
              <Text className="font-bold">Cultural Development</Text>
              <View className="ml-8">
                <View className="flex-row space-x-2">
                  <Text>-</Text>
                  <Text>
                    The Ilustrados, otherwise known as the " enlightened ones",
                    were the educated class in the Philippines society during
                    the Spanish occupation.
                  </Text>
                </View>
                <View className="flex-row space-x-2">
                  <Text>-</Text>
                  <Text>
                    They were instrumental in paving the way for the creation of
                    the Propaganda Movement.
                  </Text>
                </View>
                <View className="flex-row space-x-2">
                  <Text>-</Text>
                  <Text>
                    The rapid spread of higher education among middle and
                    lower-middle class Filipinos accelerated Filipino
                    nationalism.
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
