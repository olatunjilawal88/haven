import { Phone, Clock, MailCheck } from 'lucide-react'

const ContactLinks = () => {
  return (
    <section className="flex gap-20 px-5 py-10">
              <div className="flex flex-col items-center gap-1 w-full">
                <div className="rounded-full p-4  bg-neutral-50 mb-2">
                  <Phone />
                </div>
                <h4>
                  Call & Whatsapp
                </h4>
                <p className="text-neutral-600">
                  +234 812 345 6789
                </p>
                <p className="text-neutral-600">
                  +234 812 345 6789
                </p>
              </div>
              <div className="flex flex-col items-center gap-1 w-full">
                <div className="rounded-full p-4 bg-neutral-50 mb-2">
                  <Clock />
                </div>
                <h4>
                  Working Hours
                </h4>
                <p className="text-neutral-600">
                  Daily: 8am-5pm
                </p>
                <p className="text-neutral-600">
                  Friday: Closed
                </p>
              </div>
              <div className="flex flex-col items-center gap-1 w-full">
                <div className="rounded-full p-4 bg-neutral-50 mb-2">
                  <MailCheck />
                </div>
                <h4>
                  Write To Us
                </h4>
                <p className="text-neutral-600">
                  hello@havenlagos.com
                </p>
              </div>

            </section>
  )
}

export default ContactLinks