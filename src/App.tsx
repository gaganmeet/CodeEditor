import './App.css'
import { useState } from 'react'
import OutputWindow from './components/OutputWindow'
import LanguageSelector from './components/LanguageSelector'
import { useRecoilValue } from 'recoil'
import { codeState, resultState } from './appContext'
import CodeEditor from './components/Editor'

const App: React.FC = () => {
  const result = useRecoilValue(resultState)
  return (
    <div className="m-auto w-4/5">
      <div className="flex flex-col justify-center h-screen">
        <LanguageSelector />
        <CodeEditor />
        <OutputWindow outputDetails={result} />
      </div>
    </div>
  )
}

export default App
