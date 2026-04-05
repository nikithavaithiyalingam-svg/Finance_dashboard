import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

const root = document.getElementById('root')!  // add ! to assert non-null
createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
