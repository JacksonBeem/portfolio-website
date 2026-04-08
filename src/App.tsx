import Contact from './components/Contact'
import Hero from './components/Hero'
import Pipeline from './components/Pipeline'
import Projects from './components/Projects'
import Research from './components/Research'
import Stack from './components/Stack'

function App() {
  return (
    <main className="relative isolate overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(13,17,23,0)_0%,rgba(22,27,34,0.2)_55%,rgba(13,17,23,0)_100%)]" />
      <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-[540px] bg-border/70 xl:block" />
      <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px translate-x-[540px] bg-border/70 xl:block" />

      <div className="relative mx-auto w-full max-w-content px-6 sm:px-8 lg:px-10">
        <Hero />
        <Pipeline />
        <Research />
        <Projects />
        <Stack />
        <Contact />
      </div>
    </main>
  )
}

export default App
