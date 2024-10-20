import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/footer'
import Header from './components/header'
import Story from './pages/story'
import Feature from './pages/feature'
import Home from './pages/home'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
     <BrowserRouter>
     <Routes>
      <Route path='/story' element={<Story/>} />
      <Route path='/feature' element={<Feature/>} />
      <Route path='/home' element={<Home/>} />
      
     </Routes>
     </BrowserRouter>
     
    </>
  )
}

export default App
