import React from 'react'
import "../css/Diagnostic.css";
import { useEffect, useState } from 'react'
import Menu from './Menu';
//import Select from 'react-select';
import UpContainer from './UpContainer';
import DropdownDIagn from './DropdownDIagn';

function Diagnostic(props) {

    const [maladies, setMaladies] = useState([]); // Toutes données
    const [symptome, setSymptome] = useState(null); // Valeur entrée par le user via l'input
    const [filterSymptomes, setFilterSymptomes] = useState([]); // Objets trouvés sur base de la méthode "includes" opérée sur les maladies
    const [hide, setHide] = useState(false);
    const [symptomeSelected, setSymptomeSelected] = useState([]); // Données juste symptômes trouvés (split)

    useEffect(() => {
        fetch('http://localhost:8000/api/maladies')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                //console.log(data)
                setMaladies(data);
            })
    }, [])

    const handleSubmitForm = (e) => {
        e.preventDefault();
        if (symptome !== null) {
            
            const filterMaladies = maladies.filter(maladie => maladie.symptomes.includes(symptome)); // Récupérer tous les objets contenant le mot entré
            console.log("OBJET TROUVE", filterMaladies)

            if (filterMaladies) {
                setFilterSymptomes(filterMaladies);
                //console.log("Find", filterMaladies)
                setHide(true);
                findSympt(filterMaladies);
            }else{
                alert('Erreur !! Valeur non trouvée non introuvable');
            }
        } else {
            alert('Veuillez remplir ce champ svp');
            return false;
        }
    }

    const handleSearchMaladie = (e) => {
        setSymptome(e.target.value);
        //console.log(e.target.value)
    }

    const findSympt = (filterSymptomes) => {
        const symptomesSplit = filterSymptomes.map((sympt) => sympt.symptomes.split(","));
        //console.log("Symptomes find", symptomesSplit)
        setSymptomeSelected(symptomesSplit);
    }

    return (
        <>
            <UpContainer />
            <Menu />
            <div className="diagnostic">

                <h3> <i className="fa fa-medkit"></i>  Diagnostic</h3>

                <form className="form form" onSubmit={handleSubmitForm}>
                    <label htmlFor="inputSymptome"> <i style={{ color: "red" }} className="fa fa-plus-circle"></i> Entrer un symptôme svp : </label>
                    <input type="text" className="form-control" id="inputSymptome" name="nom" value={symptome || ""} placeholder="Entrer un symptôme" onChange={handleSearchMaladie}></input>
                    <button className="btn btn-primary mt-3"><i className="fa fa-check"></i> Valider</button>
                </form>
                {
                    hide ? <form className="form mt-3">
                        <label> <i style={{ color: "red" }} className="fa fa-plus-circle"></i> Avez-vous aussi remarqué ces symptômes ?</label>
                        {
                            filterSymptomes.map((symptom, index) => {
                                return <div key={index}>{symptom.symptomes} <br /></div>
                            })
                        }
                        <br />
                        <h5>Choisir parmi ces symptômes</h5>
                        <DropdownDIagn
                            data={symptomeSelected}
                            dataComplet={filterSymptomes}
                            symptomInput={symptome}
                        />
                    </form> : ""
                }

            </div>
        </>
    )
}

export default Diagnostic
