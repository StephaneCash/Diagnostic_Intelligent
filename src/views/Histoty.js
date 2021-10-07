import React from 'react'
import maladies from '../data/maladies'
import { useEffect, useState } from 'react';
import Menu from "./Menu";
import UpContainer from './UpContainer';

function Histoty() {

    const [data, setData] = useState([]);

    const fetchData = () => {
        maladies.getAllMalades().then(resp => {
            const malades = resp.data;
            setData(malades);
        })
    }

    useEffect(() => {
        fetchData();
    }, []);

    console.log("Différents malades", data);

    return (
        <div className="">
            <UpContainer></UpContainer>
            <Menu />
            <div className="centerData">
                history
            </div>
        </div>
    )
}

export default Histoty
