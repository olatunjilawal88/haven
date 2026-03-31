import { useState } from "react"
import {motion} from 'framer-motion'


const developments = [
  "HAVEN AZURE — Eko Atlantic",
  "HAVEN RIDGE — Lekki Phase 1",
  "HAVEN COURT — Old Ikoyi",
  "Not sure yet"
]

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    development: "",
    message: ""
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // connect to Formspree or backend later
    console.log(formData)
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-10 min-h-screen overflow-hidden max-width-[1300px] px-8 md:px-20 bg-white">
        {/* Heading */}
                 <h2 className="text-4xl md:text-5xl mb-10 text-black">
                  Contact Us
                </h2> 


      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-start">

        {/* Left side */}
               {/* Contact details */}
            
            <div className="col-span-2 p-2">
            {submitted ? (

              // Success state
              <div className="border border-neutral-300 rounded-lg p-10 text-center">
                <p className="text-black text-xl font-light tracking-wide mb-3">
                  Thank you.
                </p>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Your enquiry has been received. A dedicated HAVEN advisor will be in touch within 24 hours.
                </p>
              </div>

            ) : (
                <div className="">
              
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                  <div className="md:flex-row md:gap-3 flex gap-5 flex-col">
                     {/* Full Name */}
                <div className="w-full"> 
                  <label className="text-neutral-900 text-xs mb-2 block">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Adaeze Okonkwo"
                    required
                    className="w-full bg-neutral-50 rounded-xl text-white text-xs px-4 py-3 focus:outline-none focus:border-white transition-colors placeholder:text-zinc-500"
                  />
                  </div>
                  
                   {/* Email */}
                  <div className="w-full">
                    <label className="text-black text-xs mb-2 block">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="adaeze@email.com"
                      required
                      className="w-full bg-neutral-50 rounded-xl text-white text-xs px-4 py-3 focus:outline-none focus:border-white transition-colors placeholder:text-zinc-500"
                    />
                  </div>
                  </div>

                    <div className="md:flex-row md:gap-3 flex gap-5 flex-col"> 
                      {/* Phone */}
                      <div className="w-full">
                      <label className="text-black text-xs mb-2 block">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+234 801 234 5678"
                        required
                        className="w-full bg-neutral-50 rounded-xl text-white text-xs px-4 py-3 focus:outline-none focus:border-white transition-colors placeholder:text-zinc-500"
                      />
                    </div>

                  

                    {/* Development dropdown */}
                    <div className="w-full">
                      <label className="text-black text-xs mb-2 block">
                        Which Development Interests You?
                      </label>
                      <select
                        name="development"
                        value={formData.development}
                        onChange={handleChange}
                        required
                        className="w-full bg-neutral-50 rounded-xl text-black text-xs px-4 py-3 focus:outline-none focus:border-white transition-colors placeholder:text-zinc-500"
                      >
                        <option value="" disabled>Select a development</option>
                        {developments.map((dev) => (
                          <option key={dev} value={dev}>{dev}</option>
                        ))}
                      </select>
                    </div>

                  </div>

               

                {/* Message */}
                <div>
                  <label className="text-black text-xs mb-2 block">
                    Message <span className="text-zinc-600 normal-case tracking-normal">(optional)</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your timeline, budget, or family size..."
                    rows={4}
                    className="w-full bg-neutral-50 rounded-xl text-black text-xs px-4 py-3 focus:outline-none focus:border-white transition-colors placeholder:text-zinc-500 resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className=" text-white text-sm py-4 md:w-[40%] hover:opacity-[0.9] w-full rounded-full bg-neutral-900 transition-all mt-2"
                >
                  Request a Private Viewing 
                </button>

              </form>
                </div>

            )}
          </div>

          {/* Right side — form */}
          <div className=" flex-col gap-6 h-full col-span-1 md:block hidden">

            <motion.div 
            initial={{ clipPath: "inset(0% 80% 0% 0%)"}} 
            whileInView={{ clipPath: "inset(0% 0% 0% 0%)"}} // "Displays full"
            transition={{ duration: 3, ease: "easeOut" }}
            viewport={{ once: true, amount: 0. }} 

            className="h-full w-full overflow-hidden rounded-lg">
              <img 
              className="h-full w-full object-cover rounded-lg"
              
              src="src/assets/ridge.jpg" />
            </motion.div>

            </div>
        </div> 


           
    </section>
  )
}

export default Contact