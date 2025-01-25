//hada ymed la structure html kamla lel html li ndiroulo return f function

export const metadata = {
  title: "Dental Office Visitor Dashboard",
  description: "Welcome to our dental practice",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

