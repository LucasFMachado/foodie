import { About, Dishes, Home, Menu, Reviews } from '@/components'

export default function Page() {
  return (
    <main>
      <section id="home">
        <Home />
      </section>
      <section id="dishes">
        <Dishes />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="menu">
        <Menu />
      </section>
      <section id="reviews">
        <Reviews />
      </section>
    </main>
  )
}
