interface Question {
  text: string;
  choices: string[];
  answer: number;
  difficulty: number;
}

const questions: Question[] = [
  {
    text: "Which sport is played with a racket and a ball?",
    choices: [
      "Tennis",
      "Football",
      "Basketball",
      "Golf"
    ],
    answer: 0,
    difficulty: 1
  },
  {
    text: "Which sport involves running as fast as possible over a given distance?",
    choices: [
      "Swimming",
      "High jump",
      "Sprint",
      "Marathon"
    ],
    answer: 2,
    difficulty: 1
  },
  {
    text: "Which sport is played in water?",
    choices: [
      "Water polo",
      "Rugby",
      "Cricket",
      "Baseball"
    ],
    answer: 0,
    difficulty: 2
  },
  {
    text: "Which sport involves scoring baskets in a suspended hoop?",
    choices: [
      "Football",
      "Tennis",
      "Basketball",
      "Golf"
    ],
    answer: 2,
    difficulty: 2
  },
  {
    text: "Which sport is practiced on a horse?",
    choices: [
      "Football",
      "Tennis",
      "Equestrianism",
      "Golf"
    ],
    answer: 2,
    difficulty: 3
  },
  {
    text: "Which sport involves hitting a ball with a club?",
    choices: [
      "Tennis",
      "Football",
      "Basketball",
      "Golf"
    ],
    answer: 3,
    difficulty: 3
  },
  {
    text: "Which sport is practiced on a skateboard?",
    choices: [
      "Skateboarding",
      "Football",
      "Basketball",
      "Golf"
    ],
    answer: 0,
    difficulty: 4
  },
  {
    text: "Which sport involves jumping as high as possible in a single jump?",
    choices: [
      "Swimming",
      "High jump",
      "Sprint",
      "Marathon"
    ],
    answer: 1,
    difficulty: 4
  },
  {
    text: "Which sport is played with an oval ball?",
    choices: [
      "American football",
      "Rugby",
      "Cricket",
      "Baseball"
    ],
    answer: 1,
    difficulty: 5
  },
  {
    text: "Which sport is played on horseback with a stick and a ball?",
    choices: [
      "Polo",
      "Rugby",
      "Cricket",
      "Baseball"
    ],
    answer: 0,
    difficulty: 5
  },
  {
    text: "Which sport involves throwing a metal ball as far as possible?",
    choices: [
      "Shot put",
      "High jump",
      "Sprint",
      "Marathon"
    ],
    answer: 0,
    difficulty: 6
  },
  {
    text: "Which sport involves performing acrobatic tricks in the air?",
    choices: [
      "High jump",
      "Skateboarding",
      "BMX",
      "Snowboarding"
    ],
    answer: 3,
    difficulty: 6
  },
  {
    text: "Which sport is practiced with gloves and a punching bag?",
    choices: [
      "Karate",
      "Judo",
      "Boxing",
      "Taekwondo"
    ],
    answer: 2,
    difficulty: 7
  },
  {
    text: "Which sport involves performing acrobatic tricks on a snowy slope?",
    choices: [
      "Alpine skiing",
      "Snowboarding",
      "Figure skating",
      "Biathlon"
    ],
    answer: 1,
    difficulty: 7
  },
  {
    text: "Which sport is played with wooden balls on a sandy field?",
    choices: [
      "Golf",
      "Curling",
      "Petanque",
      "Croquet"
    ],
    answer: 2,
    difficulty: 8
  },
  {
    text: "Which sport involves performing acrobatic tricks in the water?",
    choices: [
      "Synchronized swimming",
      "Water polo",
      "Diving",
      "Lifesaving sport"
    ],
    answer: 2,
    difficulty: 8
  },
  {
    text: "Which sport involves using a pole to jump as high as possible?",
    choices: [
      "Pole vault",
      "Long jump",
      "High jump",
      "Triple jump"
    ],
    answer: 0,
    difficulty: 9
  },
  {
    text: "Which sport involves kayaking down a river?",
    choices: [
      "Rafting",
      "Canoeing",
      "Surfing",
      "Paddleboarding"
    ],
    answer: 1,
    difficulty: 9
  },
  {
    text: "Which sport is played with a round ball?",
    choices: [
      "Football",
      "Rugby",
      "Cricket",
      "Baseball"
    ],
    answer: 0,
    difficulty: 10
  },
  {
    text: "Which sport involves running as long as possible over a given distance?",
    choices: [
      "Swimming",
      "High jump",
      "Sprint",
      "Marathon"
    ],
    answer: 3,
    difficulty: 10
  }
];

export default questions;
