'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useRouter } from 'next/navigation'
import { useUser } from '@/app/context/UserContext';


export default function LoginForm() {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter() // Initialize the router
  const { setUser } = useUser();


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Handle login logic here
    try {
      const response = await fetch('http://localhost:3006/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userName, password }),
        credentials: 'include'
      })
      if (!response.ok) {
        console.log(response);
        throw new Error('Invalid credentials or server error')
      }

      const responseData = await response.json()
      console.log('Login successful:', responseData)
      setUser(responseData); // Store data in context

      
      // Redirect to the dashboard
      router.push(`/dashboard/${responseData.cookieData.table}`) // Use router.push for client-side navigation

    } catch (err) {
      console.error('Error during login:', err)
  }
}


  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="space-y-2">
        <Label htmlFor="userName">User Name</Label>
        <Input 
          id="userName" 
          type="text" 
          placeholder="Enter your user name" 
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input 
          id="password" 
          type="password" 
          placeholder="Enter your password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="space-y-2">
        <a href="#" className=' text-primary underline'>forget password</a>
      </div>
      <Button type="submit" className="w-full">Login</Button>
    </form>
  )
}

