import {useContext, useEffect, useState, useRef} from 'react'
import React from 'react'
import {localStore, sessionStore, useStore} from "../store.js";


function Home(props) {

    const {colorMode,toggleColorMode} = localStore((state) =>({
        colorMode: state.colorMode,
        toggleColorMode: state.toggleColorMode
    }));

    const {counter,incrementCounter} = sessionStore((state) => ({
        counter: state.counter,
       incrementCounter: state.incrementCounter
    }));

    return (
        <>
            <div>Home page</div>
            <button className={"test-btn"} onClick={toggleColorMode}>toggle color mode
            </button>
            <p>{`current state: ${colorMode}`}</p>
            <button onClick={incrementCounter}>increment counter</button>
            <div>counter {counter}</div>
        </>
    )
}

export default Home
