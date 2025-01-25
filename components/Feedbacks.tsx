"use client"

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Send, SlidersHorizontal, Star   } from 'lucide-react'
import { useState } from 'react'

const initialFeedbacks = [
    { id: 1, text: "Great service, very professional!", category: "Positive" },
    { id: 2, text: "The waiting time was too long.", category: "Negative" },
    { id: 3, text: "Dr. Smith was very gentle and explained everything clearly.", category: "Positive" },
    { id: 4, text: "The clinic is always clean and well-maintained.", category: "Positive" },
    { id: 5, text: "Prices are a bit high compared to other clinics.", category: "Negative" },
    { id: 6, text: "The staff is always friendly and helpful.", category: "Positive" },
    { id: 7, text: "I had to reschedule my appointment twice.", category: "Negative" },
    { id: 8, text: "The new dental hygienist did an excellent job!", category: "Positive" },
    { id: 9, text: "The clinic is a bit far from my house.", category: "Negative" },
  ]

  interface SideMenuProps {
    user: {
      name: string;
      email: string;
      avatar?: string;
    }
    dentists: Array<{ id: string; name: string }>
  }

export default function Feedbacks({ user, dentists }: SideMenuProps) {
    const [feedbacks, setFeedbacks] = useState(initialFeedbacks)
    const [newFeedback, setNewFeedback] = useState('')
    const [feedbackFilter, setFeedbackFilter] = useState('All')
    const [visibleFeedbacks, setVisibleFeedbacks] = useState(3)

    const [rating, setRating] = useState(0)

      const [selectedDentist, setSelectedDentist] = useState(dentists[0].id)
    


    const handleAddFeedback = () => {
        if (newFeedback.trim()) {
          const newId = Math.max(...feedbacks.map(f => f.id)) + 1
          setFeedbacks([...feedbacks, { id: newId, text: newFeedback, category: "New" }])
          setNewFeedback('')
        }
      }
    
      const filteredFeedbacks = feedbackFilter === 'All' 
        ? feedbacks 
        : feedbacks.filter(f => f.category === feedbackFilter)
    
      const handleLoadMore = () => {
        setVisibleFeedbacks(prev => Math.min(prev + 3, filteredFeedbacks.length))
      }

      const handleStarClick = (index: number) => {
        setRating(index + 1)
      }

    return (
        <Card className="bg-white/80 border-none w-full mt-3">
        <CardHeader>
          <CardTitle>Feedbacks</CardTitle>
          <CardDescription>Share your experience in &quot;smile & brush&quot;</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="bg-primary/90 m-2 py-5 px-10 rounded-lg">
                <div className="flex space-x-3 mb-4 justify-between">
                  <Select value={selectedDentist} onValueChange={setSelectedDentist}>
                    <SelectTrigger className="w-[200px] bg-secondary">
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
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, index) => (
                      <Star
                        key={index}
                        className={`h-6 w-6 cursor-pointer ${index < rating ? 'text-yellow-500' : 'text-white'}`}
                        onClick={() => handleStarClick(index)}
                      />
                    ))}
                  </div>
                  <Button onClick={handleAddFeedback} className="bg-secondary text-black hover:bg-secondary/90">
                    <Send className="h-4 w-4 mr-2 text-black" /> Add
                  </Button>
                </div>
                <Input
                    placeholder="Add a new feedback..."
                    value={newFeedback}
                    onChange={(e) => setNewFeedback(e.target.value)}
                    className="flex-grow"
                  />
            </div>
            <div className="relative">
              <div className="mb-4 absolute right-4">
                <Select value={feedbackFilter} onValueChange={setFeedbackFilter} >
                  <SelectTrigger className='w-auto space-x-2 bg-white mt-2'>
                    <SlidersHorizontal className="h-4 w-4 mr-3" /> Filter
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All">All</SelectItem>
                    <SelectItem value="Positive">Positive</SelectItem>
                    <SelectItem value="Negative">Negative</SelectItem>
                    <SelectItem value="New">New</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2 bg-primary/20 p-4 rounded-lg">
                {filteredFeedbacks.slice(0, visibleFeedbacks).map((feedback) => (
                  <div key={feedback.id} className="p-2 rounded-md">
                    <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={user.avatar} />
                  <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">{user.name}</p>
                  <p className="text-sm text-primary">{user.email}</p>
                </div>
                </div>
                      <p className='bg-white/50 m-1 p-2 rounded-lg'>{feedback.text}</p>
                      <hr className='bg-primary w-full h-0.5 mt-4'/>
                    </div>
                  ))}
                </div>
                {visibleFeedbacks < filteredFeedbacks.length && (
                    <div className="flex justify-center mt-4 ">
                        <Button onClick={handleLoadMore} className='px-6'>
                          Load More
                        </Button>
                    </div>
                  )}
              </div>
        </CardContent>
      </Card>
    )
}