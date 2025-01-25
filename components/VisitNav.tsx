"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import logo from "@/app/signin/474587485_910956001246985_6133680450617852500_n.jpg"

export default function Navbar() {
  //hada variable ykon false f debut w ghir tdir scroll ywli vrai bch tsra animation w ttbdel colour ta3 nav bar
  const [isScrolled, setIsScrolled] = useState(false)

  //hada m3a each scroll tfot 10px ybdel valeur li dakhl isScrolled 3la hsab "window.scrollY > 10"
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-10 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "hero-inherit "}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="space-x-6 flex-1 flex justify-end mx-6">
          <Link href="#nous" className="font-poppins underline text-2xl font-semibold tracking-wide text-gray-700 hover:text-primary">
            Nous
          </Link>
          <Link href="#doctors" className="font-poppins underline text-2xl font-semibold tracking-wide text-gray-700 hover:text-primary">
            Our Doctors
          </Link>
          <Link href="#localisation" className="font-poppins underline text-2xl font-semibold tracking-wide text-gray-700 hover:text-primary">
            Localisation
          </Link>
          <Link href="#footer" className="font-poppins underline text-2xl font-semibold tracking-wide text-gray-700 hover:text-primary">
            About
          </Link>
        </div>
        <Link href="/" className="mx-4">
          <Image src={logo} alt="Logo" width={80} height={70} />
        </Link>
      </div>
    </nav>
  )
}

