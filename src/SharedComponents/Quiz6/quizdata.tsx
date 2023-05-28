interface Question {
  text: string;
  choices: string[];
  answer: number;
  difficulty: number;
}

const questions: Question[] = [
  {
    text: "Who painted the Mona Lisa?",
    choices: [
      "Raphael",
      "Leonardo da Vinci",
      "Michelangelo",
      "Caravaggio"
    ],
    answer: 1,
    difficulty: 1
  },
  {
    text: "Who sculpted the Winged Victory of Samothrace?",
    choices: [
      "Phidias",
      "Praxiteles",
      "Scopas",
      "Alexandros of Antioch"
    ],
    answer: 3,
    difficulty: 1
  },
  {
    text: "Who painted the Sistine Chapel?",
    choices: [
      "Raphael",
      "Leonardo da Vinci",
      "Michelangelo",
      "Titian"
    ],
    answer: 2,
    difficulty: 2
  },
  {
    text: "Who painted Water Lilies?",
    choices: [
      "Paul Cézanne",
      "Claude Monet",
      "Pierre-Auguste Renoir",
      "Edgar Degas"
    ],
    answer: 1,
    difficulty: 2
  },
  {
    text: "Who painted Guernica?",
    choices: [
      "Pablo Picasso",
      "Salvador Dalí",
      "Joan Miró",
      "Georges Braque"
    ],
    answer: 0,
    difficulty: 3
  },
  {
    text: "Who sculpted the Pietà?",
    choices: [
      "Donatello",
      "Leonardo da Vinci",
      "Michelangelo",
      "Gian Lorenzo Bernini"
    ],
    answer: 2,
    difficulty: 3
  },
  {
    text: "Who painted Les Demoiselles d'Avignon?",
    choices: [
      "Pablo Picasso",
      "Henri Matisse",
      "Georges Braque",
      "Paul Cézanne"
    ],
    answer: 0,
    difficulty: 4
  },
  {
    text: "Who painted Liberty Leading the People?",
    choices: [
      "Gustave Courbet",
      "Eugène Delacroix",
      "Théodore Géricault",
      "Jean-Auguste-Dominique Ingres"
    ],
    answer: 1,
    difficulty: 4
  },
  {
    text: "Who sculpted The Thinker?",
    choices: [
      "Auguste Rodin",
      "Camille Claudel",
      "Edgar Degas",
      "Alberto Giacometti"
    ],
    answer: 0,
    difficulty: 5
  },
  {
    text: "Who painted The Starry Night?",
    choices: [
      "Vincent van Gogh",
      "Paul Gauguin",
      "Henri de Toulouse-Lautrec",
      "Edvard Munch"
    ],
    answer: 0,
    difficulty: 5
  },
  {
    text: "Who painted Las Meninas?",
    choices: [
      "Diego Velázquez",
      "Francisco de Zurbarán",
      "Bartolomé Esteban Murillo",
      "El Greco"
    ],
    answer: 0,
    difficulty: 6
  },
  {
    text: "Who sculpted David?",
    choices: [
      "Donatello",
      "Leonardo da Vinci",
      "Michelangelo",
      "Gian Lorenzo Bernini"
    ],
    answer: 2,
    difficulty: 6
  },
  {
    text: "Who painted The Persistence of Memory?",
    choices: [
      "Salvador Dalí",
      "René Magritte",
      "Max Ernst",
      "Joan Miró"
    ],
    answer: 0,
    difficulty: 7
  },
  {
    text: "Who painted The Last Supper?",
    choices: [
      "Raphael",
      "Leonardo da Vinci",
      "Michelangelo",
      "Titian"
    ],
    answer: 1,
    difficulty: 7
  },
  {
    text: "Who painted The Scream?",
    choices: [
      "Vincent van Gogh",
      "Paul Gauguin",
      "Henri de Toulouse-Lautrec",
      "Edvard Munch"
    ],
    answer: 3,
    difficulty: 8
  },
  {
    text: "Who sculpted The Gates of Hell?",
    choices: [
      "Auguste Rodin",
      "Camille Claudel",
      "Edgar Degas",
      "Alberto Giacometti"
    ],
    answer: 0,
    difficulty: 8
  },
  {
    text: "Who painted The Great Wave off Kanagawa?",
    choices: [
      "Hokusai",
      "Hiroshige",
      "Utamaro",
      "Sesshū Tōyō"
    ],
    answer: 0,
    difficulty: 9
  },
  {
    text: "Who painted The Card Players?",
    choices: [
      "Paul Cézanne",
      "Claude Monet",
      "Pierre-Auguste Renoir",
      "Vincent van Gogh"
    ],
    answer: 0,
    difficulty: 9
  },
  {
    text: "Who painted The Young Girls of Rochefort?",
    choices: [
      "Pablo Picasso",
      "Henri Matisse",
      "Georges Braque",
      "Jacques Demy"
    ],
    answer: 3,
    difficulty: 10
  },
  {
    text: "Who sculpted the Venus de Milo?",
    choices: [
      "Phidias",
      "Praxiteles",
      "Scopas",
      "Alexandros of Antioch"
    ],
    answer: 1,
    difficulty: 10
  },
];

// To shuffle the questions
function shuffle(array: any[]) {
  let currentIndex = array.length;
  let temporaryValue: any;
  let randomIndex: number;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

shuffle(questions);

// To sort the questions in ascending order of difficulty
questions.sort((a, b) => a.difficulty - b.difficulty);
export default questions;
