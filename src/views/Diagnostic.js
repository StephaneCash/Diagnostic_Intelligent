import React from 'react'
import "../css/Diagnostic.css";
import { useEffect, useState } from 'react'

function Diagnostic(props) {

    const [maladies, setMaladies] = useState([]);
    const [symptome, setSymptome] = useState(null);
    const [filterSymptomes, setFilterSymptomes] = useState([]);
    const [hide, setHide] = useState(false);
    const [symptomeSelected, setSymptomeSelected] = useState([]);
    const [symptomeFindSelect, setSymptomeFindSelect] = useState('');
    const [newTab, setNewTab] = useState([]);

    /* var findSymptomes = ["a"];
     findSymptomes.push(symptome);
     console.log(findSymptomes);*/
    var newT = [];

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
            const filterMaladies = maladies.filter(maladie => maladie.symptomes.includes(symptome));
            setFilterSymptomes(filterMaladies);
            //console.log("Find", filterMaladies)
            setHide(true);
            findSympt(filterMaladies);
        } else {
            alert('Veuillez remplir ce champ svp');
            return false;
        }
    }

    const handleSearchMaladie = (e) => {
        setSymptome(e.target.value);
        //console.log(e.target.value)
    }

    const handleSelectSymptome = (e) => {
        console.log("Symptome selectionne", e.target.value)
        setSymptomeFindSelect(e.target.value);
    }

    const findSympt = (filterSymptomes) => {
        const symptomesSplit = filterSymptomes.map((sympt) => sympt.symptomes.split(","));
        console.log(symptomesSplit)
        setSymptomeSelected(symptomesSplit);
    }

    const newTabS = (data) => {
        for (let i = 0; i < data.length; i++) {
            newT = data[0].concat(data[1], data[2])
            newT.forEach(element => {
                console.log("New tab", element);
            });
        }
    }

    return (
        <div className="diagnostic">

            <h3> <i className="fa fa-medkit"></i>  Diagnostic</h3>

            <form className="form form" onSubmit={handleSubmitForm}>
                <label for="inputSymptome"> <i style={{ color: "red" }} className="fa fa-plus-circle"></i> Entrer un symptôme svp : </label>
                <input type="text" className="form-control" id="inputSymptome" name="" value={symptome} placeholder="Entrer un symptôme" onChange={handleSearchMaladie} />
                <button className="btn btn-primary mt-3"><i className="fa fa-check"></i> Valider</button>
            </form>
            {
                hide ? <form className="form mt-5">
                    <label> <i style={{ color: "red" }} className="fa fa-plus-circle"></i> Avez-vous aussi remarqué ces symptômes ?</label>
                    {
                        filterSymptomes.map((symptom, index) => {
                            return <div key={index.id}>{symptom.symptomes} <br /></div>
                        })
                    }
                    <br />
                    <label>Choisir parmi ces symptômes</label>
                    <select className="form-control mt-3" value={symptomeFindSelect} onChange={handleSelectSymptome}>
                        {
                            newTabS(symptomeSelected)
                        }
                    </select>
                </form> : ""
            }

            {

            }

        </div>
    )
}

export default Diagnostic
