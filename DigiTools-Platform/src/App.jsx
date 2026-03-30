import { Suspense, useState } from "react"
import Hero from "./componants/Hero/Hero"
import MainCart from "./componants/MainCartSection/MainCartSection"
import Nav from "./componants/Nav/Nav"

const fetchData = async () => {
  const response = await fetch("/data.json")
  return response.json();
}



function App() {
  const dataPromise = fetchData()
  const [buyCart, setBuyCart] = useState([])
  return (
    <>
      <Nav buyCart={buyCart}></Nav>
      <Hero></Hero>
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <MainCart dataPromise={dataPromise} buyCart={buyCart} setBuyCart = {setBuyCart}></MainCart>
      </Suspense>
    </>
  )
}

export default App
