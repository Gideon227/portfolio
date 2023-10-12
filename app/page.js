import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Projects from '@/components/Project'
import Footer from '@/components/Footer'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  return (
    <main className="md:px-6 bg-[#10101A] overflow-hidden">
        <Navbar />
        <Hero />
        <Projects />
        <Testimonials />
        <Footer />
    </main>
  )
}
