import {useContext, useEffect, useState, useRef, lazy} from 'react'
import React from 'react'
import axios from "axios";
import {Skeleton} from "@mui/joy";
import persistAxiosData from "../../PersistAxios.jsx";
// const persistAxiosDataLazy = lazy(() => import('../../PersistAxios.jsx'))
function Test(props) {

    let {persistTestComp, setPersistTestComp,} = persistAxiosData('/')

    return (
        <div>
        <h2>test</h2>
            {persistTestComp?.loading ? <Skeleton variant="text" sx={{fontSize: '1rem'}} width={100}/> :
                <div>{persistTestComp?.fetchData.msg}</div>
            }
        </div>
    )
}

export default Test
