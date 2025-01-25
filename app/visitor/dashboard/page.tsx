//hadouma components li ykhorjo f visitor dashboard
import NavBar from "@/components/VisitNav"
import Hero from "@/components/Hero"
import Doctors from "@/components/Doctors"
import dynamic from "next/dynamic"

const Map = dynamic(() => import("@/components/Map"), { ssr: false })
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hada Nav bar ta3 page d'accueil */}
      <NavBar />
      {/* hada tswira hdik + titre + description */}
      <Hero />
      {/* hada doctors  */}
      <Doctors />
      {/* hada map */}
      <Map />
      {/* hada footer */}
      <Footer />
    </div>
  )
}

