import { useState } from 'react';

export default function QuestionCard({
  questions,
  optionOne,
  optionTwo,
  optionThree,
  optionFour,
  ans,
  number,
  updateTotalScore,
}) {
  const [buttonDisable, setButtonDisable] = useState(false);
  const [score, setScore] = useState(0);
  const [optionColors, setOptionColors] = useState({
    optionOne: '',
    optionTwo: '',
    optionThree: '',
    optionFour: '',
  });

  const checkAnswer = (checkans) => {
    setButtonDisable(true);

    setOptionColors({
      optionOne: ans === 1 ? 'bg-green-300' : 'bg-red-300',
      optionTwo: ans === 2 ? 'bg-green-300' : 'bg-red-300',
      optionThree: ans === 3 ? 'bg-green-300' : 'bg-red-300',
      optionFour: ans === 4 ? 'bg-green-300' : 'bg-red-300',
    });

    if (checkans === ans) {
      updateTotalScore(1);
      setScore(prev=>prev+1)
    } else {
      updateTotalScore(-1);
      setScore(prev=>prev-1)
    }
  };

  return (
    <>
      <div className="shadow-lg h-[550px] w-[350px] select-none">
        <div className="mt-5 mx-2 rounded-full flex justify-center flex-col px-5 py-5 border border-gray-300">
          <p className="text-md flex justify-items-center">{number}Q) {questions}</p>
        </div>
        <p className="mt-11 text-neutral-500 text-sm -mb-5 ml-4">Select any single Option</p>
        <p className="text-neutral-500 text-sm flex justify-end mr-5">Score: {score}</p>
        
        <div className={`${optionColors.optionOne} mt-5 mx-2 rounded-full px-5 py-5 text-sm border border-gray-500`}>
          <button
            disabled={buttonDisable}
            className={`h-7 w-full flex justify-start`}
            onClick={() => checkAnswer(1)}
          >
            <span className="flex justify-start">1)</span> &nbsp;{optionOne}
          </button>
        </div>
        <div className={`${optionColors.optionTwo} mt-5 mx-2 rounded-full px-5 py-5 text-sm text-sm border border-gray-500`}>
          <button
            disabled={buttonDisable}
            className={`h-7 w-full flex justify-start items-start`}
            onClick={() => checkAnswer(2)}
          >
            <span className="flex justify-start">2)</span> &nbsp;{optionTwo}
          </button>
        </div>
        <div className={`${optionColors.optionThree} mt-5 mx-2 rounded-full text-sm px-5 py-5 border border-gray-500`}>
          <button
            disabled={buttonDisable}
            className={`h-7 w-full flex justify-start`}
            onClick={() => checkAnswer(3)}
          >
            <span className="flex justify-start">3)</span>&nbsp;{optionThree}
          </button>
        </div>
        <div className={`${optionColors.optionFour} text-sm mt-5 mx-2 rounded-full px-5 py-5 border border-gray-500`}>
          <button
            disabled={buttonDisable}
            className={`h-7 w-full flex justify-start`}
            onClick={() => checkAnswer(4)}
          >
            <span className="flex justify-start">4)</span>&nbsp;{optionFour}
          </button>
        </div>
      </div>
    </>
  );
}
