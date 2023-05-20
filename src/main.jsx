import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter, HashRouter} from "react-router-dom"
import {AppContextProvider} from "./components/AppContextProvider.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AppContextProvider>
    <HashRouter >
        <App colorMode={"light-mode"} />
    </HashRouter>
  </AppContextProvider>
  </React.StrictMode>,
)
