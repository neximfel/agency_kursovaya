import './App.scss'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "../src/components/Header/Header.jsx"
import Footer from "../src/components/Footer/Footer.jsx"
import Page1 from "../src/pages/Page1/Page1.jsx"
import Page2 from "../src/pages/Page2/Page2.jsx"
import Page3 from "../src/pages/Page3/Page3.jsx"
import Page4 from "../src/pages/Page4/Page4.jsx"


function App() {

  return (
    <>
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" index element={<Page1/>} />
            <Route path="/pages" element={<Page2/>} />
            <Route path="/event" element={<Page3/>} />
            <Route path="/porfolio" element={<Page4/>} />
            <Route path="/portfolio" element={<Page4/>} />
          </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App