import { createContext, useState, useEffect } from 'react';
import { getApi } from '../services/getApi.js';

//Create variable that have createContext() properties
export const ApiContext = createContext();

//Create variable that allow to get the data from Fetch and use the Provider method
export const ContextApi = ({ children }) => {
    const urlAPI = '/photos.json';

    const [data, setData] = useState([]);
    const [heart, setHeart] = useState([]);

    useEffect(() => {
        getApi(urlAPI, setData);
    } ,[])

    return(
        <ApiContext.Provider value={{ data, setData, heart, setHeart }}>
            {children}
        </ApiContext.Provider>
    );
};