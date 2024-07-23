import {useContext, useEffect, useState, useRef} from 'react'
import {Link, Navigate, useNavigate} from "react-router-dom";
import Lottie from "lottie-react";
import bear404 from "../Assets/bear-404.json";
// const bear404Vite = new URL('/public/images/bear-404.json', import.meta.url).href

function ErrorPage404({resetErrorBoundary}) {
    const navigate = useNavigate();
    //start testing with lottie files package instead of this one using airbnbn lottie player

    return (
        <div style={{backgroundColor: '#ffe4fc', overflow: 'hidden', position: 'relative'}}>
            <Lottie animationData={bear404} loop={true} style={{height: '100vh'}}/>
            <Link to={"/"}
                 style={{position: 'absolute', top: '70%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1}}>
                Go Home
            </Link>


        </div>
    )
}

export default ErrorPage404

