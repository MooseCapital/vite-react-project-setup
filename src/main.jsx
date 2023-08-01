import React, {} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { HashRouter} from "react-router-dom"
import { AppContextProvider} from "./components/AppContextProvider.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AppContextProvider>
    <HashRouter >
        <App/>
    </HashRouter>
  </AppContextProvider>
  </React.StrictMode>,
)
