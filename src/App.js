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
      <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
        <div class="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
          <div class="mx-auto max-w-md">
            <h1 className="mb-4 text-4xl font-extrabold">Quiz</h1>

            {showScore ? (
              <div className="score-section">
                You scored {score} out of {questions.length}
              </div>
            ) : (
              <>
                <div className="flex items-center">
                  <div className="space-y-4">
                    Question {currentQuestion + 1} of {questions.length}
                  </div>
                  <div className="space-y-4">
                    {questions[currentQuestion].questionText}
                  </div>
                </div>

                <div className="answer-section">
                  {questions[currentQuestion].answerOptions.map(
                    (answerOptions) => (
                      <button
                        className="text-white px-4 sm:px-8 py-2 sm:py-3 bg-sky-700 hover:bg-sky-800"
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
        </div>
      </div>
    </>
  );
}

export default App;
