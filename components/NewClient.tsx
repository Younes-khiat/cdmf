'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { X } from 'lucide-react'

interface NewClientProps {
  setShowNewClient: (showNewClient: boolean) => void
}

export default function NewClient({ setShowNewClient }: NewClientProps) {
  const [date, setDate] = useState<Date>()
  const [time, setTime] = useState<string>()
  const [dentist, setDentist] = useState('')
  const [description, setDesciption] = useState('')
  const [userId, setUserId] = useState<string | null>('1') 

  const handleBookAppointment = async () => {
    console.log(8);
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

    return(
    <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className='rounded-xl border bg-white text-card-foreground shadow w-2/4'>
        <Button variant="ghost" size="icon" onClick={() => setShowNewClient(false)} className="absolute top-10 right-80  rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
              <X className=""  />
              <span className="sr-only">Close</span>
          </Button>
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
                <div className="space-y-2">
              <Label>Client Id</Label>
              <Input id='clientID'
                      placeholder="Enter your client ID"
                      onChange={(e) => setUserId(e.target.value)}
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
        </div>
      </div>
)}