import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Auth0Provider domain={env.meta.VITE_DOMAIN_ID} clientId={env.meta.VITE_CLIENT_ID} */}
    <Auth0Provider domain='dev-xls8g4x7rk0siyf1.us.auth0.com' clientId='oeWWKcvYjRCHikGnYABxGx4YnXtyuzlr'
     authorizationParams={{
      redirect_uri: window.location.origin
    }}>
      <App />
    </Auth0Provider>
  </StrictMode>,
)
