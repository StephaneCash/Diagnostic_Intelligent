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

    /*for (let i = 0; i < data.length; i++) {
        console.log("DATA : ", data[i]);
        if(data[i].nom === data[i].nom){
            console.log("DOUBLON", data[i])
        }
    }*/

    return (
        <div className="">
            <UpContainer></UpContainer>
            <Menu />
            <div className="centerData">
                <p className="userActifs"><i className="fa fa-"></i> Liste de malades diagnostiqués </p>

                {
                    etat ? <Load /> : ""
                }


                {
                    data.length > 0 ? <>
                        <table className="table table-hover table-bordered mt-3" style={{fontFamily:'Segoe UI'}}>
                            <thead>
                                <tr>
                                    <th>Nom du malade</th>
                                    <th>Postnom</th>
                                    <th>Maladie Trouvée après diagnostic</th>
                                    <th>Préventions</th>
                                    <th>Date</th>
                                    <th>Imprimer</th>
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
                                                <td>
                                                    <i  class="fa fa-print"> <span style={{fontFamily:'Arial'}}> imprimer</span></i></td>
                                            </tr>
                                        </tbody>
                                    </>
                                })
                            }
                        </table>
                    </> : "Aucun malade diagnostiqué"
                }
            </div>

        </div>
    )
}

export default Histoty
