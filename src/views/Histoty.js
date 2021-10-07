import React from 'react'
import maladies from '../data/maladies'
import { useEffect, useState } from 'react';
import Menu from "./Menu";
import UpContainer from './UpContainer';
import Load from "../dialog/Load";

function Histoty() {

    const [data, setData] = useState([]);
    const [etat, setEtat] = useState(true);

    useEffect(() => {
        fetch('http://localhost:8000/api/malades')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                //console.log(data)
                setData(data);
                setEtat(false)
            })
    }, [])

    console.log("Différents malades", data);

    return (
        <div className="">
            <UpContainer></UpContainer>
            <Menu />
            <div className="centerData">
                {
                     etat ? <Load /> : ""
                }

                {
                    data ? <>
                        <table className="table table-hover table-bordered mt-3">
                            <thead>
                                <tr>
                                    <th>Nom du malade</th>
                                    <th>Postnom</th>
                                    <th>Maladie Trouvée après diagnostic</th>
                                    <th>Préventions</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            {
                                data.map((element, index) => {
                                    return <>
                                        <tbody>
                                            <tr style={{ cursor: 'pointer' }}>
                                                <td>{element.nom}</td>
                                                <td>{element.postnom}</td>
                                                <td>{element.maladie}</td>
                                                <td>{element.prevention}</td>
                                                <td>{element.created_at}</td>
                                            </tr>
                                        </tbody>
                                    </>
                                })
                            }
                        </table>
                    </> : "" 
                }
            </div>

        </div>
    )
}

export default Histoty
