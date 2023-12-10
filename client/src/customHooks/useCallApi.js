import axios from 'axios';
import React, { useEffect, useState } from 'react'

const baseUrl = "https://atozai.adaptable.app"
const useCallApi = (intialState = "") => {

    const [data, setData] = useState(intialState);
    const [error, setError] = useState(null);

    const apiCallHandler = async (endpoint, text, headers) => {

        try {
            const apiResponse = await axios.post(`${baseUrl}${endpoint}`, { text })

            setData(apiResponse.data)

        } catch (err) {
            if (err.response.data.error) {
                setError(err.response.data.error);
            } else if (err.message) {
                setError(err.message);
            }
            setTimeout(() => {
                setError("");
            }, 5000);
        }
    }


    return [data, apiCallHandler, error]
}

export default useCallApi