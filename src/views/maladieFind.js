import React from 'react'
import { Link } from 'react-router-dom';

function maladieFind(props) {
    console.log("Maladie FIND", props);

    var data;

    try {
        data = props.location.donnees.data[0];
    } catch (error) {
        console.log(error);
    }

    //let data2 = props.location.donnees.data[1].nom;
    console.log("DATA", data)

    return (
        <div className="container maladieTrouvee">
            <h5>MALADIE TROUVEE</h5>
            {data ?
                <table className="table table-striped table-bordered data">
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Docteurs</th>
                            <th>Préventions</th>
                            <th>Adresses</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{data.nom}</td>
                            <td>PAUL JEAN FRANCOIS</td>
                            <td>{data.prevention}</td>
                            <td>Kin</td>
                        </tr>
                    </tbody>
                </table> : " Aucune maladie trouvée"
            }
            <div className="linkFin"><Link to="/maladies">Accueil</Link></div>
        </div>
    )
}

export default maladieFind
