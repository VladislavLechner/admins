import * as axios from "axios";
import React from 'react';

const baseUrl = "http://127.0.0.1:8000"


export const getAccumulators = () => {
    return (axios.get(`${baseUrl}/get-accumulators`)).then(response => {
        return response.data
    })
}
