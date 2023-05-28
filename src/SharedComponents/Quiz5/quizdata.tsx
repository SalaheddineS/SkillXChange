interface Question {
  text: string;
  choices: string[];
  answer: number;
  difficulty: number;
}

const questions: Question[] = [
  {
    text: "What is the organ responsible for the production of insulin in the human body?",
    choices: [
      "The pancreas",
      "The liver",
      "The brain",
      "The heart"
    ],
    answer: 0,
    difficulty: 1
  },
  {
    text: "What is the term used to describe high blood pressure?",
    choices: [
      "Hypertension",
      "Hypotension",
      "Tachycardia",
      "Bradycardia"
    ],
    answer: 0,
    difficulty: 1
  },
  {
    text: "What is the term used to describe the disease characterized by progressive destruction of neurons?",
    choices: [
      "Alzheimer's disease",
      "Parkinson's disease",
      "Multiple sclerosis",
      "Huntington's disease"
    ],
    answer: 0,
    difficulty: 2
  },
  {
    text: "What is the term used to describe the disease characterized by a progressive decrease in bone density?",
    choices: [
      "Osteoporosis",
      "Arthritis",
      "Gout",
      "Lupus"
    ],
    answer: 0,
    difficulty: 2
  },
  {
    text: "What is the term used to describe the disease characterized by chronic inflammation of the respiratory tract?",
    choices: [
      "Asthma",
      "Bronchitis",
      "Pneumonia",
      "Emphysema"
    ],
    answer: 0,
    difficulty: 3
  },
  {
    text: "What is the term used to describe the disease characterized by excessive glucose production in the blood?",
    choices: [
      "Diabetes",
      "Hypothyroidism",
      "Hyperthyroidism",
      "Hypercholesterolemia"
    ],
    answer: 0,
    difficulty: 3
  },
  {
    text: "What is the term used to describe the disease characterized by inflammation of the gastric mucosa?",
    choices: [
      "Gastritis",
      "Ulcer",
      "Hiatal hernia",
      "Gastroesophageal reflux"
    ],
    answer: 0,
    difficulty: 4
  },
  {
    text: "What is the term used to describe the disease characterized by inflammation of the blood vessel walls?",
    choices: [
      "Vasculitis",
      "Atherosclerosis",
      "Pulmonary embolism",
      "Deep vein thrombosis"
    ],
    answer: 0,
    difficulty: 4
  },
  {
    text: "What is the term used to describe the disease characterized by inflammation of the skin?",
    choices: [
      "Eczema",
      "Psoriasis",
      "Acne",
      "Rosacea"
    ],
    answer: 0,
    difficulty: 5
  },
  {
    text: "What is the term used to describe the disease characterized by excessive uric acid production in the blood?",
    choices: [
      "Gout",
      "Osteoarthritis",
      "Arthritis",
      "Fibromyalgia"
    ],
    answer: 0,
    difficulty: 5
  },
  {
    text: "What is the term used to describe the disease characterized by inflammation of the skin in reaction to an allergen?",
    choices: [
      "Urticaria",
      "Eczema",
      "Psoriasis",
      "Rosacea"
    ],
    answer: 0,
    difficulty: 6
  },
  {
    text: "What is the term used to describe the disease characterized by the presence of red, scaly plaques on the skin?",
    choices: [
      "Psoriasis",
      "Eczema",
      "Urticaria",
      "Rosacea"
    ],
    answer: 0,
    difficulty: 6
  },
  {
    text: "What is the term used to describe the disease characterized by the accumulation of fluid in the body tissues?",
    choices: [
      "Edema",
      "Lymphangitis",
      "Phlebitis",
      "Arterial thrombosis"
    ],
    answer: 0,
    difficulty: 7
  },
  {
    text: "What is the term used to describe the disease characterized by inflammation of the thyroid gland?",
    choices: [
      "Thyroiditis",
      "Hypothyroidism",
      "Hyperthyroidism",
      "Goiter"
    ],
    answer: 0,
    difficulty: 7
  },
  {
    text: "What is the term used to describe the disease characterized by a decrease in kidney function?",
    choices: [
      "Kidney failure",
      "Liver failure",
      "Heart failure",
      "Respiratory failure"
    ],
    answer: 0,
    difficulty: 8
  },
  {
    text: "What is the term used to describe the disease characterized by the accumulation of fat in the liver?",
    choices: [
      "Hepatic steatosis",
      "Cirrhosis",
      "Hepatitis",
      "Liver cancer"
    ],
    answer: 0,
    difficulty: 8
  },
  {
    text: "What is the term used to describe the disease characterized by impaired heart function?",
    choices: [
      "Heart failure",
      "Myocardial infarction",
      "Cardiac arrhythmia",
      "Atrial fibrillation"
    ],
    answer: 0,
    difficulty: 9
  },
  {
    text: "What is the term used to describe the disease characterized by the buildup of plaque in the arteries?",
    choices: [
      "Atherosclerosis",
      "Pulmonary embolism",
      "Deep vein thrombosis",
      "Vasculitis"
    ],
    answer: 0,
    difficulty: 9
  },
  {
    text: "What is the term used to describe the disease characterized by vision loss due to optic nerve damage?",
    choices: [
      "Glaucoma",
      "Cataract",
      "Age-related macular degeneration",
      "Diabetic retinopathy"
    ],
    answer: 0,
    difficulty: 10
  },
  {
    text: "What is the term used to describe the disease characterized by memory loss and cognitive decline?",
    choices: [
      "Alzheimer's disease",
      "Parkinson's disease",
      "Multiple sclerosis",
      "Huntington's disease"
    ],
    answer: 0,
    difficulty: 10
  }
];

export default questions;
