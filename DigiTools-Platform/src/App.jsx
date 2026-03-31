import { Suspense, useState } from "react"
import Hero from "./componants/Hero/Hero"
import MainCart from "./componants/MainCartSection/MainCartSection"
import Nav from "./componants/Nav/Nav"
import GetStart from "./componants/GetStart/GetStart"
import { ToastContainer } from 'react-toastify';
import Transparent from "./componants/Transparent/Transparent"
import Ready from "./componants/Ready/Ready"
import Footer from "./componants/Footer/Footer"

const fetchData = async () => {
  const response = await fetch("/data.json")
  return response.json();
}


const dataPromise = fetchData()

function App() {
  // const dataPromise = fetchData()
  const [buyCart, setBuyCart] = useState([])
  // const [total, setTotal] = useState(0)


  return (
    <>
      <Nav buyCart={buyCart}></Nav>
      <Hero></Hero>
      {/* <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <MainCart dataPromise={dataPromise} buyCart={buyCart} setBuyCart = {setBuyCart}></MainCart>
        </Suspense> */}
      <MainCart
        dataPromise={dataPromise}
        buyCart={buyCart}
        setBuyCart={setBuyCart}
        // handleBusCart={handleBusCart}
        // handleTotal={handleTotal}
        // removeCart={removeCart}
      ></MainCart>

      <GetStart></GetStart>
      <Transparent></Transparent>
      <Ready></Ready>
      <Footer></Footer>
      
      
      
      <ToastContainer position="top-center"
        autoClose={1000}></ToastContainer>
    </>
  )
}

export default App
