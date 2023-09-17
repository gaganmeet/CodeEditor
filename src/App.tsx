import './App.css'
import OutputWindow from './components/OutputWindow'
import LanguageSelector from './components/LanguageSelector'
import { useRecoilValue } from 'recoil'
import { resultState } from './appContext'
import axios from 'axios'
import CodeEditor from './components/Editor'

const App: React.FC = () => {
  axios.defaults.headers['X-RapidAPI-Key'] = import.meta.env.VITE_APIKEY
  const result = useRecoilValue(resultState)
  return (
    <div className="m-auto w-4/5">
      <div className="flex h-screen flex-col justify-center">
        <LanguageSelector />
        <CodeEditor />
        <OutputWindow outputDetails={result} />
      </div>
    </div>
  )
}

export default App
