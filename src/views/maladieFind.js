import React, {useState}  from 'react'
import { Link } from 'react-router-dom';
import maladies from '../data/maladies';
import loaderDialog from '../dialog/Load';

function maladieFind(props) {
    console.log("Maladie FIND", props);

    const [nom, setNom] = useState("");
    const [postnom, setPostnom] = useState("");
    const [maladie, setMaladie] = useState('');
    const [prevention, setPrevention] = useState("");
    const [loading, setLoading] = useState(false);

    var data;

    try {
        data = props.location.donnees.data[0];
    } catch (error) {
        console.log(error);
    }

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
