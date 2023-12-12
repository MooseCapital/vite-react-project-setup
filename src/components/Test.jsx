import {useContext, useEffect, useState, useRef, lazy, useCallback} from 'react'
import React from 'react'
import axios from "axios";
import {Skeleton} from "@mui/joy";
import persistAxiosData from "../../PersistAxios.jsx";
import imageCompression from "browser-image-compression";


function Test(props) {

// const persistAxiosDataLazy = lazy(() => import('../../PersistAxios.jsx'))
    const {persistTestComp, setPersistTestComp} = persistAxiosData('/')

    return (
        <>
            <h3>Test</h3>
            {persistTestComp?.loading ? <Skeleton variant="text" animation="wave" width={100}/> :
                <div>{persistTestComp?.fetchData?.msg}</div>
            }
        </>
    );
}


export default Test
