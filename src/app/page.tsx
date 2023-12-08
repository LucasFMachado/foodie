import { Dishes, Home } from '@/components'

export default function Page() {
  return (
    <main>
      <section id="home">
        <Home />
      </section>
      <section id="dishes">
        <Dishes />
      </section>
    </main>
  )
}
