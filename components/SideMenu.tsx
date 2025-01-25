import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { UserCircle, Settings, Info, Shield, LogOut } from 'lucide-react'
import Link from 'next/link'

interface SideMenuProps {
  user: {
    name: string;
    email: string;
    avatar?: string;
  }
}

export function SideMenu({ user }: SideMenuProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full mx-10 ">
          <UserCircle style={{ width: "30px", height: "30px" }} />
          <p className="text-sm font-large">{user.name}</p>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Account</SheetTitle>
        </SheetHeader>
        <div className="mt-6 space-y-6">
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src={user.avatar} />
              <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">{user.name}</p>
              <p className="text-sm text-muted-foreground">{user.email}</p>
            </div>
          </div>
          <nav className="space-y-2">
            <Button variant="ghost" className="w-full justify-start">
              <Shield className="mr-2 h-4 w-4" />
              Privacy & Policy
            </Button>
            <Link href="/about" passHref>
              <Button variant="ghost" className="w-full justify-start">
                <Info className="mr-2 h-4 w-4" />
                About Us
              </Button>
            </Link>
            <Button variant="ghost" className="w-full justify-start">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
            <Button variant="ghost" className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-100">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  )
}

