import React from 'react'
import "../css/Diagnostic.css";
import { Component } from 'react';
class Diagnostic extends Component {

    state = {
        maladies: [],
        findMaladie: [],
        lower: []
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
        this.setState({ findMaladie: value, lower : value.toLowerCase()});
        //console.log('Maladie entrée', this.state.findMaladie);
    }

    render() {
        let maladies = this.state.maladies;
        //console.log("Différentes maladies", maladies);

        console.log("Entrée", this.state.findMaladie)
        
        return (
            <div className="diagnostic">
                <div className="title">Diagnostic</div>
                <div className="contentDiagnostic">
                    <form className="form">
                        <label >Veuillez entrer un symptôme : </label>
                        <input type="text" placeholder="Entrer un symptôme" className="form-control" onChange={this.handleSearchMaladie} />
                        <button className="btn btn-primary buttonDiagnostic">
                            <span className="fa fa-send"></span> Valider
                        </button>
                    </form>

                    <table className="table table-striped" >
                        <thead>
                            <tr>
                                <td>#</td>
                                <td>Nom</td>
                                <td>Type</td>
                                <td>Symptôme</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                maladies.filter((maladie) => {
                                    return (
                                        (maladie.nom.toLowerCase()||maladie.type).includes(this.state.lower)
                                    );
                                }).map((maladie) => {
                                    return (
                                        <tr key={maladie.id}>
                                            <td>{maladie.id}</td>
                                            <td>{maladie.nom}</td>
                                            <td>{maladie.type}</td>
                                            <td>{maladie.description}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Diagnostic
