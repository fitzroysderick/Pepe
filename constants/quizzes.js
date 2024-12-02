const quizzes = [
  {
    id: "1",
    content: [
      {
        level: "Easy",
        question:
          "Ferdinand Blumentritt informed Rizal about the situation in Cuba.",
        choices: [
          {
            letter: "T",
            words: "True",
          },
          {
            letter: "F",
            words: "False",
          },
        ],
        answer: "T",
      },
      {
        level: "Easy",
        question:
          "Rizal wrote the poem Mi Último Adiós when he planned to travel to Europe and then to Cuba.",
        choices: [
          {
            letter: "T",
            words: "True",
          },
          {
            letter: "F",
            words: "False",
          },
        ],
        answer: "F",
      },
      {
        level: "Easy",
        question:
          "Rizal wrote a letter to Governor General Ramon Blanco to volunteer as a military doctor in Cuba on December 19, 1885.",
        choices: [
          {
            letter: "T",
            words: "True",
          },
          {
            letter: "F",
            words: "False",
          },
        ],
        answer: "T",
      },
      {
        level: "Easy",
        question:
          "Rizal boarded the ship Isla de Panay to travel to Barcelona.",
        choices: [
          {
            letter: "T",
            words: "True",
          },
          {
            letter: "F",
            words: "False",
          },
        ],
        answer: "T",
      },
      {
        level: "Easy",
        question:
          "Emilio Jacinto confronted Rizal on the boat Caridad to rescue him.",
        choices: [
          {
            letter: "T",
            words: "True",
          },
          {
            letter: "F",
            words: "False",
          },
        ],
        answer: "T",
      },
      {
        level: "Easy",
        question: "The Cry of Pugadlawin took place on August 23, 1896.",
        choices: [
          {
            letter: "T",
            words: "True",
          },
          {
            letter: "F",
            words: "False",
          },
        ],
        answer: "T",
      },
      {
        level: "Easy",
        question:
          "While waiting for the ship Isla de Panay, Rizal was transferred to the Steamer Castilla.",
        choices: [
          {
            letter: "T",
            words: "True",
          },
          {
            letter: "F",
            words: "False",
          },
          ,
        ],
        answer: "T",
      },
      {
        level: "Easy",
        question:
          "Governor General Ramon Blanco approved Rizal’s request to volunteer as a military doctor in Cuba.",
        choices: [
          {
            letter: "T",
            words: "True",
          },
          {
            letter: "F",
            words: "False",
          },
        ],
        answer: "C",
      },
      {
        level: "Easy",
        question:
          "Rizal arrived in Barcelona on October 3, 1896, aboard the Isla de Panay.",
        choices: [
          {
            letter: "T",
            words: "True",
          },
          {
            letter: "F",
            words: "False",
          },
        ],
        answer: "T",
      },
      {
        level: "Easy",
        question: "RA 1425 was approved in June 12, 1956.",
        choices: [
          {
            letter: "T",
            words: "True",
          },
          {
            letter: "F",
            words: "False",
          },
        ],
        answer: "T",
      },
      {
        level: "Hard",
        question: "When did Rizal arrive in Barcelona on the Isla de Panay?",
        answer: "October 3, 1896",
      },
      {
        level: "Hard",
        question: "Where was Rizal detained upon his arrival in Barcelona?",
        answer: "Montjuich Castle",
      },
      {
        level: "Hard",
        question:
          "What event prompted Bonifacio to summon all leaders of the Katipunan?",
        answer: "Mass arrests of Katipuneros",
      },
      {
        level: "Hard",
        question:
          "Where did Bonifacio and the Katipuneros retreat after attacking Manila?",
        answer: "Quezon City",
      },
      {
        level: "Hard",
        question: "Who attacked and captured the province of Cavite?",
        answer: "Emilio Aguinaldo",
      },
      {
        level: "Hard",
        question: "Who disguised themselves as sailors to rescue Rizal?",
        answer: "Emilio Jacinto and Guillermo Masangkay",
      },
      {
        level: "Medium",
        question:
          "What was Rizal’s reaction to being blamed for the disturbance in Manila?",
        choices: [
          {
            letter: "A",
            words: "Governor General Ramon Blanco",
          },
          {
            letter: "B",
            words: "Colonel Francisco Olive",
          },
          {
            letter: "C",
            words: "General Roman Despujol",
          },
          {
            letter: "D",
            words: "Andres Bonifacio",
          },
        ],
        answer: "B",
      },
      {
        level: "Medium",
        question:
          "Who persuaded Rizal to stay in Singapore to avoid arrest in Spain?",
        choices: [
          {
            letter: "A",
            words: "He agreed and supported the revolution",
          },
          {
            letter: "B",
            words: "He was upset",
          },
          {
            letter: "C",
            words: "He ignored it",
          },
          {
            letter: "D",
            words: "He fled the country",
          },
        ],
        answer: "B",
      },
      {
        level: "Medium",
        question: "When did Rizal board the Isla de Panay?",
        choices: [
          {
            letter: "A",
            words: "Emilio Jacinto",
          },
          {
            letter: "B",
            words: "Manuel Camus",
          },
          {
            letter: "C",
            words: "Guillermo Masangkay",
          },
          {
            letter: "D",
            words: "Andres Bonifacio",
          },
        ],
        answer: "A",
      },
      {
        level: "Medium",
        question: "What did Rizal write in his diary dated October 6?",
        choices: [
          {
            letter: "A",
            words: "His plans to escape",
          },
          {
            letter: "B",
            words: "His transfer to Montjuich Castle",
          },
          {
            letter: "C",
            words: "His arrival in Barcelona",
          },
          {
            letter: "D",
            words: "His refusal to be rescued",
          },
        ],
        answer: "B",
      },
      {
        level: "Medium",
        question:
          "Who informed Rizal of a telegram from Madrid that he would be treated as a prisoner?",
        choices: [
          {
            letter: "A",
            words: "General Roman Despujol",
          },
          {
            letter: "B",
            words: "Colonel Francisco Olive",
          },
          {
            letter: "C",
            words: "Governor General Ramon Blanco",
          },
          {
            letter: "D",
            words: "Captain Rafael Dominguez",
          },
        ],
        answer: "A",
      },
      {
        level: "Medium",
        question: "On what date did Rizal arrive in Manila on the ship Colon?",
        choices: [
          {
            letter: "A",
            words: "October 3, 1896",
          },
          {
            letter: "B",
            words: "December 30, 1896",
          },
          {
            letter: "C",
            words: "November 3, 1896",
          },
          {
            letter: "D",
            words: "September 3, 1896",
          },
        ],
        answer: "C",
      },
      {
        level: "Medium",
        question:
          "Who headed the Spanish military tribunal that investigated Rizal?",
        choices: [
          {
            letter: "A",
            words: "Colonel Francisco Olive",
          },
          {
            letter: "B",
            words: "Governor General Ramon Blanco",
          },
          {
            letter: "C",
            words: "General Roman Despujol",
          },
          {
            letter: "D",
            words: "Captain Rafael Dominguez",
          },
        ],
        answer: "A",
      },
      {
        level: "Medium",
        question: "How many kinds of evidence were presented against Rizal?",
        choices: [
          {
            letter: "A",
            words: "One",
          },
          {
            letter: "B",
            words: "Two",
          },
          {
            letter: "C",
            words: "Three",
          },
          {
            letter: "D",
            words: "Four",
          },
        ],
        answer: "B",
      },
      {
        level: "Hard",
        question:
          "Who was appointed as the Judge Advocate to institute action against Rizal?",
        answer: "Captain Rafael Dominguez",
      },
      {
        level: "Hard",
        question:
          "What was the penalty for rebellion and sedition according to Rizal’s accusation?",
        answer: "Death",
      },
      {
        level: "Hard",
        question: "Who testified that Rizal was against rebellion?",
        answer: "Pio Valenzuela",
      },
      {
        level: "Hard",
        question:
          "Who approved Rizal’s request to volunteer as a military doctor in Cuba?",
        answer: "Governor General Ramon Blanco",
      },
      {
        level: "Medium",
        question:
          "Which ship was supposed to take Rizal to Europe but had left earlier?",
        choices: [
          {
            letter: "A",
            words: "Isla de Luzon",
          },
          {
            letter: "B",
            words: "Isla de Panay",
          },
          {
            letter: "C",
            words: "Colon",
          },
          {
            letter: "D",
            words: "Castilla",
          },
        ],
        answer: "A",
      },
      {
        level: "Medium",
        question:
          "Who ruled that the laws of the British Empire could not apply to Rizal’s detention on the Colon?",
        choices: [
          {
            letter: "A",
            words: "Governor General Ramon Blanco",
          },
          {
            letter: "B",
            words: "Sir Lionel Cox",
          },
          {
            letter: "C",
            words: "Colonel Francisco Olive",
          },
          {
            letter: "D",
            words: "General Roman Despujol",
          },
        ],
        answer: "B",
      },
      {
        level: "Medium",
        question: "Where was Rizal detained upon his arrival in Manila?",
        choices: [
          {
            letter: "A",
            words: "Fort Santiago",
          },
          {
            letter: "B",
            words: "Montjuich Castle",
          },
          {
            letter: "C",
            words: "Cuartel de España",
          },
          {
            letter: "D",
            words: "Steamer Castilla",
          },
        ],
        answer: "A",
      },
      {
        level: "Medium",
        question: "Who testified that Rizal was against rebellion?",
        choices: [
          {
            letter: "A",
            words: "Pio Valenzuela",
          },
          {
            letter: "B",
            words: "Aguedo del Rosario",
          },
          {
            letter: "C",
            words: "Jose Dizon",
          },
          {
            letter: "D",
            words: "Ambrosio Salvador",
          },
        ],
        answer: "A",
      },
      {
        level: "Medium",
        question:
          "Who headed the first military commission that convened to prosecute Rizal?",
        choices: [
          {
            letter: "A",
            words: "Colonel Francisco Olive",
          },
          {
            letter: "B",
            words: "Governor General Ramon Blanco",
          },
          {
            letter: "C",
            words: "General Roman Despujol",
          },
          {
            letter: "D",
            words: "Captain Rafael Dominguez",
          },
        ],
        answer: "A",
      },
      {
        level: "Medium",
        question: "Who ordered Rizal’s execution?",
        choices: [
          {
            letter: "A",
            words: "General Polavieja",
          },
          {
            letter: "B",
            words: "General Roman Despujol",
          },
          {
            letter: "C",
            words: "Governor General Ramon Blanco",
          },
          {
            letter: "D",
            words: "Colonel Francisco Olive",
          },
        ],
        answer: "A",
      },
      {
        level: "Medium",
        question: "When did Governor General Blanco sign Rizal’s execution?",
        choices: [
          {
            letter: "A",
            words: "December 28, 1896",
          },
          {
            letter: "B",
            words: "September 30, 1896",
          },
          {
            letter: "C",
            words: "October 6, 1896",
          },
          {
            letter: "D",
            words: "December 19, 1896",
          },
        ],
        answer: "D",
      },
      {
        level: "Hard",
        question: "On what date was Rizal executed?",
        answer: "December 30, 1896",
      },
      {
        level: "Hard",
        question:
          "What was the name of the judge who ruled that Rizal was illegally detained aboard the Colon?",
        answer: "Sir Lionel Cox",
      },
      {
        level: "Hard",
        question:
          "Who persuaded Rizal to stay in Singapore to avoid arrest in Spain?",
        answer: "Manuel Camus",
      },
    ],
  },
  {
    id: "2",
    content: [
      {
        level: "Easy",
        question: "The Greek word for heroism is derived from Heros.",
        choices: [
          {
            letter: "T",
            words: "True",
          },
          {
            letter: "F",
            words: "False",
          },
        ],
        answer: "T",
      },
      {
        level: "Easy",
        question:
          "Jose Rizal is considered a national hero of the Philippines because of his contributions to the country’s well-being and his peaceful reform methods.",
        choices: [
          {
            letter: "T",
            words: "True",
          },
          {
            letter: "F",
            words: "False",
          },
        ],
        answer: "T",
      },
      {
        level: "Easy",
        question: "Rizal's first novel is titled El Filibusterismo.",
        choices: [
          {
            letter: "T",
            words: "True",
          },
          {
            letter: "F",
            words: "False",
          },
        ],
        answer: "F",
      },
      {
        level: "Easy",
        question: "Rizal was born on June 19, 1861.",
        choices: [
          {
            letter: "T",
            words: "True",
          },
          {
            letter: "F",
            words: "False",
          },
        ],
        answer: "T",
      },
      {
        level: "Easy",
        question: "Jose Rizal’s profession was as a lawyer.",
        choices: [
          {
            letter: "T",
            words: "True",
          },
          {
            letter: "F",
            words: "False",
          },
        ],
        answer: "F",
      },
      {
        level: "Easy",
        question: "Rizal opposed Spanish rule by joining armed uprisings.",
        choices: [
          {
            letter: "T",
            words: "True",
          },
          {
            letter: "F",
            words: "False",
          },
        ],
        answer: "F",
      },
      {
        level: "Easy",
        question:
          "Rizal founded the Liga Filipina upon his return to the Philippines in 1892.",
        choices: [
          {
            letter: "T",
            words: "True",
          },
          {
            letter: "F",
            words: "False",
          },
        ],
        answer: "T",
      },
      {
        level: "Easy",
        question: "Rizal was exiled to Cebu in 1892.",
        choices: [
          {
            letter: "T",
            words: "True",
          },
          {
            letter: "F",
            words: "False",
          },
        ],
        answer: "F",
      },
      {
        level: "Easy",
        question: "El Filibusterismo is the sequel to Noli Me Tangere.",
        choices: [
          {
            letter: "T",
            words: "True",
          },
          {
            letter: "F",
            words: "False",
          },
        ],
        answer: "T",
      },
      {
        level: "Easy",
        question:
          "Rizal’s final poem is called Mi Último Adiós or Last Farewell.",
        choices: [
          {
            letter: "T",
            words: "True",
          },
          {
            letter: "F",
            words: "False",
          },
        ],
        answer: "T",
      },
      {
        level: "Hard",
        question: "What is the Greek word for heroism derived from?",
        answer: "Heros",
      },
      {
        level: "Hard",
        question:
          "Who is considered a national hero of the Philippines for his peaceful reform methods and significant contributions to the country’s well-being?",
        answer: "Jose Rizal",
      },
      {
        level: "Hard",
        question:
          "What is the title of Jose Rizal's first novel that vehemently criticized Spanish colonial governance in the Philippines?",
        answer: "Noli Me Tangere",
      },
      {
        level: "Medium",
        question: "What is the title of Jose Rizal's first novel?",
        choices: [
          {
            letter: "A",
            words: "El Filibusterismo",
          },
          {
            letter: "B",
            words: "Noli Me Tangere",
          },
          {
            letter: "C",
            words: "La Solidaridad",
          },
          {
            letter: "D",
            words: "Ultimo Adiós",
          },
        ],
        answer: "B",
      },
      {
        level: "Hard",
        question:
          "What was the primary focus of the Liga Filipina, founded by Jose Rizal in 1892?",
        answer: "Nonviolent reform",
      },
      {
        level: "Hard",
        question:
          "What significant historical work did Jose Rizal annotate to illustrate the pre-colonial history of the Philippines?",
        answer: "Sucesos de las Islas Filipinas",
      },
      {
        level: "Hard",
        question:
          "Which organization published many of Rizal’s writings, advocating for Philippine reforms?",
        answer: "La Solidaridad",
      },
      {
        level: "Medium",
        question: "What was the main message of Rizal’s novels?",
        choices: [
          {
            letter: "A",
            words: "Support for Spanish rule",
          },
          {
            letter: "B",
            words: "Call for violent uprising",
          },
          {
            letter: "C",
            words: "Criticism of Spanish colonial governance",
          },
          {
            letter: "D",
            words: "Promotion of economic reforms",
          },
        ],
        answer: "C",
      },
      {
        level: "Medium",
        question: "How did Rizal’s execution impact the Filipino people?",
        choices: [
          {
            letter: "A",
            words: "It discouraged further resistance",
          },
          {
            letter: "B",
            words: "It strengthened their resolve for independence",
          },
          {
            letter: "C",
            words: "It led to immediate independence",
          },
          {
            letter: "D",
            words: "It resulted in political apathy",
          },
        ],
        answer: "B",
      },
      {
        level: "Medium",
        question:
          "What did Rizal primarily use to fight for Philippine reforms?",
        choices: [
          {
            letter: "A",
            words: "Military force",
          },
          {
            letter: "B",
            words: "Diplomatic missions",
          },
          {
            letter: "C",
            words: "His writings",
          },
          {
            letter: "D",
            words: "Economic strategies",
          },
        ],
        answer: "C",
      },
      {
        level: "Medium",
        question:
          "What concept is central to the idea of heroism according to the text?",
        choices: [
          {
            letter: "A",
            words: "Wealth and power",
          },
          {
            letter: "B",
            words: "Exceptional courage and selflessness",
          },
          {
            letter: "C",
            words: "Political influence",
          },
          {
            letter: "D",
            words: "Religious devotion",
          },
        ],
        answer: "B",
      },
      {
        level: "Medium",
        question:
          "What role did Rizal's literary works play in the Philippine revolution?",
        choices: [
          {
            letter: "A",
            words: "They called for immediate armed rebellion",
          },
          {
            letter: "B",
            words: "They provided a peaceful critique of colonial rule",
          },
          {
            letter: "C",
            words: "They were ignored by the public",
          },
          {
            letter: "D",
            words: "They supported Spanish colonial policies",
          },
        ],
        answer: "B",
      },
      {
        level: "Medium",
        question: "Who led the Propaganda Movement?",
        choices: [
          {
            letter: "A",
            words: "Andres Bonifacio",
          },
          {
            letter: "B",
            words: "Emilio Aguinaldo",
          },
          {
            letter: "C",
            words: "Jose Rizal",
          },
          {
            letter: "D",
            words: "Antonio Morga",
          },
        ],
        answer: "C",
      },
      {
        level: "Medium",
        question:
          "What was the purpose of Rizal's annotated edition of Morga’s work?",
        choices: [
          {
            letter: "A",
            words: "To praise Spanish colonial rule",
          },
          {
            letter: "B",
            words: "To illustrate the pre-colonial history of the Philippines",
          },
          {
            letter: "C",
            words: "To support Spanish friars",
          },
          {
            letter: "D",
            words: "To promote religious reform",
          },
        ],
        answer: "B",
      },
      {
        level: "Medium",
        question: "How did Rizal view the concept of freedom?",
        choices: [
          {
            letter: "A",
            words: "As a permanent state to be achieved and maintained",
          },
          {
            letter: "B",
            words: "As something only for the elite",
          },
          {
            letter: "C",
            words: "As anarchy without order",
          },
          {
            letter: "D",
            words: "As unnecessary for societal progress",
          },
        ],
        answer: "A",
      },
      {
        level: "Medium",
        question:
          "What was the impact of Rizal’s annotated edition of Sucesos de las Islas Filipinas?",
        choices: [
          {
            letter: "A",
            words: "It led to immediate independence",
          },
          {
            letter: "B",
            words: "It was ignored by the public",
          },
          {
            letter: "C",
            words: "It highlighted pre-colonial Philippine history",
          },
          {
            letter: "D",
            words: "It supported Spanish rule",
          },
        ],
        answer: "C",
      },
      {
        level: "Hard",
        question:
          "What was one of the additional criteria for being a national hero according to Dr. Onofre D. Corpuz, involving contribution to the nation’s quality of life and destiny?",
        answer: "Contribution to the quality of life and destiny of a nation",
      },
      {
        level: "Hard",
        question:
          "In what year was Jose Rizal’s novel El Filibusterismo published, further cementing his position as a leading voice of the Philippine reform movement?",
        answer: "1891",
      },
      {
        level: "Hard",
        question:
          "Why did the Americans promote Jose Rizal as a national hero during their colonial period in the Philippines?",
        answer: "To discourage Filipino resistance against American rule",
      },
      {
        level: "Hard",
        question:
          "What was one of the criteria for heroism according to Dr. Onofre D. Corpuz?",
        answer: "Contribution to the quality of life and destiny of a nation",
      },
    ],
  },
  {
    id: "3",
    content: [
      {
        level: "Easy",
        question:
          "Jose Rizal’s full name was Jose Protacio Rizal Mercado y Alonso Realonda.",
        choices: [
          {
            letter: "T",
            words: "True",
          },
          {
            letter: "F",
            words: "False",
          },
        ],
        answer: "T",
      },
      {
        level: "Easy",
        question:
          "The Enlightenment influenced the American and French Revolutions.",
        choices: [
          {
            letter: "T",
            words: "True",
          },
          {
            letter: "F",
            words: "False",
          },
        ],
        answer: "T",
      },
      {
        level: "Easy",
        question: "Rizal boarded the Salvadora ship for Singapore in 1882.",
        choices: [
          {
            letter: "T",
            words: "True",
          },
          {
            letter: "F",
            words: "False",
          },
        ],
        answer: "T",
      },
      {
        level: "Easy",
        question:
          "Ferdinand Blumentritt was Rizal’s Austrian friend to whom he wrote about Philippine studies.",
        choices: [
          {
            letter: "T",
            words: "True",
          },
          {
            letter: "F",
            words: "False",
          },
        ],
        answer: "T",
      },
      {
        level: "Easy",
        question: "Jose Rizal was born in the 20th century.",
        choices: [
          {
            letter: "T",
            words: "True",
          },
          {
            letter: "F",
            words: "False",
          },
        ],
        answer: "T",
      },
      {
        level: "Easy",
        question:
          "The American and French Revolutions significantly contributed to the growth of nationalism in the 19th century.",
        choices: [
          {
            letter: "T",
            words: "True",
          },
          {
            letter: "F",
            words: "False",
          },
        ],
        answer: "F",
      },
      {
        level: "Easy",
        question:
          "The phrase 'Nosce te ipsum' (Know Thyself) was used by Rizal to stimulate Philippine studies.",
        choices: [
          {
            letter: "T",
            words: "True",
          },
          {
            letter: "F",
            words: "False",
          },
        ],
        answer: "T",
      },
      {
        level: "Easy",
        question:
          "The telephone and telegraph were significant inventions during the Industrial Revolution.",
        choices: [
          {
            letter: "T",
            words: "True",
          },
          {
            letter: "F",
            words: "False",
          },
        ],
        answer: "T",
      },
      {
        level: "Easy",
        question: "Rizal’s first European country visited was France.",
        choices: [
          {
            letter: "T",
            words: "True",
          },
          {
            letter: "F",
            words: "False",
          },
        ],
        answer: "F",
      },
      {
        level: "Easy",
        question: "Manila was opened to world commerce in 1834.",
        choices: [
          {
            letter: "T",
            words: "True",
          },
          {
            letter: "F",
            words: "False",
          },
        ],
        answer: "T",
      },
      {
        level: "Hard",
        question: "What was Jose Rizal’s full name?",
        answer: "Jose Protacio Rizal Mercado y Alonso Realonda",
      },
      {
        level: "Hard",
        question:
          "What movement influenced the American and French Revolutions?",
        answer: "Enlightenment",
      },
      {
        level: "Medium",
        question: "In which century was Jose Rizal born?",
        choices: [
          {
            letter: "A",
            words: "18th century",
          },
          {
            letter: "B",
            words: "19th century",
          },
          {
            letter: "C",
            words: "20th century",
          },
          {
            letter: "D",
            words: "21st century",
          },
        ],
        answer: "B",
      },
      {
        level: "Medium",
        question:
          "Which two revolutions significantly contributed to the growth of nationalism in the 19th century?",
        choices: [
          {
            letter: "A",
            words: "Russian and American Revolutions",
          },
          {
            letter: "B",
            words: "American and French Revolutions",
          },
          {
            letter: "C",
            words: "French and Chinese Revolutions",
          },
          {
            letter: "D",
            words: "Mexican and Russian Revolutions",
          },
        ],
        answer: "C",
      },
      {
        level: "Medium",
        question:
          "What is the primary definition of nationalism according to the text?",
        choices: [
          {
            letter: "A",
            words:
              "A sense of loyalty or psychological attachment shared by members of a nation",
          },
          {
            letter: "B",
            words: "A form of government where the monarchy is overthrown",
          },
          {
            letter: "C",
            words: "A feeling of hatred towards other nations",
          },
          {
            letter: "D",
            words: "A way to gain economic advantage over other countries",
          },
        ],
        answer: "A",
      },
      {
        level: "Medium",
        question:
          "What phrase did Rizal use in his letter to Ferdinand Blumentritt to stimulate Philippine studies?",
        choices: [
          {
            letter: "A",
            words: " Carpe Diem",
          },
          {
            letter: "B",
            words: "Nosce te ipsum (Know Thyself)",
          },
          {
            letter: "C",
            words: "Veni, vidi, vici",
          },
          {
            letter: "D",
            words: "E pluribus unum",
          },
        ],
        answer: "B",
      },
      {
        level: "Medium",
        question:
          "Which major invention during the Industrial Revolution revolutionized communication?",
        choices: [
          {
            letter: "A",
            words: "Printing press",
          },
          {
            letter: "B",
            words: "Steam engine",
          },
          {
            letter: "C",
            words: "Telephone and telegraph",
          },
          {
            letter: "D",
            words: "Radio",
          },
        ],
        answer: "C",
      },
      {
        level: "Medium",
        question:
          "Which country did Jose Rizal visit first during his travels in Europe?",
        choices: [
          {
            letter: "A",
            words: "France",
          },
          {
            letter: "B",
            words: "Germany",
          },
          {
            letter: "C",
            words: "Italy",
          },
          {
            letter: "D",
            words: "Spain",
          },
        ],
        answer: "D",
      },
      {
        level: "Medium",
        question:
          "What significant event took place in the Philippines in 1834?",
        choices: [
          {
            letter: "A",
            words: "Opening of the Suez Canal",
          },
          {
            letter: "B",
            words: "Opening of Manila to world commerce",
          },
          {
            letter: "C",
            words: "Start of the Philippine Revolution",
          },
          {
            letter: "D",
            words: "Arrival of Governor-General Basco",
          },
        ],
        answer: "B",
      },
      {
        level: "Medium",
        question: "What was the role of the Ilustrados in Philippine society?",
        choices: [
          {
            letter: "A",
            words: "They were the ruling class",
          },
          {
            letter: "B",
            words: "They were the uneducated class",
          },
          {
            letter: "C",
            words: "They were the educated class",
          },
          {
            letter: "D",
            words: "They were the military class",
          },
        ],
        answer: "C",
      },
      {
        level: "Medium",
        question: "Who were the mestizo de sangley?",
        choices: [
          {
            letter: "A",
            words: "Offspring of Spanish and Filipino parents",
          },
          {
            letter: "B",
            words: "Offspring of Chinese and Filipino parents",
          },
          {
            letter: "C",
            words: "Offspring of Spanish and Chinese parents",
          },
          {
            letter: "D",
            words: "Offspring of Filipino and Indian parents",
          },
        ],
        answer: "B",
      },
      {
        level: "Medium",
        question: "When did the American Revolution occur?",
        choices: [
          {
            letter: "A",
            words: "1776",
          },
          {
            letter: "B",
            words: "1789",
          },
          {
            letter: "C",
            words: "1815",
          },
          {
            letter: "D",
            words: "1867",
          },
        ],
        answer: "A",
      },
      {
        level: "Medium",
        question: "What did the Suez Canal connect?",
        choices: [
          {
            letter: "A",
            words: "Atlantic Ocean and Mediterranean Sea",
          },
          {
            letter: "B",
            words: "Red Sea and Mediterranean Sea",
          },
          {
            letter: "C",
            words: "Pacific Ocean and Indian Ocean",
          },
          {
            letter: "D",
            words: "Baltic Sea and North Sea",
          },
        ],
        answer: "B",
      },
      {
        level: "Hard",
        question: "What was the main theme of Rizal's novel El Filibusterismo?",
        answer: "Revenge and revolution",
      },
      {
        level: "Hard",
        question:
          "What year did Mexico gain independence, ending the Galleon Trade?",
        answer: "1815",
      },
      {
        level: "Medium",
        question: "What did the French Revolution of 1789 advocate?",
        choices: [
          {
            letter: "A",
            words: "Monarchy, liberty, fraternity",
          },
          {
            letter: "B",
            words: "Liberty, fraternity, equality",
          },
          {
            letter: "C",
            words: "Equality, monarchy, fraternity",
          },
          {
            letter: "D",
            words: "Fraternity, monarchy, liberty",
          },
        ],
        answer: "B",
      },
      {
        level: "Medium",
        question: "Who helped Rizal publish Noli Me Tangere?",
        choices: [
          {
            letter: "A",
            words: "Juan Luna",
          },
          {
            letter: "B",
            words: "Marcelo H. Del Pilar",
          },
          {
            letter: "C",
            words: "Ferdinand Blumentritt",
          },
          {
            letter: "D",
            words: "Maximo Viola",
          },
        ],
        answer: "D",
      },
      {
        level: "Hard",
        question:
          "In which German city did Rizal study ophthalmology under Dr. Otto Becker?",
        answer: "Heidelberg",
      },
      {
        level: "Hard",
        question:
          "Who was the wealthy medical student that helped Rizal publish Noli Me Tangere?",
        answer: "Maximo Viola",
      },
      {
        level: "Hard",
        question:
          "What term was used for the middle-class Filipinos of mixed Spanish and Filipino descent?",
        answer: "Mestizo de Sangley",
      },
      {
        level: "Hard",
        question:
          "What did the Americans bring to the Philippines after the Spanish-American War?",
        answer: "Democracy",
      },
      {
        level: "Hard",
        question:
          "Which invention by Thomas Edison had a significant impact during the Industrial Revolution?",
        answer: "Light bulb",
      },
      {
        level: "Hard",
        question: "Who introduced the Galleon Trade in the Philippines?",
        answer: "Miguel Lopez de Legazpi",
      },
    ],
  },
  {
    id: "4",
    content: [
      {
        level: "Easy",
        question: "Jose Rizal was born on June 19, 1861.",
        choices: [
          {
            letter: "T",
            words: "True",
          },
          {
            letter: "F",
            words: "False",
          },
        ],
        answer: "T",
      },
      {
        level: "Easy",
        question: "Jose Rizal was born in Calamba, Laguna.",
        choices: [
          {
            letter: "T",
            words: "True",
          },
          {
            letter: "F",
            words: "False",
          },
        ],
        answer: "T",
      },
      {
        level: "Easy",
        question: "Pedro Casañas was Jose Rizal's godfather at his baptism.",
        choices: [
          {
            letter: "T",
            words: "True",
          },
          {
            letter: "F",
            words: "False",
          },
        ],
        answer: "F",
      },
      {
        level: "Easy",
        question: "Fr. Rufino Collantes baptized Jose Rizal.",
        choices: [
          {
            letter: "T",
            words: "True",
          },
          {
            letter: "F",
            words: "False",
          },
        ],
        answer: "T",
      },
      {
        level: "Easy",
        question: "Jose Rizal had 10 siblings.",
        choices: [
          {
            letter: "T",
            words: "True",
          },
          {
            letter: "F",
            words: "False",
          },
        ],
        answer: "F",
      },
      {
        level: "Easy",
        question: "The surname “Rizal” means market.",
        choices: [
          {
            letter: "T",
            words: "True",
          },
          {
            letter: "F",
            words: "False",
          },
        ],
        answer: "F",
      },
      {
        level: "Easy",
        question: "Teodora Alonso Realonda was Jose Rizal's mother.",
        choices: [
          {
            letter: "T",
            words: "True",
          },
          {
            letter: "F",
            words: "False",
          },
        ],
        answer: "T",
      },
      {
        level: "Easy",
        question: "Jose Rizal was born on June 19, 1861.",
        choices: [
          {
            letter: "T",
            words: "True",
          },
          {
            letter: "F",
            words: "False",
          },
        ],
        answer: "T",
      },
      {
        level: "Easy",
        question: "Jose Rizal's nickname was Pepe.",
        choices: [
          {
            letter: "T",
            words: "True",
          },
          {
            letter: "F",
            words: "False",
          },
        ],
        answer: "T",
      },
      {
        level: "Easy",
        question: "Jose Rizal was born on June 19, 1861.",
        choices: [
          {
            letter: "T",
            words: "True",
          },
          {
            letter: "F",
            words: "False",
          },
        ],
        answer: "T",
      },
      {
        level: "Easy",
        question: "Francisco Mercado Rizal was Jose Rizal’s father.",
        choices: [
          {
            letter: "T",
            words: "True",
          },
          {
            letter: "F",
            words: "False",
          },
        ],
        answer: "T",
      },
      {
        level: "Easy",
        question:
          "Saturnina was the sister of Jose Rizal who married Manuel T. Hidalgo.",
        choices: [
          {
            letter: "T",
            words: "True",
          },
          {
            letter: "F",
            words: "False",
          },
        ],
        answer: "T",
      },
      {
        level: "Easy",
        question: "Maria was nicknamed Biang.",
        choices: [
          {
            letter: "T",
            words: "True",
          },
          {
            letter: "F",
            words: "False",
          },
        ],
        answer: "T",
      },
      {
        level: "Easy",
        question: "Teodora Alonso Realonda was Rizal’s first teacher.",
        choices: [
          {
            letter: "T",
            words: "True",
          },
          {
            letter: "F",
            words: "False",
          },
        ],
        answer: "T",
      },
      {
        level: "Hard",
        question: "When was Jose Rizal born?",
        answer: "June 19, 1861",
      },
      {
        level: "Hard",
        question: "Where was Jose Rizal born?",
        answer: "Calamba, Laguna",
      },
      {
        level: "Hard",
        question: "Who was Jose Rizal’s godfather at his baptism?",
        answer: "Pedro Casañas",
      },
      {
        level: "Medium",
        question: "What is the meaning of the surname “Rizal”?",
        choices: [
          {
            letter: "A",
            words: "Market",
          },
          {
            letter: "B",
            words: "Green field",
          },
          {
            letter: "C",
            words: "New pasture",
          },
          {
            letter: "D",
            words: "Both b and c",
          },
        ],
        answer: "D",
      },
      {
        level: "Medium",
        question: "Who baptized Jose Rizal?",
        choices: [
          {
            letter: "A",
            words: "Fr. Rufino Collantes",
          },
          {
            letter: "B",
            words: "Pedro Casañas",
          },
          {
            letter: "C",
            words: "Manuel T. Hidalgo",
          },
          {
            letter: "D",
            words: "Antonio Lopez",
          },
        ],
        answer: "A",
      },
      {
        level: "Medium",
        question: "How many siblings did Jose Rizal have?",
        choices: [
          {
            letter: "A",
            words: "9",
          },
          {
            letter: "B",
            words: "10",
          },
          {
            letter: "C",
            words: "11",
          },
          {
            letter: "D",
            words: "12",
          },
        ],
        answer: "C",
      },
      {
        level: "Medium",
        question: "What was the name of Jose Rizal's mother?",
        choices: [
          {
            letter: "A",
            words: "Saturnina",
          },
          {
            letter: "B",
            words: "Soledad",
          },
          {
            letter: "C",
            words: "Teodora Alonso Realonda",
          },
          {
            letter: "D",
            words: "Concepcion",
          },
        ],
        answer: "C",
      },
      {
        level: "Medium",
        question: "What was the nickname of Jose Rizal?",
        choices: [
          {
            letter: "A",
            words: "Pepe",
          },
          {
            letter: "B",
            words: "Paciano",
          },
          {
            letter: "C",
            words: "Panggoy",
          },
          {
            letter: "D",
            words: "Trining",
          },
        ],
        answer: "A",
      },
      {
        level: "Medium",
        question: "What was the name of Jose Rizal's father?",
        choices: [
          {
            letter: "A",
            words: "Francisco Mercado Rizal",
          },
          {
            letter: "B",
            words: "Domingo Lamco",
          },
          {
            letter: "C",
            words: "Antonio Lopez",
          },
          {
            letter: "D",
            words: "Pantaleon Quintero",
          },
        ],
        answer: "A",
      },
      {
        level: "Medium",
        question: "Which sister of Jose Rizal married Manuel T. Hidalgo?",
        choices: [
          {
            letter: "A",
            words: "Saturnina",
          },
          {
            letter: "B",
            words: "Maria",
          },
          {
            letter: "C",
            words: "Lucia",
          },
          {
            letter: "D",
            words: "Olimpia",
          },
        ],
        answer: "A",
      },
      {
        level: "Medium",
        question: "Which Rizal sibling was nicknamed “Biang”?",
        choices: [
          {
            letter: "A",
            words: "Saturnina",
          },
          {
            letter: "B",
            words: "Maria",
          },
          {
            letter: "C",
            words: "Lucia",
          },
          {
            letter: "D",
            words: "Olimpia",
          },
        ],
        answer: "B",
      },
      {
        level: "Medium",
        question: "What is the meaning of the surname “Rizal”?",
        choices: [
          {
            letter: "A",
            words: "Market",
          },
          {
            letter: "B",
            words: "Green field",
          },
          {
            letter: "C",
            words: "New pasture",
          },
          {
            letter: "D",
            words: "Both b and c",
          },
        ],
        answer: "D",
      },
      {
        level: "Medium",
        question: "Who was Rizal’s first teacher?",
        choices: [
          {
            letter: "A",
            words: "Saturnina",
          },
          {
            letter: "B",
            words: "Teodora Alonso Realonda",
          },
          {
            letter: "C",
            words: "Narcisa",
          },
          {
            letter: "D",
            words: "Olimpia",
          },
        ],
        answer: "B",
      },
      {
        level: "Medium",
        question:
          "Who among Rizal’s uncles inspired him to develop his artistic ability?",
        choices: [
          {
            letter: "A",
            words: "Tio Manuel",
          },
          {
            letter: "B",
            words: "Tio Gregorio",
          },
          {
            letter: "C",
            words: "Tio Jose Alberto",
          },
          {
            letter: "D",
            words: "Tio Antonio",
          },
        ],
        answer: "C",
      },
      {
        level: "Medium",
        question: "Who among Rizal’s siblings was nicknamed “Concha”?",
        choices: [
          {
            letter: "A",
            words: "Josefa",
          },
          {
            letter: "B",
            words: "Trinidad",
          },
          {
            letter: "C",
            words: "Soledad",
          },
          {
            letter: "D",
            words: "Concepcion",
          },
        ],
        answer: "D",
      },
      {
        level: "Medium",
        question: "What was the first poem written by Jose Rizal?",
        choices: [
          {
            letter: "A",
            words: "Mi Ultimo Adios",
          },
          {
            letter: "B",
            words: "To My Fellow Children",
          },
          {
            letter: "C",
            words: "El Filibusterismo",
          },
          {
            letter: "D",
            words: "Noli Me Tangere",
          },
        ],
        answer: "B",
      },
      {
        level: "Medium",
        question:
          "Who among Rizal’s uncles encouraged him to develop his frail body?",
        choices: [
          {
            letter: "A",
            words: "Tio Manuel",
          },
          {
            letter: "B",
            words: "Tio Gregorio",
          },
          {
            letter: "C",
            words: "Tio Jose Alberto",
          },
          {
            letter: "D",
            words: "Tio Antonio",
          },
        ],
        answer: "A",
      },
      {
        level: "Medium",
        question: "Which of Rizal's siblings married Silvestre Ubaldo?",
        choices: [
          {
            letter: "A",
            words: "Maria",
          },
          {
            letter: "B",
            words: "Lucia",
          },
          {
            letter: "C",
            words: "Olimpia",
          },
          {
            letter: "D",
            words: "Saturnina",
          },
        ],
        answer: "C",
      },
      {
        level: "Hard",
        question: "On what date was Jose Rizal baptized?",
        answer: "June 22, 1861",
      },
      {
        level: "Hard",
        question: "What is the meaning of the surname “Mercado”?",
        answer: "Market",
      },
      {
        level: "Hard",
        question: "Who was Jose Rizal’s older brother and confidant?",
        answer: "Paciano",
      },
      {
        level: "Hard",
        question: "Who was Rizal’s maternal great-great grandfather?",
        answer: "Eugenio",
      },
      {
        level: "Hard",
        question: "Which of Rizal's siblings married Daniel Faustino Cruz?",
        answer: "Maria",
      },
      {
        level: "Hard",
        question: "What was the pet name of Narcisa Rizal?",
        answer: "Sisa",
      },
      {
        level: "Hard",
        question: "What is the meaning of 'Rizal' in Spanish?",
        answer: "Both green field and new pasture",
      },
    ],
  },
  {
    id: "5",
    content: [
      {
        level: "Easy",
        question: "Rizal's first teacher was his mother.",
        choices: [
          {
            letter: "T",
            words: "True",
          },
          {
            letter: "F",
            words: "False",
          },
        ],
        answer: "T",
      },
      {
        level: "Easy",
        question:
          "Jose Rizal entered Ateneo Municipal de Manila at the age of 12.",
        choices: [
          {
            letter: "T",
            words: "True",
          },
          {
            letter: "F",
            words: "False",
          },
        ],
        answer: "F",
      },
      {
        level: "Easy",
        question:
          "Rizal excelled in Mathematics, Physics, and Chemistry during his time at Ateneo.",
        choices: [
          {
            letter: "T",
            words: "True",
          },
          {
            letter: "F",
            words: "False",
          },
        ],
        answer: "T",
      },
      {
        level: "Easy",
        question:
          "Rizal earned a Doctor of Medicine degree from the Ateneo Municipal.",
        choices: [
          {
            letter: "T",
            words: "True",
          },
          {
            letter: "F",
            words: "False",
          },
        ],
        answer: "T",
      },
      {
        level: "Easy",
        question:
          "Rizal went to the University of Heidelberg to study ophthalmology after his time at the University of Santo Tomas.",
        choices: [
          {
            letter: "T",
            words: "True",
          },
          {
            letter: "F",
            words: "False",
          },
        ],
        answer: "T",
      },
      {
        level: "Easy",
        question:
          "Paciano was the older brother who accompanied Rizal to Biñan.",
        choices: [
          {
            letter: "T",
            words: "True",
          },
          {
            letter: "F",
            words: "False",
          },
        ],
        answer: "T",
      },
      {
        level: "Easy",
        question: "Fr. Jose Bech was Rizal’s first teacher in Ateneo.",
        choices: [
          {
            letter: "T",
            words: "True",
          },
          {
            letter: "F",
            words: "False",
          },
        ],
        answer: "T",
      },
      {
        level: "Easy",
        question: "Rizal had a talent for painting when he was young.",
        choices: [
          {
            letter: "T",
            words: "True",
          },
          {
            letter: "F",
            words: "False",
          },
        ],
        answer: "F",
      },
      {
        level: "Easy",
        question: "Rizal’s first novel was El Filibusterismo.",
        choices: [
          {
            letter: "T",
            words: "True",
          },
          {
            letter: "F",
            words: "False",
          },
        ],
        answer: "F",
      },
      {
        level: "Easy",
        question: "Rizal completed his eye specialization course in Paris.",
        choices: [
          {
            letter: "T",
            words: "True",
          },
          {
            letter: "F",
            words: "False",
          },
        ],
        answer: "F",
      },
      {
        level: "Easy",
        question: "Rizal took private lessons in Spanish while at Ateneo.",
        choices: [
          {
            letter: "T",
            words: "True",
          },
          {
            letter: "F",
            words: "False",
          },
        ],
        answer: "T",
      },
      {
        level: "Easy",
        question: "Fr. Pablo Ramon recommended Rizal to study medicine.",
        choices: [
          {
            letter: "T",
            words: "True",
          },
          {
            letter: "F",
            words: "False",
          },
        ],
        answer: "T",
      },
      {
        level: "Easy",
        question:
          "Rizal improved his sculpture skills under the supervision of Romualdo de Jesus.",
        choices: [
          {
            letter: "T",
            words: "True",
          },
          {
            letter: "F",
            words: "False",
          },
        ],
        answer: "T",
      },
      {
        level: "Easy",
        question:
          "Rizal wrote the poem 'Junto al Pasig' to honor the Virgin of Antipolo.",
        choices: [
          {
            letter: "T",
            words: "True",
          },
          {
            letter: "F",
            words: "False",
          },
        ],
        answer: "T",
      },
      {
        level: "Easy",
        question: "Rizal’s mother, Dona Teodora, taught him Spanish and Latin.",
        choices: [
          {
            letter: "T",
            words: "True",
          },
          {
            letter: "F",
            words: "False",
          },
        ],
        answer: "T",
      },
      {
        level: "Hard",
        question: "Who was Jose Rizal’s first teacher?",
        answer: "His mother",
      },
      {
        level: "Hard",
        question:
          "At what age did Jose Rizal enter Ateneo Municipal de Manila?",
        answer: "11 years old",
      },
      {
        level: "Hard",
        question:
          "Which subject did Rizal excel in during his time at Ateneo Municipal de Manila?",
        answer: "Mathematics, Physics, Chemistry",
      },
      {
        level: "Medium",
        question: "What degree did Rizal earn from the Ateneo Municipal?",
        choices: [
          {
            letter: "A",
            words: "Bachelor of Arts",
          },
          {
            letter: "B",
            words: "Doctor of Medicine",
          },
          {
            letter: "C",
            words: "Licentiate in Medicine",
          },
          {
            letter: "D",
            words: "Land surveyor's and assessor's degree",
          },
        ],
        answer: "D",
      },
      {
        level: "Medium",
        question:
          "Where did Rizal go to study ophthalmology after his time at the University of Santo Tomas?",
        choices: [
          {
            letter: "A",
            words: "University of Paris",
          },
          {
            letter: "B",
            words: "University of Heidelberg",
          },
          {
            letter: "C",
            words: "Universidad Central de Madrid",
          },
          {
            letter: "D",
            words: "University of Leipzig",
          },
        ],
        answer: "B",
      },
      {
        level: "Medium",
        question: "Who was Rizal’s older brother who accompanied him to Biñan?",
        choices: [
          {
            letter: "A",
            words: "Paciano",
          },
          {
            letter: "B",
            words: "Saturnina",
          },
          {
            letter: "C",
            words: "Lucía",
          },
          {
            letter: "D",
            words: "Concepción",
          },
        ],
        answer: "A",
      },
      {
        level: "Medium",
        question: "Who was Rizal’s first teacher in Ateneo?",
        choices: [
          {
            letter: "A",
            words: "Fr. Francisco de Paula Sanchez",
          },
          {
            letter: "B",
            words: "Fr. Jose Bech",
          },
          {
            letter: "C",
            words: "Fr. Magin Ferrando",
          },
          {
            letter: "D",
            words: "Fr. Pablo Ramon",
          },
        ],
        answer: "B",
      },
      {
        level: "Medium",
        question:
          "What did Rizal’s mother discover about him when he was young?",
        choices: [
          {
            letter: "A",
            words: "He had a talent for painting",
          },
          {
            letter: "B",
            words: "He had a talent for poetry",
          },
          {
            letter: "C",
            words: "He had a talent for music",
          },
          {
            letter: "D",
            words: "He had a talent for sculpture",
          },
        ],
        answer: "B",
      },
      {
        level: "Medium",
        question: "What is the title of Rizal’s first novel?",
        choices: [
          {
            letter: "A",
            words: "El Filibusterismo",
          },
          {
            letter: "B",
            words: "Mi Último Adiós",
          },
          {
            letter: "C",
            words: "Junto al Pasig",
          },
          {
            letter: "D",
            words: "Noli Me Tangere",
          },
        ],
        answer: "D",
      },
      {
        level: "Medium",
        question:
          "What did Rizal take private lessons in to improve while at Ateneo?",
        choices: [
          {
            letter: "A",
            words: "Latin",
          },
          {
            letter: "B",
            words: "French",
          },
          {
            letter: "C",
            words: "Spanish",
          },
          {
            letter: "D",
            words: "Greek",
          },
        ],
        answer: "C",
      },
      {
        level: "Medium",
        question: "Who recommended Rizal to study medicine?",
        choices: [
          {
            letter: "A",
            words: "Fr. Magin Ferrando",
          },
          {
            letter: "B",
            words: "Fr. Francisco de Paula Sanchez",
          },
          {
            letter: "C",
            words: "Fr. Jose Bech",
          },
          {
            letter: "D",
            words: "Fr. Pablo Ramon",
          },
        ],
        answer: "D",
      },
      {
        level: "Medium",
        question:
          "Which artistic skill did Rizal improve under the supervision of Romualdo de Jesus?",
        choices: [
          {
            letter: "A",
            words: "Painting",
          },
          {
            letter: "B",
            words: "Sculpture",
          },
          {
            letter: "C",
            words: "Drawing",
          },
          {
            letter: "D",
            words: "Clay modeling",
          },
        ],
        answer: "B",
      },
      {
        level: "Medium",
        question: "What did Rizal write to honor the Virgin of Antipolo?",
        choices: [
          {
            letter: "A",
            words: "Noli Me Tangere",
          },
          {
            letter: "B",
            words: "Mi Último Adiós",
          },
          {
            letter: "C",
            words: "Junto al Pasig",
          },
          {
            letter: "D",
            words: "El Filibusterismo",
          },
        ],
        answer: "C",
      },
      {
        level: "Medium",
        question: "Who taught Rizal Spanish and Latin as a child?",
        choices: [
          {
            letter: "A",
            words: "Dona Teodora",
          },
          {
            letter: "B",
            words: "Maestro Celestino",
          },
          {
            letter: "C",
            words: "Maestro Lucas",
          },
          {
            letter: "D",
            words: "Private tutors",
          },
        ],
        answer: "D",
      },
      {
        level: "Hard",
        question: "Which school did Rizal enter in 1872?",
        answer: "Ateneo Municipal de Manila",
      },
      {
        level: "Hard",
        question:
          "What was the primary reason Rizal decided to study ophthalmology?",
        answer: "He wanted to cure his mother’s failing eyesight",
      },
      {
        level: "Hard",
        question: "Where did Rizal earn his Licentiate in Medicine?",
        answer: "Universidad Central de Madrid",
      },
      {
        level: "Medium",
        question: "What pseudonym did Rizal use when he traveled to Spain?",
        choices: [
          {
            letter: "A",
            words: "Jose Rizal",
          },
          {
            letter: "B",
            words: "Pepe",
          },
          {
            letter: "C",
            words: "Jose Mercado",
          },
          {
            letter: "D",
            words: "Dimasalang",
          },
        ],
        answer: "C",
      },
      {
        level: "Medium",
        question:
          "Which course did Rizal initially enroll in at the University of Santo Tomas before shifting to medicine?",
        choices: [
          {
            letter: "A",
            words: "Philosophy and Letters",
          },
          {
            letter: "B",
            words: "Law",
          },
          {
            letter: "C",
            words: "Engineering",
          },
          {
            letter: "D",
            words: "Theology",
          },
        ],
        answer: "A",
      },
      {
        level: "Medium",
        question:
          "Which activity did Rizal engage in under his sports-minded uncle, Tio Manuel?",
        choices: [
          {
            letter: "A",
            words: "Painting",
          },
          {
            letter: "B",
            words: "Gymnastics",
          },
          {
            letter: "C",
            words: "Music",
          },
          {
            letter: "D",
            words: "Sculpture",
          },
        ],
        answer: "B",
      },
      {
        level: "Medium",
        question:
          "In what year did Rizal write the poem A Las Flores de Heidelberg?",
        choices: [
          {
            letter: "A",
            words: "1885",
          },
          {
            letter: "B",
            words: "1886",
          },
          {
            letter: "C",
            words: "1887",
          },
          {
            letter: "D",
            words: "1888",
          },
        ],
        answer: "B",
      },
      {
        level: "Hard",
        question:
          "What was the name of the zarzuela written by Rizal during his years at the University of Santo Tomas?",
        answer: "Junto al Pasig",
      },
      {
        level: "Hard",
        question:
          "Who was Rizal’s professor in Ateneo that inspired him to study harder and write poetry?",
        answer: "Fr. Francisco de Paula Sanchez",
      },
      {
        level: "Hard",
        question:
          "What subject did Rizal study during his first term at UST in 1877-1878?",
        answer: "Cosmology",
      },
      {
        level: "Hard",
        question:
          "What was the title of the poem Rizal wrote when he was 8 years old?",
        answer: "Sa Aking mga Kababata",
      },
    ],
  },
  {
    id: "6",
    content: [
      {
        level: "Easy",
        question:
          "Jose Rizal's first essay written when he was 21 and newly arrived in Madrid was titled 'The Love of Country'.",
        choices: [
          {
            letter: "T",
            words: "True",
          },
          {
            letter: "F",
            words: "False",
          },
        ],
        answer: "T",
      },
      {
        level: "Easy",
        question:
          "'The Love of Country' was first published in Diariong Tagalog under the pseudonym 'Laong Laan'.",
        choices: [
          {
            letter: "T",
            words: "True",
          },
          {
            letter: "F",
            words: "False",
          },
        ],
        answer: "T",
      },
      {
        level: "Easy",
        question: "The Latin translation of Noli Me Tángere is Touch Me Not.",
        choices: [
          {
            letter: "T",
            words: "True",
          },
          {
            letter: "F",
            words: "False",
          },
        ],
        answer: "T",
      },
      {
        level: "Easy",
        question: "The protagonist of Noli Me Tangere is Crisóstomo Ibarra.",
        choices: [
          {
            letter: "T",
            words: "True",
          },
          {
            letter: "F",
            words: "False",
          },
        ],
        answer: "T",
      },
      {
        level: "Easy",
        question:
          "Rizal's primary purpose in writing 'On the Indolence of the Filipino' was to criticize Spanish colonial policies.",
        choices: [
          {
            letter: "T",
            words: "True",
          },
          {
            letter: "F",
            words: "False",
          },
        ],
        answer: "F",
      },
      {
        level: "Easy",
        question: "Simoun in 'El Filibusterismo' is Crisóstomo Ibarra.",
        choices: [
          {
            letter: "T",
            words: "True",
          },
          {
            letter: "F",
            words: "False",
          },
        ],
        answer: "T",
      },
      {
        level: "Easy",
        question: "Basilio's sweetheart in El Filibusterismo' is Juli.",
        choices: [
          {
            letter: "T",
            words: "True",
          },
          {
            letter: "F",
            words: "False",
          },
        ],
        answer: "T",
      },
      {
        level: "Easy",
        question:
          "Father Florentino is Isagani's father in 'El Filibusterismo'.",
        choices: [
          {
            letter: "T",
            words: "True",
          },
          {
            letter: "F",
            words: "False",
          },
        ],
        answer: "F",
      },
      {
        level: "Easy",
        question:
          "Simoun is the Captain-General's confidant in 'El Filibusterismo'.",
        choices: [
          {
            letter: "T",
            words: "True",
          },
          {
            letter: "F",
            words: "False",
          },
        ],
        answer: "T",
      },
      {
        level: "Easy",
        question: "Father Salví is accused of rape in 'El Filibusterismo'.",
        choices: [
          {
            letter: "T",
            words: "True",
          },
          {
            letter: "F",
            words: "False",
          },
        ],
        answer: "T",
      },
      {
        level: "Easy",
        question: "Jose Rizal founded La Liga Filipina.",
        choices: [
          {
            letter: "T",
            words: "True",
          },
          {
            letter: "F",
            words: "False",
          },
        ],
        answer: "T",
      },
      {
        level: "Easy",
        question: "Bonifacio Arévalo was the treasurer of La Liga Filipina.",
        choices: [
          {
            letter: "T",
            words: "True",
          },
          {
            letter: "F",
            words: "False",
          },
        ],
        answer: "F",
      },
      {
        level: "Easy",
        question:
          "Rizal practiced the profession of a physician during his exile in Dapitan.",
        choices: [
          {
            letter: "T",
            words: "True",
          },
          {
            letter: "F",
            words: "False",
          },
        ],
        answer: "T",
      },
      {
        level: "Easy",
        question:
          "Jose Rizal wrote his poem 'Mi último adiós' on the morning of his execution.",
        choices: [
          {
            letter: "T",
            words: "True",
          },
          {
            letter: "F",
            words: "False",
          },
        ],
        answer: "T",
      },
      {
        level: "Easy",
        question: "Jose Rizal was executed in Fort Santiago.",
        choices: [
          {
            letter: "T",
            words: "True",
          },
          {
            letter: "F",
            words: "False",
          },
        ],
        answer: "F",
      },
      {
        level: "Hard",
        question:
          "What was the title of Rizal’s first essay written when he was 21 and newly arrived in Madrid?",
        answer: "The Love of Country",
      },
      {
        level: "Hard",
        question:
          "Under what pseudonym was The Love of Country first published in Diariong Tagalog?",
        answer: "Laong Laan",
      },
      {
        level: "Hard",
        question: "What is the Latin translation of Noli Me Tángere?",
        answer: "Touch Me Not",
      },
      {
        level: "Medium",
        question: "Who is the protagonist of Noli Me Tangere?",
        choices: [
          {
            letter: "A",
            words: "Crisóstomo Ibarra",
          },
          {
            letter: "B",
            words: "Elías",
          },
          {
            letter: "C",
            words: "Padre Dámaso",
          },
          {
            letter: "D",
            words: "María Clara",
          },
        ],
        answer: "A",
      },
      {
        level: "Medium",
        question:
          "What was Rizal's primary purpose in writing On the Indolence of the Filipino?",
        choices: [
          {
            letter: "A",
            words: "To criticize Spanish colonial policies",
          },
          {
            letter: "B",
            words: "To explain Filipino traits under Spanish rule",
          },
          {
            letter: "C",
            words: "To promote Filipino unity",
          },
          {
            letter: "D",
            words: "To discuss Filipino labor laws",
          },
        ],
        answer: "B",
      },
      {
        level: "Medium",
        question: "Who is Simoun in El Filibusterismo?",
        choices: [
          {
            letter: "A",
            words: "Crisóstomo Ibarra",
          },
          {
            letter: "B",
            words: "Juli's father",
          },
          {
            letter: "C",
            words: "Tandang Selo",
          },
          {
            letter: "D",
            words: "Isagani",
          },
        ],
        answer: "A",
      },
      {
        level: "Medium",
        question: "Who is Basilio's sweetheart in El Filibusterismo?",
        choices: [
          {
            letter: "A",
            words: "Paulita Gómez",
          },
          {
            letter: "B",
            words: "Juli",
          },
          {
            letter: "C",
            words: "Doña Victorina",
          },
          {
            letter: "D",
            words: "María Clara",
          },
        ],
        answer: "B",
      },
      {
        level: "Medium",
        question: "Who is Father Florentino to Isagani?",
        choices: [
          {
            letter: "A",
            words: "His father",
          },
          {
            letter: "B",
            words: "His uncle",
          },
          {
            letter: "C",
            words: "His brother",
          },
          {
            letter: "D",
            words: "His cousin",
          },
        ],
        answer: "B",
      },
      {
        level: "Medium",
        question: "Who is Captain-General's confidant in El Filibusterismo?",
        choices: [
          {
            letter: "A",
            words: "Isagani",
          },
          {
            letter: "B",
            words: "Simoun",
          },
          {
            letter: "C",
            words: "Basilio",
          },
          {
            letter: "D",
            words: "Father Salví",
          },
        ],
        answer: "B",
      },
      {
        level: "Medium",
        question: "Who is accused of rape in El Filibusterismo?",
        choices: [
          {
            letter: "A",
            words: "Simoun",
          },
          {
            letter: "B",
            words: "Captain-General",
          },
          {
            letter: "C",
            words: "Father Salví",
          },
          {
            letter: "D",
            words: "Father Florentino",
          },
        ],
        answer: "C",
      },
      {
        level: "Medium",
        question: "Who founded the La Liga Filipina?",
        choices: [
          {
            letter: "A",
            words: "Jose P. Rizal",
          },
          {
            letter: "B",
            words: "Ambrosio Salvador",
          },
          {
            letter: "C",
            words: "Agustín de la Rosa",
          },
          {
            letter: "D",
            words: "Bonifacio Arévalo",
          },
        ],
        answer: "A",
      },
      {
        level: "Medium",
        question:
          "Which individual served as the treasurer of the La Liga Filipina?",
        choices: [
          {
            letter: "A",
            words: "Ambrosio Salvador",
          },
          {
            letter: "B",
            words: "Bonifacio Arévalo",
          },
          {
            letter: "C",
            words: "Agustín de la Rosa",
          },
          {
            letter: "D",
            words: "Deodato Arellano",
          },
        ],
        answer: "B",
      },
      {
        level: "Medium",
        question:
          "During his exile in Dapitan, what profession did Rizal practice?",
        choices: [
          {
            letter: "A",
            words: "Engineer",
          },
          {
            letter: "B",
            words: "Artist",
          },
          {
            letter: "C",
            words: "Physician",
          },
          {
            letter: "D",
            words: "Linguist",
          },
        ],
        answer: "C",
      },
      {
        level: "Medium",
        question: "When did Jose Rizal write his poem Mi último adiós?",
        choices: [
          {
            letter: "A",
            words: "On the morning of his execution",
          },
          {
            letter: "B",
            words: "During his trial",
          },
          {
            letter: "C",
            words: "While in prison in Barcelona",
          },
          {
            letter: "D",
            words: "Upon arriving in Manila",
          },
        ],
        answer: "A",
      },
      {
        level: "Medium",
        question: "Where was Jose Rizal executed?",
        choices: [
          {
            letter: "A",
            words: "Fort Santiago",
          },
          {
            letter: "B",
            words: "Luneta (Bagumbayan)",
          },
          {
            letter: "C",
            words: "Dapitan",
          },
          {
            letter: "D",
            words: "Montjuic Castle",
          },
        ],
        answer: "B",
      },
      {
        level: "Hard",
        question: "What was the original Spanish title of Touch Me Not?",
        answer: "Noli Me Tángere",
      },
      {
        level: "Hard",
        question: "Who was Crisóstomo Ibarra’s childhood sweetheart?",
        answer: "María Clara",
      },
      {
        level: "Hard",
        question:
          "Which character in Noli Me Tangere is described as a local philosopher?",
        answer: "Don Anastacio",
      },
      {
        level: "Hard",
        question:
          "Which character in Noli Me Tangere was the gravedigger who told Crisóstomo about his father's remains?",
        answer: "The gravedigger",
      },
      {
        level: "Hard",
        question:
          "What was the name of Elías’ great-grandfather, who was accused of arson?",
        answer: "Don Pedro Eibarramendia",
      },
      {
        level: "Hard",
        question:
          "What position did Padre Salví hold when he masterminded the uprising?",
        answer: "Parish priest",
      },
      {
        level: "Hard",
        question:
          "What was the penalty Jose Rizal faced for the crimes he was charged with?",
        answer: "Death by firing squad",
      },
    ],
  },
];

export default quizzes;
