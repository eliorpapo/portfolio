import './index.scss'
import { Header } from './cmps/header/Header'
import { Nav } from './cmps/nav/Nav'
import { About } from './cmps/about/About'
import { Experience } from './cmps/experience/Experience'
import { Portfolio } from './cmps/portfolio/Portfolio'
import { Contact } from './cmps/contact/Contact'
import { Footer } from './cmps/footer/Footer'

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
