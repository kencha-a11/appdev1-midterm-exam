import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// ✅ Global CSS imports (from public/assets)
import '/assets/css/templatemo-chain-app-dev.css'
import '/assets/css/animated.css'
import '/assets/css/owl.css'

// ✅ Optional: if you plan to use Bootstrap JS features
// (Bootstrap CSS is already linked in index.html)
import '/vendor/bootstrap/css/bootstrap.min.css'

// ✅ Mount React app to #root (index.html)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
