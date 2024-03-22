import { useState } from 'react'
import './App.css'
import { BsFillMoonStarsFill, BsFillSunFill, BsFillSunriseFill } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BiLogoReact } from "react-icons/bi";
import { SiNextdotjs } from "react-icons/si";
import { GrNode } from "react-icons/gr";
import { SiExpress } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { BiLogoTypescript } from "react-icons/bi";
import heroimage from "../public/dev-ed-wave.png";
import one from "../public/3d.jpg";
import two from "../public/google.jpg";
import three from "../public/ecommerce.jpg";
import four from "../public/crypton.jpg";
import five from "../public/spend-billion.jpg";

function App() {
  const [DarkMode, setDarkMode] = useState(false);


  return (
    <div className={DarkMode ? "dark" : ""}>
      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-black'>
        <section className='min-h-screen'>
          <nav className='py-10 flex justify-between'>
            <span className={DarkMode ? 'text-white p-3 text-sm md:text-xl ' : 'text-black p-3  text-sm md:text-xl '} >P O R T F O L I O</span>


            <ul className='flex items-center gap-8'>

              <li className='p-3 bg-black rounded-3xl cursor-pointer text-xl' onClick={() => setDarkMode(!DarkMode)}>{DarkMode ? (<BsFillSunFill color='yellow' size={30} />) : (<BsFillMoonStarsFill color='orange' />)}</li>

            </ul>
          </nav>

          <div className='text-center px-10 py-2 '>

          <div className='text-3xl flex justify-center gap-6 py-3 text-black '>
            <a href="https://github.com/aryanofficialjain/" target='_blank'><AiFillGithub className='dark:text-white' /></a>
            <a href="https://www.linkedin.com/in/aryan-jain-unique/" target='_blank'><AiFillLinkedin className='dark:text-white' /></a>
            <a href="https://twitter.com/jaryanofficial" target='_blank'><AiFillTwitterCircle className='dark:text-white' /></a>
          </div>
            <h1 className='text-3xl  py-2 text-green-600 font-medium md:text-4xl '>Aryan Jain</h1>
            <h2 className='text-xl py-2 md:text-5xl dark:text-white '>Full Stack Developer</h2>
            <p className=' flex gap-3 items-center justify-center mt-4 text-3xl dark:text-white'>
            <SiExpress />
            <BiLogoReact />
            <SiNextdotjs />
            <GrNode />
            <BiLogoTypescript />
            <BiLogoMongodb />

            </p>
          </div>


          <div className='relative bg-gradient-to-b from-green-600 rounded-full w-80 h-80 mt-20 mx-auto md:w-96 md:h-96'>
            <img src={heroimage} alt="" className='object-cover' />
          </div>
        </section>
        <br /><br />

        <h2 className='text-center p-6 text-2xl md:text-5xl dark:text-white'>Web Apps</h2>

        <section className='flex flex-col md:flex-row flex-wrap gap-12 pb-12 items-center w-[100%] mx-auto justify-center mt-8 '>
          <a href="https://futuristic-3-d-website.vercel.app/" target='_blank'><img className='w-full  rounded-3xl  shadow-xl hover:shadow-2xl' src={one} alt="" /></a>
          <a href="https://searchify-mu.vercel.app" target='_blank'><img className='w-full  rounded-3xl shadow-xl hover:shadow-2xl ' src={two} alt="" /></a>
          <a href="https://react-ecommerce-store-bay.vercel.app" target='_blank'><img className='w-full  rounded-3xl shadow-xl hover:shadow-2xl ' src={three} alt="" /></a>
          <a href="https://real-time-cryptocurrency-tracker.vercel.app/" target='_blank'><img className='w-full  rounded-3xl shadow-xl hover:shadow-2xl ' src={four} alt="" /></a>
          <a href="https://spend-billionares-money.vercel.app/" target='_blank'><img className='w-full  rounded-3xl shadow-xl hover:shadow-2xl ' src={five} alt="" /></a>
        </section>


      </main>



    </div>
  )
}

export default App
