import React from 'react'
import { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import Response from './Response'

function DropdownDIagn(props) {

    const [symptomeSelected, setSymptomeSelected] = useState(""); // Stocke la valeur selectionnée dans la liste déroulante
    const [dataFind, setDataFind] = useState([]);  // Stocke le nouveau tableau trouvé en comparant la valeur selectionnée au grand tableau (dataComplet)
    //const [tabSySel, setTabSySel] = useState([]);
    const [hide, setHide] = useState(true);

    let data = props.data; // Récupération de data split pour les afficher dans la liste déroulante

    let finSearch = [5];
    finSearch[0] = props.symptomInput;

    let history = useHistory();

    //console.log(history)

    let dataComplet = props.dataComplet; // DataComplet trouvé sur base de l'input saisi par le user

    var newTab1 = []; //tableau qui stocke les symptômes trouvés en les fusionnant

    const handleSelectSymptome = (e) => {
        setSymptomeSelected(e.target.value); // Récupération de la valeur selectionée

        if (symptomeSelected !== undefined) {
            const filterSic = dataComplet.filter(sympt => sympt.symptomes.includes(symptomeSelected));
            setDataFind(filterSic);
            console.log("Symptome selectionne", e.target.value)

            if (symptomeSelected !== e.target.value) {
                /*if (finSearch.includes(e.target.value) === false && finSearch.length === 4) {
                    finSearch[5] = e.target.value;
                    console.log("Tableau d'éléments pushés", finSearch)
                }
                if (finSearch.includes(e.target.value) === false && finSearch.length === 2) {
                    finSearch[3] = e.target.value;
                    console.log("Tableau d'éléments pushés", finSearch)
                }*/
            }


            if (finSearch.length < 3) {
                setHide(true)

                for (let i = 0; i < dataComplet.length; i++) {
                    var verif = dataComplet[i].symptomes.includes(finSearch)
                    //console.log(verif)
                }

                if (newTab1.includes(finSearch)) {
                    alert("FIN COP");
                }
                setTimeout(() => {
                    history.push('/Response')
                }, 4000)
            }
        }
    }


    const newTabS = (data) => {
        for (let i = 0; i < 4; i++) {
            if (data) {
                if (data[2]) {
                    newTab1 = data[0].concat(data[1], data[2])
                    return newTab1;
                } else if (data[3]) {
                    newTab1 = data[0].concat(data[1], data[2], data[3]);
                    return newTab1;
                }
                else {
                    newTab1 = data[0].concat(data[1]);
                    return newTab1;
                }
            } else {
                alert("Non la valeur est indéfinie");
                return false;
            }
        }
    }

    console.log("Nouveau tableau fusionné", newTabS(data))
    return (
        <div>
            <select value={symptomeSelected} onChange={handleSelectSymptome} className="form-control">
                {
                    newTab1.map((el, index) => {
                        return <option key={index} value={el}>{el}</option>
                    })
                }
            </select>
        </div>
    )
}

export default DropdownDIagn
