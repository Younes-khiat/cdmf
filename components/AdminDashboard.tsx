'use client'

import { useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import CalendarTable from './CalendarTable'
import SpecialsTable from './SpecialsTable'
import  StockTable from "./StockTable";
import AllTables from './AllTables'
import AddDentist from './AddDentist'
import Feedbacks from './Feedbacks'




const dentists = [
  { id: '1', name: 'Dr. Belouzdad' },
  { id: '2', name: 'Dr. Remdanni' },
  { id: '3', name: 'Dr. BenAicha' },
]

const mockUser = {
  name: "Chafik Aidi",
  email: "ChafikAidi@CRAAG.com",
  avatar: "/placeholder-avatar.jpg" // Replace with an actual path or remove if not using
}

export default function AdminDashboard() {
  const [dentistCalendar, setDentistCalendar] = useState<Array<{ full_name: string; phone_number: string, detail: string, paiement: string, paid: string }>>(
    [
      {
        full_name: "younes Khiat",
        phone_number: "0673728085",  detail: "PLOMBAGE", paiement: "4000", paid: "4000"
      },
      {
        full_name: "Wadie Mohammed Ghrib",
        phone_number: "0659214723",  detail: "Détartrage", paiement: "2000", paid: "0"
      },
      {
        full_name: "Ciline Chaouchene",
        phone_number: "0765332488",  detail: "placement prothèse", paiement: "50000", paid: "12000"
      },
      {
        full_name: "Maya Guerouabi",
        phone_number: "0623558701",  detail: "visite", paiement: "0", paid: "0"
      },
      {
        full_name: "Walid Touri",
        phone_number: "0795646204",  detail: "placement prothèse", paiement: "50000", paid: "12000"
      },
      {
        full_name: "Ayoub Bida",
        phone_number: "0797942195",  detail: "visite", paiement: "0", paid: "0"
      },
      {
        full_name: "Islem Zinai",
        phone_number: "0672062421",  detail: "Dent de sagesse", paiement: "7000", paid: "4000"
      },
      {
        full_name: "Mellissa Noumri",
        phone_number: "0532446588",  detail: "visite", paiement: "0", paid: "0"
      }
    ]
  )

  const [dentistSpecials, setDentistSpecials] = useState<Array<{ full_name: string; phone_number: string; detail: string; paiement: string; next_session: string}>>(
    [
      {
        full_name: "Younes Khiat",
        phone_number: "0673728085",
        next_session: "2025-01-23 11:00",
        detail: "prothèse",
        paiement: "62000"
      },
      {
        full_name: "Farouk Khiat",
        phone_number: "078856220",
        next_session: "2025-01-29 14:00",
        detail: "3rd session",
        paiement: "80000"
      },
      {
        full_name: "Yamina Jezzar",
        phone_number: "076899456322",
        next_session: "2025-03-12 09:20",
        detail: "Finition",
        paiement: "120000"
      },
      {
        full_name: "Belkacem Sami",
        phone_number: "0534221913",
        next_session: "2025-02-04 10:00",
        detail: "test prothèse",
        paiement: "90000"
      }
    ]
  )
  const [stockItems, setStockItems] = useState<Array<{ name: string; quantity: number; unit_price: number }>>(
    [
      { name: 'Dental Floss', quantity: 100, unit_price: 2.33 },
      { name: 'Toothbrushes', quantity: 0, unit_price: 5.64 },
      { name: 'Toothpaste', quantity: 75, unit_price: 12.99 },
      { name: 'Mouthwash', quantity: 3, unit_price: 4.99 },
      { name: 'Dental Picks', quantity: 200, unit_price: 0.84 },
      { name: 'Denture Cleaner', quantity: 10, unit_price: 8.99 },
      { name: 'Denture Adhesive', quantity: 5, unit_price: 6.99 },
    ]
  )
  const [disp, setDisp] = useState(false)
  const [tableType, setTableType] = useState<'specials' | 'calendar' | 'stock'>('specials')
  const [tableData, setTableData] = useState<Array<{ full_name: string; phone_number: string, detail: string; paiement: string; paid: string  }> |
                                             Array<{ full_name: string; phone_number: string; detail: string; paiement: string; next_session: string }> |
                                             Array<{ name: string; quantity: number; unit_price: number }>>([])

  const [selectedDentist, setSelectedDentist] = useState(dentists[0].id)
  const [currentDate, setCurrentDate] = useState(new Date())

  const [addDentist, setAddDentist] = useState(false)

  const handleClick = (type: 'specials' | 'calendar' | 'stock') =>{
    if(type === 'specials'){
      setTableData(dentistSpecials)
    }
    else if(type === 'calendar'){
      setTableData(dentistCalendar)
    }
    else{
      setTableData(stockItems)
    }
    setTableType(type)

    setDisp(true)
  }
  return (
    <div className="space-y-8">
      <div className="flex justify-start space-x-2">
        <Select value={selectedDentist} onValueChange={setSelectedDentist}>
          <SelectTrigger className="w-[200px] bg-white/90">
            <SelectValue placeholder="Select a dentist" />
          </SelectTrigger>
          <SelectContent>
            {dentists.map((dentist) => (
              <SelectItem key={dentist.id} value={dentist.id}>
                {dentist.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button variant="default" size="sm" onClick={() => setAddDentist(true)}> 
              <Plus className="h-4 w-4" /> Add a dentist
      </Button>
      </div>
      {addDentist && <AddDentist setAddDentist={setAddDentist} />}
      
      <div className="flex flex-col gap-8">
        <div className="flex flex-col md:flex-row gap-4 my-auto ">
          <CalendarTable currentDate={currentDate} setCurrentDate={setCurrentDate}   calendarData={dentistCalendar} setDentistCalendar={setDentistCalendar} setCalendar={handleClick} />
          <SpecialsTable specialsData={dentistSpecials} setDentistSpecials={setDentistSpecials} setSpecials={handleClick}/>
        </div>
        <div className="flex flex-col md:flex-row gap-4 my-auto">
          <StockTable stockData={stockItems} setStock={handleClick} setStockItems={setStockItems} />
          <Feedbacks user={mockUser} dentists={dentists}/>
        </div>
        <AllTables disp={disp} setDisp={setDisp} data={tableData} type={tableType}/>

      </div>  
      
    </div>
  )
}

