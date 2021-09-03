import React from 'react'
import { useState } from 'react'
import maladieFind from './maladieFind';
import { useHistory } from "react-router-dom";

function DropdownDIagn(props) {

    const [symptomeSelected, setSymptomeSelected] = useState(""); // Stocke la valeur selectionnée dans la liste déroulante
    const [dataFind, setDataFind] = useState([]);  // Stocke le nouveau tableau trouvé en comparant la valeur selectionnée au grand tableau (dataComplet)
  

    let data = props.data; // Récupération de data split pour les afficher dans la liste déroulante

    let history = useHistory();


    // let finSearch = [props.symptomInput];
    const [finSearch, setFinSearch] = useState([props.symptomInput]);

    let dataComplet = props.dataComplet; // DataComplet trouvé sur base de l'input saisi par le user

    var newTab1 = []; //tableau qui stocke les symptômes trouvés en les fusionnant

    const handleSelectSymptome = (e) => {
        setSymptomeSelected(e.target.value); // Récupération de la valeur selectionée
        //console.log(symptomeSelected)
        if (symptomeSelected !== undefined) {
            const filterSic = dataComplet.filter(sympt => sympt.symptomes.includes(symptomeSelected));
            let valueProps = props.changeValue;
            valueProps(dataFind);
            setDataFind(filterSic);
            console.log("Symptome selectionne", e.target.value)

            if (symptomeSelected !== e.target.value) {
                //finSearch.push(e.target.value);
                setFinSearch([...finSearch, symptomeSelected])
                console.log("Tableau d'éléments pushés", finSearch)
                if (finSearch.length > 4 && dataComplet) {
                    let verif = dataComplet.includes(finSearch)
                    if (dataComplet.length >= 1) {
                        //history.push('/maladieFind')
                        console.log("Maladie trouvée est : ", dataComplet)
                        console.log("Maladie trouvée est : ", dataComplet.length)
                        findMaladie()
                    }
                }
            }
        }
    }

    const newTabS = (data) => {
        for (let i = 0; i < 7; i++) {
            if (data) {
                if (data[i]) {
                    newTab1 = data[0].concat(data[1], data[3], data[4])
                    return newTab1;
                } else if (data[3]) {
                    let data2 = data[1].concat(data[2], data[3])
                    newTab1 = data[0].concat(data2);
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

    const findMaladie = () => {
        <maladieFind 
            dataComplet={dataComplet}
        />
        history.push("/maladieFind")
    }

    const maladie = () =>{
        <maladieFind
            dataComplet={dataComplet}
        />
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

            {
                dataComplet.length > 1 ? maladie()  : ""
            }
        </div>
    )
}

export default DropdownDIagn
