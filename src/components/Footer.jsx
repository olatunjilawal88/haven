
const Footer = () => {
  return (
    <footer className = 'w-full pt-15 px-5 pb-5 flex flex-col gap-10 items-center justify-between  bg-neutral-50'>
    <div className="max-w-300 mx-auto w-full">
      <div className="flex md:flex-row flex-col items-center justify-between w-full">
        <h3 className="font-style italic sont-semibold text-2xl">haven.</h3>

       

    
        <ul  className="flex flex-col md:flex-row items-center justify-center md:items-start gap-6 text-sm">
            <li><a>Properties</a></li>
            <li><a>About</a></li>
            <li><a>Contact</a></li>
            <li><a>Book a viewing</a></li>
        </ul>
      </div>
      <div className="flex  md:flex-row flex-col items-center justify-between border-t border-neutral-300 py-10 w-full">
        <p className = 'text-sm capitalize'>© 2026 HAVEN Lagos. All rights reserved.</p>
        <ul className="flex gap-3 text-sm">
          <li><a href="">Privacy</a></li>
          <li><a href="">Terms & conditions</a></li>
          
        </ul>
      </div>
    </div>
      
      
        
       
    </footer>
  )
}

export default Footer