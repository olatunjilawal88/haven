import properties from "../data/properties.json"
import { Bed, Bath, Ruler } from 'lucide-react'
import { motion } from "framer-motion";

const badgeStyles = {
  green: "bg-green-100 text-green-800",
  amber: "bg-amber-100 text-amber-800",
  red: "bg-red-100 text-red-800"
}

const FeaturedDevelopmentSection = () => {
  return (
    <section className="py-20  px-10 bg-neutral-50">
      <div className="max-w-300 mx-auto">
            <p className="bg-neutral-100 rounded-full inline px-3 py-1.5 text-xs tracking-wide">properties</p>
          <h2 className="text-4xl mt-5 mb-10">Featured Developments</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      

      {properties.map((property, index) => (
        
        <motion.div 
          key={property.id} 
          className="group overflow-hidden rounded-lg bg-white shadow-lg pb-5"
          initial={{ opacity: 0, y: 50 }}      
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay:(index +0.1)  * 0.5 }} // staggered delay
          viewport={{ once: true, amount: 0.2 }}
        >

          {/* Image */}
          <div className="relative aspect-video overflow-hidden mb-2">
            <img
              src={property.image}
              alt={property.name}
              className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <span className={`absolute top-4 left-4 text-xs font-medium px-3 py-1 rounded-full ${badgeStyles[property.badgeColor]}`}>
              {property.badge}
            </span>
          </div>

          {/* Card body */}
          <div className="p-4">

            <div className="flex justify-between items-start mb-1">
              {/* Name */}
              <h3 className="text-lg font-semibold tracking-widest text-zinc-900">
                {property.name}
              </h3>

              {/* Price */}
              <p className="text-zinc-900 font-semibold text-base">
                {property.price}
              </p>
            </div>

            {/* Location */}
            <p className="text-zinc-400 text-sm mb-5">
              {property.location}
            </p>

            <span className="h-5px bg-black w-full"></span>

            {/* Stats */}
            <div className="flex justify-between gap-4 text-sm text-zinc-500 mb-4">
              <span className="flex items-center gap-1"><span><Bed size={20}/></span>{property.bedrooms} bed</span>
              <span className="flex items-center gap-1"><span><Bath size={20}/></span>{property.bathrooms} bath</span>
              <span className="flex items-center gap-1"><span><Ruler size={20} /></span>{property.size}</span>
            </div>

            {/* CTA */}
            <a href="#contact"
              className="text-sm tracking-widest uppercase text-zinc-900 underline underline-offset-4 hover:text-zinc-500 transition-colors"
            >
              {property.cta} →
            </a>

          </div>
        </motion.div>
      ))}
    </div>

          {/* Bottom CTA */}
          <div className="mt-10 text-center">
            
              <a href="#contact"
              className="text-sm tracking-widest uppercase text-neutral-900 underline underline-offset-4 hover:text-zinc-900 transition-colors"
            >
              Enquire about all developments →
            </a>
          </div>
         </div>
         </section>
     
      
  )
}

export default FeaturedDevelopmentSection