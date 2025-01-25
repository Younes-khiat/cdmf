import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <Phone className="mr-2" size={18} /> +33 1 23 45 67 89
              </p>
              <p className="flex items-center">
                <Mail className="mr-2" size={18} /> contact@dentaloffice.com
              </p>
              <p className="flex items-center">
                <MapPin className="mr-2" size={18} /> 123 Dental Street, Paris, France
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-400">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-gray-400">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-gray-400">
                <Twitter size={24} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p>Established in 2010</p>
            <p>Owner: Dr. Jane Doe</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Office Hours</h3>
            <p>Monday - Friday: 9am - 6pm</p>
            <p>Saturday: 10am - 4pm</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 Dental Office. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

