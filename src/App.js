import React, { useState } from "react";

function App() {
  const questions = [
    {
      questionText: "Who is Prime Minister of India?",
      answerOptions: [
        { answerText: "Vijay Rupani", isCorrect: false },
        { answerText: "Manmohan singh", isCorrect: false },
        { answerText: "Narendra Modi", isCorrect: true },
        { answerText: "Deep Patel", isCorrect: false },
      ],
    },
    {
      questionText: "Who is CEO of Tata?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Ratan Tata", isCorrect: true },
        { answerText: "Mukesh Ambani", isCorrect: false },
        { answerText: "Gautam Adani", isCorrect: false },
      ],
    },
    {
      questionText: "who is richest person in the world?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Mukesh Ambani", isCorrect: false },
        { answerText: "Warren Buffett", isCorrect: false },
      ],
    },
    {
      questionText: "how many countries in the world?",
      answerOptions: [
        { answerText: "120", isCorrect: false },
        { answerText: "183", isCorrect: false },
        { answerText: "170", isCorrect: false },
        { answerText: "195", isCorrect: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }

    const nextQuetions = currentQuestion + 1;
    if (nextQuetions < questions.length) {
      setCurrentQuestion(nextQuetions);
    } else {
      setShowScore(true);
    }
  };

  return (
    <>
        <div className="bg-white pt-10 pb-8 shadow-xl sm:mx-auto sm:rounded-lg sm:px-10 w-128">
          <h1 className="mb-4 text-4xl font-extrabold">Quiz</h1>
          {showScore ? (
            <div>
              You scored {score} out of {questions.length}
            </div>
          ) : (
            <>
              <p>
                Question {currentQuestion + 1} of {questions.length}
              </p>
              <p>----</p>
              <p className="mb-4">{questions[currentQuestion].questionText}</p>

              <div className="flex space-x-4">
                {questions[currentQuestion].answerOptions.map(
                  (answerOptions, index) => (
                    <button
                      key={index}
                      className="text-white sm:px-2 sm:py-2 bg-sky-700 hover:bg-sky-800 rounded"
                      onClick={() =>
                        handleAnswerButtonClick(answerOptions.isCorrect)
                      }
                    >
                      {answerOptions.answerText}
                    </button>
                  )
                )}
              </div>
            </>
          )}
        </div>
    </>
  );
}

export default App;
