import { useEffect, useState } from 'react'
import './App.css'
import Banar from './component/Banar/Banar'
import Banar_2 from './component/Banar/Banar_2'
import Stat from './component/Banar/Stat'
import Footer from './component/Footer/Footer'
import Nav from './component/Navbar/Nav'
import Pricing from './component/Pricing/Pricing'
import Steps from './component/Steps/Steps'
import Products from './component/Products/Products'   // এটা add করতে হবে
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Fatchdata = async () => {
    const res = await fetch('/data.json')
    return res.json()
}

function App() {
    const [data, setData] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        Fatchdata().then(result => setData(result))
    }, [])

    return (
        <>
            <Nav cart={cart} />
            <Banar />
            <Stat />
            <Steps />
            <Products data={data} cart={cart} setCart={setCart} />
            <Pricing />
            <Banar_2 />
            <Footer />
            <ToastContainer />
        </>
    )
}

export default App