import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Experience } from './components/Experience'
import { Approach } from './components/Approach'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)]">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Approach />
        <Experience />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
