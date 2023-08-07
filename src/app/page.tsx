import Image from 'next/image'
import Banner from './components/banner'
import About from './components/about'
import Projects from './components/projects'
import Knowledge from './components/knowledge'
export default function Home() {
  return (
    <div>
      <Banner/>
      <About/>
      <Projects/>
      <Knowledge/>
    </div>
  )
}
