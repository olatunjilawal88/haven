import heroBg from '../assets/hero-bg.png';
import { motion } from 'framer-motion'


const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen p-12 lg:px-16  w-full overflow-hidden flex flex-col"
    >
      <motion.img 
        src={heroBg}
        alt="Haven Ridge"
        className="absolute inset-0 w-full h-screen object-cover"
        initial={{ scale: 1 }}
         whileInView={{scale: 1.2}}
        transition={{ duration: 5, ease: "easeOut" }} // Slow 8-second zoom
        viewport={{once: false, amount: 0}}
      />

      <div className="absolute inset-0 bg-black/30 object-cover" />


      <div className="relative z-10 w-full max-w-[1300px] mx-auto">
         <p className="text-white/90 tracking-[0.3em] lg:text-left text-[10px] mt-30 uppercase mb-4">
      Lagos · Lekki · Ikoyi · Eko Atlantic
    </p>
        <h1 className="text-4xl sm:text-6xl xs:text-5xl -ml-1 mb-10 text-white md:text-7xl md:w-[80%] leading-none">
         Elevate Your Standard of Living
        </h1>
        <a href="#properties" className='bg-white px-6 py-2 text-black rounded-md'>Explore now</a>
   
      </div>



    </section>
  )
}

export default HeroSection;