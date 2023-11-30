import {useState} from "react"
import QuestionCard from "./questioncard"
import data from "@/data.js"
import Navbar from "./nav"
export default function QuizCard() {
  const [totalScore, setTotalScore] = useState(0);

  const updateTotalScore = (value) => {
    setTotalScore((prev) => prev + value);
  };

  return(
    <>
    <Navbar totalScore={totalScore}/>
    <div className="flex flex-col space-y-5 justify-center items-center mt-10">
    <p className="mt-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-300 font-medium text-4xl select-none">Quiz Mania</p>
    <p className="text-sm flex justify-end items-center text-neutral-400">Enchance your knowledge by proving your result!!</p>
    <p className="text-sm flex justify-center items-center text-neutral-400">For correct answer: +1</p>
    <p className="text-sm flex justify-center items-center text-neutral-400">For Wrong answer: -1</p>
    {

      data?.map((question, index)=>(
        <div key={question.id}>
       <QuestionCard 
         number = {question.id}
         questions={question.text} 
         optionOne ={question.option1}
         optionTwo ={question.option2}
         optionThree ={question.option3}
         optionFour ={question.option4}
         ans={question.ans}
         updateTotalScore={updateTotalScore}
     
       /> 
        </div>  
      ))
    }
  
   </div>
    </>
    )
  
}