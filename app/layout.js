import './globals.css'

export const metadata = {
  title: 'Pricing Section',
  description: 'Responsive pricing section with dynamic pricing',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-dark-bg min-h-screen">
        {children}
      </body>
    </html>
  )
}