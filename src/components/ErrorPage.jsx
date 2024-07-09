import {useContext, useEffect, useState, useRef} from 'react'
import {Navigate, useNavigate} from "react-router-dom";


function ErrorPage({resetErrorBoundary}) {
    const navigate = useNavigate();

    return (
        <div style={{display:'flex', flexDirection:'column',alignItems:'center',justifyContent:'center',
            height:'100vh'}}>
            <h2>App Error. </h2>
            {/* <button className={'button'} onClick={() => navigate('/')}>go home</button> */}
            {/* <button className={'button'} onClick={resetErrorBoundary}>Try again</button> */}
            <button
                onClick={resetErrorBoundary}
                style={{marginTop: '1rem'}}
            >Try again</button>
        </div>
    )
}

export default ErrorPage
