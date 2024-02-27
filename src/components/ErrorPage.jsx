import {useContext, useEffect, useState, useRef} from 'react'
import {Navigate, useNavigate} from "react-router-dom";

function ErrorPageReset({resetErrorBoundary}) {
const navigate = useNavigate();

    return (
        <>
        <div>App Error. </div>
        <button className={'button'} onClick={() => navigate('/')}>go home</button>
        <button className={'button'} onClick={resetErrorBoundary}>Try again</button>
        </>
    )
}

export default ErrorPageReset
