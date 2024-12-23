import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { languages, frameworks, tools } from "../constants"
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from '../styles'
import { useEffect, useState } from "react";
import { PacmanLoader } from "react-spinners";

const Tech = () => {

  const categories = [ languages, frameworks, tools, [] ]

  const [selector, setSelector] = useState(0)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1200)
  }, [selector])

  return (
    <>
      <motion.div variants={textVariant()} className="ml-[3vw]">
        <p className={styles.sectionSubText}>Some Cool Things I Know</p>
        <h2 className={styles.sectionHeadText}><span className="text-[#915eff] glow-text">$ ls</span> Technical Skills</h2>
      </motion.div>

      <div className="flex flex-col justify-start items-center mt-16 min-h-[470px]">
        <h3 className="font-semibold text-secondary italic text-xl">"Learn continually. There’s always ‘one more thing’ to learn!" &nbsp; &nbsp;  - Steve Jobs</h3>
        <div className="flex text-base xs:text-lg sm:text-base gap-8 sm:gap-10 lg:gap-20 mt-16 text-secondary md:text-xl font-semibold items-center w-full justify-center">
            <button className={`${selector === 0 ? 'text-[#cdcdcd] bg-[#1d1836] border-[#915eff] shadow-md shadow-purple-800' : 'bg-tertiary border-tertiary'} flex flex-col 
            justify-center items-center group gap-[2px] w-fit rounded-xl p-1 px-2 sm:p-2 sm:px-4 border-[1px]  hover:text-[#cdcdcd] hover:scale-105 trasition`} 
              onClick={() => {setSelector(0)}}>
              <h1 className="hidden lg:block">Programming Languages</h1>
              <h1 className="block lg:hidden">Languages</h1>
      
            </button>
            <button className={`${selector === 1 ? 'text-[#cdcdcd] bg-[#1d1836] border-[#915eff] shadow-md shadow-purple-800' : 'bg-tertiary border-tertiary'} flex flex-col 
            justify-center items-center group gap-[2px] w-fit rounded-xl p-1 px-2 sm:p-2 sm:px-4 border-[1px]  hover:text-[#cdcdcd] hover:scale-105 trasition`} 
              onClick={() => {setSelector(1);}}>
              <h1 className="hidden sm:block">Libraries/Frameworks</h1>
              <h1 className="block sm:hidden">Frameworks</h1>
        
            </button>
            <button className={`${selector === 2 ? 'text-[#cdcdcd] bg-[#1d1836] border-[#915eff] shadow-md shadow-purple-800' : 'bg-tertiary border-tertiary'} flex flex-col 
            justify-center items-center group gap-[2px] w-fit rounded-xl p-1 px-2 sm:p-2 sm:px-4 border-[1px]  hover:text-[#cdcdcd] hover:scale-105 trasition`} 
              onClick={() => setSelector(2)}>
              <h1 className="hidden sm:block">Tools/Databases</h1>
              <h1 className="block sm:hidden">Tools</h1>
            </button>
        </div>
        <div className="flex justify-center mt-14">
          <div className="flex flex-row flex-wrap justify-center gap-12 max-w-[66rem] items-center">
            {loading ? 
            <div className="text-2xl text-secondary font-semibold mt-8">
              <h1 className="mb-8">Loading...</h1>
              <PacmanLoader color="#915eff" size={40} loading={loading} speedMultiplier={1.2}/>
            </div> 
            : categories[selector].map((selector) => (
              <div className="w-28 h-28" key={selector.name}>
                <BallCanvas icon={selector.icon}></BallCanvas>
                <div className="flex items-center justify-center text-center text-secondary font-semibold text-[18px]">{selector.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default SectionWrapper(Tech, "")