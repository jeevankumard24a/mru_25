'use client'

import {useEffect, useState} from "react";

export default function PlayApi1() {

    const [data,SetData]= useState([])

    const fetchData= async()=> {

        const response = await fetch('http://localhost:5005/firstapi')
        const data = await response.json()
        SetData(data)
    }


    useEffect(()=>{
        fetchData()
    },[])

    return(
        <div>

            <div> {JSON.stringify(data)} </div>

        </div>
    )


}