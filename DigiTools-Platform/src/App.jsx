import { Suspense } from "react"
import Hero from "./componants/Hero/Hero"
import MainCart from "./componants/MainCartSection/MainCartSection"
import Nav from "./componants/Nav/Nav"

const fetchData = async () => {
  const response = await fetch("/data.json")
  return response.json();
}



function App() {
  const dataPromise = fetchData()
  return (
    <>
      <Nav></Nav>
      <Hero></Hero>
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <MainCart dataPromise={dataPromise}></MainCart>
      </Suspense>
    </>
  )
}

export default App
