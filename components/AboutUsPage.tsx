'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Facebook, Instagram, Linkedin, Mail, Phone, Twitter } from 'lucide-react'

export default function AboutUsPage() {
  const [comment, setComment] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle comment submission logic here
    console.log('Submitted comment:', comment)
    setComment('')
  }

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8">
        <Card className="w-full max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">About Us</CardTitle>
            <CardDescription>Learn more about our dental practice and services</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Our Mission</h2>
              <p>
                At our dental office, we are committed to providing the highest quality dental care in a comfortable and welcoming environment. Our team of experienced professionals uses state-of-the-art technology to ensure that every patient receives personalized treatment tailored to their unique needs.
              </p>
              <p>
                We believe in preventive care and patient education as the keys to optimal dental health. Our goal is to help you maintain a healthy, beautiful smile for a lifetime.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Send Us Your Thoughts</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Textarea
                  placeholder="Share your anonymous feedback or suggestions..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="min-h-[100px]"
                />
                <Button type="submit">Submit Comment</Button>
              </form>
            </div>
          </CardContent>
        </Card>
      </main>
      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <Mail className="h-5 w-5" />
              <span>contact@dentaloffice.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="h-5 w-5" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

