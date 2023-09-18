import React from 'react'
import './index.css'
import App from './App'
import { RecoilRoot } from 'recoil'
import DebugObserver from './DebugObserver'
import RecoilNexus from 'recoil-nexus'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

const container = document.getElementById('root')

if (container) {
  const root = createRoot(container)
  root.render(
    <React.StrictMode>
      <RecoilRoot>
        <RecoilNexus />
        <DebugObserver />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </RecoilRoot>
    </React.StrictMode>
  )
}
