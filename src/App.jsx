import {useState, useEffect, useRef, useContext, lazy, Suspense} from 'react'
import React from 'react'
import {Link, Navigate, Outlet, Route, Routes, useLocation} from "react-router-dom";
import Home from "./components/Home.jsx";
import {localStore, normalStore} from "./store.js";
import {CircularProgress} from '@mui/joy';

//do NOT lazy load error page boundary or we will get errors! we can lazy load the 404 page though
const LazyErrorPage404 = lazy(() => import('./components/ErrorPage404.jsx'));
// import ErrorPage404 from "./components/ErrorPage404.jsx";
import {PageErrorBoundary} from "./components/PageErrorBoundary.jsx";
const TestPageLazy = lazy(() => import('./components/Test.jsx'));
const AboutPageLazy = lazy(() => import('./components/About.jsx'));

//test using lazy loaded components vs normal, depends if the component has big package size or not


function App(props) {

    //we can remove the localstore here and
    //change the div className App to <> fragment if we use a css library like MUI
    const {colorMode} = localStore((state) => ({
        colorMode: state.colorMode
    }));

    return (
        <div className={`${colorMode} App`}>
            <PageErrorBoundary>
                <Routes>
                    <Route path="/" element={<NavLayoutWrapper/>}>
                        <Route index element={<Home/>}/>
                        <Route path="/test" element={<TestPageLazy/>}/>
                        <Route path="/about" element={<AboutPageLazy/>}/>

                        {/* * is for any path that is NOT defined, if the user types it in the search bar, we redirect to 404 error page */}
                        <Route path="*" element={<LazyErrorPage404/>}/>
                    </Route>
                </Routes>
            </PageErrorBoundary>
        </div>
    )
}


function NavLayoutWrapper({children}) {
    return (
        <>
            <header>
                {/* Link vs NavLink, link is react equivalent to A tag for routing,
                    NavLink lets us style depending on "active" or "pending" state
                 */}
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
            <Suspense fallback={<CircularProgress/>}>
                <Outlet/>
            </Suspense>

            {/* footer code here */}
        </>

    )

}

export default App
