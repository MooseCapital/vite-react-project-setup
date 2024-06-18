import {useContext, useEffect, useState, useRef} from 'react'
import React from 'react'
import {localStore, normalStore} from "../store.js";
import {Button, Input, Modal, ModalClose, Sheet, Typography, Link} from "@mui/joy";


function Home(props) {

    const {colorMode, toggleColorMode} = localStore((state) => ({
        colorMode: state.colorMode,
        toggleColorMode: state.toggleColorMode
    }));

    const {test} = normalStore((state) => ({
        test: state.test
    }));
    const [counter, setCounter] = useState(0)
    return (
        <div style={{alignItems:"start"}}>
            <div>Home page</div>
            <Button variant={'soft'} onClick={toggleColorMode}> toggle color mode</Button>
            <p>{`current state: ${colorMode}`}</p>
            <Button variant={'soft'} onClick={() => setCounter(prevState => prevState + 1)}> increment counter</Button>
            <div>counter {counter}</div>
        </div>
    )
}

export default Home
