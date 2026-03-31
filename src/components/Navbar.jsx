import { Menu, X } from 'lucide-react'
import Button from './Button'
import { useState, useEffect } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // This locks the page from scrolling while the luxury menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    // Cleanup on unmount
    return () => { document.body.style.overflow = 'unset' }
  }, [isMenuOpen])

  return (
    <>
      {/* 1. THE HEADER (Always on top) */}
      <header className="flex items-center justify-between p-5 top-4 absolute z-60 w-[95%] left-1/2 -translate-x-1/2 max-w-[1300px]">
          {/* Logo */}
          <a href="/" className="text-2xl text-white italic font-serif tracking-widest relative z-[60]">haven.</a>
      
          <nav>
              {/* Desktop Menu */}
              <ul className='hidden md:flex text-white text-sm items-center justify-between tracking-[0.2em] gap-12'>
                  <li><a href="/" className="hover:text-white/70 transition-colors">Home</a></li>
                  <li><a href="/about" className="hover:text-white/70 transition-colors">About</a></li>
                  <li><a href="/contact" className="hover:text-white/70 transition-colors">Contact</a></li>
              </ul>

              {/* Mobile Menu Toggle */}
              <button 
                className='md:hidden block relative z-[60] p-2' 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                    <X size={32} strokeWidth={1.5} className="transition-transform duration-500 rotate-90 hover:rotate-0" />
                ) : (
                    <Menu color='#fff' size={32} strokeWidth={1.5} /> 
                )}
              </button>
          </nav>

          {/* Hide button on mobile to keep header clean */}
          <div className="hidden md:block relative z-60]">
             <Button text="Get Started" />
          </div>
      </header>


      <div 
        className={`
          fixed inset-0 z-50 bg-white
          flex flex-col justify-center items-center
          transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
          ${isMenuOpen ? '[clip-path:ellipse(150%_100%_at_100%_50%)] pointer-events-auto' : '[clip-path:ellipse(0%_50%_at_150%_0%)] pointer-events-none'}
        `}
      >
          {/* Menu Links with slight upward slide effect */}
          <ul className={`
            flex flex-col gap-10 text-center
            transition-all duration-1000 delay-1-00 ease-in-out
            ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-50 opacity-0'}
          `}>
              <li>
                <a href="/" className="text-5xl font-light  hover:italic transition-all duration-300">Home</a>
              </li>
              <li>
                <a href="/about" className="text-5xl font-light  hover:italic transition-all duration-300">About</a>
              </li>
              <li>
                <a href="/contact" className="text-5xl font-light  hover:italic transition-all duration-300">Contact</a>
              </li>
          </ul>

          {/* Elegant Micro-Footer */}
          <div className={`
            absolute bottom-10 text-white/40 text-xs tracking-[0.3em] uppercase
            transition-opacity duration-1000 delay-300
            ${isMenuOpen ? 'opacity-100' : 'opacity-0'}
          `}>
            Experience Haven.
          </div>
      </div>
    </>
  )
}

export default Navbar