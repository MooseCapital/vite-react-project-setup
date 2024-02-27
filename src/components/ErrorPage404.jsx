import {useContext, useEffect, useState, useRef} from 'react'
import {Navigate, useNavigate} from "react-router-dom";

function ErrorPageReset({resetErrorBoundary}) {
const navigate = useNavigate();

    return (
        <>
        <div>404 page not found</div>
        <button className={'button'} onClick={() => navigate('/')}>go home</button>
        </>
    )
}

export default ErrorPageReset
