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

    const fetchMalades = () => {
        data.forEach(element => {
            console.log(element.nom)
        });
    }

    return (
        <div className="">
            <UpContainer></UpContainer>
            <Menu />
            <div className="centerData">
                historyjj
                {
                    fetchMalades()
                }
            </div>
        </div>
    )
}

export default Histoty
