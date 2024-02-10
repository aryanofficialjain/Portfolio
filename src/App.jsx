import { useState } from 'react'
import './App.css'
import { BsFillMoonStarsFill, BsFillSunFill, BsFillSunriseFill } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import heroimage from "../public/dev-ed-wave.png";
import one from "../public/web1.png";
import two from "../public/web2.png";
import three from "../public/screen.jpg";

function App() {
  const [DarkMode, setDarkMode] = useState(false);


  return (
    <div className={DarkMode ? "dark" : ""}>
      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-black'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <span className={ DarkMode ? 'text-white p-3 text-sm md:text-xl ' : 'text-black p-3  text-sm md:text-xl '  } >P O R T F O L I O</span>


            <ul className='flex items-center gap-8'>

            <li className='p-3 bg-black rounded-3xl cursor-pointer text-xl' onClick={() => setDarkMode(!DarkMode)}>{DarkMode ? (<BsFillSunFill color='yellow' size={30} />) : (<BsFillMoonStarsFill color='orange' />)}</li>
              <li className='bg-green-600 text-white px-4 py-2 rounded'>Resume</li>
            </ul>
          </nav>

          <div className='text-center px-10 py-2 '>
            <h1 className='text-3xl  py-2 text-green-600 font-medium md:text-6xl '>Aryan Jain</h1>
            <h2 className='text-xl py-2 md:text-3xl dark:text-white '>FullStack Developer</h2>
            <p className='text-md p-2 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white'>{`< Your Vision My Code />`}</p>
          </div>

          <div className='text-3xl flex justify-center gap-6 py-3 text-black '>
            <AiFillGithub className='dark:text-white' />
            <AiFillLinkedin className='dark:text-white' />
            <AiFillTwitterCircle className='dark:text-white' />
          </div>

          <div className='relative bg-gradient-to-b from-green-600 rounded-full w-80 h-80 mt-20 mx-auto md:w-96 md:h-96'>
            <img src={heroimage} alt="" className='object-cover' />
          </div>
        </section>
        <br /><br />

      </main>
    </div>
  )
}

export default App
