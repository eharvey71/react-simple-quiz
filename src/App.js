import React, { useState, useEffect } from "react";

function App() {
  const [questions, setQuestions] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    fetch("/api/questions")
      .then((response) => response.json())
      .then((json) => setQuestions(json))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    console.log("score has been updated: ", score);
    if (!showScore) return;
    const launchId = window.launchId;
    fetch("/api/score/" + launchId + "/" + score + "/", {
      method: "POST",
    })
      .then((response) => response.json())
      .catch((error) => console.error(error));
  }, [score]);

  const handleAnswerButtonClick = async (isCorrect) => {
    if (isCorrect === true) {
      setScore((score) => score + 1);
      console.log(score);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
      console.log("setShowScore is true:" + score);
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
              Question {currentQuestion + 1} of {questions && questions.length}
            </p>
            <p>----</p>
            <p className="mb-4">
              {questions && questions[currentQuestion].questionText}
            </p>

            <div className="flex space-x-4">
              {questions &&
                questions[currentQuestion].answerOptions.map(
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
