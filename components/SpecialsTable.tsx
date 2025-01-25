import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui/select'
import { Plus } from 'lucide-react'

interface SpecialsTableProps {
  setSpecials: (type: 'specials' | 'calendar') => void
  setDentistSpecials: (dentistSpecials: Array<{ full_name: string; phone_number: string; next_session: string; detail: string; paiement: string }>) => void
  specialsData: Array<{ full_name: string; phone_number: string; detail: string; paiement: string; next_session: string }>;
}



export default function SpecialsTable({setDentistSpecials,setSpecials, specialsData}: SpecialsTableProps) {
const [client, setClient] = useState<string | null>(null)

  const handleClick = () => {
    setDentistSpecials(specialsData) ;
    setSpecials('specials')
  }

  const handleSelect = (value: string) => {
    setClient(value);
    alert("you added: " + client);
  }

  return (<>
    <div className="w-full md:w-1/2 space-y-4">
      <h2 className="text-2xl font-semibold text-center bg-popover rounded-lg pb-1">prosthetics</h2>
      <Table className="bg-white rounded-sm">
        <TableHeader>
          <TableRow onClick={handleClick} >
            <TableHead>Name</TableHead>
            <TableHead>Phone Number</TableHead>
            <TableHead>Next Session Date</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Payment status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Object.values(specialsData || []).map((client, index) => (
            <TableRow key={index}>
              <TableCell>{client.full_name}</TableCell>
              <TableCell>{client.phone_number}</TableCell>
              <TableCell>{client.next_session.split('T')[0]}</TableCell>
              <TableCell>{client.detail}</TableCell>
              <TableCell>{client.paiement} DA</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell colSpan={5}>
              <Select onValueChange={handleSelect} >
                <SelectTrigger className="w-full bg-primary text-white hover:bg-primary/90 hover:text-white">
                  <Plus className="h-4 w-4" /> Add New Prosthetics Case
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="younes">younes</SelectItem>
                  <SelectItem value="ayoub">ayoub</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

    </div>
  </>
  )
}

