import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './Redux2/Store.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
   </Provider>
)
