import { Suspense } from 'react'
import './App.css'
import Banar from './component/Banar/Banar'
import Banar_2 from './component/Banar/Banar_2'
import Stat from './component/Banar/Stat'
import Footer from './component/Footer/Footer'
import Nav from './component/Navbar/Nav'
import Pricing from './component/Pricing/Pricing'
import Steps from './component/Steps/Steps'
import Products from './component/Products/Products'





const Fatchdata=async()=>{
    const res = await fetch('/data.json')
    return res.json()
  }

function App() {


  const datapromise = Fatchdata()



  return (
    <>
    <Nav />
    <Banar />
    <Stat />
    <Steps />
    <Suspense  fallback={<span className="loading loading-spinner text-error"></span>
    }>
    <Products  datapromise={datapromise} />

    </Suspense>
    <Pricing />
    <Banar_2 />
    <Footer />
      
    </>
  )
}

export default App
