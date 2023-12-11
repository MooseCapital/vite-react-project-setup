import {useState, useEffect, useRef, useContext, lazy, Suspense} from 'react'
import React from 'react'
import {Link, Navigate, Route, Routes} from "react-router-dom";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import {ErrorPage} from "./components/ErrorPage.jsx";
import {AppContext} from "./components/AppContextProvider.jsx";
import '@fontsource/inter';
import Test from "./components/Test.jsx";
const TestLazy = lazy(() => import('./components/Test.jsx'))
//test using lazy loaded components vs normal, depends if the component has big package size or not

//react-toastify  ->  https://fkhadra.github.io/react-toastify/introduction

// when we handle async request, we put a skeleton before and load the skeleton when our 'load' state was true, https://react.dev/reference/react/Suspense
// react simplifies it for us, with Suspense, now we don't need a load state, and we lazy import the component  https://react.dev/reference/react/lazy#suspense-for-code-splitting

// Lazy load images
//import {LazyLoadImage} from 'react-lazy-load-image-component';
//import 'react-lazy-load-image-component/src/effects/blur.css';
//lazy load images with packages, so they don't waste bandwidth unless user scrolls it into view, remember, make low kb placeholder image https://www.npmjs.com/package/react-lazy-load-image-component
// then use effect='blur' for nice looks, until image loads when scrolling ->  https://squoosh.app/
//<LazyLoadImage src={props?.image_url} placeholderSrc={props?.image2} alt="" effect={"blur"} />

function App(props) {

    const context = useContext(AppContext)
    return (
        <div className={`${context.colorMode} App`}>
            <div>
                <Link to={"/"}>Home</Link>
                <Link to={"/about"}>About</Link>
                <Link to="/test">Test</Link>
            </div>
            <Suspense fallback={<div></div>}>
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/about"} element={<About/>}/>
                    <Route path="/test" element={<TestLazy/>}/>
                    {/* catch all, so any unknown pages navigate back to the home page, or
             error page to show it doesn't exist, then auto redirect home  */}
                    <Route path="*" element={<ErrorPage/>}/>
                </Routes>

            </Suspense>
        </div>
    )
}



export default App
