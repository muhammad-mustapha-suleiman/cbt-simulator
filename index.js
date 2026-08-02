"use strict";

/* ==========================================================
   1. QUESTION BANK  (sample data — replace/extend freely;
      app logic never needs to change when data grows)
   ========================================================== */
const questionBank = {
  mathematics: [
    {id:1,topic:"Algebra",difficulty:"Easy",question:"Solve for x: 2x + 5 = 15",options:["3","5","10","7"],answer:1,explanation:"2x = 15 - 5 = 10, so x = 10/2 = 5."},
    {id:2,topic:"Algebra",difficulty:"Medium",question:"Simplify: 3(x - 4) = 21",options:["7","9","11","13"],answer:2,explanation:"3x - 12 = 21, so 3x = 33, giving x = 11."},
    {id:3,topic:"Geometry",difficulty:"Medium",question:"What is the area of a circle with radius 7 cm? (Use pi = 22/7)",options:["154 cm2","44 cm2","49 cm2","22 cm2"],answer:0,explanation:"Area = pi r^2 = 22/7 x 7 x 7 = 154 cm2."},
    {id:4,topic:"Geometry",difficulty:"Easy",question:"How many degrees are in the interior angles of a triangle?",options:["90","180","270","360"],answer:1,explanation:"The interior angles of any triangle sum to 180 degrees."},
    {id:5,topic:"Number Theory",difficulty:"Easy",question:"Which of the following is a prime number?",options:["21","27","29","33"],answer:2,explanation:"29 is divisible only by 1 and itself, making it prime."},
    {id:6,topic:"Fractions",difficulty:"Easy",question:"Evaluate: 3/4 + 1/8",options:["7/8","1/2","5/8","4/12"],answer:0,explanation:"3/4 = 6/8, so 6/8 + 1/8 = 7/8."},
    {id:7,topic:"Algebra",difficulty:"Hard",question:"Factorize: x^2 - 5x + 6",options:["(x-2)(x-3)","(x-1)(x-6)","(x+2)(x+3)","(x-6)(x+1)"],answer:0,explanation:"We need two numbers that multiply to 6 and add to -5: -2 and -3."},
    {id:8,topic:"Statistics",difficulty:"Medium",question:"Find the mean of: 4, 8, 6, 5, 3, 10",options:["5.5","6.0","6.5","7.0"],answer:1,explanation:"Sum = 36, count = 6, mean = 36/6 = 6.0."},
    {id:9,topic:"Trigonometry",difficulty:"Medium",question:"What is sin(30 degrees)?",options:["0","1/2","1","sqrt(3)/2"],answer:1,explanation:"sin(30 degrees) is a standard value equal to 1/2."},
    {id:10,topic:"Indices",difficulty:"Medium",question:"Simplify: 2^3 x 2^4",options:["2^7","2^12","4^7","2^1"],answer:0,explanation:"When multiplying powers with the same base, add the exponents: 3+4=7."},
    {id:11,topic:"Sets",difficulty:"Easy",question:"If A = {1,2,3} and B = {2,3,4}, what is A intersect B?",options:["{1,2,3,4}","{2,3}","{1,4}","{}"],answer:1,explanation:"The intersection contains elements common to both sets: 2 and 3."},
    {id:12,topic:"Ratio",difficulty:"Easy",question:"Divide 60 in the ratio 2:3",options:["20 and 40","24 and 36","30 and 30","25 and 35"],answer:1,explanation:"Total parts = 5. 2/5 x 60 = 24, 3/5 x 60 = 36."},
    {id:13,topic:"Geometry",difficulty:"Medium",question:"Find the perimeter of a rectangle with length 12 cm and width 5 cm",options:["17 cm","34 cm","60 cm","24 cm"],answer:1,explanation:"Perimeter = 2(l + w) = 2(12+5) = 34 cm."},
    {id:14,topic:"Number Bases",difficulty:"Hard",question:"Convert 101101 (base 2) to base 10",options:["43","45","47","41"],answer:1,explanation:"101101(2) = 32+0+8+4+0+1 = 45 in base 10."},
    {id:15,topic:"Percentages",difficulty:"Easy",question:"What is 15% of 200?",options:["15","20","30","45"],answer:2,explanation:"15% of 200 = 0.15 x 200 = 30."}
  ],
  english: [
    {id:1,topic:"Grammar",difficulty:"Easy",question:"Choose the correct sentence.",options:["He don't like rice.","He doesn't likes rice.","He doesn't like rice.","He not like rice."],answer:2,explanation:"The correct negative form uses 'doesn't' with the base verb 'like'."},
    {id:2,topic:"Vocabulary",difficulty:"Easy",question:"Choose the word nearest in meaning to 'benevolent'.",options:["Cruel","Kind","Angry","Selfish"],answer:1,explanation:"'Benevolent' means kind and generous."},
    {id:3,topic:"Vocabulary",difficulty:"Medium",question:"Choose the word opposite in meaning to 'scarce'.",options:["Rare","Abundant","Limited","Few"],answer:1,explanation:"'Abundant' is the opposite of 'scarce'."},
    {id:4,topic:"Grammar",difficulty:"Medium",question:"Fill the gap: Neither the teacher nor the students ___ ready.",options:["is","was","are","be"],answer:2,explanation:"With 'neither...nor', the verb agrees with the nearer subject, 'students'."},
    {id:5,topic:"Grammar",difficulty:"Easy",question:"Choose the correctly punctuated sentence.",options:["Its a beautiful day.","It's a beautiful day.","Its' a beautiful day.","It is' a beautiful day."],answer:1,explanation:"'It's' is the contraction of 'it is'."},
    {id:6,topic:"Grammar",difficulty:"Medium",question:"Choose the correct plural of 'child'.",options:["Childs","Childes","Children","Childrens"],answer:2,explanation:"'Children' is the irregular plural of 'child'."},
    {id:7,topic:"Vocabulary",difficulty:"Hard",question:"Choose the word nearest in meaning to 'ubiquitous'.",options:["Rare","Everywhere","Hidden","Unusual"],answer:1,explanation:"'Ubiquitous' means present or found everywhere."},
    {id:8,topic:"Figures of Speech",difficulty:"Medium",question:"'The classroom was a zoo' is an example of ___.",options:["Simile","Metaphor","Personification","Hyperbole"],answer:1,explanation:"A metaphor directly compares two unlike things without 'like' or 'as'."},
    {id:9,topic:"Grammar",difficulty:"Hard",question:"Choose the sentence in the passive voice.",options:["The chef cooked the meal.","The meal was cooked by the chef.","The chef is cooking the meal.","The chef will cook the meal."],answer:1,explanation:"In passive voice, the subject receives the action."},
    {id:10,topic:"Idioms",difficulty:"Medium",question:"'To break the ice' means ___.",options:["To cause damage","To start a conversation in a social setting","To end a friendship","To freeze water"],answer:1,explanation:"'Break the ice' means to ease tension and start conversation."},
    {id:11,topic:"Grammar",difficulty:"Medium",question:"Choose the correct comparative form of 'good'.",options:["Gooder","More good","Better","Best"],answer:2,explanation:"'Good' has the irregular comparative 'better'."},
    {id:12,topic:"Spelling",difficulty:"Medium",question:"Choose the correctly spelled word.",options:["Recieve","Receive","Receeve","Receve"],answer:1,explanation:"'I before E except after C': Receive."}
  ],
  biology: [
    {id:1,topic:"Cell Biology",difficulty:"Easy",question:"What is the basic structural and functional unit of life?",options:["Tissue","Organ","Cell","Organism"],answer:2,explanation:"The cell is the smallest unit that can carry out all life processes."},
    {id:2,topic:"Cell Biology",difficulty:"Medium",question:"Which organelle is known as the powerhouse of the cell?",options:["Nucleus","Ribosome","Mitochondrion","Golgi apparatus"],answer:2,explanation:"The mitochondrion generates most of the cell's ATP through respiration."},
    {id:3,topic:"Human Anatomy",difficulty:"Easy",question:"Which organ pumps blood throughout the human body?",options:["Liver","Heart","Lung","Kidney"],answer:1,explanation:"The heart pumps blood through the circulatory system."},
    {id:4,topic:"Genetics",difficulty:"Medium",question:"What molecule carries genetic information in most living organisms?",options:["RNA","Protein","DNA","Lipid"],answer:2,explanation:"DNA stores and transmits genetic information."},
    {id:5,topic:"Ecology",difficulty:"Medium",question:"What is the process by which green plants make their own food?",options:["Respiration","Photosynthesis","Transpiration","Digestion"],answer:1,explanation:"Photosynthesis converts CO2 and water into glucose and oxygen using sunlight."},
    {id:6,topic:"Human Anatomy",difficulty:"Easy",question:"What is the largest organ in the human body?",options:["Liver","Heart","Skin","Lung"],answer:2,explanation:"The skin is the largest organ, covering the entire body."},
    {id:7,topic:"Classification",difficulty:"Medium",question:"Which kingdom do mushrooms belong to?",options:["Plantae","Animalia","Fungi","Protista"],answer:2,explanation:"Mushrooms are classified under kingdom Fungi."},
    {id:8,topic:"Human Anatomy",difficulty:"Medium",question:"Which blood cells are responsible for fighting infection?",options:["Red blood cells","White blood cells","Platelets","Plasma"],answer:1,explanation:"White blood cells are part of the immune system."},
    {id:9,topic:"Plant Biology",difficulty:"Medium",question:"Which part of the plant is primarily responsible for water absorption?",options:["Leaves","Stem","Roots","Flowers"],answer:2,explanation:"Roots absorb water and mineral nutrients from soil."},
    {id:10,topic:"Ecology",difficulty:"Easy",question:"Organisms that make their own food are called ___.",options:["Consumers","Decomposers","Producers","Predators"],answer:2,explanation:"Producers synthesize their own food via photosynthesis."},
    {id:11,topic:"Genetics",difficulty:"Medium",question:"What term describes an organism's observable physical characteristics?",options:["Genotype","Phenotype","Allele","Chromosome"],answer:1,explanation:"Phenotype refers to observable traits."},
    {id:12,topic:"Microbiology",difficulty:"Medium",question:"Which of these is caused by a virus?",options:["Malaria","Tuberculosis","Common cold","Cholera"],answer:2,explanation:"The common cold is caused by viruses."}
  ],
  chemistry: [
    {id:1,topic:"Atomic Structure",difficulty:"Easy",question:"What particle has a negative charge and orbits the nucleus?",options:["Proton","Neutron","Electron","Positron"],answer:2,explanation:"Electrons are negatively charged particles that orbit the nucleus."},
    {id:2,topic:"Periodic Table",difficulty:"Easy",question:"What is the chemical symbol for Gold?",options:["Ag","Fe","Au","Cu"],answer:2,explanation:"Gold's symbol Au comes from the Latin 'Aurum'."},
    {id:3,topic:"Compounds",difficulty:"Easy",question:"What is the chemical formula for water?",options:["H2O","CO2","NaCl","CH4"],answer:0,explanation:"Water is composed of two hydrogen atoms and one oxygen atom."},
    {id:4,topic:"Acids and Bases",difficulty:"Medium",question:"What is the pH of a neutral solution at 25 degrees Celsius?",options:["0","7","14","1"],answer:1,explanation:"A pH of 7 is neutral; below is acidic, above is basic."},
    {id:5,topic:"Reactions",difficulty:"Medium",question:"What type of reaction occurs when an acid reacts with a base?",options:["Combustion","Neutralization","Oxidation","Decomposition"],answer:1,explanation:"An acid-base reaction produces a salt and water; this is neutralization."},
    {id:6,topic:"Periodic Table",difficulty:"Medium",question:"Which group of the periodic table contains the noble gases?",options:["Group 1","Group 7","Group 8/18","Group 3"],answer:2,explanation:"Noble gases are found in Group 18 (also labelled Group 8 in older tables)."},
    {id:7,topic:"States of Matter",difficulty:"Easy",question:"What is the process of a liquid changing directly to a gas at its surface called?",options:["Condensation","Evaporation","Sublimation","Melting"],answer:1,explanation:"Evaporation is surface liquid-to-gas conversion below boiling point."},
    {id:8,topic:"Bonding",difficulty:"Medium",question:"What type of bond involves the sharing of electron pairs between atoms?",options:["Ionic bond","Covalent bond","Metallic bond","Hydrogen bond"],answer:1,explanation:"A covalent bond forms when atoms share electron pairs."},
    {id:9,topic:"Atomic Structure",difficulty:"Hard",question:"An atom with 17 protons and 18 neutrons has a mass number of ___.",options:["17","18","35","1"],answer:2,explanation:"Mass number = protons + neutrons = 17 + 18 = 35."}
  ],
  physics: [
    {id:1,topic:"Mechanics",difficulty:"Easy",question:"What is the SI unit of force?",options:["Joule","Watt","Newton","Pascal"],answer:2,explanation:"The SI unit of force is the Newton."},
    {id:2,topic:"Optics",difficulty:"Medium",question:"What is the approximate speed of light in a vacuum?",options:["3 x 10^8 m/s","3 x 10^6 m/s","3 x 10^10 m/s","3 x 10^4 m/s"],answer:0,explanation:"Light travels at about 3 x 10^8 metres per second in a vacuum."},
    {id:3,topic:"Mechanics",difficulty:"Medium",question:"Which law states that every action has an equal and opposite reaction?",options:["Newton's First Law","Newton's Second Law","Newton's Third Law","Law of Gravitation"],answer:2,explanation:"Newton's Third Law describes action-reaction force pairs."},
    {id:4,topic:"Electricity",difficulty:"Medium",question:"What is the SI unit of electric current?",options:["Volt","Ohm","Ampere","Watt"],answer:2,explanation:"Electric current is measured in Amperes (A)."},
    {id:5,topic:"Energy",difficulty:"Easy",question:"What type of energy is stored in a stretched rubber band?",options:["Kinetic energy","Potential energy","Thermal energy","Nuclear energy"],answer:1,explanation:"A stretched rubber band stores elastic potential energy."},
    {id:6,topic:"Waves",difficulty:"Medium",question:"What term describes the number of wave cycles passing a point per second?",options:["Amplitude","Wavelength","Frequency","Period"],answer:2,explanation:"Frequency is measured in Hertz and counts cycles per second."},
    {id:7,topic:"Mechanics",difficulty:"Hard",question:"A body of mass 2 kg accelerates at 3 m/s^2. What force acts on it?",options:["1.5 N","5 N","6 N","0.67 N"],answer:2,explanation:"F = ma = 2 x 3 = 6 N."},
    {id:8,topic:"Thermodynamics",difficulty:"Medium",question:"What is the SI unit of temperature?",options:["Celsius","Fahrenheit","Kelvin","Joule"],answer:2,explanation:"The Kelvin is the SI base unit of temperature."}
  ],
  government: [
    {id:1,topic:"Political Systems",difficulty:"Easy",question:"What term describes a system of government where power is held by the people through elected representatives?",options:["Monarchy","Democracy","Autocracy","Theocracy"],answer:1,explanation:"Democracy means rule by the people, typically via elected representatives."},
    {id:2,topic:"Arms of Government",difficulty:"Medium",question:"Which arm of government is primarily responsible for making laws?",options:["Executive","Legislature","Judiciary","Civil service"],answer:1,explanation:"The Legislature (parliament/national assembly) makes laws."},
    {id:3,topic:"Constitution",difficulty:"Medium",question:"What term describes the principle of separating governmental power among different branches?",options:["Federalism","Separation of powers","Rule of law","Bicameralism"],answer:1,explanation:"Separation of powers divides authority among the executive, legislature, and judiciary."},
    {id:4,topic:"Political Systems",difficulty:"Easy",question:"A system of government in which power is concentrated in one ruler is called ___.",options:["Democracy","Autocracy","Federation","Confederation"],answer:1,explanation:"Autocracy is rule by a single person with absolute power."},
    {id:5,topic:"Citizenship",difficulty:"Medium",question:"The right to vote in elections is known as ___.",options:["Franchise","Sovereignty","Suffrage","Mandate"],answer:2,explanation:"Suffrage refers to the right to vote in political elections."},
    {id:6,topic:"Arms of Government",difficulty:"Medium",question:"Which arm of government interprets and applies the law?",options:["Executive","Legislature","Judiciary","Bureaucracy"],answer:2,explanation:"The Judiciary interprets laws and administers justice."}
  ],
  economics: [
    {id:1,topic:"Basic Concepts",difficulty:"Easy",question:"What term describes the study of how people allocate scarce resources?",options:["Sociology","Economics","Psychology","Geography"],answer:1,explanation:"Economics studies how individuals and societies allocate scarce resources."},
    {id:2,topic:"Demand and Supply",difficulty:"Medium",question:"What happens to the price of a good when demand increases while supply stays constant?",options:["Price falls","Price rises","Price stays the same","Price becomes zero"],answer:1,explanation:"Higher demand with constant supply pushes the equilibrium price up."},
    {id:3,topic:"Market Structures",difficulty:"Medium",question:"A market with only one seller and no close substitutes is called a ___.",options:["Monopoly","Oligopoly","Perfect competition","Duopoly"],answer:0,explanation:"A monopoly exists when a single firm dominates the market with no close substitutes."},
    {id:4,topic:"Basic Concepts",difficulty:"Easy",question:"What is the term for goods that are used to produce other goods, such as machinery?",options:["Consumer goods","Capital goods","Final goods","Luxury goods"],answer:1,explanation:"Capital goods are used in the production of other goods and services."},
    {id:5,topic:"Macroeconomics",difficulty:"Medium",question:"A sustained increase in the general price level of goods and services is called ___.",options:["Deflation","Inflation","Recession","Depreciation"],answer:1,explanation:"Inflation is a sustained rise in the general price level over time."},
    {id:6,topic:"Basic Concepts",difficulty:"Medium",question:"What term describes the next best alternative given up when a choice is made?",options:["Marginal cost","Opportunity cost","Sunk cost","Fixed cost"],answer:1,explanation:"Opportunity cost is the value of the next best alternative foregone."}
  ],

  gens202: [
    {
      "id": 1,
      "topic": "Organization",
      "difficulty": "Medium",
      "question": "Which of the following is NOT a characteristic of organization?",
      "options": [
        "Management provides guidance and direction.",
        "A set of rules and instruments are communicated to all involved.",
        "Personnel positions, rights, and responsibilities are defined and classified.",
        "Organization involves the allocation of resources without any planning."
      ],
      "answer": 2,
      "explanation": "The correct answer is: Personnel positions, rights, and responsibilities are defined and classified."
    },
    {
      "id": 2,
      "topic": "Organization",
      "difficulty": "Medium",
      "question": "From the following options, what represents the nature of organization?",
      "options": [
        "Subdivision of tasks based on seniority.",
        "Allocation of resources without any consideration of suitability.",
        "Determination of positions at random levels.",
        "Selection of suitable personnel and allocation of jobs according to suitability."
      ],
      "answer": 3,
      "explanation": "The correct answer is: Selection of suitable personnel and allocation of jobs according to suitability."
    },
    {
      "id": 3,
      "topic": "Organization",
      "difficulty": "Medium",
      "question": "What is one of the importance of an effective organization?",
      "options": [
        "Makes management complicated and inefficient.",
        "Discourages specialization among employees.",
        "Decreases productivity and hampers progress.",
        "Encourages specialization, improves techniques, encourages constructive thinking, increases productivity, and accelerates progress."
      ],
      "answer": 3,
      "explanation": "The correct answer is: Encourages specialization, improves techniques, encourages constructive thinking, increases productivity, and accelerates progress."
    },
    {
      "id": 4,
      "topic": "Organization",
      "difficulty": "Medium",
      "question": "Which of the following statements is true about organization?",
      "options": [
        "Organization is a process that has no connection with management.",
        "Organization is a tool used by employees to accomplish personal goals.",
        "Organization involves assigning tasks to individuals without considering their abilities.",
        "Organization is a foundation upon which the whole structure of management can be built."
      ],
      "answer": 3,
      "explanation": "The correct answer is: Organization is a foundation upon which the whole structure of management can be built."
    },
    {
      "id": 5,
      "topic": "Organization",
      "difficulty": "Medium",
      "question": "What is a key characteristic of an effective organization?",
      "options": [
        "Ignoring the principles of equality in job division.",
        "Assigning tasks based on personal preferences.",
        "Defining personnel positions, rights, and responsibilities clearly.",
        "Allotting rights and authority based on friendship rather than suitability."
      ],
      "answer": 2,
      "explanation": "The correct answer is: Defining personnel positions, rights, and responsibilities clearly."
    },
    {
      "id": 6,
      "topic": "Organization",
      "difficulty": "Medium",
      "question": "Which of the following processes represents the nature of organization?",
      "options": [
        "Distributing tasks randomly without any plan.",
        "Establishing positions without any consideration of authority.",
        "Selecting personnel based on their personal preferences.",
        "Subdividing main work into small groups, allocating jobs, allotting authority, and determining positions at different levels."
      ],
      "answer": 3,
      "explanation": "The correct answer is: Subdividing main work into small groups, allocating jobs, allotting authority, and determining positions at different levels."
    },
    {
      "id": 7,
      "topic": "Organization",
      "difficulty": "Medium",
      "question": "What does an effective organization rely on to achieve tasks set forth before it?",
      "options": [
        "An elaborate set of random rules.",
        "Complex decision-making processes.",
        "A foundation upon which management is built.",
        "Strict control over individual creativity and innovation."
      ],
      "answer": 2,
      "explanation": "The correct answer is: A foundation upon which management is built."
    },
    {
      "id": 8,
      "topic": "Organization",
      "difficulty": "Medium",
      "question": "What does the term \"organization\" refer to?",
      "options": [
        "A chaotic process lacking any structure.",
        "A rigid system of command and control.",
        "A dynamic process integrating activities to achieve objectives.",
        "A one-time event unrelated to management."
      ],
      "answer": 2,
      "explanation": "The correct answer is: A dynamic process integrating activities to achieve objectives."
    },
    {
      "id": 9,
      "topic": "Organization",
      "difficulty": "Medium",
      "question": "Which of the following is NOT a characteristic of organization?",
      "options": [
        "Clear definition of personnel positions, rights, and responsibilities.",
        "Allocation of tasks randomly without any planning.",
        "Communication of rules and instructions to all stakeholders.",
        "Direction provided by management."
      ],
      "answer": 2,
      "explanation": "The correct answer is: Communication of rules and instructions to all stakeholders."
    },
    {
      "id": 10,
      "topic": "Organization",
      "difficulty": "Medium",
      "question": "What best describes the nature of organization, as mentioned?",
      "options": [
        "Division of work based on individual preferences.",
        "Allocation of jobs without considering suitability.",
        "Establishment of positions without any criteria",
        "Subdivision of main work, selection of suitable personnel, allocation of jobs, allotment of authority, and determination of positions at different levels."
      ],
      "answer": 3,
      "explanation": "The correct answer is: Subdivision of main work, selection of suitable personnel, allocation of jobs, allotment of authority, and determination of positions at different levels."
    },
    {
      "id": 11,
      "topic": "Organization",
      "difficulty": "Medium",
      "question": "Why is organization important in a business context?",
      "options": [
        "It hinders productivity and complicates management.",
        "It stifles creativity and restricts employee roles.",
        "It simplifies management, encourages specialization, and increases productivity.",
        "It replaces the need for management decisions."
      ],
      "answer": 2,
      "explanation": "The correct answer is: It simplifies management, encourages specialization, and increases productivity."
    },
    {
      "id": 12,
      "topic": "Organization",
      "difficulty": "Medium",
      "question": "What role does organization play in management?",
      "options": [
        "It is an unnecessary overhead, adding complexity.",
        "It enforces strict control over individual initiatives.",
        "It is the primary foundation on which effective management is built.",
        "It discourages specialization and teamwork."
      ],
      "answer": 2,
      "explanation": "The correct answer is: It is the primary foundation on which effective management is built."
    },
    {
      "id": 13,
      "topic": "Organization",
      "difficulty": "Medium",
      "question": "What is a central aspect of an effective organization?",
      "options": [
        "Ignoring communication and rules.",
        "Treating all employees equally.",
        "Clear definition of personnel roles and responsibilities.",
        "Relying solely on top-down authority."
      ],
      "answer": 2,
      "explanation": "The correct answer is: Clear definition of personnel roles and responsibilities."
    },
    {
      "id": 14,
      "topic": "Organization",
      "difficulty": "Medium",
      "question": "What process characterizes the nature of organization?",
      "options": [
        "Assigning tasks randomly without any structure.",
        "Establishing positions based on personal preferences.",
        "Selecting employees without considering suitability.",
        "Subdividing main work, selecting suitable personnel, allocating tasks, allotting authority, and determining positions at various levels."
      ],
      "answer": 3,
      "explanation": "The correct answer is: Subdividing main work, selecting suitable personnel, allocating tasks, allotting authority, and determining positions at various levels."
    },
    {
      "id": 15,
      "topic": "Organization",
      "difficulty": "Medium",
      "question": "Why is organization considered a necessary foundation?",
      "options": [
        "It complicates management processes.",
        "It serves as a substitute for managerial decisions.",
        "It simplifies management, encourages innovation, and enhances productivity.",
        "It stifles employee creativity and individuality."
      ],
      "answer": 2,
      "explanation": "The correct answer is: It simplifies management, encourages innovation, and enhances productivity."
    },
    {
      "id": 16,
      "topic": "Organization",
      "difficulty": "Medium",
      "question": "In the context of management, what is the key outcome of an effective organization?",
      "options": [
        "Increased complexity and bureaucracy.",
        "Reduced employee involvement.",
        "Simplified processes and improved productivity.",
        "Isolation of managers from employees."
      ],
      "answer": 2,
      "explanation": "The correct answer is: Simplified processes and improved productivity."
    },
    {
      "id": 17,
      "topic": "Theories of Entrepreneurship",
      "difficulty": "Medium",
      "question": "What does the term \"entrepreneur\" typically refer to?",
      "options": [
        "A person who only buys products.",
        "A business owner.",
        "An individual who starts their own business.",
        "An employee working in a large corporation."
      ],
      "answer": 2,
      "explanation": "The correct answer is: An individual who starts their own business."
    },
    {
      "id": 18,
      "topic": "Theories of Entrepreneurship",
      "difficulty": "Medium",
      "question": "Which thinker introduced the dimension of risk-taking as a characteristic of entrepreneurship?",
      "options": [
        "Alfred Marshall.",
        "Max Weber.",
        "Richard Cantillon.",
        "Frank Knight."
      ],
      "answer": 3,
      "explanation": "The correct answer is: Frank Knight."
    },
    {
      "id": 19,
      "topic": "Theories of Entrepreneurship",
      "difficulty": "Medium",
      "question": "According to Frank Knight's Risk Bearing Theory, how does the entrepreneur earn profit?",
      "options": [
        "By exploiting their employees.",
        "By investing heavily in marketing.",
        "By effectively managing production processes.",
        "By taking risks and anticipating future events."
      ],
      "answer": 3,
      "explanation": "The correct answer is: By taking risks and anticipating future events."
    },
    {
      "id": 20,
      "topic": "Theories of Entrepreneurship",
      "difficulty": "Medium",
      "question": "According to Alfred Marshall, which of the following factors is considered the driving force that brings together land, labor, capital, and organization?",
      "options": [
        "Capital.",
        "Labor.",
        "Land",
        "Entrepreneurship."
      ],
      "answer": 3,
      "explanation": "The correct answer is: Entrepreneurship."
    },
    {
      "id": 21,
      "topic": "Theories of Entrepreneurship",
      "difficulty": "Medium",
      "question": "What is a central characteristic of Max Weber's Sociological Theory of entrepreneurship?",
      "options": [
        "The entrepreneur's ability to innovate.",
        "The entrepreneur's risk-taking ability.",
        "The entrepreneur's role expectations based on society's norms and values.",
        "The entrepreneur's ability to form successful partnerships."
      ],
      "answer": 2,
      "explanation": "The correct answer is: The entrepreneur's role expectations based on society's norms and values."
    },
    {
      "id": 22,
      "topic": "Theories of Entrepreneurship",
      "difficulty": "Medium",
      "question": "What does Mark Casson's Economic Theory suggest is the demand for entrepreneurship arising from?",
      "options": [
        "Technological advancement.",
        "Government policies.",
        "Change and economic conditions.",
        "Cultural shifts."
      ],
      "answer": 2,
      "explanation": "The correct answer is: Change and economic conditions."
    },
    {
      "id": 23,
      "topic": "Theories of Entrepreneurship",
      "difficulty": "Medium",
      "question": "Which major characteristic does Joseph Schumpeter's Innovation Theory attribute to entrepreneurs?",
      "options": [
        "Risk-taking ability.",
        "Organizational skills.",
        "Creativity, foresight, and innovation.",
        "Leadership skills."
      ],
      "answer": 2,
      "explanation": "The correct answer is: Creativity, foresight, and innovation."
    },
    {
      "id": 24,
      "topic": "Theories of Entrepreneurship",
      "difficulty": "Medium",
      "question": "According to Israel Kirzner, what is a more characteristic aspect of entrepreneurship compared to innovation?",
      "options": [
        "Creativity.",
        "Risk-taking.",
        "Alertness to recognize opportunity.",
        "Resource management."
      ],
      "answer": 2,
      "explanation": "The correct answer is: Alertness to recognize opportunity."
    },
    {
      "id": 25,
      "topic": "Theories of Entrepreneurship",
      "difficulty": "Medium",
      "question": "Which theory emphasizes the entrepreneurial motive derived from the need for achievement and power?",
      "options": [
        "Frank Knight's Risk Bearing Theory.",
        "Mark Casson's Economic Theory.",
        "Max Weber's Sociological Theory.",
        "McClelland's Theory of Achievement Motivation."
      ],
      "answer": 3,
      "explanation": "The correct answer is: McClelland's Theory of Achievement Motivation."
    },
    {
      "id": 26,
      "topic": "Theories of Entrepreneurship",
      "difficulty": "Medium",
      "question": "What does Peter Drucker's Theory of Entrepreneurship emphasize as the keys to entrepreneurship?",
      "options": [
        "Financial resources and market knowledge.",
        "Innovation, resources, and an entrepreneurial behavior.",
        "Specialization and technical skills.",
        "Networking and affiliations."
      ],
      "answer": 1,
      "explanation": "The correct answer is: Innovation, resources, and an entrepreneurial behavior."
    },
    {
      "id": 27,
      "topic": "Theories of Entrepreneurship",
      "difficulty": "Medium",
      "question": "What consensus do economists share about entrepreneurship despite differences in theories?",
      "options": [
        "Entrepreneurs are primarily motivated by external incentives.",
        "Entrepreneurs are best defined as people who imitate others'innovations.",
        "Entrepreneurship is a distinct concept and a central factor of economic activity.",
        "Entrepreneurship is solely determined by cultural factors."
      ],
      "answer": 2,
      "explanation": "The correct answer is: Entrepreneurship is a distinct concept and a central factor of economic activity."
    },
    {
      "id": 28,
      "topic": "Theories of Entrepreneurship",
      "difficulty": "Medium",
      "question": "Which of the following characteristics is NOT associated with entrepreneurship?",
      "options": [
        "Foresight on demand and supply changes.",
        "Technical knowledge.",
        "Good leadership skills.",
        "Willingness to take risks."
      ],
      "answer": 2,
      "explanation": "The correct answer is: Good leadership skills."
    },
    {
      "id": 29,
      "topic": "Theories of Entrepreneurship",
      "difficulty": "Medium",
      "question": "What was Richard Cantillon's contribution to the definition of entrepreneurship?",
      "options": [
        "He introduced the concept of risk-taking.",
        "He classified economic agents into landowners, hirelings, and entrepreneurs.",
        "He emphasized the role of innovation in entrepreneurship.",
        "He identified entrepreneurship as a process of integrating and coordinating activities to achieve goals."
      ],
      "answer": 3,
      "explanation": "The correct answer is: He identified entrepreneurship as a process of integrating and coordinating activities to achieve goals."
    },
    {
      "id": 30,
      "topic": "Theories of Entrepreneurship",
      "difficulty": "Medium",
      "question": "According to Jean Baptise Say, how does the entrepreneur contribute to the economy?",
      "options": [
        "By maximizing profits through exploitation.",
        "By performing various roles in the business.",
        "By bringing people together to build productive items.",
        "By creating new technologies and products."
      ],
      "answer": 2,
      "explanation": "The correct answer is: By bringing people together to build productive items."
    },
    {
      "id": 31,
      "topic": "Theories of Entrepreneurship",
      "difficulty": "Medium",
      "question": "What does Max Weber emphasize as the driving force of entrepreneurship in his sociological theory?",
      "options": [
        "Economic factors.",
        "Government regulations.",
        "Religious beliefs, taboos, and customs.",
        "Technological advancements."
      ],
      "answer": 2,
      "explanation": "The correct answer is: Religious beliefs, taboos, and customs."
    },
    {
      "id": 32,
      "topic": "Theories of Entrepreneurship",
      "difficulty": "Medium",
      "question": "According to Leibenstein's Theory of Entrepreneurship, what is a primary trait of entrepreneurs?",
      "options": [
        "Innovation and creativity.",
        "Recognition of market trends and profitable activities.",
        "Ability to manage employees effectively.",
        "Extensive knowledge of the industry."
      ],
      "answer": 1,
      "explanation": "The correct answer is: Recognition of market trends and profitable activities."
    },
    {
      "id": 33,
      "topic": "Theories of Entrepreneurship",
      "difficulty": "Medium",
      "question": "Which economic factor discourages entrepreneurship according to Mark Casson's Economic Theory?",
      "options": [
        "Taxation policy.",
        "Easy access to finance on favorable terms.",
        "Availability of raw materials.",
        "Lack of technology and infrastructure."
      ],
      "answer": 3,
      "explanation": "The correct answer is: Lack of technology and infrastructure."
    },
    {
      "id": 34,
      "topic": "Theories of Entrepreneurship",
      "difficulty": "Medium",
      "question": "What does McClelland's Theory of Achievement Motivation suggest about entrepreneurs?",
      "options": [
        "They are primarily motivated by external incentives.",
        "They are motivated by the need for affiliation.",
        "They focus on internal motivation and need for achievement.",
        "They are mainly driven by the need for power."
      ],
      "answer": 2,
      "explanation": "The correct answer is: They focus on internal motivation and need for achievement."
    },
    {
      "id": 35,
      "topic": "Theories of Entrepreneurship",
      "difficulty": "Medium",
      "question": "According to Israel Kirzner's Theory of Entrepreneurship, what is the transformation of spontaneous learning to conscious knowledge motivated by?",
      "options": [
        "Social recognition and fame.",
        "The desire for creative expression.",
        "Monetary gain.",
        "The need for power."
      ],
      "answer": 2,
      "explanation": "The correct answer is: Monetary gain."
    },
    {
      "id": 36,
      "topic": "Theories of Entrepreneurship",
      "difficulty": "Medium",
      "question": "What is a central characteristic of Peter Drucker's Theory of Entrepreneurship?",
      "options": [
        "Emphasis on imitation and adaptation.",
        "Combination of existing resources in a new productive way.",
        "Resource management and financial planning.",
        "Increase in value or satisfaction to the customer from the resource."
      ],
      "answer": 3,
      "explanation": "The correct answer is: Increase in value or satisfaction to the customer from the resource."
    },
    {
      "id": 37,
      "topic": "Theories of Entrepreneurship",
      "difficulty": "Medium",
      "question": "What is the main focus of Alfred Marshall's Theory of Entrepreneurship?",
      "options": [
        "Innovation and creativity.",
        "Organizational structure and management.",
        "Land, labor, capital, and organization as the driving factors.",
        "Social and cultural factors influencing entrepreneurship."
      ],
      "answer": 2,
      "explanation": "The correct answer is: Land, labor, capital, and organization as the driving factors."
    },
    {
      "id": 38,
      "topic": "Theories of Entrepreneurship",
      "difficulty": "Medium",
      "question": "In Mark Casson's Economic Theory, what condition encourages entrepreneurship?",
      "options": [
        "Limited availability of raw materials.",
        "Stringent taxation policies.",
        "Industrial policies that promote competition.",
        "Conducive economic conditions."
      ],
      "answer": 3,
      "explanation": "The correct answer is: Conducive economic conditions."
    },
    {
      "id": 39,
      "topic": "Theories of Entrepreneurship",
      "difficulty": "Medium",
      "question": "According to Max Weber's Sociological Theory, what is the role of religion in driving entrepreneurship?",
      "options": [
        "It has no influence on entrepreneurial behavior.",
        "It shapes role expectations and societal norms.",
        "It emphasizes risk-taking and innovation.",
        "It promotes materialistic desires."
      ],
      "answer": 1,
      "explanation": "The correct answer is: It shapes role expectations and societal norms."
    },
    {
      "id": 40,
      "topic": "Theories of Entrepreneurship",
      "difficulty": "Medium",
      "question": "How does Israel Kirzner define entrepreneurship in his theory?",
      "options": [
        "As a creative endeavor driven by innovation.",
        "As a process of combining resources to create value.",
        "As the transformation of spontaneous learning into conscious knowledge motivated by the prospects of gain.",
        "As a competitive struggle for market dominance."
      ],
      "answer": 2,
      "explanation": "The correct answer is: As the transformation of spontaneous learning into conscious knowledge motivated by the prospects of gain."
    },
    {
      "id": 41,
      "topic": "Theories of Entrepreneurship",
      "difficulty": "Medium",
      "question": "What is a key aspect of Leibenstein's Theory of Entrepreneurship?",
      "options": [
        "Entrepreneurship is driven solely by profit-seeking motives.",
        "Entrepreneurs are primarily risk-takers.",
        "Entrepreneurs are gap-fillers who recognize market trends and develop new goods or processes.",
        "Entrepreneurship is a result of conducive economic conditions."
      ],
      "answer": 2,
      "explanation": "The correct answer is: Entrepreneurs are gap-fillers who recognize market trends and develop new goods or processes."
    },
    {
      "id": 42,
      "topic": "Theories of Entrepreneurship",
      "difficulty": "Medium",
      "question": "What aspect of entrepreneurship does Peter Drucker's Theory emphasize?",
      "options": [
        "Government regulations and policies.",
        "Innovation, resources, and an entrepreneurial behavior.",
        "Imitation and adaptation to market trends.",
        "Focus on formal education and training."
      ],
      "answer": 1,
      "explanation": "The correct answer is: Innovation, resources, and an entrepreneurial behavior."
    },
    {
      "id": 43,
      "topic": "Theories of Entrepreneurship",
      "difficulty": "Medium",
      "question": "Which theory considers uncertainty as a factor of production and views the entrepreneur as acting in anticipation of future events?",
      "options": [
        "Leibenstein's Theory of Entrepreneurship.",
        "Max Weber's Sociological Theory.",
        "Frank Knight's Risk Bearing Theory.",
        "Israel Kirzner's Theory of Entrepreneurship."
      ],
      "answer": 2,
      "explanation": "The correct answer is: Frank Knight's Risk Bearing Theory."
    },
    {
      "id": 44,
      "topic": "Theories of Entrepreneurship",
      "difficulty": "Medium",
      "question": "What characteristic is emphasized by McClelland's Theory of Achievement Motivation?",
      "options": [
        "The need for affiliation.",
        "The ability to imitate and adapt to market trends.",
        "The need for power and control.",
        "The need for achievement and the drive to accomplish significant tasks."
      ],
      "answer": 3,
      "explanation": "The correct answer is: The need for achievement and the drive to accomplish significant tasks."
    },
    {
      "id": 45,
      "topic": "Entrepreneurial Culture",
      "difficulty": "Medium",
      "question": "What does the term \"entrepreneurial culture\" refer to?",
      "options": [
        "The set of laws and regulations that govern entrepreneurship.",
        "The genetic predisposition for entrepreneurship.",
        "The social and cultural values that support and encourage entrepreneurship.",
        "The innate abilities and skills of an entrepreneur."
      ],
      "answer": 2,
      "explanation": "The correct answer is: The social and cultural values that support and encourage entrepreneurship."
    },
    {
      "id": 46,
      "topic": "Entrepreneurial Culture",
      "difficulty": "Medium",
      "question": "Which of the following is the main factor that influences the growth of entrepreneurship?",
      "options": [
        "Genetic traits of individuals.",
        "Economic conditions and technology.",
        "Government policies and regulations.",
        "Social values, culture, and environmental factors."
      ],
      "answer": 3,
      "explanation": "The correct answer is: Social values, culture, and environmental factors."
    },
    {
      "id": 47,
      "topic": "Entrepreneurial Culture",
      "difficulty": "Medium",
      "question": "Why is understanding the cultural environment important for entrepreneurs?",
      "options": [
        "To manipulate government policies in their favor.",
        "To avoid risks and uncertainties in business.",
        "To predict future economic conditions.",
        "To better understand behavior and conduct of people and predict their actions in relation to entrepreneurship."
      ],
      "answer": 3,
      "explanation": "The correct answer is: To better understand behavior and conduct of people and predict their actions in relation to entrepreneurship."
    },
    {
      "id": 48,
      "topic": "Entrepreneurial Culture",
      "difficulty": "Medium",
      "question": "According to Max Weber, what role does social culture play in the emergence of entrepreneurship?",
      "options": [
        "Social culture has no influence on entrepreneurship.",
        "It determines the amount of risk an entrepreneur is willing to take.",
        "It creates a supportive environment for entrepreneurship.",
        "It encourages entrepreneurs to focus on short-term goals."
      ],
      "answer": 2,
      "explanation": "The correct answer is: It creates a supportive environment for entrepreneurship."
    },
    {
      "id": 49,
      "topic": "Entrepreneurial Culture",
      "difficulty": "Medium",
      "question": "Which of the following aspects of culture can influence an entrepreneur's behavior?",
      "options": [
        "Government regulations and policies.",
        "Economic trends and technology advancements.",
        "Environmental pressures and religious beliefs.",
        "All of the options."
      ],
      "answer": 3,
      "explanation": "The correct answer is: All of the options."
    },
    {
      "id": 50,
      "topic": "Entrepreneurial Culture",
      "difficulty": "Medium",
      "question": "What role does family background play in shaping entrepreneurial instincts?",
      "options": [
        "It has no impact on an individual's entrepreneurial tendencies.",
        "It determines an individual's genetic predisposition for entrepreneurship.",
        "Growing up in a business environment increases the probability of becoming an entrepreneur.",
        "Family background has no influence on an individual's career choices."
      ],
      "answer": 2,
      "explanation": "The correct answer is: Growing up in a business environment increases the probability of becoming an entrepreneur."
    },
    {
      "id": 51,
      "topic": "Entrepreneurial Culture",
      "difficulty": "Medium",
      "question": "Why do family enterprises often play a major role in regional and local economics?",
      "options": [
        "Family enterprises receive more government support.",
        "Family businesses tend to be larger in scale.",
        "Family enterprises have a positive attitude towards growth and are cost-efficient.",
        "Family enterprises are exempt from taxes and regulations."
      ],
      "answer": 2,
      "explanation": "The correct answer is: Family enterprises have a positive attitude towards growth and are cost-efficient."
    },
    {
      "id": 52,
      "topic": "Entrepreneurial Culture",
      "difficulty": "Medium",
      "question": "What is the key takeaway about the influence of culture on entrepreneurship?",
      "options": [
        "Culture has no impact on entrepreneurship.",
        "Genetic traits are the sole determinant of entrepreneurial success.",
        "Culture provides a framework within which individuals can pursue entrepreneurial opportunities.",
        "Entrepreneurship is purely driven by technological advancements."
      ],
      "answer": 2,
      "explanation": "The correct answer is: Culture provides a framework within which individuals can pursue entrepreneurial opportunities."
    },
    {
      "id": 53,
      "topic": "Entrepreneurial Culture",
      "difficulty": "Medium",
      "question": "Which of the following factors are considered part of the cultural values that influence entrepreneurship?",
      "options": [
        "Government regulations and taxation.",
        "Economic conditions and technological advancements.",
        "Social values, religious beliefs, and customs.",
        "Access to raw materials and financial support."
      ],
      "answer": 2,
      "explanation": "The correct answer is: Social values, religious beliefs, and customs."
    },
    {
      "id": 54,
      "topic": "Entrepreneurial Culture",
      "difficulty": "Medium",
      "question": "What does entrepreneurial culture imply?",
      "options": [
        "A set of economic factors that determine success in business.",
        "A collection of laws and regulations that support entrepreneurship.",
        "A combination of personal traits and skills that make a successful entrepreneur.",
        "A set of values, norms, and traits that are conducive to the growth of entrepreneurship."
      ],
      "answer": 3,
      "explanation": "The correct answer is: A set of values, norms, and traits that are conducive to the growth of entrepreneurship."
    },
    {
      "id": 55,
      "topic": "Entrepreneurial Culture",
      "difficulty": "Medium",
      "question": "What role does family play in shaping entrepreneurial instincts?",
      "options": [
        "Family has no impact on an individual's entrepreneurial tendencies.",
        "Entrepreneurial instincts are solely determined by genetics.",
        "Growing up in a business-oriented family environment can influence an individual's propensity towards entrepreneurship.",
        "Family background has no connection to an individual's career choices."
      ],
      "answer": 2,
      "explanation": "The correct answer is: Growing up in a business-oriented family environment can influence an individual's propensity towards entrepreneurship."
    },
    {
      "id": 56,
      "topic": "Entrepreneurial Culture",
      "difficulty": "Medium",
      "question": "According to Max Weber's sociological theory, how does religion influence entrepreneurship?",
      "options": [
        "Religion has no impact on entrepreneurship.",
        "Religion fosters a spirit of laziness and complacency.",
        "Religious beliefs create an environment that encourages entrepreneurial behavior.",
        "Religion limits an entrepreneur's ability to take risks."
      ],
      "answer": 2,
      "explanation": "The correct answer is: Religious beliefs create an environment that encourages entrepreneurial behavior."
    },
    {
      "id": 57,
      "topic": "Entrepreneurial Culture",
      "difficulty": "Medium",
      "question": "What do sociologists like Max Weber argue about entrepreneurship and cultural values?",
      "options": [
        "Cultural values have no influence on entrepreneurship.",
        "Entrepreneurship is determined solely by government policies.",
        "Cultural values, social sanctions, and role expectations contribute to the emergence of entrepreneurship.",
        "Entrepreneurship is a universal phenomenon unaffected by culture."
      ],
      "answer": 2,
      "explanation": "The correct answer is: Cultural values, social sanctions, and role expectations contribute to the emergence of entrepreneurship."
    },
    {
      "id": 58,
      "topic": "Entrepreneurial Culture",
      "difficulty": "Medium",
      "question": "Why is understanding cultural values important for entrepreneurs?",
      "options": [
        "Cultural values are irrelevant to the business environment.",
        "It helps entrepreneurs manipulate the stock market.",
        "It enables entrepreneurs to better predict consumer behavior and market trends.",
        "Cultural values have no impact on business decisions."
      ],
      "answer": 2,
      "explanation": "The correct answer is: It enables entrepreneurs to better predict consumer behavior and market trends."
    },
    {
      "id": 59,
      "topic": "Entrepreneurial Culture",
      "difficulty": "Medium",
      "question": "What distinguishes successful family businesses from unsuccessful ones?",
      "options": [
        "Family businesses have no impact on regional economies.",
        "Family businesses are more likely to fail than non-family businesses.",
        "Successful family businesses are committed to growth, continuity, and close interaction between family and business.",
        "Family businesses are less cost-efficient than other firms."
      ],
      "answer": 2,
      "explanation": "The correct answer is: Successful family businesses are committed to growth, continuity, and close interaction between family and business."
    },
    {
      "id": 60,
      "topic": "Entrepreneurial Culture",
      "difficulty": "Medium",
      "question": "Why does the entrepreneurial ability to \"read\" opportunities depend on culture?",
      "options": [
        "Entrepreneurs can predict opportunities based on their personal experiences.",
        "Culture provides entrepreneurs with innate abilities to foresee trends.",
        "Culture gives entrepreneurs a higher sensitivity to what others are looking for, enabling them to identify opportunities.",
        "Entrepreneurial opportunities are determined solely by economic conditions."
      ],
      "answer": 2,
      "explanation": "The correct answer is: Culture gives entrepreneurs a higher sensitivity to what others are looking for, enabling them to identify opportunities."
    },
    {
      "id": 61,
      "topic": "Entrepreneurial Culture",
      "difficulty": "Medium",
      "question": "What does the entrepreneurial ability to \"read\" opportunities mean?",
      "options": [
        "Entrepreneurs can predict the stock market with accuracy.",
        "Entrepreneurs can foresee technological advancements.",
        "Entrepreneurs have a knack for predicting consumer behavior.",
        "Entrepreneurs are sensitive to market demands and can identify overlooked opportunities."
      ],
      "answer": 3,
      "explanation": "The correct answer is: Entrepreneurs are sensitive to market demands and can identify overlooked opportunities."
    },
    {
      "id": 62,
      "topic": "Barriers to Entrepreneurship",
      "difficulty": "Medium",
      "question": "What are some common barriers that limit enterprise across most nations?",
      "options": [
        "Regulatory barriers only.",
        "Cultural and social barriers only.",
        "Financial and economic barriers only.",
        "Regulatory, cultural and social, and financial and economic barriers."
      ],
      "answer": 3,
      "explanation": "The correct answer is: Regulatory, cultural and social, and financial and economic barriers."
    },
    {
      "id": 63,
      "topic": "Barriers to Entrepreneurship",
      "difficulty": "Medium",
      "question": "Which of the following is an example of a regulatory barrier to entrepreneurial activity?",
      "options": [
        "Lack of access to social and business networks.",
        "Limited knowledge of the available institutions.",
        "Fear of failure.",
        "Complex and different procedures for creating various legal forms of enterprises."
      ],
      "answer": 3,
      "explanation": "The correct answer is: Complex and different procedures for creating various legal forms of enterprises."
    },
    {
      "id": 64,
      "topic": "Barriers to Entrepreneurship",
      "difficulty": "Medium",
      "question": "How can employment regulation impact entrepreneurial activity?",
      "options": [
        "It encourages larger firm sizes and more investment in technology.",
        "It enhances management flexibility.",
        "It discourages smaller firm sizes, research and development, and investment in technology.",
        "It has no impact on entrepreneurial activity."
      ],
      "answer": 2,
      "explanation": "The correct answer is: It discourages smaller firm sizes, research and development, and investment in technology."
    },
    {
      "id": 65,
      "topic": "Barriers to Entrepreneurship",
      "difficulty": "Medium",
      "question": "What is one way to address the cultural barrier of fear of failure?",
      "options": [
        "Introducing complex legal procedures.",
        "Promoting entrepreneurial culture and role models to reduce the stigma of failure.",
        "Increasing the legal consequences of failure.",
        "Providing access to financial networks."
      ],
      "answer": 1,
      "explanation": "The correct answer is: Promoting entrepreneurial culture and role models to reduce the stigma of failure."
    },
    {
      "id": 66,
      "topic": "Barriers to Entrepreneurship",
      "difficulty": "Medium",
      "question": "Why do newer and smaller growth firms often face barriers in raising risk capital?",
      "options": [
        "They have access to efficient capital markets.",
        "They lack motivation to grow.",
        "Their business objectives are not well-defined.",
        "They depend on external sources of finance and face market barriers that prevent them from raising sufficient risk capital."
      ],
      "answer": 3,
      "explanation": "The correct answer is: They depend on external sources of finance and face market barriers that prevent them from raising sufficient risk capital."
    },
    {
      "id": 67,
      "topic": "Barriers to Entrepreneurship",
      "difficulty": "Medium",
      "question": "How do regulatory and administrative burdens impact entrepreneurial activity?",
      "options": [
        "They have no impact on entrepreneurial activity.",
        "They enhance entrepreneurial motivation.",
        "They impose adverse effects on entrepreneurial activity.",
        "They lead to improved access to risk capital."
      ],
      "answer": 2,
      "explanation": "The correct answer is: They impose adverse effects on entrepreneurial activity."
    },
    {
      "id": 68,
      "topic": "Barriers to Entrepreneurship",
      "difficulty": "Medium",
      "question": "How can cultural and social barriers impact the creation of enterprises?",
      "options": [
        "They eliminate the need for business networks.",
        "They enhance language skills among entrepreneurs.",
        "They encourage entrepreneurs to take on excessive risk.",
        "They limit the integration of entrepreneurs, hinder access to networks, and lack of information about supporting institutions."
      ],
      "answer": 3,
      "explanation": "The correct answer is: They limit the integration of entrepreneurs, hinder access to networks, and lack of information about supporting institutions."
    },
    {
      "id": 69,
      "topic": "Barriers to Entrepreneurship",
      "difficulty": "Medium",
      "question": "What is the role of promoting an entrepreneurial culture in overcoming barriers to entrepreneurship development?",
      "options": [
        "It increases language barriers.",
        "It reduces the need for risk-taking among entrepreneurs.",
        "It improves motivation, risk-taking appetite, skills, and knowledge needed for enterprise creation.",
        "It increases the fear of failure among entrepreneurs."
      ],
      "answer": 2,
      "explanation": "The correct answer is: It improves motivation, risk-taking appetite, skills, and knowledge needed for enterprise creation."
    },
    {
      "id": 70,
      "topic": "Barriers to Entrepreneurship",
      "difficulty": "Medium",
      "question": "Which of the following is NOT a potential financial and economic barrier to entrepreneurial practice?",
      "options": [
        "Limited access to risk capital.",
        "Lack of access to financial networks.",
        "Efficient capital markets for larger firms.",
        "Dependence on external sources of finance for growth."
      ],
      "answer": 3,
      "explanation": "The correct answer is: Dependence on external sources of finance for growth."
    },
    {
      "id": 71,
      "topic": "Barriers to Entrepreneurship",
      "difficulty": "Medium",
      "question": "How do regulatory and administrative burdens impact entrepreneurial activity?",
      "options": [
        "They have no impact on entrepreneurial activity.",
        "They enhance entrepreneurial motivation.",
        "They impose adverse effects on entrepreneurial activity.",
        "They lead to improved access to risk capital."
      ],
      "answer": 2,
      "explanation": "The correct answer is: They impose adverse effects on entrepreneurial activity."
    },
    {
      "id": 72,
      "topic": "Barriers to Entrepreneurship",
      "difficulty": "Medium",
      "question": "Which type of barrier includes limited access to risk capital, both for seed/early stage and longer-term financing?",
      "options": [
        "Cultural and social barriers.",
        "Economic and financial barriers.",
        "Regulatory barriers.",
        "Language barriers."
      ],
      "answer": 1,
      "explanation": "The correct answer is: Economic and financial barriers."
    },
    {
      "id": 73,
      "topic": "Barriers to Entrepreneurship",
      "difficulty": "Medium",
      "question": "Which of the following is a potential cultural barrier to entrepreneurial practice?",
      "options": [
        "Access to financial networks.",
        "Lack of business networks.",
        "Promoting entrepreneurial culture and role models.",
        "Fear of failure."
      ],
      "answer": 3,
      "explanation": "The correct answer is: Fear of failure."
    },
    {
      "id": 74,
      "topic": "Barriers to Entrepreneurship",
      "difficulty": "Medium",
      "question": "Why might exit barriers discourage entry into entrepreneurship?",
      "options": [
        "Because exit and entry rates are unrelated",
        "Because entry does not involve risk.",
        "Because exit and entry rates are closely related.",
        "Because exit barriers encourage risk-taking."
      ],
      "answer": 2,
      "explanation": "The correct answer is: Because exit and entry rates are closely related."
    },
    {
      "id": 75,
      "topic": "Barriers to Entrepreneurship",
      "difficulty": "Medium",
      "question": "What is the primary focus of regulatory barriers?",
      "options": [
        "Impact on personal skills and knowledge.",
        "Encouraging innovation and creativity.",
        "Ensuring efficient capital markets.",
        "Providing a conducive business environment."
      ],
      "answer": 3,
      "explanation": "The correct answer is: Providing a conducive business environment."
    },
    {
      "id": 76,
      "topic": "Barriers to Entrepreneurship",
      "difficulty": "Medium",
      "question": "How does religion influence entrepreneurship according to Max Weber's perspective?",
      "options": [
        "Religion has no impact on entrepreneurship.",
        "Religion discourages entrepreneurship.",
        "Religion drives entrepreneurship through economic freedom and private enterprise.",
        "Religion is unrelated to the entrepreneurial process."
      ],
      "answer": 2,
      "explanation": "The correct answer is: Religion drives entrepreneurship through economic freedom and private enterprise."
    },
    {
      "id": 77,
      "topic": "Barriers to Entrepreneurship",
      "difficulty": "Medium",
      "question": "What role do networks play in overcoming barriers to entrepreneurial practice?",
      "options": [
        "Networks have no impact on overcoming barriers.",
        "Networks create cultural and social barriers.",
        "Networks provide access to financial capital.",
        "Networks can provide information, communication, and resources, which are important tools for overcoming barriers."
      ],
      "answer": 3,
      "explanation": "The correct answer is: Networks can provide information, communication, and resources, which are important tools for overcoming barriers."
    },
    {
      "id": 78,
      "topic": "Barriers to Entrepreneurship",
      "difficulty": "Medium",
      "question": "Which of the following factors is NOT a barrier faced by startups and smaller growth firms?",
      "options": [
        "Access to external sources of finance.",
        "Market barriers preventing the raising of risk capital.",
        "Efficient capital markets.",
        "Dependence on risk-taking entrepreneurs for growth."
      ],
      "answer": 3,
      "explanation": "The correct answer is: Dependence on risk-taking entrepreneurs for growth."
    },
    {
      "id": 79,
      "topic": "Barriers to Entrepreneurship",
      "difficulty": "Medium",
      "question": "Why is creating an entrepreneurial culture important for overcoming barriers?",
      "options": [
        "It eliminates the need for access to networks.",
        "It reduces the complexity of legal procedures.",
        "It increases the risk of failure for entrepreneurs.",
        "It improves motivation, skills, knowledge, and risk-taking appetite, factors that can inhibit the creation of enterprises."
      ],
      "answer": 3,
      "explanation": "The correct answer is: It improves motivation, skills, knowledge, and risk-taking appetite, factors that can inhibit the creation of enterprises."
    },
    {
      "id": 80,
      "topic": "Role of Entrepreneurship in the Economy",
      "difficulty": "Medium",
      "question": "Which of the options is one of the primary benefits of entrepreneurs creating new businesses?",
      "options": [
        "Decreasing competition among existing businesses.",
        "Centralizing economic power within large corporations.",
        "Generating jobs for themselves and their employees.",
        "Reducing productivity through operational changes."
      ],
      "answer": 2,
      "explanation": "The correct answer is: Generating jobs for themselves and their employees."
    },
    {
      "id": 81,
      "topic": "Role of Entrepreneurship in the Economy",
      "difficulty": "Medium",
      "question": "What is a key role of entrepreneurs in the economy and society?",
      "options": [
        "Generating income solely for themselves.",
        "Focusing on large-scale production.",
        "Providing security to others in the society.",
        "Broadening the base of participation in society and creating jobs."
      ],
      "answer": 3,
      "explanation": "The correct answer is: Broadening the base of participation in society and creating jobs."
    },
    {
      "id": 82,
      "topic": "Role of Entrepreneurship in the Economy",
      "difficulty": "Medium",
      "question": "How does entrepreneurship contribute to economic growth?",
      "options": [
        "By restricting innovation to large corporations.",
        "By focusing solely on generating income.",
        "By increasing competition among businesses.",
        "By introducing innovations and opening new markets."
      ],
      "answer": 3,
      "explanation": "The correct answer is: By introducing innovations and opening new markets."
    },
    {
      "id": 83,
      "topic": "Role of Entrepreneurship in the Economy",
      "difficulty": "Medium",
      "question": "Which term describes the central ingredient in economic growth driven by entrepreneurs?",
      "options": [
        "Expansion.",
        "Stability.",
        "Innovation.",
        "Standardization."
      ],
      "answer": 2,
      "explanation": "The correct answer is: Innovation."
    },
    {
      "id": 84,
      "topic": "Role of Entrepreneurship in the Economy",
      "difficulty": "Medium",
      "question": "What is the significance of entrepreneurs in the commercial introduction of new products and services?",
      "options": [
        "They tend to copy existing products and services.",
        "They rarely have an impact on new markets.",
        "They play a minor role in changing consumer behavior.",
        "They are responsible for the commercial introduction of many new products and services."
      ],
      "answer": 3,
      "explanation": "The correct answer is: They are responsible for the commercial introduction of many new products and services."
    },
    {
      "id": 85,
      "topic": "Role of Entrepreneurship in the Economy",
      "difficulty": "Medium",
      "question": "How do innovations provided by entrepreneurs improve the quality of life for consumers?",
      "options": [
        "By limiting consumer choices.",
        "By making life more complicate",
        "By offering only essential goods and services.",
        "By enriching people's lives in numerous ways, such as improving communication and providing new forms of entertainment."
      ],
      "answer": 3,
      "explanation": "The correct answer is: By enriching people's lives in numerous ways, such as improving communication and providing new forms of entertainment."
    },
    {
      "id": 86,
      "topic": "Role of Entrepreneurship in the Economy",
      "difficulty": "Medium",
      "question": "What does the Global Entrepreneurship Monitor (GEM) project emphasize about entrepreneurial behavior?",
      "options": [
        "It has no impact on innovation and growth.",
        "It is unrelated to unexploited opportunities.",
        "It hinders the development of the economy.",
        "It is a crucial engine of innovation and growth, implying attention and willingness to take advantage of unexploited opportunities."
      ],
      "answer": 3,
      "explanation": "The correct answer is: It is a crucial engine of innovation and growth, implying attention and willingness to take advantage of unexploited opportunities."
    },
    {
      "id": 87,
      "topic": "Role of Entrepreneurship in the Economy",
      "difficulty": "Medium",
      "question": "What role can entrepreneurs play in the developing world?",
      "options": [
        "They primarily contribute to large corporations.",
        "They play a minimal role in job creation.",
        "They are not relevant to poverty reduction.",
        "They are primary engines of job creation and poverty reduction."
      ],
      "answer": 3,
      "explanation": "The correct answer is: They are primary engines of job creation and poverty reduction."
    },
    {
      "id": 88,
      "topic": "Role of Entrepreneurship in the Economy",
      "difficulty": "Medium",
      "question": "Why might governments wish to encourage entrepreneurship through policies?",
      "options": [
        "To limit innovation and growth in the economy.",
        "To centralize economic power within large corporations.",
        "To decrease job opportunities for individuals.",
        "To promote economic growth, job creation, and poverty reduction."
      ],
      "answer": 3,
      "explanation": "The correct answer is: To promote economic growth, job creation, and poverty reduction."
    },
    {
      "id": 89,
      "topic": "Role of Entrepreneurship in the Economy",
      "difficulty": "Medium",
      "question": "What is a key characteristic of entrepreneurship that contributes to economic growth?",
      "options": [
        "Resistance to change.",
        "Adaptation to the status quo.",
        "Aversion to innovation.",
        "Embrace of change and willingness to exploit it as an opportunity."
      ],
      "answer": 3,
      "explanation": "The correct answer is: Embrace of change and willingness to exploit it as an opportunity."
    },
    {
      "id": 90,
      "topic": "Role of Entrepreneurship in the Economy",
      "difficulty": "Medium",
      "question": "How do entrepreneurs contribute to expanding consumer choices?",
      "options": [
        "By limiting the availability of products and services.",
        "By focusing on standardized offerings.",
        "By providing goods and services for needs consumers didn't realize they had.",
        "By encouraging consumers to choose only essential products."
      ],
      "answer": 2,
      "explanation": "The correct answer is: By providing goods and services for needs consumers didn't realize they had."
    },
    {
      "id": 91,
      "topic": "Role of Entrepreneurship in the Economy",
      "difficulty": "Medium",
      "question": "What is the role of small businesses in the economy?",
      "options": [
        "They tend to centralize economic power.",
        "They have minimal impact on job creation.",
        "They are engines of job creation and decentralize economic power.",
        "They primarily offer standardized products and services."
      ],
      "answer": 2,
      "explanation": "The correct answer is: They are engines of job creation and decentralize economic power."
    },
    {
      "id": 92,
      "topic": "Role of Entrepreneurship in the Economy",
      "difficulty": "Medium",
      "question": "What impact can successful small businesses have on the developing world?",
      "options": [
        "They may not contribute significantly to job creation.",
        "They tend to hinder economic growth.",
        "They are key drivers of job creation and poverty reduction.",
        "They primarily focus on generating income for themselves."
      ],
      "answer": 2,
      "explanation": "The correct answer is: They are key drivers of job creation and poverty reduction."
    },
    {
      "id": 93,
      "topic": "Role of Entrepreneurship in the Economy",
      "difficulty": "Medium",
      "question": "What is the significance of the Global Entrepreneurship Monitor (GEM) project?",
      "options": [
        "It focuses on discouraging entrepreneurial behavior.",
        "It is a study limited to one country.",
        "It highlights the negative impact of entrepreneurs on growth.",
        "It emphasizes that entrepreneurial behavior is a crucial engine of innovation and growth."
      ],
      "answer": 3,
      "explanation": "The correct answer is: It emphasizes that entrepreneurial behavior is a crucial engine of innovation and growth."
    },
    {
      "id": 94,
      "topic": "Role of Entrepreneurship in the Economy",
      "difficulty": "Medium",
      "question": "How do entrepreneurs contribute to technological advancements?",
      "options": [
        "They tend to slow down technological progress.",
        "They have no influence on technological changes.",
        "They often introduce innovations that revolutionize how people live and work.",
        "They mainly focus on imitation rather than innovation."
      ],
      "answer": 2,
      "explanation": "The correct answer is: They often introduce innovations that revolutionize how people live and work."
    },
    {
      "id": 95,
      "topic": "Role of Entrepreneurship in the Economy",
      "difficulty": "Medium",
      "question": "What are entrepreneurs responsible for in terms of new products and services?",
      "options": [
        "They have no role in introducing new products.",
        "They copy existing products without innovation.",
        "They commercialize and introduce many new products and services.",
        "They primarily focus on disrupting existing markets."
      ],
      "answer": 2,
      "explanation": "The correct answer is: They commercialize and introduce many new products and services."
    },
    {
      "id": 96,
      "topic": "Business Environment & Opportunities",
      "difficulty": "Medium",
      "question": "What term refers to the factors that affect a business from outside its walls?",
      "options": [
        "Internal factors.",
        "Competitive factors.",
        "External factors or influences.",
        "Business dynamics."
      ],
      "answer": 2,
      "explanation": "The correct answer is: External factors or influences."
    },
    {
      "id": 97,
      "topic": "Business Environment & Opportunities",
      "difficulty": "Medium",
      "question": "Which factor often affects a business the most by determining how other businesses compete with its products?",
      "options": [
        "Legal factors.",
        "Social factors.",
        "Economic factors.",
        "Degree of competition."
      ],
      "answer": 3,
      "explanation": "The correct answer is: Degree of competition."
    },
    {
      "id": 98,
      "topic": "Business Environment & Opportunities",
      "difficulty": "Medium",
      "question": "How might changes in government policy impact a business?",
      "options": [
        "They have no impact on business operations.",
        "They lead to increased competition.",
        "They can affect business operations through political factors.",
        "They influence technological advancements."
      ],
      "answer": 2,
      "explanation": "The correct answer is: They can affect business operations through political factors."
    },
    {
      "id": 99,
      "topic": "Business Environment & Opportunities",
      "difficulty": "Medium",
      "question": "Which factor refers to the rapid pace of change in production processes and product innovation?",
      "options": [
        "Economic factors.",
        "Political factors.",
        "Technological factors.",
        "Ethical factors."
      ],
      "answer": 2,
      "explanation": "The correct answer is: Technological factors."
    },
    {
      "id": 100,
      "topic": "Business Environment & Opportunities",
      "difficulty": "Medium",
      "question": "Why could markets change rapidly?",
      "options": [
        "Due to constant demand",
        "Due to rigid competition.",
        "Due to government subsidies.",
        "Due to new needs and wants, new competitors, technological advancements, or global events."
      ],
      "answer": 3,
      "explanation": "The correct answer is: Due to new needs and wants, new competitors, technological advancements, or global events."
    },
    {
      "id": 101,
      "topic": "Business Environment & Opportunities",
      "difficulty": "Medium",
      "question": "How might a business react to increased competition?",
      "options": [
        "Increase costs to improve quality.",
        "Cut costs by reducing product quality.",
        "Spend more on promotion and advertising.",
        "All of the options."
      ],
      "answer": 3,
      "explanation": "The correct answer is: All of the options."
    },
    {
      "id": 102,
      "topic": "Business Environment & Opportunities",
      "difficulty": "Medium",
      "question": "What do businesses need to consider in terms of social responsibility?",
      "options": [
        "Government regulations.",
        "Customer feedback.",
        "The impact of their actions on different parts of society they interact with.",
        "Financial profits only."
      ],
      "answer": 2,
      "explanation": "The correct answer is: The impact of their actions on different parts of society they interact with."
    },
    {
      "id": 103,
      "topic": "Business Environment & Opportunities",
      "difficulty": "Medium",
      "question": "What are the extra benefits and costs that a business action can lead to called?",
      "options": [
        "Private benefits and costs.",
        "Externalities - external costs and benefits.",
        "Social benefits and social costs.",
        "Economic incentives and penalties."
      ],
      "answer": 1,
      "explanation": "The correct answer is: Externalities - external costs and benefits."
    },
    {
      "id": 104,
      "topic": "Business Environment & Opportunities",
      "difficulty": "Medium",
      "question": "What is the term for the main factor that affects how fiercely other businesses compete with the products a business makes?",
      "options": [
        "Economic factors.",
        "Competitive factors.",
        "Political factors.",
        "Technological factors."
      ],
      "answer": 1,
      "explanation": "The correct answer is: Competitive factors."
    },
    {
      "id": 105,
      "topic": "Business Environment & Opportunities",
      "difficulty": "Medium",
      "question": "How might a business respond to the entrance of new competitors in a market?",
      "options": [
        "Reduce prices to attract more customers.",
        "Improve product quality to stand out.",
        "Increase advertising and brand loyalty efforts.",
        "All of the options."
      ],
      "answer": 3,
      "explanation": "The correct answer is: All of the options."
    },
    {
      "id": 106,
      "topic": "Business Environment & Opportunities",
      "difficulty": "Medium",
      "question": "What do economists and experts agree about the role of entrepreneurship in an economy?",
      "options": [
        "It has no impact on economic vitality.",
        "It is only relevant in developed economies.",
        "It is essential for the vitality of any economy, whether developed or developing.",
        "It is primarily important for large corporations."
      ],
      "answer": 2,
      "explanation": "The correct answer is: It is essential for the vitality of any economy, whether developed or developing."
    },
    {
      "id": 107,
      "topic": "Business Environment & Opportunities",
      "difficulty": "Medium",
      "question": "Which type of market tends to have close rivalry among many small rival businesses?",
      "options": [
        "A market with few large rival firms.",
        "A market with rapidly changing technology.",
        "A market with a few competitors.",
        "A market with many small rival businesses."
      ],
      "answer": 3,
      "explanation": "The correct answer is: A market with many small rival businesses."
    },
    {
      "id": 108,
      "topic": "Business Environment & Opportunities",
      "difficulty": "Medium",
      "question": "What is the term for the extra benefits and costs of a business action that go beyond direct benefits to the business and its customers?",
      "options": [
        "Externalities - external costs and benefits.",
        "Social benefits and social costs.",
        "Private benefits and costs.",
        "Ethical benefits and costs."
      ],
      "answer": 1,
      "explanation": "The correct answer is: Social benefits and social costs."
    },
    {
      "id": 109,
      "topic": "Business Environment & Opportunities",
      "difficulty": "Medium",
      "question": "What is the main reason markets change rapidly?",
      "options": [
        "Government policies.",
        "New technologies.",
        "Stagnation in the economy.",
        "Changes in customer needs, new competitors, technological advancements, or global events."
      ],
      "answer": 3,
      "explanation": "The correct answer is: Changes in customer needs, new competitors, technological advancements, or global events."
    },
    {
      "id": 110,
      "topic": "Business Environment & Opportunities",
      "difficulty": "Medium",
      "question": "What role does innovation play in entrepreneurship and economic growth?",
      "options": [
        "It has no impact on growth.",
        "It is important for small businesses only.",
        "Innovation is central to economic growth and is a core aspect of entrepreneurship.",
        "Innovation is primarily important for large corporations."
      ],
      "answer": 2,
      "explanation": "The correct answer is: Innovation is central to economic growth and is a core aspect of entrepreneurship."
    },
    {
      "id": 111,
      "topic": "Business Environment & Opportunities",
      "difficulty": "Medium",
      "question": "What factor involves how consumers, households, and communities behave and their beliefs?",
      "options": [
        "Legal factors.",
        "Economic factors.",
        "Political factors.",
        "Social factors."
      ],
      "answer": 3,
      "explanation": "The correct answer is: Social factors."
    },
    {
      "id": 112,
      "topic": "Business Environment & Opportunities",
      "difficulty": "Medium",
      "question": "How might a business respond to an increase in competition, such as the launch of a rival product?",
      "options": [
        "Increase prices to maximize profits.",
        "Lower product quality to reduce costs.",
        "Spend less on promotion and advertising.",
        "Cut costs, improve quality, and increase promotion efforts."
      ],
      "answer": 3,
      "explanation": "The correct answer is: Cut costs, improve quality, and increase promotion efforts."
    },
    {
      "id": 113,
      "topic": "Business Environment & Opportunities",
      "difficulty": "Medium",
      "question": "What is one of the first factors to consider when assessing the potential of a business opportunity?",
      "options": [
        "The profitability of the opportunity.",
        "The level of competition in the market.",
        "The stability of the company associated with the opportunity.",
        "The size of the niche market."
      ],
      "answer": 2,
      "explanation": "The correct answer is: The stability of the company associated with the opportunity."
    },
    {
      "id": 114,
      "topic": "Business Environment & Opportunities",
      "difficulty": "Medium",
      "question": "What makes business opportunities that target niche markets appealing?",
      "options": [
        "They have the potential for high profits.",
        "They involve well-established companies.",
        "They offer products with a broad appeal.",
        "They address needs often overlooked by others."
      ],
      "answer": 3,
      "explanation": "The correct answer is: They address needs often overlooked by others."
    },
    {
      "id": 115,
      "topic": "Business Environment & Opportunities",
      "difficulty": "Medium",
      "question": "What is a key factor in evaluating business opportunities?",
      "options": [
        "The level of competition in the market.",
        "The financial base of the company.",
        "The location of the company.",
        "The comprehensive system for getting products to consumers, including production, sales, marketing, and delivery."
      ],
      "answer": 3,
      "explanation": "The correct answer is: The comprehensive system for getting products to consumers, including production, sales, marketing, and delivery."
    },
    {
      "id": 116,
      "topic": "Business Environment & Opportunities",
      "difficulty": "Medium",
      "question": "Why is the ability to satisfy orders quickly and efficiently important for a business opportunity?",
      "options": [
        "It allows the company to focus on niche markets.",
        "It ensures the product's broad appeal.",
        "It helps the company build a loyal client base.",
        "It reduces the need for sales and marketing strategies."
      ],
      "answer": 2,
      "explanation": "The correct answer is: It helps the company build a loyal client base."
    },
    {
      "id": 117,
      "topic": "Business Environment & Opportunities",
      "difficulty": "Medium",
      "question": "When considering different business opportunities, what is an important aspect to assess in terms of the return you will receive?",
      "options": [
        "The company's financial stability.",
        "The popularity of the product.",
        "The size of the niche market.",
        "Whether you will earn an equitable return in comparison to what you invest in terms of time and resources."
      ],
      "answer": 3,
      "explanation": "The correct answer is: Whether you will earn an equitable return in comparison to what you invest in terms of time and resources."
    },
    {
      "id": 118,
      "topic": "Business Environment & Opportunities",
      "difficulty": "Medium",
      "question": "Why is it worth considering home-based business opportunities in today's market?",
      "options": [
        "They require less investment of time and resources.",
        "They have a proven track record of success.",
        "They offer traditional business settings.",
        "They often start with fresh business ideas and approaches."
      ],
      "answer": 3,
      "explanation": "The correct answer is: They often start with fresh business ideas and approaches."
    },
    {
      "id": 119,
      "topic": "Business Environment & Opportunities",
      "difficulty": "Medium",
      "question": "What should be your approach if you see merit in a given business idea and believe it has a good chance of succeeding?",
      "options": [
        "Discard the idea and seek alternatives.",
        "Wait for the competition to implement the idea",
        "Look it over carefully and consider it as an investment opportunity.",
        "Focus solely on traditional business settings."
      ],
      "answer": 2,
      "explanation": "The correct answer is: Look it over carefully and consider it as an investment opportunity."
    },
    {
      "id": 120,
      "topic": "Business Environment & Opportunities",
      "difficulty": "Medium",
      "question": "What is the term used to describe the external factors that influence a business and can affect its operations and objectives?",
      "options": [
        "Internal influences",
        "Operational conditions",
        "Competitive factors",
        "External factors or influences"
      ],
      "answer": 3,
      "explanation": "The correct answer is: External factors or influences"
    },
    {
      "id": 121,
      "topic": "Business Environment & Opportunities",
      "difficulty": "Medium",
      "question": "Which of the following is an example of a political factor that can influence a business?",
      "options": [
        "Changes in customers'preferences",
        "Fluctuations in exchange rates",
        "Advances in technology",
        "Government policy changes"
      ],
      "answer": 3,
      "explanation": "The correct answer is: Government policy changes"
    },
    {
      "id": 122,
      "topic": "Business Environment & Opportunities",
      "difficulty": "Medium",
      "question": "Why is it important for a business to assess the stability of a company associated with a new business opportunity?",
      "options": [
        "To ensure the company is a well-established competitor.",
        "To identify potential market threats.",
        "To guarantee an equitable return on investment.",
        "To have some assurance that the company will be around long enough to benefit from the opportunity and recoup investments."
      ],
      "answer": 3,
      "explanation": "The correct answer is: To have some assurance that the company will be around long enough to benefit from the opportunity and recoup investments."
    },
    {
      "id": 123,
      "topic": "Business Environment & Opportunities",
      "difficulty": "Medium",
      "question": "What type of market is likely to have less fierce competition and allow a company to establish itself as the industry standard?",
      "options": [
        "A market with a few large rival firms.",
        "A rapidly changing market.",
        "A market with many small rival businesses.",
        "A niche market"
      ],
      "answer": 3,
      "explanation": "The correct answer is: A niche market"
    },
    {
      "id": 124,
      "topic": "Business Environment & Opportunities",
      "difficulty": "Medium",
      "question": "What are externalities in the context of business opportunities?",
      "options": [
        "Business practices that directly affect customers.",
        "Factors that primarily affect the internal operations of a business.",
        "Extra costs and benefits that are above and beyond the direct costs and benefits of the business, often imposed on society.",
        "Profits generated by a business opportunity."
      ],
      "answer": 2,
      "explanation": "The correct answer is: Extra costs and benefits that are above and beyond the direct costs and benefits of the business, often imposed on society."
    },
    {
      "id": 125,
      "topic": "Business Environment & Opportunities",
      "difficulty": "Medium",
      "question": "What is one of the key factors to consider when assessing the potential of a home-based business opportunity?",
      "options": [
        "The size of the investment requires",
        "The number of competitors in the market.",
        "The number of products offered by the business.",
        "The freshness and novelty of the business idea."
      ],
      "answer": 3,
      "explanation": "The correct answer is: The freshness and novelty of the business idea."
    },
    {
      "id": 126,
      "topic": "Business Environment & Opportunities",
      "difficulty": "Medium",
      "question": "What is the main goal when assessing a business opportunity's potential return in comparison to the investment?",
      "options": [
        "To earn a return regardless of the investment.",
        "To ensure the highest possible return on investment.",
        "To achieve a return that is equitable and justifiable in relation to the time and resources invested.",
        "To maximize the investment with minimal effort."
      ],
      "answer": 2,
      "explanation": "The correct answer is: To achieve a return that is equitable and justifiable in relation to the time and resources invested."
    },
    {
      "id": 127,
      "topic": "Intellectual Property",
      "difficulty": "Medium",
      "question": "What is intellectual property in the context of entrepreneurship?",
      "options": [
        "Tangible assets owned by an entrepreneur.",
        "Valuable financial investments.",
        "Creative works protected by copyrights.",
        "Certain intellectual creations with commercial value and legal property rights."
      ],
      "answer": 3,
      "explanation": "The correct answer is: Certain intellectual creations with commercial value and legal property rights."
    },
    {
      "id": 128,
      "topic": "Intellectual Property",
      "difficulty": "Medium",
      "question": "What is the purpose of intellectual property law in relation to innovation?",
      "options": [
        "To encourage competition among creators.",
        "To prevent the copying of ideas by competitors.",
        "To limit the time period for profiting from new ideas.",
        "To regulate the pricing of intellectual property."
      ],
      "answer": 3,
      "explanation": "The correct answer is: To regulate the pricing of intellectual property."
    },
    {
      "id": 129,
      "topic": "Intellectual Property",
      "difficulty": "Medium",
      "question": "What is the main reason for an entrepreneur to protect intellectual property?",
      "options": [
        "To eliminate competition from the market.",
        "To recover development costs for new ideas.",
        "To prevent others from using similar trademarks.",
        "To discourage innovation and creativity."
      ],
      "answer": 3,
      "explanation": "The correct answer is: To discourage innovation and creativity."
    },
    {
      "id": 130,
      "topic": "Intellectual Property",
      "difficulty": "Medium",
      "question": "Which form of intellectual property grants an inventor the exclusive right to make, use, and sell an invention for a fixed period?",
      "options": [
        "Copyright",
        "Trade secret",
        "Patent",
        "Trademark"
      ],
      "answer": 2,
      "explanation": "The correct answer is: Patent"
    },
    {
      "id": 131,
      "topic": "Intellectual Property",
      "difficulty": "Medium",
      "question": "What is the purpose of a copyright?",
      "options": [
        "To protect the idea behind a creative work.",
        "To prevent competitors from selling similar products.",
        "To protect the form in which an original work appears.",
        "To restrict access to copyrighted materials."
      ],
      "answer": 2,
      "explanation": "The correct answer is: To protect the form in which an original work appears."
    },
    {
      "id": 132,
      "topic": "Intellectual Property",
      "difficulty": "Medium",
      "question": "Which form of intellectual property consists of knowledge kept secret for a business advantage?",
      "options": [
        "Copyright",
        "Patent",
        "Trade secret",
        "Trademark"
      ],
      "answer": 2,
      "explanation": "The correct answer is: Trade secret"
    },
    {
      "id": 133,
      "topic": "Intellectual Property",
      "difficulty": "Medium",
      "question": "What is the main requirement for a trade secret to be valid?",
      "options": [
        "It must be registered with intellectual property authorities.",
        "It must be disclosed to competitors for protection.",
        "It must be protected through contracts and non-disclosure agreements.",
        "It must be widely known and available to the public"
      ],
      "answer": 2,
      "explanation": "The correct answer is: It must be protected through contracts and non-disclosure agreements."
    },
    {
      "id": 134,
      "topic": "Intellectual Property",
      "difficulty": "Medium",
      "question": "What is the primary function of a trademark?",
      "options": [
        "To indicate the source of goods and distinguish them from others.",
        "To protect creative works of authors and composers.",
        "To grant the exclusive right to reproduce a product.",
        "To prevent competitors from using any similar words."
      ],
      "answer": 0,
      "explanation": "The correct answer is: To indicate the source of goods and distinguish them from others."
    },
    {
      "id": 135,
      "topic": "Intellectual Property",
      "difficulty": "Medium",
      "question": "What is a significant characteristic of trademarks compared to copyrights or patents?",
      "options": [
        "Trademarks provide protection for a fixed period of time.",
        "Trademarks can be enforced without registration.",
        "Trademarks cannot be renewed after expiration.",
        "Trademarks can be renewed endlessly."
      ],
      "answer": 3,
      "explanation": "The correct answer is: Trademarks can be renewed endlessly."
    },
    {
      "id": 136,
      "topic": "Intellectual Property",
      "difficulty": "Medium",
      "question": "Which intellectual property form is exemplified by the use of the symbol (®) to indicate registration?",
      "options": [
        "Copyright",
        "Trade secret",
        "Patent",
        "Trademark"
      ],
      "answer": 3,
      "explanation": "The correct answer is: Trademark"
    },
    {
      "id": 137,
      "topic": "Intellectual Property",
      "difficulty": "Medium",
      "question": "What type of intellectual property protects a symbol, word, or design used to indicate the source of goods?",
      "options": [
        "Copyright",
        "Patent",
        "Trade secret",
        "Trademark"
      ],
      "answer": 3,
      "explanation": "The correct answer is: Trademark"
    },
    {
      "id": 138,
      "topic": "Intellectual Property",
      "difficulty": "Medium",
      "question": "What is the duration of patent protection in most countries?",
      "options": [
        "Up to 5 years",
        "Up to 10 years",
        "Up to 15 years",
        "Up to 20 years"
      ],
      "answer": 3,
      "explanation": "The correct answer is: Up to 20 years"
    },
    {
      "id": 139,
      "topic": "Intellectual Property",
      "difficulty": "Medium",
      "question": "What is the primary goal of protecting intellectual property rights?",
      "options": [
        "To stifle competition among businesses",
        "To encourage copying of innovative ideas",
        "To provide creators with time to profit from new ideas and recover development costs",
        "To limit the scope of intellectual property laws"
      ],
      "answer": 2,
      "explanation": "The correct answer is: To provide creators with time to profit from new ideas and recover development costs"
    },
    {
      "id": 140,
      "topic": "Intellectual Property",
      "difficulty": "Medium",
      "question": "Which form of intellectual property protection is especially valuable for preserving unique manufacturing processes and business plans?",
      "options": [
        "Copyright",
        "Patent",
        "Trade secret",
        "Trademark"
      ],
      "answer": 2,
      "explanation": "The correct answer is: Trade secret"
    },
    {
      "id": 141,
      "topic": "Intellectual Property",
      "difficulty": "Medium",
      "question": "Why might a business choose to license or sell its intellectual property?",
      "options": [
        "To eliminate competition",
        "To share profits with competitors",
        "To generate additional revenue",
        "To protect ideas from imitation"
      ],
      "answer": 2,
      "explanation": "The correct answer is: To generate additional revenue"
    },
    {
      "id": 142,
      "topic": "Intellectual Property",
      "difficulty": "Medium",
      "question": "What type of intellectual property protects original creative works of authors and composers?",
      "options": [
        "Copyright",
        "Patent",
        "Trade secret",
        "Trademark"
      ],
      "answer": 0,
      "explanation": "The correct answer is: Copyright"
    },
    {
      "id": 143,
      "topic": "Intellectual Property",
      "difficulty": "Medium",
      "question": "What does a trademark signify?",
      "options": [
        "A unique manufacturing processes",
        "Exclusive ownership of an idea",
        "The source of goods and their distinction from others",
        "The registration of a new company"
      ],
      "answer": 2,
      "explanation": "The correct answer is: The source of goods and their distinction from others"
    },
    {
      "id": 144,
      "topic": "Intellectual Property",
      "difficulty": "Medium",
      "question": "What does a trade secret protect?",
      "options": [
        "The idea behind a product",
        "The form in which a creative work appears",
        "A unique manufacturing processes",
        "Knowledge kept secret for business advantage"
      ],
      "answer": 3,
      "explanation": "The correct answer is: Knowledge kept secret for business advantage"
    },
    {
      "id": 145,
      "topic": "Intellectual Property",
      "difficulty": "Medium",
      "question": "What is the primary difference between patents and trade secrets?",
      "options": [
        "Patents are disclosed to the public, while trade secrets are not.",
        "Patents are only used in technology-based industries.",
        "Patents protect creative works, while trade secrets protect product designs.",
        "Patents grant exclusive rights for a fixed period, while trade secrets rely on confidentiality."
      ],
      "answer": 3,
      "explanation": "The correct answer is: Patents grant exclusive rights for a fixed period, while trade secrets rely on confidentiality."
    },
    {
      "id": 146,
      "topic": "Intellectual Property",
      "difficulty": "Medium",
      "question": "What type of intellectual property focuses on the exclusive right to reproduce creative works and prepare derivative versions?",
      "options": [
        "Copyright",
        "Patent",
        "Trade secret",
        "Trademark"
      ],
      "answer": 0,
      "explanation": "The correct answer is: Copyright"
    },
    {
      "id": 147,
      "topic": "Intellectual Property",
      "difficulty": "Medium",
      "question": "What is the primary purpose of copyright protection?",
      "options": [
        "To prevent the creation of new works",
        "To encourage imitation of creative works",
        "To give creators the sole right to publish and sell their work",
        "To promote the use of copyrighted materials by others"
      ],
      "answer": 2,
      "explanation": "The correct answer is: To give creators the sole right to publish and sell their work"
    },
    {
      "id": 148,
      "topic": "Intellectual Property",
      "difficulty": "Medium",
      "question": "Which type of intellectual property protection gives inventors exclusive rights over the use of their inventions?",
      "options": [
        "Copyright",
        "Patent",
        "Trade secret",
        "Trademark"
      ],
      "answer": 1,
      "explanation": "The correct answer is: Patent"
    },
    {
      "id": 149,
      "topic": "Intellectual Property",
      "difficulty": "Medium",
      "question": "What is the legal term for the violation of copyright?",
      "options": [
        "Infringement",
        "Plagiarism",
        "Counterfeiting",
        "Dissemination"
      ],
      "answer": 0,
      "explanation": "The correct answer is: Infringement"
    },
    {
      "id": 150,
      "topic": "Intellectual Property",
      "difficulty": "Medium",
      "question": "What is the key distinction between patents and copyrights?",
      "options": [
        "Patents protect the expression of an idea, while copyrights protect the application of an idea",
        "Patents protect original creative works, while copyrights protect inventions.",
        "Patents are renewable, while copyrights expire.",
        "Patents protect the application of an idea, while copyrights protect the expression of an idea"
      ],
      "answer": 3,
      "explanation": "The correct answer is: Patents protect the application of an idea, while copyrights protect the expression of an idea"
    },
    {
      "id": 151,
      "topic": "Intellectual Property",
      "difficulty": "Medium",
      "question": "Which international organization is Nigeria a member of in relation to intellectual property?",
      "options": [
        "World Health Organization",
        "International Monetary Fund",
        "World Trade Organization",
        "United Nations Educational, Scientific and Cultural Organization"
      ],
      "answer": 2,
      "explanation": "The correct answer is: World Trade Organization"
    },
    {
      "id": 152,
      "topic": "Intellectual Property",
      "difficulty": "Medium",
      "question": "What form of intellectual property covers the protection of original creative works such as books, musical compositions, and architecture?",
      "options": [
        "Patent",
        "Trademark",
        "Trade secret",
        "Copyright"
      ],
      "answer": 3,
      "explanation": "The correct answer is: Copyright"
    },
    {
      "id": 153,
      "topic": "Intellectual Property",
      "difficulty": "Medium",
      "question": "What is the purpose of the Nigerian Copyright Commission?",
      "options": [
        "To create new copyright laws",
        "To enforce patent rights",
        "To launch advertising campaigns for copyrighted works",
        "To take its mandate seriously and enforce copyright laws"
      ],
      "answer": 3,
      "explanation": "The correct answer is: To take its mandate seriously and enforce copyright laws"
    },
    {
      "id": 154,
      "topic": "Intellectual Property",
      "difficulty": "Medium",
      "question": "What factor may militate against effective copyright protection in Nigeria, according to Professor Uche Ewelukwa Ofodile?",
      "options": [
        "High levels of public consultation during law adoption",
        "Lack of popular support for copyright laws",
        "Extensive economic assessment of the costs and benefits of protection",
        "Overemphasis on protecting the public domain over private rights"
      ],
      "answer": 1,
      "explanation": "The correct answer is: Lack of popular support for copyright laws"
    },
    {
      "id": 155,
      "topic": "Intellectual Property",
      "difficulty": "Medium",
      "question": "What does the Paris Convention for the Protection of Industrial Property focus on?",
      "options": [
        "Copyright protection",
        "Trademark protection",
        "Industrial design protection",
        "Protection of intellectual property rights"
      ],
      "answer": 3,
      "explanation": "The correct answer is: Protection of intellectual property rights"
    },
    {
      "id": 156,
      "topic": "Intellectual Property",
      "difficulty": "Medium",
      "question": "Which of the following is NOT a main form of intellectual property rights?",
      "options": [
        "Copyright",
        "Patent",
        "Trade freedom",
        "Trademark"
      ],
      "answer": 3,
      "explanation": "The correct answer is: Trademark"
    },
    {
      "id": 157,
      "topic": "Intellectual Property",
      "difficulty": "Medium",
      "question": "What does the term \"infringement\" refer to in the context of copyright?",
      "options": [
        "A legal device for protecting intellectual property",
        "The process of obtaining a copyright",
        "Violation of copyright protection rights",
        "The process of registering a patent"
      ],
      "answer": 2,
      "explanation": "The correct answer is: Violation of copyright protection rights"
    },
    {
      "id": 158,
      "topic": "Intellectual Property",
      "difficulty": "Medium",
      "question": "What distinguishes copyright from patents and trademarks?",
      "options": [
        "Copyright protects the expression of an idea, while patents protect original creative works.",
        "Copyright is used to prevent competitors from benefiting from an individual's or firm's ideas.",
        "Copyright protects tangible products, while patents protect intangible concepts.",
        "Copyright protects the form in which an idea appears, while patents protect the application of an idea"
      ],
      "answer": 3,
      "explanation": "The correct answer is: Copyright protects the form in which an idea appears, while patents protect the application of an idea"
    },
    {
      "id": 159,
      "topic": "Intellectual Property",
      "difficulty": "Medium",
      "question": "What is the role of intellectual property lawyers in relation to copyright?",
      "options": [
        "Creating original works for clients",
        "Selling and licensing intellectual property rights",
        "Advising on the protection and enforcement of intellectual property rights",
        "Auditing and monitoring copyright legislation"
      ],
      "answer": 2,
      "explanation": "The correct answer is: Advising on the protection and enforcement of intellectual property rights"
    },
    {
      "id": 160,
      "topic": "Intellectual Property",
      "difficulty": "Medium",
      "question": "Which factor is identified by Professor Uche Ewelukwa Ofodile as contributing to the lack of effective copyright protection in Nigeria?",
      "options": [
        "Extensive public awareness campaigns",
        "Inclusion of intellectual property courses in law school curricula",
        "Efficient customs enforcement",
        "Corruption and weak customs enforcement"
      ],
      "answer": 3,
      "explanation": "The correct answer is: Corruption and weak customs enforcement"
    },
    {
      "id": 161,
      "topic": "Intellectual Property",
      "difficulty": "Medium",
      "question": "What type of intellectual property protection is granted to an inventor for a fixed period, usually up to 20 years?",
      "options": [
        "Copyright",
        "Trade secret",
        "Patent",
        "Trademark"
      ],
      "answer": 2,
      "explanation": "The correct answer is: Patent"
    },
    {
      "id": 162,
      "topic": "Intellectual Property",
      "difficulty": "Medium",
      "question": "What is the primary purpose of intellectual property law?",
      "options": [
        "To restrict access to creative works",
        "To encourage imitation and replication of ideas",
        "To protect the interests of the consuming public",
        "To encourage innovation by granting creators time to profit from their new ideas and recover development costs"
      ],
      "answer": 3,
      "explanation": "The correct answer is: To encourage innovation by granting creators time to profit from their new ideas and recover development costs"
    },
    {
      "id": 163,
      "topic": "Intellectual Property",
      "difficulty": "Medium",
      "question": "What is the significance of \"reciprocal extension of protection\" in copyright law?",
      "options": [
        "It grants exclusive rights to copyright holders.",
        "It promotes the use of copyrighted materials by others.",
        "It ensures that copyrighted works are distributed internationally.",
        "It's a miscellaneous topic covered by copyright law to ensure global protection of creative works."
      ],
      "answer": 3,
      "explanation": "The correct answer is: It's a miscellaneous topic covered by copyright law to ensure global protection of creative works."
    },
    {
      "id": 164,
      "topic": "Intellectual Property",
      "difficulty": "Medium",
      "question": "Which intellectual property type protects symbols, words, or designs used to indicate the source of goods?",
      "options": [
        "Copyright",
        "Trade secret",
        "Patent",
        "Trademark"
      ],
      "answer": 3,
      "explanation": "The correct answer is: Trademark"
    },
    {
      "id": 165,
      "topic": "Intellectual Property",
      "difficulty": "Medium",
      "question": "What is the main reason for developing strategies to protect intellectual property (IP) within a business?",
      "options": [
        "To promote collaboration with competitors",
        "To create public awareness of the IP",
        "To safeguard the products, processes, and creative inputs that generate business profits",
        "To make the IP public knowledge for increased recognition"
      ],
      "answer": 2,
      "explanation": "The correct answer is: To safeguard the products, processes, and creative inputs that generate business profits"
    },
    {
      "id": 166,
      "topic": "Intellectual Property",
      "difficulty": "Medium",
      "question": "What is the first step in a protection strategy for intellectual property?",
      "options": [
        "Selling the IP to a competitor",
        "Demonstrating ownership of the IP",
        "Keeping the IP a secret",
        "Registering the IP"
      ],
      "answer": 3,
      "explanation": "The correct answer is: Registering the IP"
    },
    {
      "id": 167,
      "topic": "Intellectual Property",
      "difficulty": "Medium",
      "question": "Which of the following is NOT a type of intellectual property protection available?",
      "options": [
        "Patents",
        "Trade secrets",
        "Business licenses",
        "Registered designs"
      ],
      "answer": 3,
      "explanation": "The correct answer is: Registered designs"
    },
    {
      "id": 168,
      "topic": "Intellectual Property",
      "difficulty": "Medium",
      "question": "What is the purpose of a confidentiality or non-disclosure agreement in protecting intellectual property?",
      "options": [
        "To grant exclusive rights to the IP holder",
        "To demonstrate ownership of the IP",
        "To establish the time, date, and place of IP disclosure",
        "To make the IP public knowledge"
      ],
      "answer": 2,
      "explanation": "The correct answer is: To establish the time, date, and place of IP disclosure"
    },
    {
      "id": 169,
      "topic": "Intellectual Property",
      "difficulty": "Medium",
      "question": "Which step helps demonstrate ownership of an intellectual property idea?",
      "options": [
        "Creating multiple prototypes",
        "Filing a lawsuit against potential infringers",
        "Writing a detailed description of the idea and making copies",
        "Mailing a sealed envelope with original documents describing the idea by registered mail"
      ],
      "answer": 3,
      "explanation": "The correct answer is: Mailing a sealed envelope with original documents describing the idea by registered mail"
    },
    {
      "id": 170,
      "topic": "Intellectual Property",
      "difficulty": "Medium",
      "question": "What action should you take if you want to ensure that your idea is not infringing someone else's IP?",
      "options": [
        "Discuss your idea openly to gather feedback",
        "Apply for IP protection immediately",
        "Search the IP Nigerian website to check for similar products covered by patents or trademarks",
        "Keep your idea a secret and avoid any research"
      ],
      "answer": 2,
      "explanation": "The correct answer is: Search the IP Nigerian website to check for similar products covered by patents or trademarks"
    },
    {
      "id": 171,
      "topic": "Intellectual Property",
      "difficulty": "Medium",
      "question": "Which type of IP protection involves describing your creation in detail to distinguish it from similar products?",
      "options": [
        "Copyright",
        "Trademark",
        "Patent",
        "Trade secret"
      ],
      "answer": 2,
      "explanation": "The correct answer is: Patent"
    },
    {
      "id": 172,
      "topic": "Intellectual Property",
      "difficulty": "Medium",
      "question": "What is the purpose of registering your IP through a patent attorney or an intellectual property lawyer?",
      "options": [
        "To gain immediate public recognition for your IP",
        "To prevent others from using your IP",
        "To describe your IP in minute detail for patent application",
        "To establish ownership of your IP"
      ],
      "answer": 3,
      "explanation": "The correct answer is: To establish ownership of your IP"
    },
    {
      "id": 173,
      "topic": "Intellectual Property",
      "difficulty": "Medium",
      "question": "Why might it be necessary to use more than one type of IP protection for your creation?",
      "options": [
        "To confuse potential infringers",
        "To increase the overall value of the IP",
        "Different IP rights provide varying levels of protection, so more than one type might be needed to fully protect the creation",
        "To discourage potential infringers from pursuing similar ideas"
      ],
      "answer": 2,
      "explanation": "The correct answer is: Different IP rights provide varying levels of protection, so more than one type might be needed to fully protect the creation"
    },
    {
      "id": 174,
      "topic": "Intellectual Property",
      "difficulty": "Medium",
      "question": "What is the primary purpose of registering intellectual property (IP)?",
      "options": [
        "To increase public awareness of the IP",
        "To prevent competitors from using similar ideas",
        "To establish a legal framework for IP theft",
        "To secure legal rights and protection for the IP"
      ],
      "answer": 3,
      "explanation": "The correct answer is: To secure legal rights and protection for the IP"
    },
    {
      "id": 175,
      "topic": "Intellectual Property",
      "difficulty": "Medium",
      "question": "Which of the following types of intellectual property protection involves protecting original creative works?",
      "options": [
        "Patents",
        "Trademarks",
        "Copyright",
        "Trade secrets"
      ],
      "answer": 2,
      "explanation": "The correct answer is: Copyright"
    },
    {
      "id": 176,
      "topic": "Intellectual Property",
      "difficulty": "Medium",
      "question": "Why is it important to keep your intellectual property idea a secret before registering it?",
      "options": [
        "To prevent competitors from selling a similar product",
        "To make your idea public knowledge for collaboration",
        "To maintain a sense of mystery around your product",
        "To avoid putting your business at risk and to ensure you have exclusive rights to the idea"
      ],
      "answer": 3,
      "explanation": "The correct answer is: To avoid putting your business at risk and to ensure you have exclusive rights to the idea"
    },
    {
      "id": 177,
      "topic": "Intellectual Property",
      "difficulty": "Medium",
      "question": "What is the purpose of mailing a sealed envelope with original documents describing your idea by registered mail?",
      "options": [
        "To prove that you are the first to create the idea",
        "To receive feedback from potential partners",
        "To get the idea patented quickly",
        "To establish evidence of the time, date, and place of original thought"
      ],
      "answer": 3,
      "explanation": "The correct answer is: To establish evidence of the time, date, and place of original thought"
    },
    {
      "id": 178,
      "topic": "Intellectual Property",
      "difficulty": "Medium",
      "question": "Why is searching the IP Nigerian website important when protecting your intellectual property?",
      "options": [
        "To find potential partners for collaboration",
        "To make your IP public knowledge for marketing purposes",
        "To ensure that your idea is not infringing someone else's IP",
        "To demonstrate ownership of your IP to potential investors"
      ],
      "answer": 3,
      "explanation": "The correct answer is: To demonstrate ownership of your IP to potential investors"
    },
    {
      "id": 179,
      "topic": "Intellectual Property",
      "difficulty": "Medium",
      "question": "What is the main purpose of a confidentiality or non-disclosure agreement when discussing your idea with others?",
      "options": [
        "To prevent anyone from using or discussing the idea",
        "To create a legally binding partnership agreement",
        "To secure a loan for the development of the idea",
        "To ensure that the person you're disclosing the idea to keeps it confidential and doesn't use it without permission"
      ],
      "answer": 3,
      "explanation": "The correct answer is: To ensure that the person you're disclosing the idea to keeps it confidential and doesn't use it without permission"
    },
    {
      "id": 180,
      "topic": "Intellectual Property",
      "difficulty": "Medium",
      "question": "What step should you take to demonstrate that an idea is yours when trying to protect your intellectual property?",
      "options": [
        "Create a website showcasing the idea",
        "Share the idea openly on social media platforms",
        "Make copies of the original documents and keep them at home",
        "Write down the details of the idea, draw a picture, and mail it in a sealed envelope by registered mail"
      ],
      "answer": 3,
      "explanation": "The correct answer is: Write down the details of the idea, draw a picture, and mail it in a sealed envelope by registered mail"
    },
    {
      "id": 181,
      "topic": "Intellectual Property",
      "difficulty": "Medium",
      "question": "Why is it important to consider multiple types of intellectual property protection for your creation?",
      "options": [
        "To increase the overall value of the creation",
        "To ensure that no one else can use the idea",
        "Different types of IP protection offer different levels of security, so using more than one type can provide comprehensive protection",
        "To make the registration process faster and more efficient"
      ],
      "answer": 2,
      "explanation": "The correct answer is: Different types of IP protection offer different levels of security, so using more than one type can provide comprehensive protection"
    },
    {
      "id": 182,
      "topic": "Technology & Entrepreneurship",
      "difficulty": "Medium",
      "question": "What is the relationship between technology and entrepreneurship?",
      "options": [
        "Technology is an independent entity that does not impact entrepreneurship",
        "Entrepreneurship is the driving force behind technology development",
        "Technology and entrepreneurship are tightly related, with technology being a means to an end",
        "Entrepreneurship is a result of technological advancements"
      ],
      "answer": 2,
      "explanation": "The correct answer is: Technology and entrepreneurship are tightly related, with technology being a means to an end"
    },
    {
      "id": 183,
      "topic": "Technology & Entrepreneurship",
      "difficulty": "Medium",
      "question": "What analogy does the GENS 202 material use to emphasize the importance of entrepreneurs understanding and using technology?",
      "options": [
        "Athlete and coach relationship",
        "Chef and sous chef relationship",
        "Musician and recording engineer relationship",
        "Artist and art collector relationship"
      ],
      "answer": 2,
      "explanation": "The correct answer is: Musician and recording engineer relationship"
    },
    {
      "id": 184,
      "topic": "Technology & Entrepreneurship",
      "difficulty": "Medium",
      "question": "Why is it important for entrepreneurs to be open and inquisitive about technology?",
      "options": [
        "To gain popularity among tech-savvy consumers",
        "To compete with other entrepreneurs in the technology industry",
        "To leverage technology in order to achieve their goals more quickly",
        "To become experts in technology development"
      ],
      "answer": 2,
      "explanation": "The correct answer is: To leverage technology in order to achieve their goals more quickly"
    },
    {
      "id": 185,
      "topic": "Technology & Entrepreneurship",
      "difficulty": "Medium",
      "question": "What does the author of the GENS 202 material mean by stating that \"Technology is an accelerator\"?",
      "options": [
        "Technology speeds up the process of decision-making",
        "Technology is the end goal of entrepreneurial endeavors",
        "Technology accelerates the success of ideas when used effectively",
        "Technology accelerates only bad ideas toward failure"
      ],
      "answer": 2,
      "explanation": "The correct answer is: Technology accelerates the success of ideas when used effectively"
    },
    {
      "id": 186,
      "topic": "Technology & Entrepreneurship",
      "difficulty": "Medium",
      "question": "What is the primary message conveyed in the analogy of the musician and the recording studio?",
      "options": [
        "Entrepreneurs need to become engineers to create technology",
        "Technology and entrepreneurship are separate entities",
        "Entrepreneurs should focus solely on their core principles",
        "Entrepreneurs must be able to effectively communicate their vision to technical experts"
      ],
      "answer": 2,
      "explanation": "The correct answer is: Entrepreneurs should focus solely on their core principles"
    },
    {
      "id": 187,
      "topic": "Technology & Entrepreneurship",
      "difficulty": "Medium",
      "question": "How has computer technology impacted various sectors like education and health care?",
      "options": [
        "It has led to reduced longevity in many societies",
        "It has contributed to the need for more labor in factories",
        "It has made technological advancements irrelevant in these sectors",
        "It has had an enormous impact by improving education and health care"
      ],
      "answer": 3,
      "explanation": "The correct answer is: It has had an enormous impact by improving education and health care"
    },
    {
      "id": 188,
      "topic": "Technology & Entrepreneurship",
      "difficulty": "Medium",
      "question": "What is the downside to technological progress mentioned in the GENS 202 material?",
      "options": [
        "Increased reliance on labor in factories",
        "The destruction of the human race due to nuclear weapons",
        "The lack of innovation in developing countries",
        "Pollution, environmental problems, and health-related issues"
      ],
      "answer": 3,
      "explanation": "The correct answer is: Pollution, environmental problems, and health-related issues"
    },
    {
      "id": 189,
      "topic": "Technology & Entrepreneurship",
      "difficulty": "Medium",
      "question": "Why is the transfer of technology important in both industrialized and developing countries?",
      "options": [
        "It leads to lower industrial capability and competitiveness",
        "It helps industrialized countries establish dominance over developing countries",
        "It allows countries to rely on self-sufficiency rather than global cooperation",
        "It helps in attaining high industrial capability and competitiveness"
      ],
      "answer": 3,
      "explanation": "The correct answer is: It helps in attaining high industrial capability and competitiveness"
    },
    {
      "id": 190,
      "topic": "Technology & Entrepreneurship",
      "difficulty": "Medium",
      "question": "What does the example of Gillette and Wilkinson demonstrate?",
      "options": [
        "Gillette's reluctance to share technology with Wilkinson",
        "Wilkinson's inability to effectively use Gillette's technology",
        "The importance of marketing superior products",
        "The negative impact of technology transfer on a business"
      ],
      "answer": 2,
      "explanation": "The correct answer is: The importance of marketing superior products"
    },
    {
      "id": 191,
      "topic": "Technology & Entrepreneurship",
      "difficulty": "Medium",
      "question": "What types of technology transfer have had a significant impact on developing countries?",
      "options": [
        "Political and economic technology transfers",
        "Cultural and geographic technology transfers",
        "Agricultural and health care technology transfers",
        "Educational and entertainment technology transfers"
      ],
      "answer": 2,
      "explanation": "The correct answer is: Agricultural and health care technology transfers"
    },
    {
      "id": 192,
      "topic": "Technology & Entrepreneurship",
      "difficulty": "Medium",
      "question": "What is the core definition of technology?",
      "options": [
        "The process of generating ideas for new products",
        "The technique for converting inputs to outputs in a specific task",
        "The ability to communicate effectively using digital tools",
        "The study of the natural world and its phenomena"
      ],
      "answer": 1,
      "explanation": "The correct answer is: The technique for converting inputs to outputs in a specific task"
    },
    {
      "id": 193,
      "topic": "Technology & Entrepreneurship",
      "difficulty": "Medium",
      "question": "What distinguishes hard technology from soft technology?",
      "options": [
        "Hard technology involves physical products, while soft technology involves intangible concepts",
        "Hard technology focuses on software development, while soft technology focuses on hardware design",
        "Hard technology is capital-intensive, while soft technology is labor-intensive",
        "Hard technology includes machinery and equipment, while soft technology includes management know-how and administrative techniques"
      ],
      "answer": 3,
      "explanation": "The correct answer is: Hard technology includes machinery and equipment, while soft technology includes management know-how and administrative techniques"
    },
    {
      "id": 194,
      "topic": "Technology & Entrepreneurship",
      "difficulty": "Medium",
      "question": "How has technology transformed various aspects of modern life?",
      "options": [
        "It has made life simpler and more stagnant",
        "It has only had a significant impact on the economy",
        "It has revolutionized consumer habits, education, and various other areas",
        "It has primarily affected the character of political institutions"
      ],
      "answer": 2,
      "explanation": "The correct answer is: It has revolutionized consumer habits, education, and various other areas"
    },
    {
      "id": 195,
      "topic": "Technology & Entrepreneurship",
      "difficulty": "Medium",
      "question": "Why is it crucial for organizations to stay abreast of changes in the technological environment?",
      "options": [
        "To maintain a traditional approach to business operations",
        "To resist any competition from other organizations",
        "To anticipate and counteract competition, and incorporate new designs into products",
        "To avoid any negative impact of technological progress"
      ],
      "answer": 2,
      "explanation": "The correct answer is: To anticipate and counteract competition, and incorporate new designs into products"
    },
    {
      "id": 196,
      "topic": "Technology & Entrepreneurship",
      "difficulty": "Medium",
      "question": "What is the negative consequence of not keeping up with technological advancements?",
      "options": [
        "Decreased reliance on capital-intensive technologies",
        "Inability to compete with other organizations",
        "Reduced emphasis on the development of labor-intensive technologies",
        "Failure to incorporate new and innovative designs into products"
      ],
      "answer": 3,
      "explanation": "The correct answer is: Failure to incorporate new and innovative designs into products"
    },
    {
      "id": 197,
      "topic": "Technology & Entrepreneurship",
      "difficulty": "Medium",
      "question": "What is the primary message conveyed through the example of Gillette and Wilkinson Sword Blades?",
      "options": [
        "Sharing technology with other companies is always beneficial",
        "Technology transfer is essential for business success",
        "Failing to market a superior product can result in missed opportunities",
        "Manufacturers should prioritize the development of garden tools over other products"
      ],
      "answer": 2,
      "explanation": "The correct answer is: Failing to market a superior product can result in missed opportunities"
    },
    {
      "id": 198,
      "topic": "Technology & Entrepreneurship",
      "difficulty": "Medium",
      "question": "What is the significance of technology transfer for developing countries?",
      "options": [
        "It results in decreased reliance on agricultural productivity",
        "It leads to reduced infant mortality rates and improved health care",
        "It is primarily focused on introducing manufacturing technologies",
        "It has no impact on the living conditions of the majority of the population"
      ],
      "answer": 1,
      "explanation": "The correct answer is: It leads to reduced infant mortality rates and improved health care"
    },
    {
      "id": 199,
      "topic": "Technology & Entrepreneurship",
      "difficulty": "Medium",
      "question": "What does the term \"capital-intensive\" mean in the context of technology?",
      "options": [
        "It refers to the cost of acquiring technology",
        "It signifies the level of complexity in using technology",
        "It represents the heavy reliance on labor for technology production",
        "It indicates the use of a highly advanced technology that requires substantial capital investment"
      ],
      "answer": 3,
      "explanation": "The correct answer is: It indicates the use of a highly advanced technology that requires substantial capital investment"
    },
    {
      "id": 200,
      "topic": "Technology & Entrepreneurship",
      "difficulty": "Medium",
      "question": "How does technology contribute to economic development?",
      "options": [
        "By isolating countries from the global market",
        "By causing inflation and economic instability",
        "By reducing the need for international communication",
        "By enabling the transfer of knowledge and improving industrial capability"
      ],
      "answer": 3,
      "explanation": "The correct answer is: By enabling the transfer of knowledge and improving industrial capability"
    },
    {
      "id": 201,
      "topic": "Technology & Entrepreneurship",
      "difficulty": "Medium",
      "question": "What is the role of multinational corporations in technology transfer?",
      "options": [
        "They hinder technology transfer by monopolizing resources",
        "They invest abroad to expand production, marketing, and research activities, facilitating technology transfer",
        "They primarily focus on exporting technology from developing to industrialized countries",
        "They impede technology transfer by limiting their operations to a single country"
      ],
      "answer": 1,
      "explanation": "The correct answer is: They invest abroad to expand production, marketing, and research activities, facilitating technology transfer"
    },
    {
      "id": 202,
      "topic": "Technology & Entrepreneurship",
      "difficulty": "Medium",
      "question": "What does \"soft technology\" refer to?",
      "options": [
        "Technology that is easily breakable and fragile",
        "Technology that is still in the experimental phase",
        "Management know-how, finance, marketing, and administrative techniques",
        "Technology that involves intricate mechanical components"
      ],
      "answer": 2,
      "explanation": "The correct answer is: Management know-how, finance, marketing, and administrative techniques"
    },
    {
      "id": 203,
      "topic": "Technology & Entrepreneurship",
      "difficulty": "Medium",
      "question": "Why is staying updated with technology trends important for entrepreneurs?",
      "options": [
        "To develop a deep expertise in technical skills",
        "To impress potential investors and partners",
        "To align technology with their business goals and leverage it for success",
        "To ensure their products have the latest user interfaces"
      ],
      "answer": 2,
      "explanation": "The correct answer is: To align technology with their business goals and leverage it for success"
    },
    {
      "id": 204,
      "topic": "Technology & Entrepreneurship",
      "difficulty": "Medium",
      "question": "What role does technology play in the relationship between entrepreneurship and nature?",
      "options": [
        "It disconnects entrepreneurs from nature and reality",
        "It enhances the control that entrepreneurs have over nature and their environment",
        "It replaces nature entirely, making it irrelevant for entrepreneurship",
        "It reduces the need for entrepreneurship due to technological advancements"
      ],
      "answer": 1,
      "explanation": "The correct answer is: It enhances the control that entrepreneurs have over nature and their environment"
    },
    {
      "id": 205,
      "topic": "Technology & Entrepreneurship",
      "difficulty": "Medium",
      "question": "What is the primary purpose of technology in entrepreneurship, according to Jim Collins?",
      "options": [
        "To replace human labor and reduce costs",
        "To accelerate the development of innovative products",
        "To serve as a means to an end, helping entrepreneurs achieve their goals more quickly",
        "To serve as a standalone goal for entrepreneurs to pursue"
      ],
      "answer": 2,
      "explanation": "The correct answer is: To serve as a means to an end, helping entrepreneurs achieve their goals more quickly"
    },
    {
      "id": 206,
      "topic": "Technology & Entrepreneurship",
      "difficulty": "Medium",
      "question": "What concept does the word \"technology\" originally relate to?",
      "options": [
        "The concept of invention and creation",
        "The idea of controlling nature and making changes",
        "The notion of competition and rivalry",
        "The concept of cultural exchange and globalization"
      ],
      "answer": 3,
      "explanation": "The correct answer is: The concept of cultural exchange and globalization"
    }
  ]
};

const SUBJECT_META = {
  mathematics:{label:"Mathematics",glyph:"📐"},
  english:{label:"English Language",glyph:"📖"},
  biology:{label:"Biology",glyph:"🧬"},
  chemistry:{label:"Chemistry",glyph:"⚗️"},
  physics:{label:"Physics",glyph:"🔭"},
  government:{label:"Government",glyph:"🏛️"},
  economics:{label:"Economics",glyph:"📈"},
  gens202:{label:"Gens202 Entreprenusership",glyph:"🏛️"}

};

/* ==========================================================
   2. STORAGE  (js/storage.js equivalent)
   ========================================================== */
const Storage = {
  KEYS:{SESSION:"cbt_session",BOOKMARKS:"cbt_bookmarks",STATS:"cbt_stats",THEME:"cbt_theme",RECENT:"cbt_recent"},
  get(key, fallback){
    try{
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    }catch(e){ return fallback; }
  },
  set(key, value){
    try{ localStorage.setItem(key, JSON.stringify(value)); }catch(e){ /* storage full/unavailable */ }
  },
  remove(key){ try{ localStorage.removeItem(key); }catch(e){} }
};

/* ==========================================================
   3. RANDOM  (js/random.js equivalent) — Fisher-Yates
   ========================================================== */
const RandomUtil = {
  shuffle(arr){
    const a = arr.slice();
    for(let i=a.length-1;i>0;i--){
      const j = Math.floor(Math.random()*(i+1));
      [a[i],a[j]] = [a[j],a[i]];
    }
    return a;
  },
  pickQuestions(subjectQuestions, count){
    const indices = subjectQuestions.map((_,i)=>i);
    const shuffled = RandomUtil.shuffle(indices);
    const n = Math.min(count, subjectQuestions.length);
    return shuffled.slice(0,n).map(i=>subjectQuestions[i]);
  }
};

/* ==========================================================
   4. STATS  (js/stats.js equivalent)
   ========================================================== */
const Stats = {
  defaults(){
    return {totalQuizzes:0,scoresSum:0,best:0,questionsAnswered:0,correct:0,wrong:0,subjectCounts:{}};
  },
  load(){ return Storage.get(Storage.KEYS.STATS, Stats.defaults()); },
  record(subjectKey, pct, answeredCount, correctCount, wrongCount){
    const s = Stats.load();
    s.totalQuizzes += 1;
    s.scoresSum += pct;
    s.best = Math.max(s.best, pct);
    s.questionsAnswered += answeredCount;
    s.correct += correctCount;
    s.wrong += wrongCount;
    s.subjectCounts[subjectKey] = (s.subjectCounts[subjectKey]||0) + 1;
    Storage.set(Storage.KEYS.STATS, s);
    return s;
  }
};

/* ==========================================================
   5. BOOKMARKS  (js/bookmarks.js equivalent)
   ========================================================== */
const Bookmarks = {
  load(){ return Storage.get(Storage.KEYS.BOOKMARKS, []); },
  save(list){ Storage.set(Storage.KEYS.BOOKMARKS, list); },
  has(subjectKey, questionId){
    return Bookmarks.load().some(b=>b.subject===subjectKey && b.questionId===questionId);
  },
  toggle(subjectKey, question){
    let list = Bookmarks.load();
    const idx = list.findIndex(b=>b.subject===subjectKey && b.questionId===question.id);
    if(idx>=0){ list.splice(idx,1); }
    else{ list.push({subject:subjectKey, questionId:question.id, question}); }
    Bookmarks.save(list);
    return idx<0; // true if just added
  },
  remove(subjectKey, questionId){
    Bookmarks.save(Bookmarks.load().filter(b=>!(b.subject===subjectKey && b.questionId===questionId)));
  }
};

/* ==========================================================
   6. TIMER  (js/timer.js equivalent)
   ========================================================== */
const QuizTimer = {
  intervalId:null,
  start(onTick, onExpire){
    QuizTimer.stop();
    QuizTimer.intervalId = setInterval(()=>{
      onTick();
    },1000);
    QuizTimer._onExpire = onExpire;
  },
  stop(){
    if(QuizTimer.intervalId){ clearInterval(QuizTimer.intervalId); QuizTimer.intervalId = null; }
  }
};

function formatSeconds(total){
  total = Math.max(0,total);
  const m = String(Math.floor(total/60)).padStart(2,"0");
  const s = String(total%60).padStart(2,"0");
  return m+":"+s;
}

/* ==========================================================
   7. APP STATE
   ========================================================== */
let quiz = null;          // active quiz session object
let pendingSubject = null; // subject chosen on setup page, before quiz starts
let reviewList = [];       // built at result time: [{question, userAnswer}]
let reviewIndex = 0;
let reviewShowAll = false; // false = wrong-only review, true = full review

/* ==========================================================
   8. DOM SHORTCUTS
   ========================================================== */
const $ = id => document.getElementById(id);
const pages = {
  home: $("homePage"), setup: $("setupPage"), quiz: $("quizPage"),
  results: $("resultsPage"), review: $("reviewPage"), bookmarks: $("bookmarksPage")
};
function showPage(name){
  Object.values(pages).forEach(p=>p.classList.add("hidden"));
  pages[name].classList.remove("hidden");
  $("topBar").classList.toggle("hidden", name==="quiz");
  window.scrollTo({top:0});
}

/* ==========================================================
   9. DARK MODE
   ========================================================== */
function initTheme(){
  const dark = Storage.get(Storage.KEYS.THEME, false);
  document.documentElement.setAttribute("data-theme", dark?"dark":"light");
  $("darkToggle").textContent = dark ? "☀️" : "🌙";
}
$("darkToggle").addEventListener("click", ()=>{
  const isDark = document.documentElement.getAttribute("data-theme")==="dark";
  document.documentElement.setAttribute("data-theme", isDark?"light":"dark");
  $("darkToggle").textContent = isDark ? "🌙" : "☀️";
  Storage.set(Storage.KEYS.THEME, !isDark);
});

/* ==========================================================
   10. HOME PAGE RENDERING
   ========================================================== */
function renderHome(){
  $("ticketNum").textContent = "CANDIDATE No. " + String(Math.floor(Math.random()*900000)+100000);

  // stats
  const s = Stats.load();
  $("statTotal").textContent = s.totalQuizzes;
  $("statAvg").textContent = s.totalQuizzes ? Math.round(s.scoresSum/s.totalQuizzes)+"%" : "0%";
  $("statBest").textContent = s.best+"%";
  $("statAnswered").textContent = s.questionsAnswered;

  // continue banner
  const saved = Storage.get(Storage.KEYS.SESSION, null);
  if(saved && !saved.submitted){
    $("continueBanner").classList.remove("hidden");
    $("continueSubject").textContent = SUBJECT_META[saved.subject].label;
    $("continueProgress").textContent = (saved.currentQuestion+1)+" of "+saved.questions.length;
  }else{
    $("continueBanner").classList.add("hidden");
  }

  // subject cards
  const grid = $("subjectGrid");
  grid.innerHTML = "";
  Object.keys(questionBank).forEach(key=>{
    const meta = SUBJECT_META[key];
    const count = questionBank[key].length;
    const practiced = s.subjectCounts[key] || 0;
    const card = document.createElement("div");
    card.className = "subject-card";
    card.innerHTML = `
      <div class="glyph">${meta.glyph}</div>
      <h3>${meta.label}</h3>
      <div class="meta">${count} questions available</div>
      <div class="prog-bar"><div class="prog-fill" style="width:${Math.min(100,practiced*20)}%"></div></div>
    `;
    card.addEventListener("click", ()=>openSetup(key));
    grid.appendChild(card);
  });

  // recent quizzes
  const recent = Storage.get(Storage.KEYS.RECENT, []);
  const recentList = $("recentList");
  recentList.innerHTML = "";
  if(recent.length===0){
    recentList.innerHTML = `<div class="empty-note">No papers taken yet. Start one above.</div>`;
  }else{
    recent.slice(0,6).forEach(r=>{
      const div = document.createElement("div");
      div.className = "recent-item";
      div.innerHTML = `
        <div class="rl-main"><b>${SUBJECT_META[r.subject].label}</b> · ${r.mode} · ${r.total} questions</div>
        <div class="rl-score">${r.pct}%</div>
      `;
      recentList.appendChild(div);
    });
  }

  // bookmark preview
  const bm = Bookmarks.load();
  const preview = $("homeBookmarkPreview");
  preview.innerHTML = "";
  if(bm.length===0){
    preview.innerHTML = `<div class="empty-note">No bookmarks yet. Star a question during a paper to save it here.</div>`;
  }else{
    bm.slice(0,3).forEach(b=>{
      const div = document.createElement("div");
      div.className = "bookmark-item";
      div.innerHTML = `<div class="bm-main"><b>${SUBJECT_META[b.subject].label}</b> — ${b.question.question.slice(0,60)}${b.question.question.length>60?"…":""}</div>`;
      preview.appendChild(div);
    });
    const more = document.createElement("button");
    more.className = "btn btn-ghost";
    more.textContent = "View all bookmarks →";
    more.addEventListener("click", openBookmarksPage);
    preview.appendChild(more);
  }
}

$("continueBtn").addEventListener("click", ()=>{
  const saved = Storage.get(Storage.KEYS.SESSION, null);
  if(saved){ quiz = saved; renderQuizShell(); renderQuestion(); showPage("quiz"); startTimerIfNeeded(); }
});

/* ==========================================================
   11. SETUP PAGE
   ========================================================== */
function openSetup(subjectKey){
  pendingSubject = subjectKey;
  const meta = SUBJECT_META[subjectKey];
  $("setupSubjectName").textContent = meta.label;
  $("setupSubjectMeta").textContent = questionBank[subjectKey].length + " questions available in the bank";

  const countSelect = $("countSelect");
  countSelect.innerHTML = "";
  const max = questionBank[subjectKey].length;
  [5,10,15,20,30].filter(n=>n<=max).forEach(n=>{
    const opt = document.createElement("option");
    opt.value = n; opt.textContent = n + " questions";
    countSelect.appendChild(opt);
  });
  const allOpt = document.createElement("option");
  allOpt.value = max; allOpt.textContent = "All " + max + " questions";
  countSelect.appendChild(allOpt);

  document.querySelectorAll(".mode-pick button").forEach(b=>b.classList.toggle("active", b.dataset.mode==="CBT"));
  showPage("setup");
}
$("setupBack").addEventListener("click", ()=>{ renderHome(); showPage("home"); });
document.querySelectorAll(".mode-pick button").forEach(btn=>{
  btn.addEventListener("click", ()=>{
    document.querySelectorAll(".mode-pick button").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
  });
});
$("startQuizBtn").addEventListener("click", startQuiz);

/* ==========================================================
   12. QUIZ CREATION  (once — never re-randomized)
   ========================================================== */
function startQuiz(){
  const subjectKey = pendingSubject;
  const mode = document.querySelector(".mode-pick button.active").dataset.mode;
  const count = parseInt($("countSelect").value, 10);
  const timerMinutes = parseInt($("timerSelect").value, 10);

  const subjectQuestions = questionBank[subjectKey];   // STEP: extract subject questions
  const selected = RandomUtil.pickQuestions(subjectQuestions, count); // STEP: randomize ONCE

  quiz = {
    subject: subjectKey,
    mode: mode,
    questionCount: selected.length,
    timer: mode==="CBT" ? timerMinutes*60 : null,
    timeRemaining: mode==="CBT" ? timerMinutes*60 : null,
    startedAt: Date.now(),
    submitted: false,
    currentQuestion: 0,
    questions: selected,              // STEP: create quiz.questions — never mutated after this
    answers: new Array(selected.length).fill(null),
    visited: new Array(selected.length).fill(false),
    skipped: new Array(selected.length).fill(false),
    bookmarkedIds: []
  };
  saveSession();
  renderQuizShell();
  renderQuestion();
  showPage("quiz");
  startTimerIfNeeded();
}

function saveSession(){ Storage.set(Storage.KEYS.SESSION, quiz); }

/* ==========================================================
   13. QUIZ RENDERING
   ========================================================== */
function renderQuizShell(){
  $("quizSubjectName").textContent = SUBJECT_META[quiz.subject].label;
  $("quizModeLabel").textContent = quiz.mode.toUpperCase() + " MODE";
  $("qTotalNum").textContent = quiz.questions.length;
  $("quizTimerDisplay").classList.toggle("hidden", quiz.mode!=="CBT");
  renderPalette();
}

function renderQuestion(){
  const idx = quiz.currentQuestion;
  const q = quiz.questions[idx];
  quiz.visited[idx] = true;

  $("qBadge").textContent = idx+1;
  $("qCurrentNum").textContent = idx+1;
  $("qTopic").textContent = (q.topic||"General") + " · " + (q.difficulty||"Medium");
  $("qText").textContent = q.question;

  const letters = ["A","B","C","D","E","F"];
  const list = $("omrList");
  list.innerHTML = "";
  q.options.forEach((optText,i)=>{
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "omr-option" + (quiz.answers[idx]===i ? " selected" : "");
    btn.innerHTML = `<span class="bubble">${letters[i]}</span><span class="opt-text">${optText}</span>`;
    btn.addEventListener("click", ()=>selectAnswer(i));
    list.appendChild(btn);
  });

  $("prevBtn").disabled = idx===0;
  const isLast = idx === quiz.questions.length-1;
  $("nextBtn").textContent = isLast ? "Finish ▶" : "Next ▶";

  const bookmarked = Bookmarks.has(quiz.subject, q.id);
  $("bookmarkBtn").classList.toggle("on", bookmarked);
  $("bookmarkBtn").textContent = bookmarked ? "★ Bookmarked" : "☆ Bookmark";

  updateProgressBar();
  renderPalette();
  saveSession();
}

function selectAnswer(optionIndex){
  const idx = quiz.currentQuestion;
  quiz.answers[idx] = optionIndex;      // STEP: store answer only — never check correctness here
  quiz.skipped[idx] = false;
  renderQuestion();
}

$("skipBtn").addEventListener("click", ()=>{
  const idx = quiz.currentQuestion;
  if(quiz.answers[idx]===null) quiz.skipped[idx] = true;
  goNext();
});
$("bookmarkBtn").addEventListener("click", ()=>{
  Bookmarks.toggle(quiz.subject, quiz.questions[quiz.currentQuestion]);
  renderQuestion();
});
$("prevBtn").addEventListener("click", ()=>{
  if(quiz.currentQuestion>0){ quiz.currentQuestion--; renderQuestion(); }
});
$("nextBtn").addEventListener("click", goNext);
function goNext(){
  if(quiz.currentQuestion < quiz.questions.length-1){
    quiz.currentQuestion++;
    renderQuestion();
  }else{
    openSubmitModal();
  }
}
function jumpTo(index){ quiz.currentQuestion = index; renderQuestion(); }

function updateProgressBar(){
  const answered = quiz.answers.filter(a=>a!==null).length;
  const pct = (answered / quiz.questions.length) * 100;
  $("quizProgressFill").style.width = pct+"%";
}

function renderPalette(){
  const grid = $("paletteGrid");
  grid.innerHTML = "";
  quiz.questions.forEach((q,i)=>{
    const cell = document.createElement("button");
    cell.type = "button";
    let cls = "p-cell";
    if(i===quiz.currentQuestion) cls += " current";
    else if(quiz.answers[i]!==null) cls += " answered";
    else if(quiz.skipped[i]) cls += " skipped";
    else if(quiz.visited[i]) cls += " visited";
    if(Bookmarks.has(quiz.subject, q.id)) cls += " bookmarked";
    cell.className = cls;
    cell.textContent = i+1;
    cell.addEventListener("click", ()=>jumpTo(i));
    grid.appendChild(cell);
  });
}

/* ==========================================================
   14. TIMER WIRING
   ========================================================== */
function startTimerIfNeeded(){
  QuizTimer.stop();
  if(quiz.mode!=="CBT") return;
  updateTimerDisplay();
  QuizTimer.start(()=>{
    quiz.timeRemaining--;
    updateTimerDisplay();
    saveSession();
    if(quiz.timeRemaining<=0){
      QuizTimer.stop();
      submitQuiz();
    }
  });
}
function updateTimerDisplay(){
  const el = $("quizTimerDisplay");
  el.textContent = formatSeconds(quiz.timeRemaining);
  el.classList.remove("warn","crit");
  if(quiz.timeRemaining<=60) el.classList.add("crit");
  else if(quiz.timeRemaining<=180) el.classList.add("warn");
}

/* ==========================================================
   15. SUBMIT FLOW
   ========================================================== */
$("submitBtn").addEventListener("click", openSubmitModal);
function openSubmitModal(){
  const answered = quiz.answers.filter(a=>a!==null).length;
  const unanswered = quiz.questions.length - answered;
  $("modalTitle").textContent = "Submit paper?";
  $("modalMessage").textContent = "Once submitted you cannot change your answers.";
  $("modalTally").classList.remove("hidden");
  $("modalAnswered").textContent = answered;
  $("modalUnanswered").textContent = unanswered;
  $("modalConfirm").textContent = "Submit";
  $("modalConfirm").onclick = ()=>{ closeModal(); submitQuiz(); };
  $("modalCancel").onclick = closeModal;
  $("modalOverlay").classList.remove("hidden");
}
function closeModal(){ $("modalOverlay").classList.add("hidden"); }

function submitQuiz(){
  QuizTimer.stop();
  quiz.submitted = true;                 // STEP: only now do we compare answers
  const timeUsedSeconds = quiz.mode==="CBT"
    ? (quiz.timer - quiz.timeRemaining)
    : Math.round((Date.now()-quiz.startedAt)/1000);

  let correct=0, wrong=0, skipped=0;
  reviewList = [];
  quiz.questions.forEach((q,i)=>{
    const userAns = quiz.answers[i];
    if(userAns===null){ skipped++; }
    else if(userAns===q.answer){ correct++; }
    else { wrong++; }
    reviewList.push({question:q, userAnswer:userAns});
  });

  const total = quiz.questions.length;
  const pct = total ? Math.round((correct/total)*100) : 0;

  quiz.result = {correct,wrong,skipped,pct,timeUsedSeconds};
  saveSession();

  // update stats + recent list
  Stats.record(quiz.subject, pct, total-skipped, correct, wrong);
  const recent = Storage.get(Storage.KEYS.RECENT, []);
  recent.unshift({subject:quiz.subject, mode:quiz.mode, total, pct, date:Date.now()});
  Storage.set(Storage.KEYS.RECENT, recent.slice(0,20));

  Storage.remove(Storage.KEYS.SESSION); // finished paper, nothing to resume

  renderResults();
  showPage("results");
}

/* ==========================================================
   16. RESULTS PAGE
   ========================================================== */
function renderResults(){
  const r = quiz.result;
  $("resultsSub").textContent = SUBJECT_META[quiz.subject].label + " · " + quiz.mode + " mode";
  $("scoreFrac").textContent = r.correct + " / " + quiz.questions.length;
  $("rCorrect").textContent = r.correct;
  $("rWrong").textContent = r.wrong;
  $("rSkipped").textContent = r.skipped;
  $("rTime").textContent = formatSeconds(r.timeUsedSeconds);

  const circumference = 2*Math.PI*70;
  const arc = $("scoreArc");
  arc.style.strokeDasharray = circumference;
  arc.style.strokeDashoffset = circumference;
  $("scorePct").textContent = "0%";

  let shown = 0;
  const step = Math.max(1, Math.round(r.pct/30));
  const anim = setInterval(()=>{
    shown = Math.min(r.pct, shown+step);
    $("scorePct").textContent = shown+"%";
    arc.style.strokeDashoffset = circumference - (shown/100)*circumference;
    if(shown>=r.pct) clearInterval(anim);
  },20);

  $("retryWrongBtn").disabled = r.wrong===0 && r.skipped===0;
}
$("resultsHomeBtn").addEventListener("click", ()=>{ renderHome(); showPage("home"); });
$("reviewBtn").addEventListener("click", ()=>{ reviewShowAll=true; reviewIndex=0; renderReview(); showPage("review"); });

$("retryWrongBtn").addEventListener("click", ()=>{
  const missed = reviewList.filter(r=>r.userAnswer===null || r.userAnswer!==r.question.answer).map(r=>r.question);
  if(missed.length===0) return;
  quiz = {
    subject: quiz.subject, mode: quiz.mode, questionCount: missed.length,
    timer: quiz.mode==="CBT" ? Math.max(120, missed.length*45) : null,
    timeRemaining: quiz.mode==="CBT" ? Math.max(120, missed.length*45) : null,
    startedAt: Date.now(), submitted:false, currentQuestion:0,
    questions: missed, answers:new Array(missed.length).fill(null),
    visited:new Array(missed.length).fill(false), skipped:new Array(missed.length).fill(false), bookmarkedIds:[]
  };
  saveSession();
  renderQuizShell(); renderQuestion(); showPage("quiz"); startTimerIfNeeded();
});

/* ==========================================================
   17. REVIEW PAGE
   ========================================================== */
function renderReview(){
  const item = reviewList[reviewIndex];
  const q = item.question;
  const userAns = item.userAnswer;
  const isCorrect = userAns===q.answer;
  const card = $("reviewCard");

  let userRow, correctRow="";
  if(userAns===null){
    userRow = `<div class="review-row neutral-row"><span class="rl-label">Your answer</span><span>Not answered</span></div>`;
  }else{
    userRow = `<div class="review-row ${isCorrect?'correct-row':'wrong-row'}"><span class="rl-label">Your answer</span><span>${q.options[userAns]} ${isCorrect?"✓":"✗"}</span></div>`;
  }
  if(!isCorrect){
    correctRow = `<div class="review-row correct-row"><span class="rl-label">Correct answer</span><span>${q.options[q.answer]} ✓</span></div>`;
  }

  card.innerHTML = `
    <div class="q-eyebrow"><div class="q-badge">${reviewIndex+1}</div><div class="topic">${q.topic||""} · ${q.difficulty||""}</div></div>
    <div class="rq-text">${q.question}</div>
    ${userRow}
    ${correctRow}
    <div class="review-explain"><b>Explanation:</b> ${q.explanation||"No explanation provided."}</div>
  `;

  $("reviewPrev").disabled = reviewIndex===0;
  $("reviewNext").textContent = reviewIndex===reviewList.length-1 ? "Done" : "Next ▶";
  $("reviewJump").textContent = "Question " + (reviewIndex+1) + " of " + reviewList.length;
}
$("reviewPrev").addEventListener("click", ()=>{ if(reviewIndex>0){ reviewIndex--; renderReview(); } });
$("reviewNext").addEventListener("click", ()=>{
  if(reviewIndex<reviewList.length-1){ reviewIndex++; renderReview(); }
  else { showPage("results"); }
});
$("reviewBack").addEventListener("click", ()=>showPage("results"));

/* ==========================================================
   18. BOOKMARKS PAGE
   ========================================================== */
function openBookmarksPage(){ renderBookmarksPage(); showPage("bookmarks"); }
function renderBookmarksPage(){
  const list = Bookmarks.load();
  const container = $("bookmarksFullList");
  container.innerHTML = "";
  $("practiceBookmarksBtn").disabled = list.length===0;
  if(list.length===0){
    container.innerHTML = `<div class="empty-note">No bookmarks yet.</div>`;
    return;
  }
  list.forEach(b=>{
    const div = document.createElement("div");
    div.className = "bookmark-item";
    div.innerHTML = `
      <div class="bm-main"><b>${SUBJECT_META[b.subject].label}</b> — ${b.question.question}</div>
      <button class="btn btn-ghost" data-remove>Remove</button>
    `;
    div.querySelector("[data-remove]").addEventListener("click", ()=>{
      Bookmarks.remove(b.subject, b.questionId);
      renderBookmarksPage();
    });
    container.appendChild(div);
  });
}
$("bookmarksBack").addEventListener("click", ()=>{ renderHome(); showPage("home"); });
$("practiceBookmarksBtn").addEventListener("click", ()=>{
  const list = Bookmarks.load();
  if(list.length===0) return;
  const bySubject = list[0].subject; // practice bookmarks as a single mixed-subject-labelled set
  const qs = list.map(b=>b.question);
  quiz = {
    subject:bySubject, mode:"Practice", questionCount:qs.length, timer:null, timeRemaining:null,
    startedAt:Date.now(), submitted:false, currentQuestion:0, questions:qs,
    answers:new Array(qs.length).fill(null), visited:new Array(qs.length).fill(false),
    skipped:new Array(qs.length).fill(false), bookmarkedIds:[]
  };
  saveSession();
  renderQuizShell(); renderQuestion(); showPage("quiz"); startTimerIfNeeded();
});

/* ==========================================================
   19. KEYBOARD SHORTCUTS (quiz page only)
   ========================================================== */
document.addEventListener("keydown", e=>{
  if(pages.quiz.classList.contains("hidden")) return;
  if(e.key==="ArrowLeft"){ $("prevBtn").click(); }
  else if(e.key==="ArrowRight"){ $("nextBtn").click(); }
  else if(/^[1-6]$/.test(e.key)){
    const i = parseInt(e.key,10)-1;
    const opts = document.querySelectorAll(".omr-option");
    if(opts[i]) opts[i].click();
  }
});

/* ==========================================================
   20. INIT
   ========================================================== */
function init(){
  initTheme();
  renderHome();
  showPage("home");
}
init();
