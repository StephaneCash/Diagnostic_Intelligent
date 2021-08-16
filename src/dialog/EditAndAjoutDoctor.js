import React, { Component } from 'react';
import "../css/NewMaladie.css";

class EditAndAjoutDoctor extends Component {

    state = {
        form: {
            nom: "",
            postnom: "",
            prenom: "",
            specialte: "",
            adress: "",
            contact: "",
            isEdit: false
        },
        btnName: "Ajouter un docteur",
        btnClass: "btn btn-primary buttonNewMaladie"

    }

    isEmpty(obj) {
        return Object.entries(obj).length === 0 && obj.constructor === Object;
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props && !this.isEmpty(this.props.doctor)) {
            this.setState({
                form: { ...this.props.doctor, isEdit: true },
                btnName: "Editer ce docteur",
                btnClass: 'btn btn-success buttonNewMaladie'
            })
            console.log("update", this.props.doctor);
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        let form = this.state.form;
        form[name] = value;
        this.setState({ form });
    };

    onFormSubmit = (event) => {
        event.preventDefault();

        if (this.formValidation()) {
            //console.log('valide')
            this.props.onFormSubmit(this.state.form);
        }
        this.clearFormFields();
    };

    formValidation = () => {
        if (document.getElementsByName("nom")[0].value === "") {
            alert('Entrer un nom svp');
            return false;
        }

        if (document.getElementsByName("postnom")[0].value === "") {
            alert('Entrer un postnom svp');
            return false;
        }

        if (document.getElementsByName("prenom")[0].value === "") {
            alert('Veuillez entrer un prenom svp');
            return false;
        }

        if (document.getElementsByName("symptomes")[0].value === "") {
            alert('Veuillez entrer quelques symptomes');
            return false;
        }

        if (document.getElementsByName("description")[0].value === "") {
            alert('Veuillez entrer une déscription');
            return false;
        }

        return true;
    }

    clearFormFields = () => {
        this.setState({
            form: {
                nom: "",
                type: "",
                symptomes: "",
                description: "",
                isEdit: false
            }
        });

        this.setState({
            btnName: "Ajouter une maladie"
        });

        document.querySelector(".form").reset();
    };

    render() {
        return (
            <form className='ui form d-flex'>

                <div className="four wide field">
                    <label>Nom :</label> <br></br>
                    <input
                        type="text"
                        placeholder="nom"
                        className="form-control"
                        name="nom"
                        id="nom"
                        onChange={this.handleChange}
                        value={this.state.form.nom}
                    />
                </div>

                <div className="four wide field">
                    <label>Type :</label><br></br>
                    <input
                        type="text"
                        placeholder="Type"
                        className="form-control"
                        name="type"
                        id="type"
                        onChange={this.handleChange}
                        value={this.state.form.type}
                    />
                </div>

                <div className="four wide field">
                    <label>Symptômes :</label><br></br>
                    <input
                        type="text"
                        name="symptomes"
                        id="symptomes"
                        className="form-control"
                        placeholder="Symptômes"
                        onChange={this.handleChange}
                        value={this.state.form.symptomes}
                    />
                </div>

                <div className="four wide field">
                    <label>Déscription  :</label><br></br>
                    <input
                        type="text"
                        name="description"
                        id="description"
                        className="form-control"
                        placeholder="Description"
                        onChange={this.handleChange}
                        value={this.state.form.description}
                    />
                </div>
                <div className="four wide field">
                    <button
                        type="submit"
                        id="formButton"
                        className={this.state.btnClass} onClick={this.onFormSubmit}>
                        {this.state.btnName}
                    </button>
                </div>
            </form>
        )
    }
}

export default EditAndAjoutDoctor;
