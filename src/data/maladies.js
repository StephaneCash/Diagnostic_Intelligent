import React from 'react'
import axios from 'axios';

const url = "http://localhost:8000/api";

export default {
    getAllMalades : () =>
        axios.get(`${url}/malades`),
    addMalade : (malade) =>
        axios.post(`${url}/malades`, malade)
}
