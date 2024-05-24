import React from 'react'
import { Toaster } from 'react-hot-toast'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import './i18next'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Toaster position='top-center' reverseOrder={false} />
    <App />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
