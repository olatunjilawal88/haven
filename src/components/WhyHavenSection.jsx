import { motion } from "framer-motion"
import Countup from 'react-countup'
import { useInView } from 'react-intersection-observer';

const MyAnimatedComponent = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.5,    // Trigger when 50% visible
  });

  return (
    <div ref={ref}>
      {inView ? (
        <h1 className="animate-fade-in">I am on screen!</h1>
      ) : (
        <h1>Waiting to scroll...</h1>
      )}
    </div>
  );
};


const WhyHaven = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false });
  return (
    <section id="about" className="py-24 max-w-300px mx-auto md:flex-row flex flex-col items-center justify-between
     px-8 md:px-20">
      {/* left side */}
      <div>
          {/* Heading */}
          <p className="bg-neutral-100 rounded-full inline px-3 py-1.5 text-xs tracking-wide">Why Choose Our Property</p>
        <div className="my-16">
          <h2 className="text-4xl md:text-5xl tracking-wide mb-4">
            Why <span className="italic text-neutral-600 font-style"> Haven?</span> 
          </h2>

          <p className="font-light max-w-lg text-xs text-neutral-600 mb-15">
         HAVEN develops a carefully selected number of luxury homes across Lagos's most coveted addresses each year. Every detail — from site to handover — is handled with one standard in mind: exceptional.
          </p>
          <div ref={ref} className="grid grid-cols-2 gap-10">
  <div>
    <h4 className="text-5xl font-style mb-3">$ {
      inView &&
      <Countup start={0}
        end={12}
        duration={2.75}>
      </Countup>}M+</h4>
    <p className="text-[13px] text-neutral-600 capitalize">Project value</p>
  </div>
  <div>
    <h4 className="text-5xl font-style mb-3">
      {inView && <Countup start={0}
        end={90}
        duration={2.75}>
      </Countup>}%</h4>
    <p className="text-[13px] text-neutral-600 capitalize">Client retention rate</p>
  </div>
  <div>
    <h4 className="text-5xl font-style mb-3"> {inView && <Countup start={0}
        end={200}
        duration={2.75}>
      </Countup>}+</h4>
    <p className="text-[13px] text-neutral-600 capitalize">Completed project</p>
  </div>
  <div>
    <h4 className="text-5xl font-style mb-3"> {inView && <Countup start={0}
        end={120}
        duration={2.75}>
      </Countup>}+</h4>
    <p className="text-[13px] text-neutral-600 capitalize">Happy clients</p>
  </div>
</div>
          
        </div>

        
      </div>
   <motion.div 
   initial={{ scale: 0.7 }}
    whileInView={{scale: 1}}
    transition={{ duration: 1, ease: "easeOut" }}
    viewport={{ once: false, amount: 0 }}

   className="relative w-120 h-130 overflow-hidden">
    
    {/* 2. The image gets the rounded corners directly now */}
    <motion.img 
    initial={{ scale: 1.5 }}
    whileInView={{scale: 1}}
    transition={{ duration: 2, ease: "easeOut" }}
    viewport={{ once: false, amount: 0.4 }}

      src="src/assets/whyus-img.jpg" 
      className="h-full w-full object-cover rounded-lg" 
      alt="Haven Ridge Home" 
    />
    
    {/* 3. The paragraph is now INSIDE the relative div */}
    {/* Positioned at the bottom center, overlapping the bottom edge */}
    <motion.p 
    initial={{ y: 95, x: "-50%" }}
  whileInView={{ y: 0, x: "-50%" }}
  transition={{ duration: 0.3, ease: "easeOut", delay: 2 }}
  viewport={{ once: true, amount: 0 }}
    className="absolute bottom-6 left-1/2 w-[95%] z-10 bg-white shadow-2xl rounded-xl p-3 text-xs text-center text-gray-700">
      "Moving into HAVEN RIDGE was the easiest decision we've made as a family. From the first viewing to the day we got our keys, everything was handled with a level of care we didn't expect was possible in Lagos."
    </motion.p>

  </motion.div>
        

    </section>
  )
}

export default WhyHaven