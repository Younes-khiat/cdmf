//hadi la page lwla li t'executa tb3etna l'dashboard ta3 visitor "visitor/dashboard"

import { redirect } from 'next/navigation'

export default function Home() {
  redirect('/visitor/dashboard')
  
}

