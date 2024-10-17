const quizzes = [
  {
    id: "1",
    content: [
      {
        level: "Easy",
        question: "Who informed Rizal about the situation in Cuba?",
        choices: [
          {
            letter: "A",
            words: "Emilio Aguinaldo",
          },
          {
            letter: "B",
            words: "Ferdinand Bluemintritt",
          },
          {
            letter: "C",
            words: "Andres Bonifacio",
          },
          {
            letter: "D",
            words: "Manuel Camus",
          },
        ],
        answer: "B",
      },
      {
        level: "Easy",
        question:
          "What poem did Rizal write when he planned to travel to Europe and then to Cuba?",
        choices: [
          {
            letter: "A",
            words: "Kundiman",
          },
          {
            letter: "B",
            words: "Mi Último Adiós",
          },
          {
            letter: "C",
            words: "El Canto del Viajero",
          },
          {
            letter: "D",
            words: "A la Juventud Filipina",
          },
        ],
        answer: "C",
      },
      {
        level: "Easy",
        question:
          "On what date did Rizal write a letter to Governor General Ramon Blanco to volunteer as a military doctor in Cuba?",
        choices: [
          {
            letter: "A",
            words: "December 19, 1885",
          },
          {
            letter: "B",
            words: "August 23, 1896",
          },
          {
            letter: "C",
            words: "October 6, 1896",
          },
          {
            letter: "D",
            words: "September 30, 1896",
          },
        ],
        answer: "A",
      },
      {
        level: "Easy",
        question:
          "What was the name of the ship that Rizal boarded to travel to Barcelona?",
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
            words: "Castilla",
          },
          {
            letter: "D",
            words: "Colon",
          },
        ],
        answer: "B",
      },
      {
        level: "Easy",
        question:
          "Who among the Katipuneros confronted Rizal on the boat Caridad to rescue him?",
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
            words: "Emilio Jacinto",
          },
          {
            letter: "D",
            words: "Guillermo Masangkay",
          },
        ],
        answer: "C",
      },
      {
        level: "Easy",
        question:
          "What was the historic event that took place on August 23, 1896?",
        choices: [
          {
            letter: "A",
            words: "Rizal’s execution",
          },
          {
            letter: "B",
            words: "Cry of Pugadlawin",
          },
          {
            letter: "C",
            words: "Declaration of Independence",
          },
          {
            letter: "D",
            words: "Battle of Manila",
          },
        ],
        answer: "B",
      },
      {
        level: "Easy",
        question:
          "Where was Rizal transferred while waiting for the ship Isla de Panay?",
        choices: [
          {
            letter: "A",
            words: "Montjuich Castle",
          },
          {
            letter: "B",
            words: "Fort Santiago",
          },
          {
            letter: "C",
            words: "Steamer Castilla",
          },
          {
            letter: "D",
            words: "Port Said",
          },
        ],
        answer: "C",
      },
      {
        level: "Easy",
        question:
          "Who approved Rizal’s request to volunteer as a military doctor in Cuba?",
        choices: [
          {
            letter: "A",
            words: "General Roman Despujol",
          },
          {
            letter: "B",
            words: "Governor General Ramon Blanco",
          },
          {
            letter: "C",
            words: "Colonel Francisco Olive",
          },
          {
            letter: "D",
            words: "Claro M. Recto",
          },
        ],
        answer: "B",
      },
      {
        level: "Easy",
        question: "When did Rizal arrived in Barcelona on the Isla de Panay?",
        choices: [
          {
            letter: "A",
            words: "October 3, 1896",
          },
          {
            letter: "B",
            words: "September 27, 1896",
          },
          {
            letter: "C",
            words: "December 30, 1896",
          },
          {
            letter: "D",
            words: "November 3, 1896",
          },
        ],
        answer: "A",
      },
      {
        level: "Easy",
        question: "When did Rizal arrive in Barcelona on the Isla de Panay?",
        choices: [
          {
            letter: "A",
            words: "October 3, 1896",
          },
          {
            letter: "B",
            words: "September 27, 1896",
          },
          {
            letter: "C",
            words: "December 30, 1896",
          },
          {
            letter: "D",
            words: "November 3, 1896",
          },
        ],
        answer: "A",
      },
      {
        level: "Easy",
        question: "When did Rizal arrive in Barcelona on the Isla de Panay?",
        answer: "October 3, 1896",
      },
      {
        level: "Easy",
        question: "Where was Rizal detained upon his arrival in Barcelona?",
        answer: "Montjuich Castle",
      },
      {
        level: "Easy",
        question:
          "What event prompted Bonifacio to summon all leaders of the Katipunan?",
        answer: "Mass arrests of Katipuneros",
      },
      {
        level: "Easy",
        question:
          "Where did Bonifacio and the Katipuneros retreat after attacking Manila?",
        answer: "Quezon City",
      },
      {
        level: "Easy",
        question: "Who attacked and captured the province of Cavite?",
        answer: "Emilio Aguinaldo",
      },
      {
        level: "Medium",
        question: "Who disguised themselves as sailors to rescue Rizal?",
        answer: "Emilio Jacinto and Guillermo Masangkay",
      },
      {
        level: "Medium",
        question:
          "Who was the leader that issued a decree declaring a state of war in several provinces?",
        choices: [
          {
            letter: "A",
            words: "Andres Bonifacio and Emilio Jacinto",
          },
          {
            letter: "B",
            words: "Guillermo Masangkay and Emilio Aguinaldo",
          },
          {
            letter: "C",
            words: "Emilio Jacinto and Guillermo Masangkay",
          },
          {
            letter: "D",
            words: "Manuel Camus and Emilio Jacinto",
          },
        ],
        answer: "A",
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
        level: "Medium",
        question:
          "Who was appointed as the Judge Advocate to institute action against Rizal?",
        answer: "Captain Rafael Dominguez",
      },
      {
        level: "Medium",
        question:
          "What was the penalty for rebellion and sedition according to Rizal’s accusation?",
        answer: "Death",
      },
      {
        level: "Medium",
        question: "Who testified that Rizal was against rebellion?",
        answer: "Pio Valenzuela",
      },
      {
        level: "Medium",
        question:
          "Who approved Rizal’s request to volunteer as a military doctor in Cuba?",
        answer: "Governor General Ramon Blanco",
      },
      {
        level: "Hard",
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
        level: "Hard",
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
        level: "Hard",
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
        level: "Hard",
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
        level: "Hard",
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
        level: "Hard",
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
        level: "Hard",
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
        question: "What is the Greek word for heroism derived from?",
        answer: "Heros",
      },
      {
        level: "Easy",
        question:
          "Who is considered a national hero of the Philippines for his peaceful reform methods and significant contributions to the country’s well-being?",
        answer: "Jose Rizal",
      },
      {
        level: "Easy",
        question:
          "What is the title of Jose Rizal's first novel that vehemently criticized Spanish colonial governance in the Philippines?",
        answer: "Noli Me Tangere",
      },
      {
        level: "Easy",
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
        level: "Easy",
        question: "What was Jose Rizal’s profession?",
        choices: [
          {
            letter: "A",
            words: "Lawyer",
          },
          {
            letter: "B",
            words: "Scientist",
          },
          {
            letter: "C",
            words: "Physician",
          },
          {
            letter: "D",
            words: "Teacher",
          },
        ],
        answer: "C",
      },
      {
        level: "Easy",
        question:
          "Which group did Jose Rizal form upon his return to the Philippines in 1892?",
        choices: [
          {
            letter: "A",
            words: "Katipunan",
          },
          {
            letter: "B",
            words: "Liga Filipina",
          },
          {
            letter: "C",
            words: "La Solidaridad",
          },
          {
            letter: "D",
            words: "Propaganda Movement",
          },
        ],
        answer: "B",
      },
      {
        level: "Easy",
        question: "How did Jose Rizal express his opposition to Spanish rule?",
        choices: [
          {
            letter: "A",
            words: "Through violent rebellion",
          },
          {
            letter: "B",
            words: "Through diplomatic negotiations",
          },
          {
            letter: "C",
            words: "Through his writings",
          },
          {
            letter: "D",
            words: "Through military service",
          },
        ],
        answer: "C",
      },
      {
        level: "Easy",
        question: "When was Jose Rizal born?",
        choices: [
          {
            letter: "A",
            words: "June 19, 1861",
          },
          {
            letter: "B",
            words: "December 30, 1863",
          },
          {
            letter: "C",
            words: "July 4, 1862",
          },
          {
            letter: "D",
            words: "March 25, 1860",
          },
        ],
        answer: "A",
      },
      {
        level: "Easy",
        question: "Where did Jose Rizal attend university in Europe?",
        choices: [
          {
            letter: "A",
            words: "University of Paris",
          },
          {
            letter: "B",
            words: "University of Oxford",
          },
          {
            letter: "C",
            words: "University of Madrid ",
          },
          {
            letter: "D",
            words: "University of Berlin",
          },
        ],
        answer: "C",
      },
      {
        level: "Easy",
        question:
          "Which of the following was NOT part of Rizal's political platform?",
        choices: [
          {
            letter: "A",
            words: "Representation in the Spanish Cortes",
          },
          {
            letter: "B",
            words: "Permanent independence from Spain",
          },
          {
            letter: "C",
            words: "Freedom of assembly and speech",
          },
          {
            letter: "D",
            words: "Legal equality between Filipinos and Spaniards",
          },
        ],
        answer: "B",
      },
      {
        level: "Easy",
        question: "Where was Rizal exiled in 1892?",
        choices: [
          {
            letter: "A",
            words: "Mindoro",
          },
          {
            letter: "B",
            words: "Palawan",
          },
          {
            letter: "C",
            words: "Dapitan",
          },
          {
            letter: "D",
            words: "Cebu",
          },
        ],
        answer: "C",
      },
      {
        level: "Easy",
        question: "What was the name of Rizal's sequel to Noli Me Tangere?",
        choices: [
          {
            letter: "A",
            words: "El Filibusterismo",
          },
          {
            letter: "B",
            words: "La Solidaridad",
          },
          {
            letter: "C",
            words: "Ultimo Adiós",
          },
          {
            letter: "D",
            words: "Sucesos de las Islas Filipinas",
          },
        ],
        answer: "A",
      },
      {
        level: "Easy",
        question: "What was Rizal's famous final poem called?",
        choices: [
          {
            letter: "A",
            words: "Noli Me Tangere",
          },
          {
            letter: "B",
            words: " El Filibusterismo",
          },
          {
            letter: "C",
            words: "Last Farewell",
          },
          {
            letter: "D",
            words: "La Solidaridad",
          },
        ],
        answer: "C",
      },
      {
        level: "Easy",
        question: "When did Jose Rizal die?",
        choices: [
          {
            letter: "A",
            words: "June 19, 1896",
          },
          {
            letter: "B",
            words: "December 30, 1896",
          },
          {
            letter: "C",
            words: "July 4, 1897",
          },
          {
            letter: "D",
            words: "March 25, 1898",
          },
        ],
        answer: "B",
      },
      {
        level: "Easy",
        question:
          "Who chose Jose Rizal as the national hero of the Philippines?",
        choices: [
          {
            letter: "A",
            words: "Emilio Aguinaldo",
          },
          {
            letter: "B",
            words: "Andres Bonifacio",
          },
          {
            letter: "C",
            words: "The American colonial government",
          },
          {
            letter: "D",
            words: "The Spanish colonial government",
          },
        ],
        answer: "C",
      },
      {
        level: "Medium",
        question:
          "What was the primary focus of the Liga Filipina, founded by Jose Rizal in 1892?",
        answer: "Nonviolent reform",
      },
      {
        level: "Medium",
        question:
          "What significant historical work did Jose Rizal annotate to illustrate the pre-colonial history of the Philippines?",
        answer: "Sucesos de las Islas Filipinas",
      },
      {
        level: "Medium",
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
        level: "Hard",
        question:
          "What was one of the additional criteria for being a national hero according to Dr. Onofre D. Corpuz?",
        choices: [
          {
            letter: "A",
            words: "Wealth and social status",
          },
          {
            letter: "B",
            words: "Contribution to military victories",
          },
          {
            letter: "C",
            words:
              "Contribution to the quality of life and destiny of a nation",
          },
          {
            letter: "D",
            words: "Religious devotion",
          },
        ],
        answer: "C",
      },
      {
        level: "Hard",
        question:
          "How did Jose Rizal’s approach to reform differ from other Filipino revolutionaries?",
        choices: [
          {
            letter: "A",
            words: "He advocated for violent rebellion",
          },
          {
            letter: "B",
            words: "He used diplomatic negotiations",
          },
          {
            letter: "C",
            words: "He employed peaceful literary works",
          },
          {
            letter: "D",
            words: "He focused on religious reforms",
          },
        ],
        answer: "C",
      },
      {
        level: "Hard",
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
        question: "How did Rizal’s death influence the Philippine revolution?",
        choices: [
          {
            letter: "A",
            words: "It ended the revolution",
          },
          {
            letter: "B",
            words: "It discouraged further resistance",
          },
          {
            letter: "C",
            words: "It inspired greater unity and resolve",
          },
          {
            letter: "D",
            words: "It led to immediate peace",
          },
        ],
        answer: "C",
      },
      {
        level: "Hard",
        question: "In what year was El Filibusterismo published?",
        choices: [
          {
            letter: "A",
            words: "1887",
          },
          {
            letter: "B",
            words: "1891",
          },
          {
            letter: "C",
            words: "1890",
          },
          {
            letter: "D",
            words: "1889",
          },
        ],
        answer: "B",
      },
      {
        level: "Hard",
        question: "What was Rizal’s ultimate goal for the Philippines?",
        choices: [
          {
            letter: "A",
            words: "Complete independence from Spain",
          },
          {
            letter: "B",
            words: "Permanent representation in the Spanish Cortes",
          },
          {
            letter: "C",
            words: "Economic domination",
          },
          {
            letter: "D",
            words: "Religious reform",
          },
        ],
        answer: "B",
      },
      {
        level: "Hard",
        question:
          "What was one of the criteria for a hero according to Dr. Onofre D. Corpuz?",
        choices: [
          {
            letter: "A",
            words: "Wealth and power",
          },
          {
            letter: "B",
            words: "Military achievements",
          },
          {
            letter: "C",
            words: "Contribution to a system of freedom and order",
          },
          {
            letter: "D",
            words: "Religious devotion",
          },
        ],
        answer: "C",
      },
      {
        level: "Hard",
        question: "How did Rizal’s writings influence Filipino society?",
        choices: [
          {
            letter: "A",
            words: "They were largely ignored",
          },
          {
            letter: "B",
            words: "They promoted Spanish colonial rule",
          },
          {
            letter: "C",
            words: "They inspired nationalistic sentiments",
          },
          {
            letter: "D",
            words: "They called for economic reforms",
          },
        ],
        answer: "C",
      },
      {
        level: "Hard",
        question: "What was Rizal’s stance on violent revolution?",
        choices: [
          {
            letter: "A",
            words: "He strongly advocated for it",
          },
          {
            letter: "B",
            words: "He supported it under certain conditions",
          },
          {
            letter: "C",
            words: "He opposed it, preferring peaceful reforms",
          },
          {
            letter: "D",
            words: " He was indifferent to it",
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
    ],
  },
  {
    id: "3",
    content: [
      {
        level: "Easy",
        question: "What was Jose Rizal’s full name?",
        answer: "Jose Protacio Rizal Mercado y Alonso Realonda",
      },
      {
        level: "Easy",
        question:
          "What movement influenced the American and French Revolutions?",
        answer: "Enlightenment",
      },
      {
        level: "Easy",
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
        level: "Easy",
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
        level: "Easy",
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
        level: "Easy",
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
        level: "Easy",
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
        level: "Easy",
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
        level: "Easy",
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
        level: "Easy",
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
        level: "Easy",
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
        level: "Easy",
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
        level: "Easy",
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
        level: "Easy",
        question:
          "Who was Jose Rizal’s Austrian friend to whom he wrote about the importance of Philippine studies?",
        choices: [
          {
            letter: "A",
            words: "Maximo Viola",
          },
          {
            letter: "B",
            words: "Ferdinand Blumentritt",
          },
          {
            letter: "C",
            words: "Juan Luna",
          },
          {
            letter: "D",
            words: "Marcelo H. Del Pilar",
          },
        ],
        answer: "B",
      },
      {
        level: "Easy",
        question:
          "What is the name of Rizal's novel where he hailed the Jesuits for their contributions to the education system in the Philippines?",
        choices: [
          {
            letter: "A",
            words: "El Filibusterismo",
          },
          {
            letter: "B",
            words: "La Solidaridad",
          },
          {
            letter: "C",
            words: "Noli Me Tangere",
          },
          {
            letter: "D",
            words: "Mi Ultimo Adios",
          },
        ],
        answer: "C",
      },
      {
        level: "Medium",
        question: "What was the main theme of Rizal's novel El Filibusterismo?",
        answer: "Revenge and revolution",
      },
      {
        level: "Medium",
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
        question:
          "Who were the Peninsulares in the Philippine social class system?",
        choices: [
          {
            letter: "A",
            words: "Spaniards born in the Philippines",
          },
          {
            letter: "B",
            words: "Filipinos of Chinese descent",
          },
          {
            letter: "C",
            words: "Pure-blooded Spaniards born in Spain",
          },
          {
            letter: "D",
            words: "Mixed-race individuals",
          },
        ],
        answer: "C",
      },
      {
        level: "Medium",
        question:
          "What was the main purpose of the Galleon Trade between Manila and Acapulco?",
        choices: [
          {
            letter: "A",
            words: "To promote tourism",
          },
          {
            letter: "B",
            words: "To exchange cultural practices",
          },
          {
            letter: "C",
            words: "To trade goods between the Philippines and Mexico",
          },
          {
            letter: "D",
            words: "To send missionaries to the Philippines",
          },
        ],
        answer: "C",
      },
      {
        level: "Medium",
        question:
          "What major change did the Industrial Revolution bring to the economy?",
        choices: [
          {
            letter: "A",
            words: "Introduction of manual labor",
          },
          {
            letter: "B",
            words: "Shift from manual labor to machine works",
          },
          {
            letter: "C",
            words: "Decline in urbanization",
          },
          {
            letter: "D",
            words: "Decrease in the growth of cities",
          },
        ],
        answer: "B",
      },
      {
        level: "Medium",
        question: "Who is referred to as the Father of Filipino Nationalism?",
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
            words: "Juan Luna",
          },
        ],
        answer: "C",
      },
      {
        level: "Medium",
        question:
          "What significant invention improved transportation during the Industrial Revolution?",
        choices: [
          {
            letter: "A",
            words: "Steamships",
          },
          {
            letter: "B",
            words: "Printing press",
          },
          {
            letter: "C",
            words: "Telegraph",
          },
          {
            letter: "D",
            words: "Radio",
          },
        ],
        answer: "A",
      },
      {
        level: "Medium",
        question: "What was Rizal's first publication abroad?",
        choices: [
          {
            letter: "A",
            words: "Noli Me Tangere",
          },
          {
            letter: "B",
            words: "El Filibusterismo",
          },
          {
            letter: "C",
            words: "El Amor Patrio",
          },
          {
            letter: "D",
            words: "Mi Ultimo Adios",
          },
        ],
        answer: "C",
      },
      {
        level: "Medium",
        question: "What event marked the end of the Galleon Trade?",
        choices: [
          {
            letter: "A",
            words: "Opening of the Suez Canal",
          },
          {
            letter: "B",
            words: "Independence of Mexico from Spain",
          },
          {
            letter: "C",
            words: "Arrival of Governor-General Basco",
          },
          {
            letter: "D",
            words: "Start of the Philippine Revolution",
          },
        ],
        answer: "B",
      },
      {
        level: "Medium",
        question: "What year did Rizal write El Amor Patrio?",
        choices: [
          {
            letter: "A",
            words: "1882",
          },
          {
            letter: "B",
            words: "1883",
          },
          {
            letter: "C",
            words: "1884",
          },
          {
            letter: "D",
            words: "1885",
          },
        ],
        answer: "A",
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
          "What was the main reason behind the construction of the Suez Canal?",
        choices: [
          {
            letter: "A",
            words: "To promote tourism",
          },
          {
            letter: "B",
            words: "To facilitate easier maritime trade routes",
          },
          {
            letter: "C",
            words: "To improve agricultural productivity",
          },
          {
            letter: "D",
            words: "To establish military bases",
          },
        ],
        answer: "B",
      },
      {
        level: "Hard",
        question:
          "Who was the first Filipino to lead a reform movement against Spanish colonial rule?",
        choices: [
          {
            letter: "A",
            words: "Marcelo H. Del Pilar",
          },
          {
            letter: "B",
            words: "Graciano Lopez Jaena",
          },
          {
            letter: "C",
            words: "Jose Rizal",
          },
          {
            letter: "D",
            words: "Andres Bonifacio",
          },
        ],
        answer: "B",
      },
      {
        level: "Hard",
        question:
          "Where did Rizal complete his studies in Philosophy and Letters?",
        choices: [
          {
            letter: "A",
            words: "Ateneo Municipal de Manila",
          },
          {
            letter: "B",
            words: "University of Santo Tomas",
          },
          {
            letter: "C",
            words: "Universidad Central de Madrid",
          },
          {
            letter: "D",
            words: "Heidelberg University",
          },
        ],
        answer: "C",
      },
      {
        level: "Hard",
        question: "In what year did the French Revolution begin?",
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
            words: "1830",
          },
        ],
        answer: "B",
      },
      {
        level: "Hard",
        question:
          "Which Philippine governor-general was known for promoting economic development in the Philippines?",
        choices: [
          {
            letter: "A",
            words: "Narciso Claveria",
          },
          {
            letter: "B",
            words: "Jose V. Basco",
          },
          {
            letter: "C",
            words: "Miguel Lopez de Legazpi",
          },
          {
            letter: "D",
            words: "Eulogio Despujol",
          },
        ],
        answer: "B",
      },
      {
        level: "Hard",
        question: "What was the title of Rizal's first novel?",
        choices: [
          {
            letter: "A",
            words: "Noli Me Tangere",
          },
          {
            letter: "B",
            words: "El Filibusterismo",
          },
          {
            letter: "C",
            words: "La Solidaridad",
          },
          {
            letter: "D",
            words: "Mi Ultimo Adios",
          },
        ],
        answer: "A",
      },
      {
        level: "Hard",
        question: "Who introduced the Galleon Trade in the Philippines?",
        choices: [
          {
            letter: "A",
            words: "Ferdinand Magellan",
          },
          {
            letter: "B",
            words: "Miguel Lopez de Legazpi",
          },
          {
            letter: "C",
            words: "Andres Bonifacio",
          },
          {
            letter: "D",
            words: "Jose Rizal",
          },
        ],
        answer: "B",
      },
    ],
  },
  {
    id: "4",
    content: [
      {
        level: "Easy",
        question: "When was Jose Rizal born?",
        answer: "June 19, 1861",
      },
      {
        level: "Easy",
        question: "Where was Jose Rizal born?",
        answer: "Calamba, Laguna",
      },
      {
        level: "Easy",
        question: "Who was Jose Rizal’s godfather at his baptism?",
        answer: "Pedro Casañas",
      },
      {
        level: "Easy",
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
        level: "Easy",
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
        level: "Easy",
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
        level: "Easy",
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
        level: "Easy",
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
        level: "Easy",
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
        level: "Easy",
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
        level: "Easy",
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
        level: "Easy",
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
        level: "Easy",
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
        level: "Easy",
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
        level: "Easy",
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
        level: "Easy",
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
        level: "Medium",
        question: "What was the pet name of Josefa Rizal?",
        choices: [
          {
            letter: "A",
            words: "Trining",
          },
          {
            letter: "B",
            words: "Concha",
          },
          {
            letter: "C",
            words: "Panggoy",
          },
          {
            letter: "D",
            words: "Choleng",
          },
        ],
        answer: "C",
      },
      {
        level: "Medium",
        question:
          "Who was Rizal’s great-great grandfather on his father's side?",
        choices: [
          {
            letter: "A",
            words: "Eugenio Ursua",
          },
          {
            letter: "B",
            words: "Domingo Lamco",
          },
          {
            letter: "C",
            words: "Francisco Mercado",
          },
          {
            letter: "D",
            words: "Juan Mercado",
          },
        ],
        answer: "B",
      },
      {
        level: "Medium",
        question:
          "Who among Rizal’s siblings lived as a gentleman farmer in Los Baños?",
        choices: [
          {
            letter: "A",
            words: "Paciano",
          },
          {
            letter: "B",
            words: "Manuel",
          },
          {
            letter: "C",
            words: "Gregorio",
          },
          {
            letter: "D",
            words: "Antonio",
          },
        ],
        answer: "A",
      },
      {
        level: "Medium",
        question:
          "Who among Rizal’s uncles intensified his voracious reading of good books?",
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
        answer: "B",
      },
      {
        level: "Medium",
        question: "Which Rizal sibling was nicknamed “Trining”?",
        choices: [
          {
            letter: "A",
            words: "Trinidad",
          },
          {
            letter: "B",
            words: "Soledad",
          },
          {
            letter: "C",
            words: "Concepcion",
          },
          {
            letter: "D",
            words: "Maria",
          },
        ],
        answer: "A",
      },
      {
        level: "Medium",
        question: "Who married Pantaleon Quintero of Calamba?",
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
        question:
          "Who was Rizal’s great-great grandfather on his mother's side?",
        choices: [
          {
            letter: "A",
            words: "Domingo Lamco",
          },
          {
            letter: "B",
            words: "Eugenio Ursua",
          },
          {
            letter: "C",
            words: "Francisco Mercado",
          },
          {
            letter: "D",
            words: " Juan Mercado",
          },
        ],
        answer: "B",
      },
      {
        level: "Medium",
        question: "On what date was Jose Rizal baptized?",
        answer: "June 22, 1861",
      },
      {
        level: "Medium",
        question: "What is the meaning of the surname “Mercado”?",
        answer: "Market",
      },
      {
        level: "Medium",
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
        question:
          "Who was Rizal’s great-great grandfather on his father's side?",
        choices: [
          {
            letter: "A",
            words: "Eugenio Ursua",
          },
          {
            letter: "B",
            words: "Domingo Lamco",
          },
          {
            letter: "C",
            words: "Francisco Mercado",
          },
          {
            letter: "D",
            words: "Juan Mercado",
          },
        ],
        answer: "B",
      },
      {
        level: "Hard",
        question: "Which of Rizal's siblings was married to Mariano Herbosa?",
        choices: [
          {
            letter: "A",
            words: "Lucia",
          },
          {
            letter: "B",
            words: "Maria",
          },
          {
            letter: "C",
            words: "Saturnina",
          },
          {
            letter: "D",
            words: "Olimpia",
          },
        ],
        answer: "A",
      },
      {
        level: "Hard",
        question:
          "Who among Rizal’s uncles studied for eleven years in a British school?",
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
        level: "Hard",
        question: "Who inspired Rizal to write poetry?",
        choices: [
          {
            letter: "A",
            words: "Tio Gregorio",
          },
          {
            letter: "B",
            words: "Tio Jose Alberto",
          },
          {
            letter: "C",
            words: "His mother",
          },
          {
            letter: "D",
            words: "His father",
          },
        ],
        answer: "C",
      },
      {
        level: "Hard",
        question: "Who among Rizal’s siblings had a pet name Choleng?",
        choices: [
          {
            letter: "A",
            words: "Trinidad",
          },
          {
            letter: "B",
            words: "Concepcion",
          },
          {
            letter: "C",
            words: "Soledad",
          },
          {
            letter: "D",
            words: "Maria",
          },
        ],
        answer: "c",
      },
      {
        level: "Hard",
        question: "What year did Francisco Mercado Rizal die?",
        choices: [
          {
            letter: "A",
            words: "1896",
          },
          {
            letter: "B",
            words: "1897",
          },
          {
            letter: "C",
            words: "1898",
          },
          {
            letter: "D",
            words: "1899",
          },
        ],
        answer: "C",
      },
      {
        level: "Hard",
        question: "Which of Rizal's siblings was nicknamed Ypia?",
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
        answer: "D",
      },
      {
        level: "Hard",
        question: "Who was the first to discover Rizal's talent for poetry?",
        choices: [
          {
            letter: "A",
            words: "His father",
          },
          {
            letter: "B",
            words: "His mother",
          },
          {
            letter: "C",
            words: "Tio Gregorio",
          },
          {
            letter: "D",
            words: "Tio Jose Alberto",
          },
        ],
        answer: "B",
      },
      {
        level: "Hard",
        question: "What is the meaning of Rizal in Spanish?",
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
    ],
  },
  {
    id: "5",
    content: [
      {
        level: "Easy",
        question: "Who was Jose Rizal’s first teacher?",
        answer: "His mother",
      },
      {
        level: "Easy",
        question:
          "At what age did Jose Rizal enter Ateneo Municipal de Manila?",
        answer: "11 years old",
      },
      {
        level: "Easy",
        question:
          "Which subject did Rizal excel in during his time at Ateneo Municipal de Manila?",
        answer: "Mathematics, Physics, Chemistry",
      },
      {
        level: "Easy",
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
        level: "Easy",
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
        level: "Easy",
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
        level: "Easy",
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
        level: "Easy",
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
        level: "Easy",
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
        level: "Easy",
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
        level: "Easy",
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
        level: "Easy",
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
        level: "Easy",
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
        level: "Easy",
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
        level: "Medium",
        question: "Which school did Rizal enter in 1872?",
        answer: "Ateneo Municipal de Manila",
      },
      {
        level: "Medium",
        question:
          "What was the primary reason Rizal decided to study ophthalmology?",
        answer: "He wanted to cure his mother’s failing eyesight",
      },
      {
        level: "Medium",
        question: "Where did Rizal earn his Licentiate in Medicine?",
        answer: "Universidad Central de Madrid",
      },
      {
        level: "Medium",
        question:
          "Which extracurricular society was Rizal a secretary of while at Ateneo?",
        choices: [
          {
            letter: "A",
            words: "Academy of Spanish Literature",
          },
          {
            letter: "B",
            words: "Academy of Natural Sciences",
          },
          {
            letter: "C",
            words: "Marian Congregation Religious Society",
          },
          {
            letter: "D",
            words: "None of the above",
          },
        ],
        answer: "C",
      },
      {
        level: "Medium",
        question: "Who was Rizal’s teacher in Biñan?",
        choices: [
          {
            letter: "A",
            words: "Maestro Lucas",
          },
          {
            letter: "B",
            words: "Maestro Justiniano",
          },
          {
            letter: "C",
            words: "Maestro Celestino",
          },
          {
            letter: "D",
            words: " Maestro Leon Monroy",
          },
        ],
        answer: "B",
      },
      {
        level: "Medium",
        question: "Which famous painter did Rizal study painting under?",
        choices: [
          {
            letter: "A",
            words: "Agustin Saez",
          },
          {
            letter: "B",
            words: "Romualdo de Jesus",
          },
          {
            letter: "C",
            words: "Dr. Otto Becker",
          },
          {
            letter: "D",
            words: "Blas Echegoyen",
          },
        ],
        answer: "A",
      },
      {
        level: "Medium",
        question:
          "What was the name of the German scientist-traveler whose book Rizal read?",
        choices: [
          {
            letter: "A",
            words: "Alexander Dumas",
          },
          {
            letter: "B",
            words: "Dr. Feodor Jagor",
          },
          {
            letter: "C",
            words: "Dr. Louis de Weckert",
          },
          {
            letter: "D",
            words: "Maximo Viola",
          },
        ],
        answer: "B",
      },
      {
        level: "Medium",
        question:
          "How many medals did Rizal receive during his fourth year at Ateneo?",
        choices: [
          {
            letter: "A",
            words: "3",
          },
          {
            letter: "B",
            words: "4",
          },
          {
            letter: "C",
            words: "5",
          },
          {
            letter: "D",
            words: "6",
          },
        ],
        answer: "C",
      },
      {
        level: "Medium",
        question: "What was the name of Rizal's first favorite novel?",
        choices: [
          {
            letter: "A",
            words: "The Count of Monte Cristo",
          },
          {
            letter: "B",
            words: "Universal History",
          },
          {
            letter: "C",
            words: "Travels in the Philippines",
          },
          {
            letter: "D",
            words: "Noli Me Tangere",
          },
        ],
        answer: "A",
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
          "Where did Rizal write the poem “A Las Flores de Heidelberg”?",
        choices: [
          {
            letter: "A",
            words: "Paris",
          },
          {
            letter: "B",
            words: "Madrid",
          },
          {
            letter: "C",
            words: "Heidelberg",
          },
          {
            letter: "D",
            words: "Berlin",
          },
        ],
        answer: "C",
      },
      {
        level: "Hard",
        question:
          "What was Rizal’s global grade in his last year at the University of Santo Tomas?",
        choices: [
          {
            letter: "A",
            words: "Sobresaliente",
          },
          {
            letter: "B",
            words: "Notable",
          },
          {
            letter: "C",
            words: "Aprobado",
          },
          {
            letter: "D",
            words: "Suspenso",
          },
        ],
        answer: "B",
      },
      {
        level: "Hard",
        question: "What is the title of Rizal’s unfinished third novel?",
        choices: [
          {
            letter: "A",
            words: "Makamisa",
          },
          {
            letter: "B",
            words: "El Filibusterismo",
          },
          {
            letter: "C",
            words: "Noli Me Tangere",
          },
          {
            letter: "D",
            words: "La Indolencia de los Filipino",
          },
        ],
        answer: "A",
      },
      {
        level: "Hard",
        question:
          "What was Rizal’s average grade in his first year of secondary education at Ateneo?",
        choices: [
          {
            letter: "A",
            words: "Excellent",
          },
          {
            letter: "B",
            words: "Very Good",
          },
          {
            letter: "C",
            words: "Good",
          },
          {
            letter: "D",
            words: "Fair",
          },
        ],
        answer: "A",
      },
      {
        level: "Hard",
        question: "Which two subjects did Rizal fail in his first term at UST?",
        choices: [
          {
            letter: "A",
            words: "Philosophy and Anatomy",
          },
          {
            letter: "B",
            words: "Cosmology and Metaphysics",
          },
          {
            letter: "C",
            words: "Physics and Chemistry",
          },
          {
            letter: "D",
            words: "Logic and History",
          },
        ],
        answer: "B",
      },
      {
        level: "Hard",
        question: "What skill did Rizal practice with Dr. Louis de Weckert?",
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
            words: "Ophthalmology",
          },
          {
            letter: "D",
            words: "Drawing",
          },
        ],
        answer: "C",
      },
      {
        level: "Hard",
        question:
          "What was the pen name Rizal used for his essays in La Solidaridad?",
        choices: [
          {
            letter: "A",
            words: "Pepe",
          },
          {
            letter: "B",
            words: "Laong Laan",
          },
          {
            letter: "C",
            words: "Dimasalang",
          },
          {
            letter: "D",
            words: "Jose Mercado",
          },
        ],
        answer: "B",
      },
      {
        level: "Hard",
        question:
          "In which subject did Rizal receive a “sobresaliente” grade during his fourth year at Ateneo?",
        choices: [
          {
            letter: "A",
            words: "Agriculture",
          },
          {
            letter: "B",
            words: "Philosophy",
          },
          {
            letter: "C",
            words: "Poetry",
          },
          {
            letter: "D",
            words: "Religion",
          },
        ],
        answer: "B",
      },
      {
        level: "Hard",
        question:
          "What was the title of the poem Rizal wrote when he was 8 years old?",
        choices: [
          {
            letter: "A",
            words: "El Consejo delos Diosese",
          },
          {
            letter: "B",
            words: "Mi Primera Inspiracion",
          },
          {
            letter: "C",
            words: "Sa Aking mga Kababata",
          },
          {
            letter: "D",
            words: "A La Juventud Filipina",
          },
        ],
        answer: "C",
      },
    ],
  },
  {
    id: "6",
    content: [
      {
        level: "Easy",
        question:
          "What was the title of Rizal’s first essay written when he was 21 and newly arrived in Madrid?",
        answer: "The Love of Country",
      },
      {
        level: "Easy",
        question:
          "Under what pseudonym was The Love of Country first published in Diariong Tagalog?",
        answer: "Laong Laan",
      },
      {
        level: "Easy",
        question: "What is the Latin translation of Noli Me Tángere?",
        answer: "Touch Me Not",
      },
      {
        level: "Easy",
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
        level: "Easy",
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
        level: "Easy",
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
        level: "Easy",
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
        level: "Easy",
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
        level: "Easy",
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
        level: "Easy",
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
        level: "Easy",
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
        level: "Easy",
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
        level: "Easy",
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
        level: "Easy",
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
        level: "Easy",
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
        level: "Medium",
        question: "What was the original Spanish title of Touch Me Not?",
        answer: "Noli Me Tángere",
      },
      {
        level: "Medium",
        question: "Who was Crisóstomo Ibarra’s childhood sweetheart?",
        answer: "María Clara",
      },
      {
        level: "Medium",
        question:
          "Which character in Noli Me Tangere is described as a local philosopher?",
        answer: "Don Anastacio",
      },
      {
        level: "Medium",
        question:
          "Which essay by Rizal is addressed to the young women of Malolos?",
        choices: [
          {
            letter: "A",
            words: "The Love of Country",
          },
          {
            letter: "B",
            words: "El Amor Patrio",
          },
          {
            letter: "C",
            words: "On the Indolence of the Filipino",
          },
          {
            letter: "D",
            words: "Letter to the Women of Malolos",
          },
        ],
        answer: "D",
      },
      {
        level: "Medium",
        question: "What was José Rizal's primary profession?",
        choices: [
          {
            letter: "A",
            words: "Lawyer",
          },
          {
            letter: "B",
            words: "Doctor",
          },
          {
            letter: "C",
            words: "Teacher",
          },
          {
            letter: "D",
            words: "Politician",
          },
        ],
        answer: "B",
      },
      {
        level: "Medium",
        question:
          "Who was the leader of La Liga Filipina founded by José Rizal?",
        choices: [
          {
            letter: "A",
            words: "Tandang Selo",
          },
          {
            letter: "B",
            words: "Captain-General",
          },
          {
            letter: "C",
            words: "Simoun",
          },
          {
            letter: "D",
            words: "José Rizal",
          },
        ],
        answer: "D",
      },
      {
        level: "Medium",
        question:
          "Which character from El Filibusterismo becomes a bomb-maker for Simoun?",
        choices: [
          {
            letter: "A",
            words: "Isagani",
          },
          {
            letter: "B",
            words: "Basilio",
          },
          {
            letter: "C",
            words: "Placido Penitente",
          },
          {
            letter: "D",
            words: "Father Salví",
          },
        ],
        answer: "C",
      },
      {
        level: "Medium",
        question:
          "Who is described as a quiet, contemplative man in El Filibusterismo?",
        choices: [
          {
            letter: "A",
            words: "Simoun",
          },
          {
            letter: "B",
            words: "Basilio",
          },
          {
            letter: "C",
            words: "Isagani",
          },
          {
            letter: "D",
            words: "Father Florentino",
          },
        ],
        answer: "B",
      },
      {
        level: "Medium",
        question:
          "Who is the girlfriend of Isagani who later marries Juanito Peláez?",
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
        answer: "A",
      },
      {
        level: "Medium",
        question:
          "Who is known as the columnist for El Grito de la Integridad in El Filibusterismo?",
        choices: [
          {
            letter: "A",
            words: "Father Salví",
          },
          {
            letter: "B",
            words: "Ben-Zayb",
          },
          {
            letter: "C",
            words: "Father Írene",
          },
          {
            letter: "D",
            words: "Father Camorra",
          },
        ],
        answer: "B",
      },
      {
        level: "Medium",
        question:
          "Which European country did Josephine Bracken come from before arriving in Dapitan?",
        choices: [
          {
            letter: "A",
            words: "Spain",
          },
          {
            letter: "B",
            words: "Germany",
          },
          {
            letter: "C",
            words: "England",
          },
          {
            letter: "D",
            words: "Ireland",
          },
        ],
        answer: "D",
      },
      {
        level: "Medium",
        question:
          "What title did Rizal obtain from the Ateneo Municipal which he applied in constructing a waterworks system in Dapitan?",
        choices: [
          {
            letter: "A",
            words: "Expert Surveyor",
          },
          {
            letter: "B",
            words: "Master Engineer",
          },
          {
            letter: "C",
            words: "Agriculturalist",
          },
          {
            letter: "D",
            words: "Linguist",
          },
        ],
        answer: "A",
      },
      {
        level: "Medium",
        question:
          "Who was the parish priest in Dapitan who initially refused to marry Rizal and Josephine Bracken?",
        choices: [
          {
            letter: "A",
            words: "Father Francisco Sanchez",
          },
          {
            letter: "B",
            words: "Father Pedro Obach",
          },
          {
            letter: "C",
            words: "Father Pablo Pastells",
          },
          {
            letter: "D",
            words: "Father Antonio Piernavieja",
          },
        ],
        answer: "B",
      },
      {
        level: "Medium",
        question:
          "What did Jose Rizal refuse when Katipuneros attempted to rescue him from the ship Isla de Luzon?",
        choices: [
          {
            letter: "A",
            words: "A chance to escape",
          },
          {
            letter: "B",
            words: "Medical assistance",
          },
          {
            letter: "C",
            words: "Weapons for defense",
          },
          {
            letter: "D",
            words: "Political asylum",
          },
        ],
        answer: "A",
      },
      {
        level: "Medium",
        question:
          "What was the charge for which Jose Rizal was found guilty during his trial?",
        choices: [
          {
            letter: "A",
            words: "Murder",
          },
          {
            letter: "B",
            words: "Sedition",
          },
          {
            letter: "C",
            words: "Theft",
          },
          {
            letter: "D",
            words: "Espionage",
          },
        ],
        answer: "B",
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
          "What impact did Rizal's novels have on Philippine society during the late 19th century?",
        choices: [
          {
            letter: "A",
            words: "They sparked nationalist movements",
          },
          {
            letter: "B",
            words: "They promoted religious unity",
          },
          {
            letter: "C",
            words: "They encouraged Spanish colonization",
          },
          {
            letter: "D",
            words: "They led to educational reforms",
          },
        ],
        answer: "A",
      },
      {
        level: "Hard",
        question:
          "Which character in Noli Me Tangere embodies the corrupt power of the Spanish friars?",
        choices: [
          {
            letter: "A",
            words: "Padre Dámaso",
          },
          {
            letter: "B",
            words: "Crisóstomo Ibarra",
          },
          {
            letter: "C",
            words: "Elías",
          },
          {
            letter: "D",
            words: "María Clara",
          },
        ],
        answer: "A",
      },
      {
        level: "Hard",
        question:
          "What was the fate of La Liga Filipina after José Rizal's exile to Dapitan?",
        choices: [
          {
            letter: "A",
            words: "It became inactive",
          },
          {
            letter: "B",
            words: "It merged with Katipunan",
          },
          {
            letter: "C",
            words: "It supported Spanish authorities",
          },
          {
            letter: "D",
            words: "It dissolved after a leadership dispute",
          },
        ],
        answer: "D",
      },
      {
        level: "Hard",
        question:
          "Who among the characters in El Filibusterismo was a former cabeza de barangay of Barrio Sagpang?",
        choices: [
          {
            letter: "A",
            words: "Tandang Selo",
          },
          {
            letter: "B",
            words: "Isagani",
          },
          {
            letter: "C",
            words: "Father Florentino",
          },
          {
            letter: "D",
            words: "Simoun",
          },
        ],
        answer: "A",
      },
      {
        level: "Hard",
        question:
          "Which character in El Filibusterismo was accused of being a member of the student association despised by the friars?",
        choices: [
          {
            letter: "A",
            words: "Father Salví",
          },
          {
            letter: "B",
            words: "Placido Penitente",
          },
          {
            letter: "C",
            words: "Captain-General",
          },
          {
            letter: "D",
            words: "Father Camorra",
          },
        ],
        answer: "B",
      },
      {
        level: "Hard",
        question:
          "Who became a fierce commander among the bandits in El Filibusterismo?",
        choices: [
          {
            letter: "A",
            words: "Tandang Selo",
          },
          {
            letter: "B",
            words: "Juli",
          },
          {
            letter: "C",
            words: "Tano",
          },
          {
            letter: "D",
            words: "Basilio",
          },
        ],
        answer: "C",
      },
      {
        level: "Hard",
        question:
          "Who was described as having an insatiable lust for gold in El Filibusterismo?",
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
            words: "Father Fernández",
          },
          {
            letter: "D",
            words: "Quiroga",
          },
        ],
        answer: "B",
      },
      {
        level: "Hard",
        question:
          "What was the name of the blind companion who accompanied Dr. Pio Valenzuela to Dapitan to inform Rizal about the Katipunan's plans?",
        choices: [
          {
            letter: "A",
            words: "Ramon Carreon",
          },
          {
            letter: "B",
            words: "George Taufer",
          },
          {
            letter: "C",
            words: "Raymundo Mata",
          },
          {
            letter: "D",
            words: "Marcelo H. del Pilar",
          },
        ],
        answer: "C",
      },
      {
        level: "Hard",
        question:
          "What was the name of the steamer Rizal boarded when he left Dapitan for his exile in Spain? ",
        choices: [
          {
            letter: "A",
            words: "Cebu",
          },
          {
            letter: "B",
            words: "España",
          },
          {
            letter: "C",
            words: "Isla de Luzon",
          },
          {
            letter: "D",
            words: "Castilla",
          },
        ],
        answer: "B",
      },
      {
        level: "Hard",
        question:
          "Which of the following inventions did Rizal create during his exile in Dapitan, showcasing his engineering skills?",
        choices: [
          {
            letter: "A",
            words: "Waterworks system",
          },
          {
            letter: "B",
            words: "Agricultural machinery",
          },
          {
            letter: "C",
            words: "Wooden brick-maker",
          },
          {
            letter: "D",
            words: "Hemp processing machine",
          },
        ],
        answer: "C",
      },
      {
        level: "Hard",
        question:
          "Which specific document was used as testimonial evidence against Jose Rizal during his trial?",
        choices: [
          {
            letter: "A",
            words: "A poem entitled Kundiman",
          },
          {
            letter: "B",
            words: "A Masonic document",
          },
          {
            letter: "C",
            words: "A letter from Marcelo H. del Pilar",
          },
          {
            letter: "D",
            words: "A speech by Pingkian (Emilio Jacinto)",
          },
        ],
        answer: "B",
      },
      {
        level: "Hard",
        question:
          "What was the penalty Jose Rizal faced for the crimes he was charged with?",
        choices: [
          {
            letter: "A",
            words: "Life imprisonment",
          },
          {
            letter: "B",
            words: "Exile to Guam",
          },
          {
            letter: "C",
            words: "Death by firing squad",
          },
          {
            letter: "D",
            words: "A heavy fine",
          },
        ],
        answer: "C",
      },
    ],
  },
];

export default quizzes;
