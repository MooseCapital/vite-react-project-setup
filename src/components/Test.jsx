import {useContext, useEffect, useState, useRef, lazy, useCallback, Suspense} from 'react'
import React from 'react'
import axios from "axios";
import {Skeleton} from "@mui/joy";
import persistAxiosData from "../../PersistAxios.jsx";
import imageCompression from "browser-image-compression";
import {useStore} from "../store.js";


function Test(props) {

    const {fetchData, loading, fetchRan, setFetchData} = useStore((state) => ({
        fetchData: state.testComp.fetchData,
        loading: state.testComp.loading,
        fetchRan: state.testComp.fetchRan,
        setFetchData: state.setFetchData
    }));
    persistAxiosData('/');


    return (
        <>
            <h3>Test</h3>
            {loading ? <Skeleton variant="text" animation="wave" width={100}/> :
                <div>{fetchData?.msg}</div>
            }

        </>
    );
}


export default Test
