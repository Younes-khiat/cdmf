"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Plus, Minus } from "lucide-react"
import Image from "next/image";

import mapImage from "@/app/signin/Screenshot 2025-01-25 161851.png"

export default function Map() {
  const [zoom, setZoom] = useState(1)

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.2, 2))
  }

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 0.2, 0.5))
  }

  return (
    <section id="localisation" className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Location</h2>
        <div className="relative h-[400px] rounded-lg overflow-hidden bg-gray-200">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-in-out">
            <Image src={mapImage} alt="Map" layout="fill" objectFit="cover" className="rounded-lg" />
          </div>
          
          <div className="absolute top-4 right-4 space-y-2">
            <Button variant="secondary" size="icon" onClick={handleZoomIn}>
              <Plus className="h-4 w-4" />
            </Button>
            <Button variant="secondary" size="icon" onClick={handleZoomOut}>
              <Minus className="h-4 w-4" />
            </Button>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="text-4xl">📍</div>
          </div>
        </div>
      </div>
    </section>
  )
}

