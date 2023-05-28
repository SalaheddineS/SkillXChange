import React, { useState } from 'react';
import '../Quiz1/index.css';
import questions from '../Quiz3/quizdata';
import '../Quiz6/index.css'

interface Question {
  text: string;
  choices: string[];
  answer: number;
  difficulty: number;
}

const QuizPage6 = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [scores, setScores] = useState<number[]>(new Array(10).fill(0));
  const [totalScore, setTotalScore] = useState(0);

  const handleOptionSelect = (optionIndex: number) => {
    setSelectedOption(optionIndex);
  };

  const handleSubmit = () => {
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedOption !== null && selectedOption === currentQuestion.answer) {
      // Increment the score for the current question's difficulty level
      const newScores = [...scores];
      newScores[currentQuestion.difficulty - 1]++;
      setScores(newScores);
      setTotalScore(totalScore + 1);
    }

    setSelectedOption(null);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const currentQuestion = questions[currentQuestionIndex];

  // Calculate the total number of questions and the total number of correct answers
  const totalQuestions = questions.length;
  const totalCorrectAnswers = totalScore;

  // Calculate the percentage of correct answers
  const percentageCorrect = (totalCorrectAnswers / totalQuestions) * 100;

  // Determine the message to display based on the user's score
  let message = '';
  if (percentageCorrect < 50) {
    message = 'You have some small pieces of information about this skill. Think about forging it through our application!..';
  } else if (percentageCorrect < 95) {
    message = 'You have a moderate level of knowledge about this skill. Think about forging it through our application!.';
  } else {
    message = 'Congratulations, you have a great knowledge of this skill! Think about forging it through our application!.';
  }

  return (
    <>
      {currentQuestionIndex < questions.length ? (
        <div className="quiz-container">
          <h2>Question {currentQuestionIndex + 1}:</h2>
          <p>{currentQuestion.text}</p>
          <div className="options">
            {currentQuestion.choices.map((choice, index) => (
              <label htmlFor={`option${index}`} key={`option${index}`}>
                <input
                  type="radio"
                  id={`option${index}`}
                  name="answer"
                  value={index}
                  checked={selectedOption === index}
                  onChange={() => handleOptionSelect(index)}
                />
                <span>{choice}</span>
              </label>
            ))}
          </div>
          <button onClick={handleSubmit} style={{backgroundColor:"#9B26B6",color:"#fff",cursor:"pointer",border:"none",borderRadius:"5px",padding:"10px 20px"}} >send</button>
        </div>
      ) : (
        <div className="results-container">
          <div className="glass-container">
            <div className="score">
              <h2>Votre score est :</h2>
              <p>{totalCorrectAnswers}/{totalQuestions}</p>
            </div>
            <div className="message white-text">{message}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default QuizPage6;