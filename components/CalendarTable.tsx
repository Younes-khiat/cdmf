'use client'

import { useState, useEffect } from 'react'
import { format } from 'date-fns'
import { Calendar } from '@/components/ui/calendar'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import NewClient  from '@/components/NewClient'
import { useUser } from '@/app/context/UserContext'

interface CalendarTableProps {
  currentDate: Date 
  setCurrentDate: (date: Date ) => void
  setCalendar: (tableType: 'specials' | 'calendar') => void
  setDentistCalendar: (dentistCalendar: Array<{ full_name: string; phone_number: string, detail: string, paiement: string, paid: string }>) => void
}


export default function CalendarTable({ currentDate, setCurrentDate, setCalendar, setDentistCalendar }: CalendarTableProps) {
  const [showNewClient, setShowNewClient] = useState(false)
  const { user } = useUser()
  const [filteredRows, setFilteredRows] = useState<Array<{ full_name: string; phone_number: string, detail: string, paiement: string, paid: string, date: string }>>([])



  const handleDateSelect = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      setCurrentDate(selectedDate);
    }
  }
  const handleClick = () => {
    setDentistCalendar(user.data.calendar)
    setCalendar('calendar')

  }

  const handleNewClientClick = () => {
    setShowNewClient(true)
    console.log(user.data.calendar)
    
  }

  // const selectedDate = format(currentDate, 'yyyy-MM-dd')

  useEffect(() => {
    const selectedDate = format(currentDate, 'yyyy-MM-dd')
    const filtered = user.data.calendar.filter(item => item.date.split('T')[0] === selectedDate)
    setFilteredRows(filtered)
    console.log(filtered)
  }, [currentDate, user.data.calendar])

  return (<>
    <div className="w-full md:w-1/2 space-y-4">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-full">
            <span className="text-xl font-semibold">{format(currentDate, 'dd/MM/yyyy')}</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={currentDate}
            onSelect={handleDateSelect}
            initialFocus
          />
        </PopoverContent>
      </Popover>
      <Table className="bg-white rounded-sm">
        <TableHeader>
          <TableRow onClick={() => handleClick}>
            <TableHead>Full Name</TableHead>
            <TableHead>Phone Number</TableHead>
            <TableHead>Detail</TableHead>
            <TableHead>payment totale</TableHead>
            <TableHead>Already paid</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          { filteredRows.map((one, index) => (
            <TableRow key={index}>
              <TableCell>{one.full_name}</TableCell>
              <TableCell>{one.phone_number}</TableCell>
              <TableCell>{one.detail}</TableCell>
              <TableCell>{one.paiement} DA</TableCell>
              <TableCell>{one.paid} DA</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell colSpan={5}>
              <Button variant="outline" size="sm" className="m-0.5 p-4 w-full bg-primary text-white hover:bg-primary/90 hover:text-white" onClick={handleNewClientClick} >
                <Plus className="h-4 w-4 " /> Add New Appointment
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      {showNewClient && <NewClient setShowNewClient={setShowNewClient}/>}

    </div>
  </>
  )
}

