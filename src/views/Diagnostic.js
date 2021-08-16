import React from 'react'
import "../css/Diagnostic.css";
import { Component } from 'react';
class Diagnostic extends Component {

    state = {
        maladies: [],
        findMaladie: "",
        lower: "",
        hide: false,
        isValid: false
    }

    componentDidMount() {
        fetch("http://localhost:8000/api/maladies").then((response) => {
            response = response.json();
            response.then((result) => {
                this.setState({ maladies: result })
                // console.log('maladies diagnostic', result);
            })
        })
    }

    handleSearchMaladie = (e) => {
        //console.log(e.target.value);
        let value = e.target.value;
        this.setState({ findMaladie: value, lower: value.toLowerCase() });
        //console.log('Maladie entrée', this.state.findMaladie);
    }

    handleSubmitForm = (e) => {
        e.preventDefault();
        console.log("Entrée : ", this.state.findMaladie)
        this.setState({ hide: true, isValid: true });
    }

    render() {
        let maladies = this.state.maladies;
        //console.log("Différentes maladies", maladies);

        console.log("Entrée  fff", this.state.findMaladie);

        let find = this.state.findMaladie.length;
        console.log("find longueur", find);

        //let alertMessage = alert("Donnée invalide");

        return (
            <div className="diagnostic">
                <div className="title">Diagnostic</div>
                <div className="contentDiagnostic">
                    <form className="form" onSubmit={this.handleSubmitForm}>
                        <label >Veuillez entrer un symptôme : </label>
                        <input type="text" placeholder="Entrer un symptôme" className="form-control" value={this.state.findMaladie} onChange={this.handleSearchMaladie} />
                        <button className="btn btn-primary buttonDiagnostic" onClick={this.onVerif}>
                            <span className="fa fa-check"></span> Valider
                        </button>
                    </form>

                    {
                        this.state.hide ?
                            <>
                                <div className="repTrouvee">
                                    <h5 style={{ color: "black", padding: "5px 23px", fontSize: "16px" }}>Avez-vous aussi l'un de ces symptômes ? </h5>

                                    {
                                        maladies.filter((maladie) => {
                                            return maladie.nom.toLowerCase().includes(this.state.lower)
                                        }).map((maladie => {
                                            return (
                                                <strong key={maladie.id}>
                                                    <td style={{ color: "black", padding: '5px 23px' }}>{maladie.symptomes}</td> <br />
                                                </strong>
                                            )
                                        })
                                        )
                                    }

                                    <select className="form-select selectSymptomes" value="" onChange={this.handleSelectSymptome}>
                                        {
                                            maladies.map(maladie => {
                                                return <option value={maladie}>{maladie.symptomes}</option>
                                            })
                                        }
                                    </select>

                                    <button className="btn btn-primary mt-3 btnValider"><span className="fa fa-check"></span> Valider</button>
                                    <button className="btn btn-danger mt-3 btnValider"><span className="fa fa-close"></span> Annuler</button>
                                </div>
                            </> : "Champ vide"
                    }
                </div>
            </div>
        )
    }
}

export default Diagnostic
