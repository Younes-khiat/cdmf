"use client"

import { Button } from '@/components/ui/button'
import { CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { X } from 'lucide-react'

interface AddDentistProps {
  setAddDentist: (addDentist: boolean) => void
}





export default function AddDentist({setAddDentist}: AddDentistProps) {
return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className='rounded-xl border bg-white text-card-foreground shadow w-2/4'>
        <Button variant="ghost" size="icon" onClick={() => setAddDentist(false)} className="absolute top-30 right-80  rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
          <X className=""  />
          <span className="sr-only">Close</span>
        </Button>
        <CardHeader>
          <CardTitle>Add a Dentist</CardTitle>
          <CardDescription>Fill in the details of the new dentist.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="full_name">Full Name</Label>
            <Input id="full_name"
                   placeholder="Full Name"
                   type="text"
             />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone_number">Phone Number</Label>
            <Input id="phone_number"
                   placeholder="Phone Number"
                   type="text"
             />
          </div>
          <div className="space-y-2">
            <Label htmlFor="detail">Detail</Label>
            <Input id="detail"
                   placeholder="Detail"
                   type="text"
             />
          </div>
          <div className="space-x-4">
            <Button variant="outline" onClick={() => setAddDentist(false)}>Cancel</Button>
            <Button>Add Dentist</Button>
          </div>
        </CardContent>
      </div>
    </div>
)}