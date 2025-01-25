import DashboardNav from '@/components/DashboardNav'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <DashboardNav />
      <main className="flex-grow flex flex-col p-4">
        {children}
      </main>
    </div>
  )
}

