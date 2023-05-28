interface Question {
  text: string;
  choices: string[];
  answer: number;
  difficulty: number;
}

const questions: Question[] = [
  {
    text: "What markup language is used to structure the content of a web page?",
    choices: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP"
    ],
    answer: 0,
    difficulty: 1
  },
  {
    text: "What styling language is used to style a web page?",
    choices: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP"
    ],
    answer: 1,
    difficulty: 1
  },
  {
    text: "What programming language is used to add interactivity to a web page?",
    choices: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP"
    ],
    answer: 2,
    difficulty: 2
  },
  {
    text: "What is the term used to describe the process of adapting a website for use on a mobile phone?",
    choices: [
      "Responsive adaptation",
      "Navigation optimization",
      "Screen resizing",
      "Conversion to a mobile application"
    ],
    answer: 0,
    difficulty: 2
  },
  {
    text: "What is the term used to describe the set of colors used on a website?",
    choices: [
      "The theme",
      "The color palette",
      "The graphic design",
      "The visual harmony"
    ],
    answer: 1,
    difficulty: 3
  },
  {
    text: "What is the term used to describe the set of fonts used on a website?",
    choices: [
      "The visual style",
      "The font palette",
      "The typographic design",
      "The visual harmony"
    ],
    answer: 2,
    difficulty: 3
  },
  {
    text: "What is the term used to describe the process of designing a user interface for a website?",
    choices: [
      "Usability",
      "Interface design",
      "User experience",
      "Interface development"
    ],
    answer: 1,
    difficulty: 4
  },
  {
    text: "What is the term used to describe the set of elements that make up a web page?",
    choices: [
      "The content",
      "The structure",
      "The design",
      "The interface"
    ],
    answer: 0,
    difficulty: 4
  },
  {
    text: "What is the term used to describe the process of testing a web page on different web browsers?",
    choices: [
      "Validation",
      "Verification",
      "Compatibility",
      "Compliance"
    ],
    answer: 2,
    difficulty: 5
  },
  {
    text: "What is the term used to describe the set of rules that define the appearance and behavior of a web page?",
    choices: [
      "The code",
      "The standards",
      "The norms",
      "The specifications"
    ],
    answer: 1,
    difficulty: 5
  },
  {
    text: "What is the term used to describe the set of elements that enable navigation on a website?",
    choices: [
      "The content",
      "The structure",
      "The design",
      "The interface"
    ],
    answer: 3,
    difficulty: 6
  },
  {
    text: "What is the term used to describe the process of creating an image from simple geometric shapes?",
    choices: [
      "Vectorization",
      "Pixelation",
      "Modeling",
      "Image creation"
    ],
    answer: 0,
    difficulty: 6
  },
  {
    text: "What is the term used to describe the process of creating an image from pixels?",
    choices: [
      "Vectorization",
      "Pixelation",
      "Modeling",
      "Image creation"
    ],
    answer: 1,
    difficulty: 7
  },
  {
    text: "What is the term used to describe the process of creating a static website without using a database?",
    choices: [
      "Front-end development",
      "Back-end development",
      "Full-stack development",
      "Static site development"
    ],
    answer: 0,
    difficulty: 7
  },
  {
    text: "What is the term used to describe the process of creating a dynamic website with the use of a database?",
    choices: [
      "Front-end development",
      "Back-end development",
      "Full-stack development",
      "Dynamic site development"
    ],
    answer: 1,
    difficulty: 8
  },
  {
    text: "What is the term used to describe the process of creating an interactive website with the use of APIs?",
    choices: [
      "Front-end development",
      "Back-end development",
      "Full-stack development",
      "Web application development"
    ],
    answer: 2,
    difficulty: 8
  },
  {
    text: "What is the term used to describe the set of elements that optimize the visibility of a website on search engines?",
    choices: [
      "Search engine optimization",
      "Promotion",
      "Digital marketing",
      "Online advertising"
    ],
    answer: 0,
    difficulty: 9
  },
  {
    text: "What is the term used to describe the process of creating content for a website to attract and retain visitors?",
    choices: [
      "Content marketing",
      "Content development",
      "Web writing",
      "Storytelling"
    ],
    answer: 2,
    difficulty: 9
  },
  {
    text: "What is the term used to describe the process of creating a web application that can be installed on a mobile phone or computer?",
    choices: [
      "Native application development",
      "Hybrid application development",
      "Progressive web application development",
      "Mobile application development"
    ],
    answer: 2,
    difficulty: 10
  },
  {
    text: "What is the term used to describe the process of designing a user interface for a web application?",
    choices: [
      "Usability",
      "Interface design",
      "User experience",
      "Interface development"
    ],
    answer: 1,
    difficulty: 10
  }
];

export default questions;
