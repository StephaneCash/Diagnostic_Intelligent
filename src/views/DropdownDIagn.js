import React from 'react'

function DropdownDIagn(props) {
    let data = props.data;
    var newTab1 = [];

    const handleSelectSymptome = (e) => {
        console.log("Symptome selectionne", e.target.value)
        //setSymptomeFindSelect(e.target.value);
    }

    const newTabS = (data) => {
        for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < data.length; j++) {
                newTab1 = data[i - i].concat(data[i + 1]);
                //console.log("Find", newTab1);
                return newTab1;
            }
        }
    }

    console.log("Nouveau tableau fusionné", newTabS(data))
    return (
        <div>
            <select value="" onChange={handleSelectSymptome} className="form-control">
                {
                    newTab1.map(el => {
                        return <option value={el}>{el}</option>
                    })
                }
            </select>
        </div>
    )
}

export default DropdownDIagn
