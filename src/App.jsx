import {useState, useEffect, useRef, useContext} from 'react'
import React from 'react'
import {AppContext} from "./components/AppContextProvider.jsx";
import {Link, Navigate, Route, Routes} from "react-router-dom";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";


function App(props) {
  // ** install react-router-dom in main.jsx with a click **

const appContext = useContext(AppContext)
  //set light-mode or dark-mode with useContext and appContext.setColorMode, to light-mode or dark-mode

  return (
    <div className={`${appContext.colorMode} App`}>

            <Link to={"/Home"}>Home</Link>
            <Link to={"/About"}>About</Link>

        <Routes>
            <Route path={"/"} element={<Home/>}/>
            <Route path={"/About"} element={<About/>}/>

            {/* catch all, so any unknown pages navigate back to the home page, or
             error page to show it doesn't exist, then auto redirect home  */}
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    </div>
  )
}

export default App











/*
to deploy to github pages
add this to package.json scripts

"deploy": "gh-pages -d dist"

npm install gh-pages --save-dev

npm run build

npm run deploy

**To make work with GitHub pages we must do ALL of these **

go into package.json and add
"homepage": ".",


go into vite.config.js and add:
 base: "/github-repo-here/"

HashRouter is for when we don't have a server handling routes, it uses history api, BrowserRouter is for when we have server
    BrowserRouter works in local host because it's a server handling it, but fails on Github pages with no server
<HashRouter>
        <App />
 </HashRouter>

<Router >
    <App />
</Router>



*/