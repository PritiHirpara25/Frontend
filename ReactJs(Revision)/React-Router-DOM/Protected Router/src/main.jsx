import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Context from '../Context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <Context>
    <App />
  </Context>
)
