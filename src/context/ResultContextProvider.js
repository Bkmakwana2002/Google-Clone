import React, { createContext, useContext, useState } from "react";
import { useLocation } from "react-router-dom";

const ResultContext = createContext()
const baseUrl = "https://google-search3.p.rapidapi.com/api/v1"

const ResultContextProvider = (props) => {

    const [results, setResults] = useState([])
    const [isLoading, setLoading] = useState(false)
    const [SearchTerm, setSearchTerm] = useState('')

    const getResult = async (url) => {
        setLoading(true)

        const response = await fetch(`${baseUrl}${url}`, {
            method: "GET",
            headers: {
                'x-user-agent': 'desktop',
                'x-proxy-location': 'IN',
                'x-rapidapi-host': 'google-search3.p.rapidapi.com',
                'x-rapidapi-key': 'e8121ebcb3msh4ea6b6fa7dfd28ap1c6de6jsnc376befa3516'
            }
        })

        const data = await response.json()   
        if(url.includes('/news'))
        {
           setResults(data.entries)
        }
        else if(url.includes('/images'))
        {
           setResults(data.image_results)
        }
        else{
            setResults(data.results)
        }
        setLoading(false)
    }

    return (
        <ResultContext.Provider value={{ getResult,results,setSearchTerm,SearchTerm, isLoading }}>
           {props.children}
        </ResultContext.Provider>
    )
}

export default ResultContextProvider
export const useResultContext = ()=> useContext(ResultContext)