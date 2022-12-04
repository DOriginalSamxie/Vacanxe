import './App.css'
import Header from './Header'
import Hero from './Hero'
import Services from './Services'
// import aos
import Aos from 'aos'
import 'aos/dist/aos.css'
import FeaturesOne from './FeaturesOne'
import FeaturesTwo from './FeaturesTwo'
import FeaturesThree from './FeaturesThree'
import FeaturesFour from './FeaturesFour'

function App() {
  Aos.init({
    duration: 1500,
    delay: 400,
  })
  return (
    <div className='App'>
      <Header />
      <Hero />
      <Services />
      <FeaturesOne />
      <FeaturesTwo />
      <FeaturesThree />
      <FeaturesFour />
    </div>
  )
}

export default App
