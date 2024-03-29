import {useContext, useEffect, useState, useRef} from 'react'
import React from 'react'
import axios from "axios";
import {normalStore} from "../store.js";

function persistAxiosData(apiLink) {


    const {fetchData, loading, fetchRan, setFetchData, resetFetchData} = normalStore((state) => ({
        fetchData: state.testComp.fetchData,
        fetchRan: state.testComp.fetchRan,
        setFetchData: state.setFetchData,
        resetFetchData: state.resetFetchData,
    }));

    //because react calls the cleanup function twice in development mode, we only use it in production, where cleanup is NOT called first.
    useEffect(() => {
        const abortController = new AbortController()
        try {
            async function getAxiosData() {
                let res = await axios.get(`${import.meta.env.VITE_API_LINK}${apiLink}`, {
                    signal: abortController.signal
                });
                let data = res.data;
                if (data === undefined) {
                    return
                }

                setFetchData(data);
                console.log(data)

            }

            if (!fetchRan) {
                getAxiosData()
            }
        } catch (e) {
            console.log(e)
        }
        return () => {
            //will make loading:true, fetchRan: false, so we run each time the component mounts, here we run once, and only again on updates
            // resetFetchData()
            console.log("clean up function")
            abortController.abort()
        }
    }, [])

    axios.interceptors.response.use(
        (response) => response,
        (error) => {
            if (error.code === "ERR_CANCELED") {
                console.error('request canceled')
                return Promise.resolve({status: 499})
            }
            return Promise.reject((error.response && error.response.data) || 'Error')
        }
    );

    return
}

export default persistAxiosData


