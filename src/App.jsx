import {useState, useEffect, useRef, useContext} from 'react'
import {AppContext} from "./components/AppContextProvider.jsx";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home.jsx";

function App(props) {
  // install react-router-dom in main.jsx with a click
  //set light-mode or dark-mode in main.jsx

  return (
    <div className={`${props.colorMode} App`}>



        <Routes>
            <Route path={"/"} element={<Home/>}/>

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


To make work with github pages

  go into package.json and add
  "homepage": "/github-repo-name/#",


  go into vite.config.js and add:
     base: "/github-repo-here"

inside main.jsx -> the router component needs a basename or else it will not show up in the github page link
        <Router basename={'/react-directory-here'}>
            <App />
        </Router>



*/