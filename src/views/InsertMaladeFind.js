import React from 'react'
import useEffect from 'react'
import maladies from '../data/maladies';

function InsertMaladeFind(props) {

    /*const [maladie, setMaladie] = useState(false);
    const [prevention, setPrevention] = useState(true)*/

    var data = props.data;

    var nom = "Okende";
    var postnom = "jeremie";
    var maladie = "";
    var prevention = "";

    const addMaladieFind = async () => {
        try {
            await maladies.addMalade({
                nom, postnom, maladie, prevention
            })
        } catch {
            console.log("Echec d'enregistrement du malade");
        }
    }

    if(data){
        maladie = data.maladie;
        prevention = data.prevention;
        addMaladieFind()
    }

    return (
        <div>
            
        </div>
    )
}

export default InsertMaladeFind
