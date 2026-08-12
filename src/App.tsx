import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { TechStack } from './components/TechStack'
import { Projects } from './components/Projects'
import { Experience } from './components/Experience'
import { Testimonials } from './components/Testimonials'
import { GitHubShowcase } from './components/GitHubShowcase'
import { Certifications } from './components/Certifications'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-[#e2e8f0]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <TechStack />
        <Projects />
        <Experience />
        <Testimonials />
        <GitHubShowcase />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
