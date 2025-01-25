'use client'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'

interface CalendarTableProps {
    disp: boolean
    setDisp: (disp: boolean) => void
    data: Array<{ full_name: string; phone_number: string; detail: string; paiement: string; paid: string }> | 
          Array<{ full_name: string; phone_number: string; detail: string; paiement: string; next_session: string }> |
          Array<{ name: string; quantity: number; unit_price: number }>
    type: 'specials' | 'calendar' | 'stock'

  }

export default function DashboardNav({disp, data, setDisp, type}: CalendarTableProps) {
    if (!disp) return null

    return (
<div className="fixed inset-0 flex items-center justify-center m-10 ">
      <Table className="bg-white rounded-sm">
      
      <TableHeader>
        <TableRow>
          {type == 'stock' && <TableHead>Item Name</TableHead>}
          {type == 'stock' && <TableHead>Unit price</TableHead>}
          {type == 'stock' && <TableHead>Quantity</TableHead>}
          {type != 'stock' && <TableHead>Full Name</TableHead>}
          {type != 'stock' && <TableHead>Phone Number</TableHead>}
          {type != 'stock' && <TableHead>Detail</TableHead>}            
          {type != 'stock' && <TableHead>Paiement</TableHead>}
          {type === 'calendar' && <TableHead>Paid</TableHead>}
          {type === 'specials' && <TableHead>Next Session Date</TableHead>}
          <Button variant="ghost" size="icon" onClick={() => setDisp(false)} className="absolute top-1 right-4  rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
              <X className=""  />
              <span className="sr-only">Close</span>
          </Button>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Object.values(data).map((one, index) => (
          <TableRow key={index} className={one.quantity < 10 ? 'bg-red-500/50' : ''}>
            {type == 'stock' && <TableCell>{one.name}</TableCell>}
            {type == 'stock' && <TableCell>{one.unit_price} DA</TableCell>}
            {type == 'stock' && <TableCell>{one.quantity}</TableCell>}
            {type != 'stock' && <TableCell>{one.full_name}</TableCell>}
            {type != 'stock' && <TableCell>{one.phone_number}</TableCell>}
            {type != 'stock' && <TableCell>{one.detail}</TableCell>}
            {type != 'stock' && <TableCell>{one.paiement} DA</TableCell>}
            {type === 'calendar' && <TableCell>{one.paid} DA</TableCell>}
            {type === 'specials' && <TableCell>{one.next_session}</TableCell>}
          </TableRow>
        ))}
      </TableBody>
    </Table>
            </div> 
    ) }
    