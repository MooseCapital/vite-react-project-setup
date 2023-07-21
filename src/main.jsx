import React, {useContext} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter, HashRouter} from "react-router-dom"
import {AppContext, AppContextProvider} from "./components/AppContextProvider.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AppContextProvider>
    <HashRouter >
        <App/>
    </HashRouter>
  </AppContextProvider>
  </React.StrictMode>,
)
