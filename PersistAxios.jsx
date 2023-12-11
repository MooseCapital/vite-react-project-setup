import {useContext, useEffect, useState, useRef} from 'react'
import React from 'react'
import axios from "axios";

function persistAxiosData(apiLink) {
    // JSON.parse(sessionStorage.getItem("PersistTestComp")) ||
    const [persistTestComp, setPersistTestComp] = useState({
        fetchData: null,
        loading: true,
        fetchRan: false,
    });

    /* useEffect(() => {
        sessionStorage.setItem("PersistTestComp", JSON.stringify(persistTestComp))
        return () => {
        }
    }, [persistTestComp.fetchData]) */

// let {persistTestComp, setPersistTestComp, updateData} = persistAxiosData('/')

    useEffect(() => {
        const abortController = new AbortController()
        try {
            if (!persistTestComp.fetchRan) {
                async function getAxiosData() {
                    let res = await axios.get(`${import.meta.env.VITE_API_LINK}${apiLink}`, {
                        signal: abortController.signal
                    });
                    let data = await res.data;
                    if (data === undefined) {
                        return
                    }
                    console.log(data)
                    setPersistTestComp(prevState => ({
                        ...prevState,
                        loading: false,
                        fetchRan: true,
                        fetchData: data
                    }))
                }

                getAxiosData()
            }
        }
        catch (e) {
            console.log(e)
        }
        return () => {
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

    return {persistTestComp, setPersistTestComp}
}

export default persistAxiosData


