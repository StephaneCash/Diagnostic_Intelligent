import React from 'react'
import "../css/Diagnostic.css";
import { useEffect, useState } from 'react'
import Menu from './Menu';
import UpContainer from './UpContainer';
import DropdownDIagn from './DropdownDIagn';
import Load from '../dialog/Load'

function Diagnostic(props) {

    const [maladies, setMaladies] = useState([]); // Toutes données
    const [symptome, setSymptome] = useState(null); // Valeur entrée par le user via l'input
    const [filterSymptomes, setFilterSymptomes] = useState([]); // Objets trouvés sur base de la méthode "includes" opérée sur les maladies
    const [hide, setHide] = useState(false);
    const [symptomeSelected, setSymptomeSelected] = useState([]); // Données juste symptômes trouvés (split)
    const [i, setI] = useState(true);

    useEffect(() => {
        fetch('http://localhost:8000/api/maladies')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setMaladies(data);
            })
    }, [])

    const handleSubmitForm = (e) => {
        e.preventDefault();
        if (symptome !== null) {
            const filterMaladies = maladies.filter(maladie => maladie.symptomes.toUpperCase().includes(symptome)); // Récupérer tous les objets contenant le mot entré
            console.log("OBJET TROUVE", filterMaladies)

            if(filterMaladies === null){
                alert("MAUVAIS")
            }

            if (filterMaladies) {
                setFilterSymptomes(filterMaladies);
                setHide(true);
                findSympt(filterMaladies);
            } else {
                alert('Erreur !! Valeur non trouvée non introuvable');
            }
        } else {
            alert('Veuillez remplir ce champ svp');
            return false;
        }
    }

    const handleSearchMaladie = (e) => {
        let valueToLower = e.target.value;
        setSymptome(valueToLower.toUpperCase());
    }

    const findSympt = (filterSymptomes) => {
        const symptomesSplit = filterSymptomes.map((sympt) => sympt.symptomes.split(","));
        setSymptomeSelected(symptomesSplit);
    }

    setTimeout(() => {
        setI(false)
    }, 500)

    const changeValue = (value) => {
        setFilterSymptomes(value)
    }

    return (
        <>
            <UpContainer />
            <Menu />

            <div className="diagnostic">
                <h3> <i className="fa fa-medkit"></i>  Diagnostic</h3>
                {
                    i ? <Load /> :

                        <form className="form form" onSubmit={handleSubmitForm}>
                            <label htmlFor="inputSymptome"> <i style={{ color: "red" }} className="fa fa-plus-circle"></i> Entrer un symptôme svp : </label>
                            <input type="text" className="form-control" id="inputSymptome" name="nom" value={symptome || ""} placeholder="Entrer un symptôme" onChange={handleSearchMaladie}></input>
                            <button className="btn btn-primary mt-3"><i className="fa fa-check"></i> Valider</button>
                        </form>
                }
                {
                    hide ? <form className="form mt-3 nouveauForm">
                        <label> <i style={{ color: "red" }} className="fa fa-plus-circle"></i> Avez-vous aussi remarqué ces symptômes ?</label>
                        <div style={{ overflow: 'scroll', height: 'auto' }}>
                            {
                                filterSymptomes.map((element, index) => {
                                    return <div ke={index}>{element.symptomes} <div></div></div>
                                })
                            }
                        </div>
                        <br />
                        <h5>Choisir parmi ces symptômes</h5>
                        <DropdownDIagn
                            data={symptomeSelected}
                            dataComplet={filterSymptomes}
                            symptomInput={symptome}
                            changeValue={changeValue.bind(this)}
                        />
                        <button type="submit" className="mt-3 btn btn-danger annuler"><i className="fa fa-close"></i> Annuler</button>
                    </form> : ""
                }
            </div>
        </>
    )
}

export default Diagnostic
