"use client"

import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import Image from "next/image"

import pic1 from "@/app/signin/Premium Vector _ Smart female doctor presenting with Projector.jpg"
import pic2 from "@/app/signin/You disappoint me, dont do this_ Sad.jpg"
import pic3 from "@/app/signin/male dentist hd - بحث Google_.jpg"

const doctors = [
  { name: "Dr. Belouzdad", specialty: "Orthodontist", rating: 4.9,description: "We provide top-quality dental care with a focus on patient comfort and cutting-edge technology. Our team of experienced", image: pic1 },
  { name: "Dr. Benaicha", specialty: "Periodontist", rating: 4.8,description: "We provide top-quality dental care with a focus on patient comfort and cutting-edge technology. Our team of experienced", image: pic2 },
  { name: "Dr. Remdani", specialty: "Endodontist", rating: 4.7,description: "We provide top-quality dental care with a focus on patient comfort and cutting-edge technology. Our team of experienced", image: pic3 },
]

function DoctorCard({ doctor, index }: { doctor: (typeof doctors)[0]; index: number }) {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const imageVariants = {
    hidden: { x: index % 2 === 0 ? -100 : 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: index * 0.2 } },
  }

  const textVariants = {
    hidden: { x: index % 2 === 0 ? 100 : -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: index * 0.2 + 0.2 } },
  }

  return (
    <div ref={ref} className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? " doctors-gradient" : " hero-gradient"}`}>
      <motion.div
        className={`md:w-1/3 ${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}
        variants={imageVariants}
        initial="hidden"
        animate={controls}
      >
        <Image
          src={doctor.image}
          alt={doctor.name}
          width={400}
          height={400}
          className="rounded-full object-cover "
        />
      </motion.div>
      <motion.div
        className={`md:w-2/3 mt-4 md:mt-0 ${index % 2 === 0 ? "md:order-2 md:pl-32" : "md:order-1 md:pl-96 "}`}
        variants={textVariants}
        initial="hidden"
        animate={controls}
      >
        <div className="flex">
          <div className="align-center">
            <h3 className="text-2xl font-semibold">{doctor.name}</h3>
            <p className="text-gray-600">{doctor.specialty}</p>
            <p className="text-yellow-500">Rating: {doctor.rating}/5</p>
          </div>
          <div className=" w-72">
            <p className={`px-12 text-lg ${index % 2 === 0 ? "text-secondary" : "text-primary "}`}>{doctor.description}</p>
          </div>
        </div>
        

      </motion.div>
    </div>
  )
}

export default function Doctors() {
  return (
    <section id="doctors" className="py-16 px-4 bg-white">
      <div className="container mx-auto ">
        <h2 className="text-3xl font-bold text-center mb-12">Our Doctors</h2>
        {doctors.map((doctor, index) => (
          <DoctorCard key={doctor.name} doctor={doctor} index={index} />
        ))}
      </div>
    </section>
  )
}

