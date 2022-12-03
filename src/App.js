import './App.css'
import Header from './Header'
import Hero from './Hero'
import Services from './Services'
// import aos
import Aos from 'aos'
import 'aos/dist/aos.css'

function App() {
  Aos.init({
    duration: 2500,
    delay: 400,
  })
  return (
    <div className='App'>
      <Header />
      <Hero />
      <Services />
    </div>
  )
}

export default App
