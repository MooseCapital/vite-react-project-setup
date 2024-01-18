import {useState, useEffect, useRef, useContext, lazy, Suspense} from 'react'
import React from 'react'
import {Link, Navigate, Route, Routes} from "react-router-dom";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import {ErrorPage} from "./components/ErrorPage.jsx";
import '@fontsource/inter';
import {localStore} from "./store.js";
import CircularProgress from '@mui/joy/CircularProgress';

const CompressImageLazy = lazy(() => import('./components/CompressImage.jsx'))
const TestLazy = lazy(() => import('./components/Test.jsx'))
//test using lazy loaded components vs normal, depends if the component has big package size or not

//react-toastify  ->  https://fkhadra.github.io/react-toastify/introduction
//  import { ToastContainer, toast } from 'react-toastify';
//   import 'react-toastify/dist/ReactToastify.css';


// when we handle async request, we put a skeleton before and load the skeleton when our 'load' state was true, https://react.dev/reference/react/Suspense
// react simplifies it for us, with Suspense, now we don't need a load state, and we lazy import the component  https://react.dev/reference/react/lazy#suspense-for-code-splitting

// Lazy load images
//import {LazyLoadImage} from 'react-lazy-load-image-component';
//import 'react-lazy-load-image-component/src/effects/blur.css';
//lazy load images with packages, so they don't waste bandwidth unless user scrolls it into view, remember, make low kb placeholder image https://www.npmjs.com/package/react-lazy-load-image-component
// then use effect='blur' for nice looks, until image loads when scrolling ->  https://squoosh.app/
//<LazyLoadImage src={props?.image_url} placeholderSrc={props?.image2} alt="" effect={"blur"} />

function App(props) {

    const colorMode = localStore((state) => state.colorMode)

    return (
        <div className={`${colorMode} App`}>
            <div>
                <Link to={"/"}>Home</Link>
                <Link to={"/about"}>About</Link>
                <Link to="/test">Test</Link>
                <Link to="/compressimage">Compress Image</Link>
            </div>
            <Suspense fallback={<div></div>}>
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/about"} element={<About/>}/>
                    <Route path="/test" element={<Suspense fallback={<CircularProgress size="md" value={25} variant="soft"/>}>
                        <TestLazy/>
                    </Suspense>}/>
                    <Route path="/compressimage" element={<CompressImageLazy/>}/>
                    {/* catch all, so any unknown pages navigate back to the home page, or
             error page to show it doesn't exist, then auto redirect home  */}
                    <Route path="*" element={<ErrorPage/>}/>
                </Routes>

            </Suspense>
        </div>
    )
}



export default App
