import Image from "next/image"

import hero from "@/app/signin/tinywow_474018540_2063832280798714_5592810851205437540_n_73792520.jpg"
export default function Hero() {
  return (
    <section className="min-h-screen flex items-center hero-gradient">
      <div className=" flex flex-col md:flex-row items-center align-middle w-full hero-gradient px-14">
        <div className="md:w-1/2 mb-8 md:mb-0 ">
          <Image src={hero} alt="Dental Office" width={400} height={600} className="rounded-lg shadow-lg" />
        </div>
        <div className="md:w-1/2 px-3">
          <h1 className=" mb-4 font-playfair text-4xl font-bold text-gray-900">Welcome to Brush & Smile</h1>
          <p className=" font-lora text-lg text-gray-600 leading-relaxed">
            We provide top-quality dental care with a focus on patient comfort and cutting-edge technology. Our team of
            experienced professionals is dedicated to giving you the healthy, beautiful smile you deserve.
          </p>
        </div>
      </div>
    </section>
  )
}

