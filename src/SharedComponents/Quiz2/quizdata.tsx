import React from 'react';

interface Question {
  text: string;
  choices: string[];
  answer: number;
  difficulty: number;
}

const questions: Question[] = [
  {
    text: "What is verbal communication?",
    choices: [
      "Communication through body language",
      "Communication through gestures",
      "Communication through words",
      "Communication through writing"
    ],
    answer: 2,
    difficulty: 1
  },
  {
    text: "What are the types of non-verbal communication?",
    choices: [
      "Communication through words",
      "Communication through gestures",
      "Communication through writing",
      "Communication through body language"
    ],
    answer: 3,
    difficulty: 1
  },
  {
    text: "What are the advantages of face-to-face communication?",
    choices: [
      "It allows better understanding of the other person's emotions",
      "It enables faster communication",
      "It allows sending clearer messages",
      "It enables communication with distant people"
    ],
    answer: 0,
    difficulty: 2
  },
  {
    text: "What are the advantages of written communication?",
    choices: [
      "It allows better understanding of the other person's emotions",
      "It enables faster communication",
      "It allows sending clearer messages",
      "It enables communication with distant people"
    ],
    answer: 3,
    difficulty: 2
  },
  {
    text: "What is interpersonal communication?",
    choices: [
      "Communication between people",
      "Communication between machines",
      "Communication between animals",
      "Communication between plants"
    ],
    answer: 0,
    difficulty: 3
  },
  {
    text: "What is group communication?",
    choices: [
      "Communication between people",
      "Communication between machines",
      "Communication between animals",
      "Communication between plants"
    ],
    answer: 0,
    difficulty: 3
  },
  {
    text: "What is downward communication?",
    choices: [
      "Communication from lower to higher levels of hierarchy",
      "Communication from higher to lower levels of hierarchy",
      "Horizontal communication",
      "Communication between different hierarchical levels"
    ],
    answer: 1,
    difficulty: 4
  },
  {
    text: "What is upward communication?",
    choices: [
      "Communication from lower to higher levels of hierarchy",
      "Communication from higher to lower levels of hierarchy",
      "Horizontal communication",
      "Communication between different hierarchical levels"
    ],
    answer: 0,
    difficulty: 4
  },
  {
    text: "What is horizontal communication?",
    choices: [
      "Communication from lower to higher levels of hierarchy",
      "Communication from higher to lower levels of hierarchy",
      "Communication between different hierarchical levels",
      "Communication between individuals at the same hierarchical level"
    ],
    answer: 3,
    difficulty: 5
  },
  {
    text: "What is formal communication?",
    choices: [
      "Communication that follows established rules",
      "Communication that does not follow established rules",
      "Communication between friends",
      "Communication between family members"
    ],
    answer: 0,
    difficulty: 5
  },
  {
    text: "What is informal communication?",
    choices: [
      "Communication that follows established rules",
      "Communication that does not follow established rules",
      "Communication between friends",
      "Communication between family members"
    ],
    answer: 1,
    difficulty: 6
  },
  {
    text: "What is persuasive communication?",
    choices: [
      "Communication that seeks to convince",
      "Communication that informs",
      "Communication that educates",
      "Communication that entertains"
    ],
    answer: 0,
    difficulty: 6
  },
  {
    text: "What is informative communication?",
    choices: [
      "Communication that seeks to convince",
      "Communication that informs",
      "Communication that educates",
      "Communication that entertains"
    ],
    answer: 1,
    difficulty: 7
  },
  {
    text: "What are the elements of communication?",
    choices: [
      "Sender, message, receiver, channel, noise",
      "Sender, message, receiver, channel, silence",
      "Sender, message, receiver, noise, silence",
      "Sender, message, channel, noise, silence"
    ],
    answer: 0,
    difficulty: 7
  },
  {
    text: "What is feedback in communication?",
    choices: [
      "The receiver's response to the sender",
      "The sender's response to the receiver",
      "The sender's response to oneself",
      "The receiver's response to oneself"
    ],
    answer: 0,
    difficulty: 8
  },
  {
    text: "What is noise in communication?",
    choices: [
      "The unwanted sounds that disrupt communication",
      "Words with multiple meanings",
      "Cultural differences",
      "Language differences"
    ],
    answer: 0,
    difficulty: 8
  },
  {
    text: "What is active listening?",
    choices: [
      "Listening that requires an immediate response",
      "Listening that enables understanding of the other person",
      "Listening that allows judging the other person",
      "Listening that allows criticizing the other person"
    ],
    answer: 1,
    difficulty: 9
  },
  {
    text: "What is feedback in communication?",
    choices: [
      "Providing feedback to the sender",
      "Providing feedback to the receiver",
      "Providing feedback to oneself",
      "Not providing any feedback"
    ],
    answer: 0,
    difficulty: 9
  },
  {
    text: "What are the barriers to communication?",
    choices: [
      "Cultural differences",
      "Language differences",
      "Gender differences",
      "Religious differences"
    ],
    answer: 0,
    difficulty: 10
  }
];

export default questions;
