import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//기본 설정은 여기에 한다.
createRoot(document.getElementById('root')).render(
    <App />
)
