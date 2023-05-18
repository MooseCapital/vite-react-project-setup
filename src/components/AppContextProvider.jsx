import {useContext, useEffect, useState, useRef, createContext} from 'react'
const AppContext = createContext({})

function AppContextProvider(props) {
//pass down all state through context without drilling through unnecessary components
    //whatever we want to pass goes inside the value object
    //when we want to use it on a component, import
        //import {AppContext} from "../components/AppContextProvider.jsx";
    // const context = useContext(AppContext)


    return (
        <AppContext.Provider value={{ }}>
            {props.children}
        </AppContext.Provider>
    )
}

export {AppContextProvider, AppContext}
