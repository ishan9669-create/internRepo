import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/footer'
import Header from './components/header'
import Story from './pages/story'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
     <BrowserRouter>
     <Routes>
      <Route path='/story' element={<Story/>} />
     </Routes>
     </BrowserRouter>
     
    </>
  )
}

export default App
