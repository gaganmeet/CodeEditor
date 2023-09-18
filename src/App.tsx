import './App.css'
import axios from 'axios'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Ide from './features/Ide'
import Practice from './features/Practice'

const App: React.FC = () => {
  axios.defaults.headers['X-RapidAPI-Key'] = import.meta.env.VITE_APIKEY
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Ide />} />
        <Route path="/practice" element={<Practice />} />
      </Routes>
    </>
  )
}

export default App
