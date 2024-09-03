import React from 'react'
import ReactDOM from 'react-dom/client'
import { GoogleOAuthProvider } from '@react-oauth/google';

import App from './App'
import './assets/globals/normalize.css'
import './assets/config/index.sass'

ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId="361990692857-21uq867i8i95tog3a3s0lqfj2jte80rd.apps.googleusercontent.com">
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </GoogleOAuthProvider>
)
