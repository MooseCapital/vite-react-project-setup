import {useState, useEffect, useRef, useContext, lazy, Suspense} from 'react'
import React from 'react'
import {Link, Navigate, Outlet, Route, Routes} from "react-router-dom";
import Home from "./components/Home.jsx";
import '@fontsource/inter';
import {localStore, normalStore} from "./store.js";
import CircularProgress from '@mui/joy/CircularProgress';
import {ErrorBoundary} from "react-error-boundary";

const TestPageLazy = lazy(() => import('./components/Test.jsx'))
import About from "./components/About.jsx";
import {ErrorPage} from "./components/ErrorPage.jsx";
import {ErrorPage404} from "./components/ErrorPage404.jsx";

//test using lazy loaded components vs normal, depends if the component has big package size or not


function App(props) {



    const {colorMode} = localStore((state) => ({
        colorMode: state.colorMode
    }));

    return (
        <div className={`${colorMode} App`}>
            <CompactPageErrorBoundary>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<Home/>}/>
                        <Route path="/test" element={
                            <CompactPageErrorBoundary>
                                <Suspense fallback={<CircularProgress/>}>

                                <Testing/>
                                </Suspense>
                            </CompactPageErrorBoundary>
                        }/>

                        {/* * is for any path that is NOT defined, if the user types it in the search bar, we redirect to 404 error page */}
                        <Route path="*" element={<ErrorPage404/>}/>
                    </Route>
                </Routes>
            </CompactPageErrorBoundary>
        </div>
    )
}

const logError = (Error, info) => {
    // Do something with the error, e.g. log to an external API
    // console.log(`error message: ${Error.message}`)
    console.log(Error)
    console.log(info);
};

function CompactPageErrorBoundary(props) {
    //when the user clicks 'Try Again', it runs onReset, which runs the resetNormalState function in the store
    const {resetNormalState} = normalStore((state) => ({
        resetNormalState: state.resetNormalState
    }));

    return (
        <ErrorBoundary FallbackComponent={ErrorPage} key={location.pathname}
                       onReset={resetNormalState}
                       onError={logError}>
            {props.children}
        </ErrorBoundary>
    )
}


function Layout({children}) {
    return (
        <>
            <header>
                {/* Link vs NavLink, link is react equivalent to A tag for routing,
                    NavLink lets us style depending on "active" or "pending" state
                 */}
                <Link to="/">Home</Link>
                <Link to="/test">Test</Link>
                <Link to="/chart">chart</Link>
            </header>
            {/* react components rendered between */}
            {/* Outlet is a better alternative to children, so we don't wrap all routes with Layout
                it's an explicit and structured way to handle nested routes
             */}
            <Outlet/>

            {/* footer code here */}
        </>

    )

}

export default App
