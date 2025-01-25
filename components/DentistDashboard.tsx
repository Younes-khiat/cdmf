'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Input } from "@/components/ui/input";
import { PackageMinus } from "lucide-react";
import CalendarTable from './CalendarTable'
import SpecialsTable from './SpecialsTable'
import AllTables from './AllTables'
import Feedbacks from './Feedbacks'

const mockUser = {
  name: "John Doe",
  email: "khiatyounes27@email.com",
  avatar: "/placeholder-avatar.jpg" // Replace with an actual path or remove if not using
}
const dentists = [
  { id: '1', name: 'Dr. Belouzdad' },
  { id: '2', name: 'Dr. BenAicha' },
  { id: '3', name: 'Dr. Remdanni' },
]

export default function DentistDashboard() {
  const [currentDate, setCurrentDate] = useState(new Date() )
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

  const [disp, setDisp] = useState(false)
  const [tableType, setTableType] = useState<'specials' | 'calendar'>('specials')
  const [tableData, setTableData] = useState<Array<{ full_name: string; phone_number: string, detail: string; paiement: string; paid: string }> |
                                             Array<{ full_name: string; phone_number: string; detail: string; paiement: string; next_session: string }>>([]);
  
  const [isStockSheetOpen, setIsStockSheetOpen] = useState(false)

const handleClick = (type: 'specials' | 'calendar') => {
  const newTableData =
    type === 'specials' ? dentistSpecials : dentistCalendar;

  setTableData(newTableData);
  setTableType(type);
  setDisp(true);
};

// useEffect(() => {
  //   const fetchDentistData = async (selectedDate : Date) => {
  //     try {
  //       const urlDate = selectedDate.toLocaleDateString().split('T')[0]
  //       console.log(urlDate);
  //       const response = await fetch(`http://localhost:3006/medic?date=${urlDate}`, {
  //         method: 'GET',
  //         credentials: 'include'
  //       })
  //       const data = await response.json();
  //       setDentistCalendar(data.medicHomeCalendar);
  //       setDentistSpecials(data.medicHomeSpecials);
  //     } catch (error) {
  //       console.error('Error fetching dentist data:', error);
  //     }
  //   };

  //   fetchDentistData(currentDate);
  // }, [currentDate]);

  return (
    <>
    <div className="flex items-center space-x-4">
          <Sheet open={isStockSheetOpen} onOpenChange={setIsStockSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="destructive" >
                <PackageMinus size={60} /> Remove Stock Item
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Remove Stock Item</SheetTitle>
                <SheetDescription>Select an item and quantity to remove from stock.</SheetDescription>
              </SheetHeader>
              <div className="space-y-4 mt-4">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select item" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="item1">Denture Clearer</SelectItem>
                    <SelectItem value="item2">Item 2</SelectItem>
                    <SelectItem value="item3">Item 3</SelectItem>
                  </SelectContent>
                </Select>
                <Input type="number" placeholder="Quantity" min="1" />
                <Button onClick={() => setIsStockSheetOpen(false)}>Remove from Stock</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      <div className="my-4">
      <div className='flex flex-col md:flex-row gap-4 items-center'> 
        <CalendarTable currentDate={currentDate} setCurrentDate={setCurrentDate} calendarData={dentistCalendar} setDentistCalendar={setDentistCalendar} setCalendar={handleClick} />
        <SpecialsTable setSpecials={handleClick} setDentistSpecials={setDentistSpecials} specialsData={dentistSpecials}/>
      </div>
        
        <AllTables disp={disp} setDisp={setDisp} data={tableData} type={tableType}/>
        <Feedbacks user={mockUser} dentists={dentists}/>
      </div>
    </>
  )
}

