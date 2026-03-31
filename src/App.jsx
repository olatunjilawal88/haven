
import { motion } from 'framer-motion';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer'
import FeaturedDevelopmentSection from './components/FeaturedDevelopmentSection'
import ProcessSection from './components/ProcessSection'
import ContactSection from './components/ContactSection'
import WhyHavenSection from './components/WhyHavenSection'
import ContactLinks from './components/ContactLinks';

const App = () => {

  return (
    <div className="relative w-full overflow-hidden ">
    
      <Navbar />  
    <main>
      
      <HeroSection />

      <FeaturedDevelopmentSection />

      <WhyHavenSection />

      <ProcessSection />

      <ContactSection />
      <ContactLinks />
    </main>
          

      <Footer />
     
      
    </div>
  );
};

export default App;