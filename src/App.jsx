import {useState, useEffect, useRef, useContext} from 'react'
import React from 'react'
import {AppContext} from "./components/AppContextProvider.jsx";
import {Link, Navigate, Route, Routes} from "react-router-dom";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import {ErrorPage} from "./components/ErrorPage.jsx";


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
            <Route path="*" element={<ErrorPage/>} />
        </Routes>
    </div>
  )
}

export default App
