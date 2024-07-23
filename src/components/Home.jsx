import {useContext, useEffect, useState, useRef} from 'react'
import React from 'react'
import {localStore, normalStore} from "../store.js";


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
            <button onClick={toggleColorMode}> toggle color mode</button>
            <p>{`current state: ${colorMode}`}</p>
            <button onClick={() => setCounter(prevState => prevState + 1)}> increment counter</button>
            <div>counter {counter}</div>
        </div>
    )
}

export default Home
