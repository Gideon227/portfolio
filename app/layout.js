import './globals.css'
import { Lora } from 'next/font/google'

const inter = Lora({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
})

export const metadata = {
  title: 'Gideon Olaiya - Website Developer',
  description: 'I am an independent creative developer from Lagos, Nigeria.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
