import Image from 'next/image'
import Hero from './components/hero'
import About from './components/about'


export default async function Home() {
  console.log("hello :)")
  return (
    <main>
      <Hero />
      <About />
    </main>
  )
}
