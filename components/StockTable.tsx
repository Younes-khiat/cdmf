'use client'

import { useState } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Plus, X } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'


interface StockTableProps {
  stockData: Array<{ name: string; quantity: number; unit_price: number }>
  setStock: (tableType: 'specials' | 'calendar' | 'stock') => void
  setStockItems: (stockItems: Array<{ name: string; quantity: number; unit_price: number }>) => void
}



export default function StockTable({stockData, setStock, setStockItems}: StockTableProps) {
const [addStock, setAddStock] = useState(false)

    const handleClick = () => {
        setStock('stock')
        setStockItems(stockData)
      }
return(
<div className="w-full space-y-4">
  <div className="mt-8 space-y-4 ">
    <h2 className="text-2xl font-semibold text-center bg-popover rounded-lg pb-1">Stock Inventory</h2>
    <Table className="bg-white rounded-sm ">
      <TableHeader>
        <TableRow onClick={handleClick}>
          <TableHead>Item Name</TableHead>
          <TableHead>Quantity</TableHead>
          <TableHead>unit price</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {stockData.slice(0, 5).map((item, index) => (
          <TableRow key={index} className={item.quantity < 10 ? 'bg-red-500/90 hover:bg-red-500/80' : ''}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.quantity}</TableCell>
            <TableCell>{item.unit_price} DA</TableCell>
          </TableRow>
        ))}
        <TableRow>
          <TableCell colSpan={3}>
            <Button variant="outline" size="sm" className="w-full bg-primary text-white hover:bg-primary/90 hover:text-whit" onClick={() => setAddStock(true)}>
              <Plus className="h-4 w-4 mr-2 " /> Add New Stock Item
            </Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
    {addStock && (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className='rounded-xl border bg-white text-card-foreground shadow w-2/4'>
          <Button variant="ghost" size="icon" onClick={() => setAddStock(false)} className="absolute top-30 right-80  rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
            <X className=""  />
            <span className="sr-only">Close</span>
          </Button>
          <CardHeader>
            <CardTitle>New Stock Arrival!</CardTitle>
            <CardDescription>Add to the stock quantities or items.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="description">Item Name</Label>
              <Input id="itemName"
                     placeholder="item name"
                     type="text"
               />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Quantity</Label>
              <Input id="quantity"
                     placeholder="quantity"
                     type="number"
               />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Unit Price</Label>
              <Input id="unitPrice"
                     placeholder="unit price"
                     type="number"
               />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-primary text-white hover:bg-primary/90 hover:text-white">Add to stock</Button>
          </CardFooter>
       </div>
    </div>
    )}
  </div>
</div>  )}