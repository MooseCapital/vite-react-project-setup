import {useContext, useEffect, useState, useRef} from 'react'
import {Navigate, useNavigate} from "react-router-dom";
import {Button} from "@mantine/core";


function ErrorPage({resetErrorBoundary}) {
    const navigate = useNavigate();

    return (
        <div style={{display:'flex', flexDirection:'column',alignItems:'center',justifyContent:'center',
            height:'100vh'}}>
            <h2>App Error. </h2>

            <Button onClick={resetErrorBoundary} size={"md"} variant={"soft"}>Try again</Button>

        </div>
    )
}

export default ErrorPage
