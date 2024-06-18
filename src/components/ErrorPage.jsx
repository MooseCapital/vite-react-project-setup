import {useContext, useEffect, useState, useRef} from 'react'
import {Navigate, useNavigate} from "react-router-dom";
import {Button} from "@mui/joy";

function ErrorPage({resetErrorBoundary}) {
    const navigate = useNavigate();

    return (
        <div style={{display:'flex', flexDirection:'column',alignItems:'center',justifyContent:'center',
            height:'100vh'}}>
            <h2>App Error. </h2>
            {/* <button className={'button'} onClick={() => navigate('/')}>go home</button> */}
            {/* <button className={'button'} onClick={resetErrorBoundary}>Try again</button> */}
            <Button
                onClick={resetErrorBoundary}
                size="lg"
                variant="soft"
                sx={{marginTop: '1rem'}}
            >Try again</Button>
        </div>
    )
}

export default ErrorPage
