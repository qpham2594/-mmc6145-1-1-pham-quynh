import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'

import Contact from './pages/contact'
import About from './pages/about'
import Header from './components/header'

export default function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}