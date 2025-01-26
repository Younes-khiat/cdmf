'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import Feedbacks from './Feedbacks'
import { useUser } from '@/app/context/UserContext';


const mockUser = {
  name: "John Doe",
  email: "john.doe@example.com",
  avatar: "/placeholder-avatar.jpg" // Replace with an actual path or remove if not using
}
const dentists = [
  { id: '1', name: 'Dr. Belouzdad' },
  { id: '2', name: 'Dr. Remdanni' },
  { id: '3', name: 'Dr. BenAicha' },
]



export default function ClientDashboard() {
  const [date, setDate] = useState<Date>()
  const [time, setTime] = useState<string>()
  const [dentist, setDentist] = useState('')
  const [description, setDesciption] = useState('')
  const { user } = useUser();

  // useEffect(() => {
  //   if (user) {
  //     console.log('User data:', user);
  //   }
  // }, [user]);

  // useEffect(() => {
  //   // Extract user data from the cookie
  //   console.log("0")
  //   const cookies = document.cookie
  //   console.log("1")
  //   console.log( cookies)
  //   // cookies.forEach(cookie => {
  //   //   console.log("Cookie name:", cookie.split('=')[0])
  //   //   console.log("Cookie value:", cookie.split('=')[1])
  //   // })
  //   // const userCookie = cookies.find((row) => row.startsWith('user_data='))
  //   // console.log("User cookie:", userCookie)
  //   // const userCookie = document.cookie
  //   //   .split('; ')
  //   //   .find((row) => row.startsWith('user_data='))
  //   // if (userCookie) {
  //   //   setCookieData(JSON.parse(decodeURIComponent(userCookie.split('=')[1])))
  //   //   console.log("1")
  //   // }
  //   console.log("2")
  // }, []) 

  // // useEffect(() => {
  // //   if (cookieData) {
  // //     console.log("1: " + cookieData)
  // //     setUserId(cookieData.id) // Set the user ID from the cookie
  // //     console.log(cookieData.id)
  // //   }
  // // }, [cookieData])

  


  const handleBookAppointment = async () => {
    console.log(8);
    console.log(user.cookieData);
    console.log(7);
    const userId = user.cookieData.id;
    console.log(userId);
    console.log(description);
    console.log(dentist);
    console.log(date);
    if (!description || !dentist || !date || !userId) {
      console.log('Please fill all fields before booking the appointment.')
      return
    }
    const [medicFirstName, medicLastName] = dentist.split(' ');
    const clientID = userId;
    console.log(document.cookie);
    console.log(clientID + medicFirstName + medicLastName + description + date);
    try {
      console.log("22");
      const response = await fetch('http://localhost:3006/client/reserve', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          clientID, // Send the user ID from the cookie
          date,
          time,
          medicFirstName,
          medicLastName,
          description,
        }),
        credentials: 'include', // Allow cookies to be sent with the request
      })
      console.log("33");
      if (!response.ok) {
        throw new Error('Failed to book the appointment ')
      }

      const data = await response.json()
      console.log(data)
    } catch (err) {
      console.error('Error booking appointment:', err)
    }
  }

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="w-full md:w-1/2 mt-2">
        <Feedbacks user={mockUser} dentists={dentists}/>
      </div>
      <div className="w-full md:w-1/2 mt-4">
      <Card>
          <CardHeader>
            <CardTitle>Book an Appointment</CardTitle>
            <CardDescription>Choose your preferred date and dentist.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-around">
              <div className="flex flex-col justify-evenly">
                <div className="space-y-2">
                  <Label>Select a Dentist</Label>
                  <Select onValueChange={(value) => setDentist(value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a dentist" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Alice Smith">Dr. Alice Smith</SelectItem>
                      <SelectItem value="Rafik Fridi">Dr. Rafik Fridi</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Choose a Time</Label>
                  <Select onValueChange={setTime} value={time}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a time" />
                    </SelectTrigger>
                    <SelectContent>
                      {["09:00", "10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00"].map((t) => (
                      <SelectItem key={t} value={t}>
                        {t}
                      </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Input id="description"
                         placeholder="Describe your case"
                         onChange={(e) => setDesciption(e.target.value)}
                         type="text"
                   />
                </div>
            </div>
            <div className="space-y-2">
              <Label>Choose a Date</Label>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border bg-white/80"
              />
            </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" onClick={handleBookAppointment}>Book Appointment</Button>
          </CardFooter>
        </Card>
      </div>
      
      
    </div>
  )
}

