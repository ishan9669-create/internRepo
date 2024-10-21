import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/footer'
import Header from './components/header'
import Story from './pages/story'
import Feature from './pages/feature'
import Home from './pages/home'
import Blogpage from './pages/blogpage'
import Schedule from './pages/schedule1'
import Terms from './pages/terms'
import Privacy from './pages/privacy'
import Read from './pages/readblog'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
     <BrowserRouter>
     <Routes>
      <Route path='/story' element={<Story/>} />
      <Route path='/feature' element={<Feature/>} />
      <Route path='/' element={<Home/>} />
      <Route path='/blogpage' element={<Blogpage/>} />
      <Route path='/schedule' element={<Schedule/>} />
      <Route path='/terms' element={<Terms/>} />
      <Route path='/privacy' element={<Privacy/>} />
      <Route path='/read' element={<Read/>} />
      
      
     </Routes>
     </BrowserRouter>
     
    </>
  )
}

export default App
