import { CANCELLED } from 'dns'
import './globals.css'
import Navbar from 'app/components/nav'
import Footer from 'app/components/footer'



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}