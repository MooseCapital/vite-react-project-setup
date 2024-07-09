import {useContext, useEffect, useState, useRef} from 'react'
import React from 'react'
import {localStore, normalStore} from "../store.js";



function Home(props) {



    const {test} = normalStore((state) => ({
        test: state.test
    }));
    const [counter, setCounter] = useState(0)

    return (
        <div style={{alignItems:"start"}}>
            <div>Home page</div>

            <button  onClick={() => setCounter(prevState => prevState + 1)}> increment counter</button>
            <div>counter {counter}</div>
        </div>
    )
}

export default Home
