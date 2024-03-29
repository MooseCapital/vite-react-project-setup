import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter,HashRouter} from "react-router-dom";

//redux store & provider wrapping app
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter basename={'/'}>
        <App/>
    </HashRouter>
  </React.StrictMode>
)
