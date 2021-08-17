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
                btnName: "Editer docteur",
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

        if (document.getElementsByName("specialte")[0].value === "") {
            alert('Veuillez entrer une specialité svp');
            return false;
        }

        if (document.getElementsByName("adress")[0].value === "") {
            alert('Veuillez entrer une adresse');
            return false;
        }

        if (document.getElementsByName("contact")[0].value === "") {
            alert('Veuillez entrer des contacts');
            return false;
        }

        return true;
    }

    clearFormFields = () => {
        this.setState({
            form: {
                nom: "",
                postnom: "",
                prenom: "",
                specialte: "",
                adress: "",
                contact: "",
                isEdit: false
            }
        });

        this.setState({
            btnName: "Ajouter un docteur"
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
                    <label>Postnom :</label><br></br>
                    <input
                        type="text"
                        placeholder="Postnom"
                        className="form-control"
                        name="postnom"
                        id="postnom"
                        onChange={this.handleChange}
                        value={this.state.form.postnom}
                    />
                </div>

                <div className="four wide field">
                    <label>Prénom :</label><br></br>
                    <input
                        type="text"
                        name="prenom"
                        id="prenom"
                        className="form-control"
                        placeholder="Prénom"
                        onChange={this.handleChange}
                        value={this.state.form.prenom}
                    />
                </div>

                <div className="four wide field">
                    <label>Spécialité  :</label><br></br>
                    <input
                        type="text"
                        name="specialte"
                        id="specialte"
                        className="form-control"
                        placeholder="Specialité"
                        onChange={this.handleChange}
                        value={this.state.form.specialte}
                    />
                </div>

                <div className="four wide field">
                    <label>Spécialité :</label><br></br>
                    <input
                        type="text"
                        name="adress"
                        id="adress"
                        className="form-control"
                        placeholder="Adresse"
                        onChange={this.handleChange}
                        value={this.state.form.adress}
                    />
                </div>

                <div className="four wide field">
                    <label>Contacts :</label><br></br>
                    <input
                        type="text"
                        name="contact"
                        id="contact"
                        className="form-control"
                        placeholder="Contacts..."
                        onChange={this.handleChange}
                        value={this.state.form.contact}
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
