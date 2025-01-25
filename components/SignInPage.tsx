'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import Image from 'next/image'
import logo from '../app/signin/474587485_910956001246985_6133680450617852500_n.jpg' // Adjust the path to your image

export default function SignInPage() {
  const [isRegistering, setIsRegistering] = useState(false)

 

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="w-full p-4 md:p-8 flex flex-col justify-center items-center">       
        <Card className="w-full max-w-md ">
          <CardHeader>
            <div className="text-2xl font-bold flex items-center space-x-2">
              <Image src={logo} alt="Logo" width={50} height={40} />
              <div className="flex flex-col ">
            <span className="text-2xl font-bold text-primary text-left"> Smile & brush</span>
            <p className="text-black text-sm/tight">Dental care begins with brushing before treatment</p>
          </div>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="flex mb-6">
              <Button 
                variant={isRegistering ? "outline" : "default"} 
                className="flex-1 mr-2"
                onClick={() => setIsRegistering(false)}
              >
                Login
              </Button>
              <Button 
                variant={isRegistering ? "default" : "outline"} 
                className="flex-1 ml-2"
                onClick={() => setIsRegistering(true)}
              >
                Register
              </Button>
            </div>
            {isRegistering ? <RegisterForm /> : <LoginForm />}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

