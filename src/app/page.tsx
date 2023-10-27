import Image from 'next/image'
import MenuBar from '@/components/FixedComponents/MenuBar'
import NavBar from '@/components/FixedComponents/NavBar'

export default function Home() {
  return (
    <main className="flex flex-col justify-between">
      <header>
        <MenuBar />
        <NavBar />
      </header>
    </main>
  )
}
