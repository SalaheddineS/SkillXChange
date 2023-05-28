interface Question {
  text: string;
  choices: string[];
  answer: number;
  difficulty: number;
}

const questions: Question[] = [
  {
    text: "What is the size of the L1 cache memory of a 10th generation Intel Core i7 processor?",
    choices: ["256 KB", "512 KB", "1 MB", "2 MB"],
    answer: 0,
    difficulty: 1,
  },
  {
    text: "What is the name of the sorting algorithm with a worst-case complexity of O(n log n)?",
    choices: ["Insertion Sort", "Bubble Sort", "Quick Sort", "Merge Sort"],
    answer: 3,
    difficulty: 1,
  },
  {
    text: "What is HTTPS protocol?",
    choices: ["A file transfer protocol", "An instant messaging protocol", "A remote connection protocol", "A secure transfer protocol"],
    answer: 3,
    difficulty: 2,
  },
  {
    text: "What is the programming language used to create iOS applications?",
    choices: ["Java", "Swift", "Python", "Ruby"],
    answer: 1,
    difficulty: 2,
  },
  {
    text: "What is the OSI model?",
    choices: ["A communication protocol for wireless networks", "A routing protocol for IP networks", "A reference model for network communications", "A security model for enterprise networks"],
    answer: 2,
    difficulty: 3,
  },
  {
    text: "What is a symmetric encryption algorithm?",
    choices: ["An algorithm that uses a public key to encrypt data", "An algorithm that uses a private key to encrypt data", "An algorithm that uses the same key for encryption and decryption", "An algorithm that uses a secret key to encrypt data"],
    answer: 2,
    difficulty: 3,
  },
  {
    text: "What is the MVC pattern in web development?",
    choices: ["A database model", "A security model for web applications", "A design pattern for user interfaces", "A development pattern for web applications"],
    answer: 3,
    difficulty: 4,
  },
  {
    text: "What is the DNS protocol?",
    choices: ["A file transfer protocol", "An instant messaging protocol", "A domain name resolution protocol", "A secure transfer protocol"],
    answer: 2,
    difficulty: 4,
  },
  {
    text: "What is the SQL language?",
    choices: ["A programming language for mobile applications", "A programming language for desktop applications", "A scripting language for websites", "A query language for databases"],
    answer: 3,
    difficulty: 5,
  },
  {
    text: "What is a neural network?",
    choices: ["A type of computer network used for communication between computers", "A programming model for web applications", "A type of computer architecture used for supercomputers", "A model of information processing inspired by the human brain"],
    answer: 3,
    difficulty: 5,
  },
  {
    text: "What is the Python programming language?",
    choices: ["A programming language for mobile applications", "A programming language for desktop applications", "A scripting language for websites", "A versatile programming language"],
    answer: 3,
    difficulty: 6,
  },
  {
    text: "What is the Singleton design pattern?",
    choices: ["A design pattern for user interfaces", "A design pattern for databases", "A design pattern for web applications", "A design pattern for objects"],
    answer: 3,
    difficulty: 6,
  },
  {
    text: "What is the MVC design pattern?",
    choices: ["A design pattern for databases", "A design pattern for user interfaces", "A design pattern for web applications", "A design pattern for objects"],
    answer: 2,
    difficulty: 7,
  },
  {
    text: "What is the Java programming language?",
    choices: ["A programming language for mobile applications", "A programming language for desktop applications", "A scripting language for websites", "An object-oriented programming language"],
    answer: 3,
    difficulty: 7,
  },
  {
    text: "What is the Factory design pattern?",
    choices: ["A design pattern for databases", "A design pattern for user interfaces", "A design pattern for web applications", "A design pattern for object creation"],
    answer: 3,
    difficulty: 8,
  },
  {
    text: "What is the C++ programming language?",
    choices: ["A programming language for mobile applications", "A programming language for desktop applications", "A scripting language for websites", "An object-oriented programming language"],
    answer: 3,
    difficulty: 8,
  },
  {
    text: "What is the Observer design pattern?",
    choices: ["A design pattern for databases", "A design pattern for user interfaces", "A design pattern for web applications", "A design pattern for event management"],
    answer: 3,
    difficulty: 9,
  },
  {
    text: "What is the C# programming language?",
    choices: ["A programming language for mobile applications", "A programming language for desktop applications", "A scripting language for websites", "An object-oriented programming language"],
    answer: 3,
    difficulty: 9,
  },
  {
    text: "What is the Decorator design pattern?",
    choices: ["A design pattern for databases", "A design pattern for user interfaces", "A design pattern for web applications", "A design pattern for dynamic object modification"],
    answer: 3,
    difficulty: 10,
  },
  {
    text: "What is the Ruby programming language?",
    choices: ["A programming language for mobile applications", "A programming language for desktop applications", "A scripting language for websites", "An object-oriented programming language"],
    answer: 3,
    difficulty: 10,
  },
];

questions.sort((a, b) => a.difficulty - b.difficulty); // Sort the questions by increasing difficulty

export default questions;
