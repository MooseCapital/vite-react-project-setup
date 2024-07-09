import {useContext, useEffect, useState, useRef} from 'react'
import {Link, Navigate, useNavigate} from "react-router-dom";
import Lottie from "lottie-react";
import bear404 from "../Assets/bear-404.json";
import {Button, useMatches} from "@mantine/core";

function ErrorPage404({resetErrorBoundary}) {
    const navigate = useNavigate();



    return (
        <div style={{backgroundColor: '#ffe4fc', overflow: 'hidden', position: 'relative'}}>
            <Lottie animationData={bear404} loop={true} style={{height: '100vh'}}/>
            {/* remember, when using navigate("/"), we simply go back to the home page with all state intact, there was NO refresh
                -> if we use <Button component={Link} to="/react-router"> it was cause a complete reload to the home page and lose all state
                -> we may or may not want this, such as on errors, but not for a page not found.
             */}
            <Button size={"md"} onClick={() => navigate("/")}
            style={{position: 'absolute', top: '80%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1}}
            variant="white">Back to home</Button>

        </div>
    )
}

export default ErrorPage404

