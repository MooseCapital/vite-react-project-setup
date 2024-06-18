import {useLocation} from "react-router-dom";
import {ErrorBoundary} from "react-error-boundary";
import ErrorPage from "./ErrorPage.jsx";
import React from "react";

const logError = (Error, info) => {
    // Do something with the error, e.g. log to an external API
    // console.log(`error message: ${Error.message}`)
    console.log(Error)
    console.log(info);
};

function PageErrorBoundary(props) {
    const location = useLocation();
    //when the use clicks 'try again', we can manually reset state or simply refresh the page to get it again


    const resetErrorBoundary = () => window.location.reload();

    return (
        <ErrorBoundary FallbackComponent={ErrorPage} key={location.pathname}
                       onReset={resetErrorBoundary}
                       onError={logError}>
            {props.children}
        </ErrorBoundary>
    )
}

export {PageErrorBoundary}