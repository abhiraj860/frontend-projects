import {BrowserRouter, Route, Routes} from 'react-router-dom'

import {Mobile} from './pages/Mobile'
import {Otp} from './pages/Otp'

function App() {
  

  return (
    <div className='min-h-screen bg-black'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Mobile/>} />
          <Route path='/otp' element={<Otp/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
