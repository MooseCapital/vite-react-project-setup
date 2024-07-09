import {useState, useEffect, useRef, useContext, lazy, Suspense} from 'react'
import React from 'react'
import '@mantine/core/styles.css';
// global will import minimal styles we need for theme and wrapper, which saves 23kb
// import '@mantine/core/styles/global.css';
import {Link, Navigate, Outlet, Route, Routes, useLocation} from "react-router-dom";
import Home from "./components/Home.jsx";
import {localStore, normalStore} from "./store.js";
import classes from './*.module.css'
import {createTheme, MantineProvider} from '@mantine/core';
import { range } from '@mantine/hooks';

//do NOT lazy load error page boundary or we will get errors! we can lazy load the 404 page though
import {PageErrorBoundary} from "./components/PageErrorBoundary.jsx";

const LazyErrorPage404 = lazy(() => import('./components/ErrorPage404.jsx'));
// const TestPageLazy = lazy(() => import('./components/Test.jsx'));
// const AboutPageLazy = lazy(() => import('./components/About.jsx'));

/* Images and static assets:
    -> when importing assets/images normally, when building, they go in the asset folder beside html, js
    -> import cat from '../assets/cat.webp'; the images are given a random name, such as cat.webp -> /assets/cat.123456.webp
    -> and this image is included IN the build, and not simply served from the public folder
 * we must import with public folder to get the correct name and so it is served at the root.
    -> const cat = new URL('../../public/images/cat.webp', import.meta.url).href
    -> now we don't see the image in the build, when the page loads, it is fetched from the public folder: /images/cat.webp
  For other file types like our lottie.json this code can be included in the 404 js file or be served separately 404.json
   -> since users have no need to see this code, we can include it in the build and js file
*/

/* Mantine Hooks:  https://mantine.dev/hooks/use-click-outside/
    -> There are ui hooks, state hooks,event listener hooks, and utilities like copy clipboard, debounced state, lets us set state after a ms delay
    -> These all make it much easier than setting it up ourselves, so check it always!
    The range can make an array of numbers, which we would have used in a previous project
        range(0, 5); // [0, 1, 2, 3, 4, 5]
*/


function App(props) {

    const theme = createTheme({
        // fontFamily: 'roboto',

    });

    return (
        <>
            <MantineProvider theme={theme} defaultColorScheme="light">
                {/* <div className={`App`}> */}
                    <PageErrorBoundary>
                        <Routes>
                            <Route path="/" element={<NavLayoutWrapper/>}>
                                <Route index element={<Home/>}/>
                                {/* <Route path="/test" element={<TestPageLazy/>}/> */}
                                {/* <Route path="/about" element={<AboutPageLazy/>}/> */}

                                {/* * is for any path that is NOT defined, if the user types it in the search bar, we redirect to 404 error page */}
                                <Route path="*" element={<LazyErrorPage404/>}/>
                            </Route>
                        </Routes>
                    </PageErrorBoundary>
                {/* </div> */}
            </MantineProvider>
        </>
    )
}


function NavLayoutWrapper({children}) {
    return (
        <>
            <header>
                {/* Link vs NavLink, link is react equivalent to A tag for routing, */}
                {/*     NavLink lets us style depending on "active" or "pending" state */}

                <Link to="/">Home</Link>
                <Link to="/test">Test</Link>
                <Link to="/about">about</Link>
                <Link to="/brokerouter">broken route</Link>
            </header>
            {/* react components rendered between */}
            {/* Outlet is a better alternative to children, so we don't wrap all routes with Layout
                it's an explicit and structured way to handle nested routes
             */}
            {/* put suspense around all children routes, instead of above in route */}
            <Suspense fallback={<div>loading...</div>}>
                <Outlet/>
            </Suspense>

            {/* footer code here */}
        </>

    )

}

export default App
