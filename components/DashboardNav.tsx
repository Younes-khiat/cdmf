'use client'

import { SideMenu } from './SideMenu'
import Image from 'next/image'
import logo from '../app/signin/474587485_910956001246985_6133680450617852500_n.jpg' // Adjust the path to your image


// This is a mock user object. In a real application, you would fetch this data from your authentication system.
const mockUser = {
  name: "Chafik Aidi",
  email: "ChafikAidi@CRAAG.com",
  avatar: "/placeholder-avatar.jpg" // Replace with an actual path or remove if not using
}

export default function DashboardNav() {

  return (
    <nav className="bg-white/90 shadow-md p-2">
      <div className="max-w-7xl flex justify-between items-center mx-2">
        <div className="text-2xl font-bold flex items-center space-x-2">
          <Image src={logo} alt="Logo" width={50} height={40} />
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-primary"> Smile & brush</span>
            <p className="text-black text-sm/tight">Dental care begins with brushing before treatment</p>
          </div>
        </div>
        <SideMenu user={mockUser} />
      </div>
    </nav>
  )
}

