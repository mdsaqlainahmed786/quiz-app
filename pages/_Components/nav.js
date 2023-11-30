export default function Navbar({totalScore}) {
  return(
    <>
    <div className="flex items-center justify-between py-1 bg-white/60 backdrop-filter backdrop-blur-md fixed top-0 z-[9999] w-full">
       <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-300 font-medium text-lg select-none ml-3">Quiz Mania</p>
       <p className={`text-md mr-5`}>Score: <span className={`text-md ${totalScore>=0?"text-green-400":"text-red-400"}`}>{totalScore}</span></p>
    </div>
   
    </>
    )
  
}