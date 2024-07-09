import {useContext, useEffect, useState, useRef, lazy, useCallback, Suspense} from 'react'
import React from 'react'

import {normalStore} from "../store.js";


function Test(props) {


    const {counter, incrementCounter} = normalStore((state) => ({
        counter: state.counter,
        incrementCounter: state.incrementCounter
    }));


    //if we have our error thrown outside this, that means, error is thrown while the page is loading
    // suspense handles lazy loading and when a component is not ready to render, it's not able to handle errors
    // the error is not caught by error boundary, because it's thrown in render phase, not in effect or event handler
    // use-effect, allows the error to be handles by error boundary and not be thrown in the render phase
    //it will be very rare we get an error in the render phase, like accessing undefined object properties, or throwing it like we did

     if (counter > 0) {
            throw new Error('testing error')
        }


    return (
        <>
            <h3>Test working</h3>


        </>
    );
}


export default Test
