import React from 'react'
import { useState } from 'react'
import { useHistory } from "react-router-dom";

function DropdownDIagn(props) {

    const [symptomeSelected, setSymptomeSelected] = useState(""); // Stocke la valeur selectionnée dans la liste déroulante
    const [dataFind, setDataFind] = useState([]);  // Stocke le nouveau tableau trouvé en comparant la valeur selectionnée au grand tableau (dataComplet)
    const [finSearch, setFinSearch] = useState([props.symptomInput]);

    let data = props.data; // Récupération de data split pour les afficher dans la liste déroulante

    let history = useHistory();

    let dataComplet = props.dataComplet; // DataComplet trouvé sur base de l'input saisi par le user
    console.log("DATACOMPLET", dataComplet)

    var newTab1 = []; //tableau qui stocke les symptômes trouvés en les fusionnant

    const handleSelectSymptome = (e) => {
        setSymptomeSelected(e.target.value); // Récupération de la valeur selectionée
        if (symptomeSelected !== undefined) {
            const filterSic = dataComplet.filter(sympt => sympt.symptomes.includes(symptomeSelected));
            let valueProps = props.changeValue;
            valueProps(dataFind);
            setDataFind(filterSic);
            console.log("Symptome selectionne", e.target.value)

            if (symptomeSelected !== e.target.value) {
                setFinSearch([...finSearch, e.target.value])
                //console.log("Tableau d'éléments pushés", finSearch)
                if (finSearch.length > 4 && dataComplet) {
                    if (dataComplet.length >= 1) {
                        //console.log("Maladie trouvée est : ", dataComplet)
                        // console.log("Maladie trouvée est : ", dataComplet.length)
                        findMaladie()
                    }
                } else if (finSearch.length === 8 && dataComplet === "") {
                    alert("Aucune maladie ne correspond à vos symptômes entrés");
                    history.push("/Diagnostic")
                }
            }
        }
    }

    const newTabS = (data) => {
        for (let i = 0; i <= 6; i++) {
            if (data) {
                if (data[0], data[1], data[2], data[3], data[4], data[5], data[6]) {
                    newTab1 = data[0].concat(data[1], data[3], data[4], data[5], data[6])
                    return newTab1;
                } else if (data[0], data[1], data[2], data[3], data[4], data[5]) {
                    newTab1 = data[0].concat(data[1], data[2], data[3], data[4], data[5]);
                    return newTab1;
                } else if (data[0], data[1], data[2], data[3], data[4]) {
                    newTab1 = data[0].concat(data[1], data[2], data[3], data[4]);
                    return newTab1;
                } else if (data[0], data[1], data[2], data[3]) {
                    newTab1 = data[0].concat(data[1], data[2], data[3]);
                    return newTab1;
                } else if (data[0], data[1], data[2]) {
                    newTab1 = data[0].concat(data[1], data[2]);
                    return newTab1;
                } else if (data[0], data[1]) {
                    newTab1 = data[0].concat(data[1]);
                    return newTab1;
                } else if (data[0]) {
                    newTab1 = data[0]
                    return newTab1;
                }
            } else {
                alert("Non la valeur est indéfinie");
                return false;
            }
        }
    }

    const findMaladie = () => {
        history.push({ pathname: '/maladieFind/', donnees: { data: dataComplet } })
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
