import heroBg from '../assets/hero-bg.png';

const steps = [
  {
    id: 1,
    number: "01",
    title: "Book a Private Consultation",
    body: "Tell us what you're looking for — location, size, timeline, budget. This conversation is confidential, free, and completely without obligation. We listen before we recommend anything."
  },
  {
    id: 2,
    number: "02",
    title: "Private Viewing",
    body: "We arrange an exclusive viewing of your shortlisted developments at a time that suits you. No crowds, no open houses. Just you, your family, and your HAVEN advisor walking the space together."
  },
  {
    id: 3,
    number: "03",
    title: "Seamless Handover",
    body: "Once you've decided, our legal and finance team handles everything — title documentation, payment structuring, and a full property handover with inspection. You collect your keys on time, every time."
  },
  {
    id: 4,
    number: "04",
    title: "Seamless Handover",
    body: "Once you've decided, our legal and finance team handles everything — title documentation, payment structuring, and a full property handover with inspection. You collect your keys on time, every time."
  }
]

const Process = () => {
  return (
    <section id="process" className="py-24 px-8 md:px-20 bg-neutral-50">

      {/* Heading */}
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-style text-zinc-900 mb-4 ">
          How It Works
        </h2>
        <p className="text-zinc-500 text-base font-light max-w-lg">
          Three steps. One dedicated advisor. Zero pressure.
        </p>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {steps.map((step) => (
          <div key={step.id} className="flex justify-between rounded-2xl h-32 overflow-hidden p-4 bg-[url('../assets/hero-bg.jpg)] bg-cover bg-center bg-black/50 bg-blend-multiply"
          style={{ backgroundImage: `url(${heroBg})` }}
          
          >

            {/* Number */}
            <span className="text-9xl font-light text-white/50 mb-6 leading-none translate-y-6">
              {step.number}
            </span>

            <div className="flex flex-col w-[50%]">
              {/* Title */}
            <h3 className="text-white text-lg font-medium tracking-wide mb-4 ">
              {step.title}
            </h3>

            {/* Body */}
            <p className="text-white text-sm leading-relaxed flex-1">
              {step.body}
            </p>
            </div>

            

          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-20">
        
          <a href="#contact"
          className="text-sm tracking-widest uppercase text-zinc-900 underline underline-offset-4 hover:text-zinc-400 transition-colors"
        >
          Begin your journey →
        </a>
      </div>

    </section>
  )
}

export default Process