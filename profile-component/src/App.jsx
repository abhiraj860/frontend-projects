import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { ProfileCard } from '../components/ProfileCard'

function App() {

  return (
    <div>
      <ProfileCard></ProfileCard>
      <div className="w-24 border-2 border-slate-500">
            Top covers
      </div>
    </div>
  )
}

export default App
