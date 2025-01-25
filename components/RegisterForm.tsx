'use client'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useRouter } from 'next/navigation'

export default function RegisterForm() {
  const [fullName, setFullName] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const router = useRouter() // Initialize the router


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle registration logic here
// Validate password match
if (password !== confirmPassword) {
  console.log('Passwords do not match');
  return
}

try {
  const response = await fetch('http://localhost:3006/users/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ fullName, age, gender, phone, password }),
    credentials: 'include'
  })

  if (!response.ok) {
    const errorData = await response.json()
    throw new Error(errorData.message || 'Registration failed')
  }

  

  const data = await response.json();
  console.log('Registration successful:', data)
  alert("registration successful please log in now");
  router.push('/signin') // Use router.push for client-side navigation
} catch (err) {
  console.error('Error during registration:', err)
}  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 flex flex-wrap space-x-2">
      <div className="space-y-2">
        <Label htmlFor="full_name">User Name</Label>
        <Input 
          id="full_name" 
          type='text'
          placeholder="Enter your full name" 
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="age">Age</Label>
        <Input 
          id="age" 
          type='number'
          placeholder="Enter your age" 
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="gender">Gender</Label>
        <Input 
          id="gender" 
          type="number"
          placeholder="Enter your gender" 
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input 
          id="phone" 
          type="number" 
          placeholder="Enter your phone number" 
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
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
        <Label htmlFor="confirmPassword">Confirm Password</Label>
        <Input 
          id="confirmPassword" 
          type="password" 
          placeholder="Confirm your password" 
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </div>
      <Button type="submit" className="w-full">Register</Button>
    </form>
  )
}

