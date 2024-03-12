import { Routes, Route, Navigate } from 'react-router-dom'

import AppBar from "./Components/AppBar"
import Footer from "./Components/Footer"
import Home from "./Components/Home"
import About from "./Components/About"
import Team from "./Components/Team"
import RiceProduct from "./Components/RiceProduct"
import SeedProduct from "./Components/SeedProduct"
import DaalProduct from "./Components/DaalProduct"
import Join from "./Components/Join"
import Dealership from "./Components/Dealership"
import TechnicalSupport from "./Components/TechnicalSupport"
import Contact from "./Components/Contact"

function App() {
  return (
    <>
      <AppBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/team' element={<Team />} />
        <Route path="/products/rice" element={<RiceProduct />} />
        <Route path="/products/seed" element={<SeedProduct />} />
        <Route path="/products/daal" element={<DaalProduct />} />
        <Route path="/more/join" element={<Join />} />
        <Route path="/more/dealership" element={<Dealership />} />
        <Route path="/more/support" element={<TechnicalSupport />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
