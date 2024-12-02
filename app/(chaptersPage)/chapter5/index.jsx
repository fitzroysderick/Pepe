import React from "react";
import { View, Text, ScrollView, Image } from "react-native";

import Header from "../../../components/ui/Header";

export default function Chapter5() {
  return (
    <View>
      <Header title="Chapter 5" hasHome />
      <View className="pt-4 h-full gap-y-4 pb-52">
        <ScrollView className="h-full px-4 space-y-4">
          <Image
            source={require("../../../assets/c5.png")}
            className="w-full h-52 rounded-3xl"
            resizeMode="stretch"
          />
          <Text className="text-3xl font-bold">
            Influences of Rizal’s Formal Education
          </Text>
          <Text>
            Jose Rizal’s first teacher was his mother, who had taught him how to
            read and pray and who had encouraged him to write poetry. Later,
            private tutors taught the young Rizal Spanish and Latin, before he
            was sent to a private school in Biñan.
          </Text>
          <Text>
            When he was 11 years old, Rizal entered the Ateneo Municipal de
            Manila. He earned excellent marks in subjects like philosophy,
            physics, chemistry, and natural history. At this school, he read
            novels; wrote prize-winning poetry (and even a melodrama—“Junto al
            Pasig”); and practiced drawing, painting, and clay modeling, all of
            which remained lifelong interests for him.
          </Text>

          <Text>
            Rizal eventually earned a land surveyor’s and assessor’s degree from
            the Ateneo Municipal while taking up Philosophy and Letters at the
            University of Santo Tomas. Upon learning that his mother was going
            blind, Rizal opted to study ophthalmology at the UST Faculty of
            Medicine and Surgery. He, however, was not able to complete the
            course because “he became politically isolated by adversaries among
            the faculty and clergy who demanded that he assimilate to their
            system.”
          </Text>

          <Text>
            Without the knowledge of his parents, Rizal traveled to Europe in
            May 1882. According to his biographer, Austin Craig, Rizal, “in
            order to obtain a better education, had to leave his country
            stealthily like a fugitive from justice, and his family, to save
            themselves from persecution, were compelled to profess ignorance of
            his plans and movements. His name was entered in Santo Tomas at the
            opening of the new term, with the fees paid, and Paciano had gone to
            Manila pretending to be looking for this brother whom he had
            assisted out of the country.”
          </Text>

          <Text>
            Rizal earned a Licentiate in Medicine at the Universidad Central de
            Madrid, where he also took courses in philosophy and literature. It
            was in Madrid that he conceived of writing Noli Me Tangere. He also
            attended the University of Paris and, in 1887, completed his eye
            specialization course at the University of Heidelberg. It was also
            in that year that Rizal’s first novel was published (in Berlin).
          </Text>

          <Text>
            Rizal is said to have had the ability to master various skills,
            subjects, and languages. Our national hero was also a doctor,
            farmer, naturalist (he discovered the Draco rizali, a small lizard;
            Apogania rizali, a beetle; and the Rhacophorus rizali, a frog),
            writer, visual artist, athlete (martial arts, fencing, and pistol
            shooting), musician, and social scientist.
          </Text>

          <Text className="font-bold">Early Schooling</Text>
          <Text className="font-bold">Rizal’s first teachers:</Text>
          <Text>1. Dona Teodora</Text>
          <View className="flex-row space-x-2 ml-4">
            <Text>
              - Was his mother she was patient, conscientious, and understanding
            </Text>
          </View>
          <View className="flex-row space-x-2 ml-4">
            <Text>- She discovered that her son had a talent for poetry</Text>
          </View>
          <View className="flex-row space-x-2 ml-4">
            <Text>- She encouraged him to write poems</Text>
          </View>
          <Text>2. Private Tutors of Rizal</Text>
          <View className="flex-row space-x-2 ml-4">
            <Text>- Maestro Celestino</Text>
          </View>
          <View className="flex-row space-x-2 ml-4">
            <Text>- Maestro Lucas</Text>
          </View>
          <View className="flex-row space-x-2 ml-4">
            <Text>- Leon Monroy</Text>
          </View>
          <Text className="font-bold">Rizal goes to Binan,Laguna:</Text>
          <View className="flex-row space-x-2 ml-4">
            <Text>- June, 1869 Rizal left for Binan.</Text>
          </View>
          <View className="flex-row space-x-2 ml-4">
            <Text>- Was accompanied by Paciano his older brother.</Text>
          </View>
          <View className="flex-row space-x-2 ml-4">
            <Text>- He was taught by Maestro Justiniano.</Text>
          </View>
          <View className="flex-row space-x-2 ml-4">
            <Text>- In academic studies, Rizal beat all Binan boys.</Text>
          </View>
          <View className="flex-row space-x-2 ml-4">
            <Text>
              - He surpassed them all in Spanish, Latin, and other subjects.
            </Text>
          </View>
          <Text className="font-bold">Life and Studies in Ateneo:</Text>
          <View className="flex-row space-x-2 ml-4">
            <Text>- Ateneo De Municipal established by the Jesuits.</Text>
          </View>
          <View className="flex-row space-x-2 ml-4">
            <Text>- Rizal entered in 1872.</Text>
          </View>
          <View className="flex-row space-x-2 ml-4">
            <Text>
              - He belonged to the class composed of Spaniards, mestizos and
              Filipinos.
            </Text>
          </View>
          <View className="flex-row space-x-2 ml-4">
            <Text>- His teacher was Fr. Jose Bech.</Text>
          </View>
          <View className="flex-row space-x-2 ml-4">
            <Text>
              - He was considered as an inferior and was placed at the buttom of
              the class.
            </Text>
          </View>
          <View className="flex-row space-x-2 ml-4">
            <Text>
              - By the end of the month he became the emperor and received a
              prize, a religious picture.
            </Text>
          </View>
          <View className="flex-row space-x-2 ml-4">
            <Text>
              - To improve his Spanish Rizal took private lessons in Santa
              Isabel College.
            </Text>
          </View>
          <View className="flex-row space-x-2 ml-4">
            <Text>- He graduated on March 23, 1877(16 years old).</Text>
          </View>
          <View className="flex-row space-x-2 ml-4">
            <Text>
              - Received the degree of bachelor of arts, with highest honors not
              a valedictiorian.
            </Text>
          </View>

          <Text className="font-bold">Extra Curricular Involvement:</Text>
          <View className="flex-row space-x-2 ml-4">
            <Text>- An emperor inside the classroom.</Text>
          </View>
          <View className="flex-row space-x-2 ml-4">
            <Text>- Campus leader.</Text>
          </View>
          <View className="flex-row space-x-2 ml-4">
            <Text>
              - Active member and became a secretary, the Marian Congregation
              Religious Society.
            </Text>
          </View>
          <View className="flex-row space-x-2 ml-4">
            <Text>
              - Member of the Academy of Spanish Literature and the Academy of
              Natural Sciences.
            </Text>
          </View>
          <View className="flex-row space-x-2 ml-4">
            <Text>
              - Studied painting under the famous Spanish Painter, Agustin Saez.
            </Text>
          </View>
          <View className="flex-row space-x-2 ml-4">
            <Text>
              - Improved his sculpture talents under the supervision of Romualdo
              de Jesus.
            </Text>
          </View>
          <View className="flex-row space-x-2 ml-4">
            <Text>
              - Engaged in gymnastics and fencing and continued the physical
              training under his sports-minded Tio Manuel.
            </Text>
          </View>

          <Text className="font-bold">
            Medical Studies in University of Sto. Thomas (1877-1882):
          </Text>
          <View className="flex-row space-x-2 ml-4">
            <Text>
              - Engaged in gymnastics and fencing and continued the physical
              training under his sports-minded Tio Manuel.
            </Text>
          </View>
          <View className="flex-row space-x-2 ml-4">
            <Text>- After graduating , he continued his education at UST.</Text>
          </View>
          <View className="flex-row space-x-2 ml-4">
            <Text>- He finished a year in Philosophy and Letters.</Text>
          </View>
          <View className="flex-row space-x-2 ml-4">
            <Text>- He decided to shift to a medical course.</Text>
          </View>
          <View className="flex-row space-x-2 ml-4">
            <Text>
              - UST was under the Dominicans , rival of the Jesuits in
              education.
            </Text>
          </View>
          <View className="flex-row space-x-2 ml-4">
            <Text>
              - Remained loyal to Ateneo participated in extracurricular
              activities in Ateneo and completed a course in surveying.
            </Text>
          </View>
          <View className="flex-row space-x-2 ml-4">
            <Text>- As a Thomasian he won more literary laurels.</Text>
          </View>
          <View className="flex-row space-x-2 ml-4">
            <Text>
              - During his first term in 1877-1878 in UST, he studied Cosmology,
              Metaphysics , Theodicy and History of Philosophy.
            </Text>
          </View>
          <View className="flex-row space-x-2 ml-4">
            <Text>
              - It was during the school term 1878-1879 that Rizal pursued his
              studies in medicine.
            </Text>
          </View>

          <Text className="font-bold">
            Reasons why Rizal wanted to study Medicine:
          </Text>
          <View className="flex-row space-x-2 ml-4">
            <Text>
              - He wanted to be a physician so that he could cure his mother’s
              failing eyesight.
            </Text>
          </View>
          <View className="flex-row space-x-2 ml-4">
            <Text>
              - Fr. Pablo Ramon, the Father Rector of Ateneo whom he consulted
              for a choice of career, finally answered his letter , and
              recommended medicine.
            </Text>
          </View>
          <Text className="font-bold">Pre - Med Course:</Text>
          <View className="flex-row space-x-2 ml-4">
            <Text>
              - Curso de Ampliacion or Advanced course in Physics, Chemistry and
              Natural History.
            </Text>
          </View>
          <View className="flex-row space-x-2 ml-4">
            <Text>
              - Out of the 28 young men taking Ampliacion only four including
              Rizal were granted the privilege of taking simultaneously the
              preparatory course and the first year of medicine.
            </Text>
          </View>
          <View className="flex-row space-x-2 ml-4">
            <Text>
              - Rizal also received his four year practical training in medicine
              at the Hospital de San Juan de Dios in Intramuros.
            </Text>
          </View>
          <View className="flex-row space-x-2 ml-4">
            <Text>
              - During his last year at the University, Rizal had obtained the
              global grade of Notable(Very Good) in all of his subjects, and he
              was the second best student in a decimated class of seven who
              passed the medicine course. After which, Rizal decided to study in
              Spain.
            </Text>
          </View>

          <Text className="font-bold">
            Academic Journey To Spain (1882-1885):
          </Text>
          <View className="flex-row space-x-2 ml-4">
            <Text>
              - His departure for Spain was kept secret from Spanish
              Authorities, friars and even his parents especially his mother
              because she would not allow him to go.
            </Text>
          </View>
          <View className="flex-row space-x-2 ml-4">
            <Text>
              - His departure for Spain was kept secret from Spanish
              Authorities, friars and even his parents especially his mother
              because she would not allow him to go.
            </Text>
          </View>
          <View className="flex-row space-x-2 ml-4">
            <Text>- To avoid detection , he used the name Jose Mercado.</Text>
          </View>
          <View className="flex-row space-x-2 ml-4">
            <Text>
              - On May 3, 1882 he boarded on Salvadora bound for Singapore where
              he was the only Filipino passenger.
            </Text>
          </View>
          <View className="flex-row space-x-2 ml-4">
            <Text>
              - On November 3, 1882, he enrolled in Universidad Central de
              Madrid taking up two courses: Philosophy an Letters and Medicine.
            </Text>
          </View>
          <View className="flex-row space-x-2 ml-4">
            <Text>
              - On June 21, 1884 , he conferred the degree of Licentiate in
              Medicine.
            </Text>
          </View>
          <View className="flex-row space-x-2 ml-4">
            <Text>
              - The Following academic year , he studied and passed all subjects
              leading to the degree of doctor of medicine.
            </Text>
          </View>
          <View className="flex-row space-x-2 ml-4">
            <Text>
              - Unfortunately, he was not able to submit the thesis required for
              graduation nor paid the corresponding fees.
            </Text>
          </View>
          <View className="flex-row space-x-2 ml-4">
            <Text>- With that, he was not awarded his Doctor’s Diploma.</Text>
          </View>
          <View className="flex-row space-x-2 ml-4">
            <Text>
              - Jose Rizal also finished his studies in Philosophy and Letters
              with higher grades.
            </Text>
          </View>
          <View className="flex-row space-x-2 ml-4">
            <Text>
              - He was awarded the Degree of Licentiate in Philosophy and
              Letters by the Universidad Central de Madrid June 19, 1885 with
              the rating of excellent.
            </Text>
          </View>
          <Text className="font-bold">
            Opthalmology studies and travels in Europe:
          </Text>
          <View className="flex-row space-x-2 ml-4">
            <Text>
              - Jose Rizal went to Paris and Germany in order to specialize in
              ophthalmology. Among all branches, he chose this specialization
              because he wanted to cure his mother’s failing eyesight.
            </Text>
          </View>
          <View className="flex-row space-x-2 ml-4">
            <Text>
              - In 1885, after studying at the Universidad Central de Madrid,
              Rizal, who was then 24 years old, went to Paris to acquire more
              knowledge in ophthalmology.
            </Text>
          </View>
          <Text className="font-bold">Rizal friends in Europe:</Text>
          <View className="flex-row space-x-2 ml-4">
            <Text>- Maximo Viola.</Text>
          </View>
          <View className="flex-row space-x-2 ml-4">
            <Text>- Senor Eusebio Corominas.</Text>
          </View>
          <View className="flex-row space-x-2 ml-4">
            <Text>- Don Miguel Morayta.</Text>
          </View>
          <View className="flex-row space-x-2 ml-4">
            <Text>- Dr. Louis de Weckert.</Text>
          </View>
          <View className="flex-row space-x-2 ml-4">
            <Text>
              - On February 3, 1886, after gathering some experience in
              ophthalmology, he left Paris and went to Heidelberg, Germany.
            </Text>
          </View>
          <View className="flex-row space-x-2 ml-4">
            <Text>
              - He worked at the University Eye Hospital under the direction of
              Dr. Otto Becker, a distinguished German ophthalmologist.
            </Text>
          </View>
          <View className="flex-row space-x-2 ml-4">
            <Text>
              - On April 22, 1886, Rizal wrote a poem entitled A Las Flores de
              Heidelberg (To the Flowers of Heidelberg) because he was
              fascinated by the blooming flowers along the Neckar River, which
              was the light blue flower called “forget-me-not”.
            </Text>
          </View>
          <View className="flex-row space-x-2 ml-4">
            <Text>
              - On August 14, 1886, Rizal arrived in Leipzig. There, he attended
              some lectures at the University of Leipzig on history and
              psychology.
            </Text>
          </View>

          <Text className="font-bold">
            Reasons Why Rizal choose to reside in germany longer:
          </Text>
          <View className="flex-row space-x-2 ml-4">
            <Text>- To gain further his studies in science and languages.</Text>
          </View>
          <View className="flex-row space-x-2 ml-4">
            <Text>
              - To observe the economic and political conditions of the German
              nation.
            </Text>
          </View>
          <View className="flex-row space-x-2 ml-4">
            <Text>- To associate with the famous scientists and scholars.</Text>
          </View>
          <View className="flex-row space-x-2 ml-4">
            <Text>- Lastly to publish his novel Noli Me Tangere.</Text>
          </View>
          <View className="flex-row space-x-2 ml-4">
            <Text>
              - Jose Rizal earned a Licentiate in Medicine at the Universidad
              Central de Madrid, where he also took courses in philosophy and
              literature. It was in Madrid that he began writing Noli Me
              Tangere. He also attended classes in the University of Paris and,
              in 1887, he completed his eye specialization course at the
              University of Heidelberg. It was also in that year that Rizal’s
              first novel was published in Berlin.
            </Text>
          </View>

          <Text className="font-bold">ATENEO DE MANILA UNIVERSITY</Text>
          <Image
            source={require("../../../assets/chapter5-f2.png")}
            className="w-full h-60 rounded-3xl"
          />
          <Text className="font-bold">
            SCHOLASTIC TRIUMPHS AT ATENEO DE MANILA (1872-1877)
          </Text>
          <Image
            source={require("../../../assets/chapter5-f3.png")}
            className="w-40 h-60 rounded-3xl mt-2 self-center"
          />
          <View className="flex-row space-x-2 ml-4">
            <Text>
              - Jose was sent to Manila four months after the martyrdom of
              Gom-Bur-Za and with Dona Teodorastill in prison. He studied in the
              Ateneo Municipal. A college under the supervision of the Spanish
              Jesuits.
            </Text>
          </View>
          <Text className="font-bold"> Ateneo Municipal</Text>
          <View className="flex-row space-x-2 ml-4">
            <Text>
              - Bitter rival of the Dominican-owned College of San Juan de
              Letran.
            </Text>
          </View>
          <View className="flex-row space-x-2 ml-4">
            <Text>
              - Formerly the Escuela Pia (Charity School)- for poor boys in
              Manila established in 1817.
            </Text>
          </View>
          <View className="flex-row space-x-2 ml-4">
            <Text>
              - In 1859, name was changed to Ateneo Municipal by the Jesuits and
              later became the Ateneo de Manila. Rizal Enters the Ateneo.
            </Text>
          </View>
          <View className="flex-row space-x-2 ml-4">
            <Text>
              - June 10, 1872- Jose, accompanied by Paciano, went to Manila to
              take the entrance examinations on Christian Doctrine,arithmetic,
              and reading at the College of San Juan de Letran, and passed them.
              His father was the first one who wished him to study at Letran but
              he changed his mind and decided to send Jose at Ateneo instead.
            </Text>
          </View>
          <Image
            source={require("../../../assets/chapter5-f4.png")}
            className="w-40 h-40 rounded-3xl mt-2 self-center"
          />
          <View className="flex-row space-x-2 ml-4">
            <Text>
              - Father Magin Ferrando, college registrar of Ateneo Municipal,
              refused to admit Jose because:
            </Text>
          </View>
          <View className="flex-row space-x-2 ml-4">
            <Text>
              - He was late for registration and he was sickly and undersized
              for his age (11 years old). Upon the intercession of Manuel Xerez
              Burgos, nephew of Father Burgos, he was admitted at Ateneo. Jose
              adopted the surname 'Rizal' at Ateneo because their family name
              Mercado´ had come under suspicion of the Spanish authorities.
            </Text>
          </View>
          <View className="flex-row space-x-2 ml-4">
            <Text>
              - Ateneo was located in Intramuros, within the walls of Manila. He
              boarded in a house on CaraballoStreet, 25 min walk from the
              college. The boarding house was owned by Titay, who owed Rizal
              family P300. Jose boarded there to collect part of the debt.
            </Text>
          </View>
          <Text className="font-bold">Jesuits System of Education:</Text>
          <View className="flex-row space-x-2 ml-4">
            <Text>
              - Jesuits trained the character of the student by rigid
              discipline, humanities and religious instruction. They heard Mass
              early in the morning before the beginning of daily class.
              Classeswere opened and closed with prayers.
            </Text>
          </View>
          <Text className="font-bold">
            Students were divided into two groups:
          </Text>
          <View className="flex-row space-x-2 ml-4">
            <Text>
              1. Roman Empire- Consisting of the internos (boarders) with red
              banners.
            </Text>
          </View>
          <View className="flex-row space-x-2 ml-4">
            <Text>
              2. Carthaginian Empire- Composed of the externos (non-boarders)
              with blue banners.
            </Text>
          </View>
          <View className="flex-row space-x-2 ml-4">
            <Text>
              - Each of these empires had its rank. Students fought for
              positions. With 3 mistakes, opponent’s position could lose his
              position.
            </Text>
          </View>
          <View className="flex-row space-x-2 ml-4">
            <Text>- 1st Best: Emperor</Text>
          </View>
          <View className="flex-row space-x-2 ml-4">
            <Text>- 2nd Best: Tribune</Text>
          </View>
          <View className="flex-row space-x-2 ml-4">
            <Text>- 3rd Best: Decurion</Text>
          </View>
          <View className="flex-row space-x-2 ml-4">
            <Text>- 4th Best: Centurion</Text>
          </View>
          <View className="flex-row space-x-2 ml-4">
            <Text>- 5th Best: Standard-bearer</Text>
          </View>
          <View className="flex-row space-x-2 ml-4">
            <Text>
              - Ateneo student’s uniform consisted of ‘hemp fabric trousers´ and
              ‘striped cotton coat´. The coat was called rayadillo, and was
              adopted as the uniform for Filipino troops during the days of the
              First Philippine Republic.
            </Text>
          </View>
          <Text className="font-bold">
            Rizal’s First Year in Ateneo (1872-1873)
          </Text>
          <View className="flex-row space-x-2 ml-4">
            <Text>- Rizal’s first professor in Ateneo was Fr. Jose Bech.</Text>
          </View>
          <View className="flex-row space-x-2 ml-4">
            <Text>
              - Rizal was placed at the bottom of the class since he was a
              newcomer and knew little Spanish.He was an externo
              (Carthaginians), occupying the end of the line. But at the end of
              the month, he became ‘emperor´ of his Empire. Hewas the brightest
              pupil in the whole class, and he was awarded a prize, a religious
              prize.
            </Text>
          </View>
          <View className="flex-row space-x-2 ml-4">
            <Text>
              - Rizal took private lessons in Santa Isabel College during noon
              recesses to improve his Spanish language payingthree pesos for
              those extra lessons.
            </Text>
          </View>
          <View className="flex-row space-x-2 ml-4">
            <Text>
              - He placed second at the end of the year, although all his grades
              were still marked ‘Excellent' .Rizal didn’t enjoy his summer
              because his mother was in prison so Neneng (Saturnina) brought him
              to Tanawan. But without telling his father, he went to Santa Cruz
              to visit her mother in prison.He told her of his brilliant grades.
              After summer, he returned to Manila and now boarded inside
              Intramuros at No. 6 Magallanes Street. Doña Pepay, who had a
              widowed daughter and 4 sons, was his landlady.
            </Text>
          </View>
          <Text className="font-bold">Second Year in Ateneo (1873-1874)</Text>
          <View className="flex-row space-x-2 ml-4">
            <Text>
              - Rizal lost the class leadership. But he repented and even
              studied harder, once more became ‘emperor´. He received excellent
              grades in all subjects and a gold medal.
            </Text>
          </View>
          <Text className="font-bold">Prophecy of Mother’s Release:</Text>
          <View className="flex-row space-x-2 ml-4">
            <Text>
              - Doña Teodora told her son of her dream the previous night.
              Rizal, interpreting the dream, told her that she would be released
              from prison in 3 months time. It became true. Doña Teodora likened
              his son to the youthful Joseph in the Bible in his ability to
              interpret dreams.
            </Text>
          </View>
          <Text className="font-bold">Teenage Interest in Reading:</Text>
          <View className="flex-row space-x-2 ml-4">
            <Text>
              - The first favorite novel of Rizal was The Count of Monte Cristo
              by Alexander Dumas. His boyish imagination was stirred by the
              sufferings of Edmond Dantes (the hero) in prison, his spectacular
              escape from the dungeon of Chateau d’If, his finding a buried
              treasure in the rocky island of Monte Cristo, and his dramatic
              revenge on his enemies who had wronged him.
            </Text>
          </View>
          <View className="flex-row space-x-2 ml-4">
            <Text>
              - Rizal also read non-fiction. He persuaded his father to buy a
              costly set of Cesar Cantu’s historical work entitled Universal
              History. He also read Travels in the Philippines by Dr. Feodor
              Jagor, a German scientist-traveler who visited Phil in 1859-60. He
              was impressed by:
            </Text>
          </View>
          <View className="flex-row space-x-2 ml-4">
            <Text>
              1. Jagor’s keen observations of the defects of Spanish
              colonization.
            </Text>
          </View>
          <View className="flex-row space-x-2 ml-4">
            <Text>
              2. His prophecy that someday Spain would lose the Phil and that
              America would come to succeeder as colonizer.
            </Text>
          </View>
          <Text className="font-bold">Third Year in Ateneo(1875-76)</Text>
          <View className="flex-row space-x-2 ml-4">
            <Text>- June 16, 1875- He became an interno in Ateneo.</Text>
          </View>
          <View className="flex-row space-x-2 ml-4">
            <Text>
              - Fr. Francisco de Paula Sanchez- One of his professors inspired
              him to study harder and write poetry.
            </Text>
          </View>
          <View className="flex-row space-x-2 ml-4">
            <Text>
              - Rizal’s best professor in Ateneo - Rizal described him as a
              model of uprightness, earnestness, and love for the advancement of
              his pupils. He returned to Calamba with 5 medals and excellent
              ratings.
            </Text>
          </View>
          <Text className="font-bold">Last Year in Ateneo (1876-77)</Text>
          <View className="flex-row space-x-2 ml-4">
            <Text>
              - March 23, 1877- Rizal, 16 years old, received from his Alma
              Mater, Ateneo Municipal, the degree of Bachelor of Arts, with
              highest honors.
            </Text>
          </View>
          <View className="flex-row space-x-2 ml-4">
            <Text>
              - The night before graduation, he could not sleep. Early morning
              on the day of his graduation, he prayed to the Virgin to ‘commend
              his life and protect him as he steps into the world´.
            </Text>
          </View>

          <Text className="font-bold">
            Extra-Curricular Activities in Ateneo:
          </Text>
          <View className="flex-row space-x-2 ml-4">
            <Text>
              - He was an active member, later secretary, of Marian
              Congregation- a religious society- He was accepted because of his
              academic brilliance and devotion to Our Lady of Immaculate
              Conception, the college patroness.
            </Text>
          </View>
          <View className="flex-row space-x-2 ml-4">
            <Text>
              - He is also a member of the Academy of Spanish Literature and the
              Academy of Natural Sciences.
            </Text>
          </View>
          <View className="flex-row space-x-2 ml-4">
            <Text>
              - He studied painting under Agustin Saez, a famous painter, and
              sculpture under Romualdo de Jesus.
            </Text>
          </View>
          <View className="flex-row space-x-2 ml-4">
            <Text>
              - He continued his physical training under his sports-minded Tio
              Manuel.
            </Text>
          </View>
          <Text className="font-bold">Sculptural Works in Ateneo:</Text>
          <View className="flex-row space-x-2 ml-4">
            <Text>
              - He carved an image of The Virgin Mary on a piece of batikuling
              (Philippine hardwood) with his pocket-knife. The Jesuits fathers
              were amazed.
            </Text>
          </View>
          <View className="flex-row space-x-2 ml-4">
            <Text>
              - Father Lleonart requested him to carve for him an image of the
              Sacred Heart of Jesus. He intended to take the image with him in
              Spain but forgot to do so.
            </Text>
          </View>
          <Text className="font-bold">
            INTIMATE ALLIANCE BETWEEN RELIGION AND GOOD EDUCATION
          </Text>
          <View className="flex-row space-x-2 ml-4">
            <Text>
              - Rizal shared his thoughts about the importance of education to
              enlighten the nation which was useful to gain societal freedom for
              every nation. It may also provide us the necessary knowledge,
              skills and attitude to expand the horizon of our thoughts.
              However, this would not be enough to be properly educated. Rizal
              thought that there was really an intimate alliance between
              religion and good education.
            </Text>
          </View>
          <Text className="font-bold">JUNTO AL PASIG</Text>
          <Image
            source={require("../../../assets/chapter5-f5.png")}
            className="w-40 h-40 rounded-3xl mt-2 self-center"
          />
          <View className="flex-row space-x-2 ml-4">
            <Text>
              - In his memoirs of his younger years, he narrates that his mother
              Doña Teodora Alonzo, a member of the Venerable Third Order of St.
              Francis of Assisi, had a difficult pregnancy that she almost died
              of childbirth because of his big head have she not made a vow to
              the Virgin of Antipolo to make a pilgrimage to her shrine if she
              will have a safe delivery of Jose.
            </Text>
          </View>
          <View className="flex-row space-x-2 ml-4">
            <Text>
              - He was able to fulfill this promise on June 6, 1868, accompanied
              by his father, Don Francisco Mercado Rizal since Doña Teodora was
              advancing with age and just gave birth to his sister which limits
              her movements in the years to come. He also kept a souvenir print
              of the Virgin of Antipolo that he brings along to his travels.
            </Text>
          </View>
          <View className="flex-row space-x-2 ml-4">
            <Text>
              - The play basically poses 7 questions related with what
              christians believe through leonido, the main character, a
              teenager, Rizal portrayed another perspective of Satan and the
              virgin mary. He centers on thoughts such as who is the real
              redeemer of mankind? Who should really be adored? Who should one
              believe? Hence, the play starts when Candido Pascual and other
              children were waiting for the coming of the Virgin Mary(through
              the procession)& the children boasted on who had the best present
              for the Virgin.
            </Text>
          </View>
          <View className="flex-row space-x-2 ml-4">
            <Text>
              - The first boy proudly states about his bird cage at home, the
              second boy boasts of flowers, the third one wants firecrackers,
              Meanwhile, Pascual says that he has a flute. Before they end up in
              a fight, Candido, barged in their conversation and suggested that
              they all help one another in setting up a banca (dugout canoe)
              with colorful pennants and banners and paddle slowly into the
              river. He then asked each to bring his own present for the lady
              (flute, bird cage, flowers, and firecrackers). The rest of the
              children agreed. However, sometime later, they realized that their
              leader Leonido was missing. Thus, they searched for him.
            </Text>
          </View>
          <Text className="font-bold">
            WRITING JUNTO AL PASIG DURING HIS YEARS AT UNIVERSITY OF STO TOMAS
          </Text>
          <View className="flex-row space-x-2 ml-4">
            <Text>
              - In his student life in Manila, the role of the Virgin of
              Antipolo is still prominent in his life where he notes that brings
              print of the image of the Virgin when he left home for school and
              later in his travels during his adulthood. In 1880, the Virgin of
              Antipolo would become Rizal’s muse when he wrote the zarzuela (one
              act play) entitled “Junto al Pasig” (Along the Pasig) while he was
              taking both his pre medicine and medicine proper courses at the
              University of Santo Tomas (a rare privilege for a student like him
              which dispels the long standing misinformation that he suffered
              mistreatment at the University).
            </Text>
          </View>
          <Text className="font-bold">
            Rizal at the University of Santo Tomas(1877-1882):
          </Text>
          <Image
            source={require("../../../assets/chapter5-f6.png")}
            className="w-40 h-60 rounded-3xl mt-2 self-center"
          />
          <View className="flex-row space-x-2 ml-4">
            <Text>
              - Undecided, Rizal upon entering the university, was not certain
              which course of study he wanted to pursue.The Jesuit priests who
              had been his former mentors had advised him to take up farming, or
              to join the order and be a man of the cloth.
            </Text>
          </View>
          <View className="flex-row space-x-2 ml-4">
            <Text>
              - However, his taste went towards law, literature, and medicine.
              In the end, he decided to sign up for Philosophy and Letters
              during his freshman year because of the following reasons:
            </Text>
          </View>
          <View className="flex-row space-x-2 ml-4">
            <Text>1. It was what his father would have wanted for him.</Text>
          </View>
          <View className="flex-row space-x-2 ml-4">
            <Text>
              2. He had failed to seek the advice of the rector of the Ateneo,
              Father Ramon Pablo.
            </Text>
          </View>
          <View className="flex-row space-x-2 ml-4">
            <Text>
              - As part of the course, he had to complete units in the subjects
              Theodicy, History of Philosophy, Cosmology and Metaphysics. His
              report card was very impressive:
            </Text>
          </View>
          <Image
            source={require("../../../assets/chapter5-f9.png")}
            className="w-full h-50 rounded-3xl"
          />
          <Text className="font-bold">Shifting to Medicine:</Text>
          <View className="flex-row space-x-2 ml-4">
            <Text>
              - After completing his first year, Rizal decided to take up
              medicine as his university course. This change of heart was due to
              two factors. First was Father Ramon Pablo, rector of the Ateneo,
              had advised him to pursue the course. And second was Rizal's
              mother had failing eyesight and he thought he owed it to her to
              become a doctor to cure her condition.
            </Text>
          </View>
          <View className="flex-row space-x-2 ml-4">
            <Text>
              - Rizal's performance at the University of Santo Tomas was not as
              excellent as his time at the Ateneo. His grade after shifting to
              medicine had suffered as well:
            </Text>
          </View>
          <Image
            source={require("../../../assets/chapter5-f7.png")}
            className="w-full h-60 rounded-3xl"
            resizeMode="stretch"
          />
          <Image
            source={require("../../../assets/chapter5-f8.png")}
            className="w-full h-60 rounded-3xl"
            resizeMode="stretch"
          />
          <View className="flex-row space-x-2 ml-4">
            <Text>
              - Unfortunately, Rizal was not happy at UST and his reflected on
              his grades. There were three main factors that contributed to his
              unhappiness at the university, namely:
            </Text>
          </View>
          <View className="flex-row space-x-2 ml-4">
            <Text>1. The Dominican professors were hostile to him.</Text>
          </View>
          <View className="flex-row space-x-2 ml-4">
            <Text>2. Filipino students suffered discrimination.</Text>
          </View>
          <View className="flex-row space-x-2 ml-4">
            <Text>
              3. The method of instruction at UST was obsolete and repressive.
            </Text>
          </View>
          <View className="flex-row space-x-2 ml-4">
            <Text>
              - Likewise, Rizal was not satisfied with the system of education
              in the University. There were plenty of things to distract a young
              man in the peak of his youth. He would later find out that his
              real calling was in the arts, not in medicine.
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
