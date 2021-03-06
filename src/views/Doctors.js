import React, { Component } from 'react'
import axios from 'axios';
import ListDoctors from './ListDoctors';
import Loader from "../dialog/Loader";
import EditAndAjoutDoctor from '../dialog/EditAndAjoutDoctor';
import DetailDoctor from '../dialog/DetailDoctor';
import Menu from './Menu';
import UpContainer from './UpContainer';
class Doctors extends Component {

    state = {
        doctors: [],
        doctor: [],
        findDoctor: "",
        lower: "",
        show: false,
        data: [],
        loader: false,
        url: "http://localhost:8000/api/doctors"
    }

    getDoctors = async () => {
        this.setState({ Loader: true })
        const doctors = await axios.get(this.state.url);
        this.setState({ doctors: doctors.data, Loader: false });
    };

    deleteDoctor = async id => {
        this.setState({ Loader: true });
        await axios.delete(`${this.state.url}/${id}`);

        this.getDoctors();
    }

    onDelete = (id) => {
        console.log('Suppessiosn', id);
        this.deleteDoctor(id);
    };

    onEdit = (data) => {
        console.log('Edition', data);
        this.setState({ doctor: data });
    };

    editDoct = async (data) => {
        this.setState({ doctor: {}, Loader: true });

        await axios.put(`${this.state.url}/${data.id}`, {
            nom: data.nom,
            postnom: data.postnom,
            prenom: data.prenom,
            specialte: data.specialte,
            adress: data.adress,
            contact: data.contact
        });

        this.getDoctors();
    }

    createDoctor = async data => {
        this.setState({ Loader: true });

        await axios.post(this.state.url, {
            nom: data.nom,
            postnom: data.postnom,
            prenom: data.prenom,
            specialte: data.specialte,
            adress: data.adress,
            contact: data.contact
        });

        this.getDoctors();
    }

    onFormSubmit = data => {

        if (data.isEdit) {
            this.editDoct(data);
        } else {
            this.createDoctor(data);
        }
    };

    componentDidMount() {
        this.getDoctors();
    }

    handleSearchDoctor = (e) => {
        // console.log("Valeur recuperee", e.target.value);
        let value = e.target.value;
        this.setState({ findDoctor: value, lower: value.toLowerCase() });
        //console.log('Maladie entr??e', this.state.findMaladie);
    }

    handleShowDetail = (id) => {
        this.setState({ show: true });
        this.setState({ data: id });
        console.log("Donn??es recues", id);
    }

    handleModalDetailClose = () => {
        this.setState({ show: false })
    }

    render() {
        let doctors = this.state.doctors;
        // console.log("diff??rents doctors", doctors)
        return (
            <div>
                <UpContainer></UpContainer>
                <Menu />
                <div className="centerData">
                    <div className='maladieAndSearch d-flex'>
                        <div className='newMaladie'>
                            <h4 style={{ color: "green", fontSize: "28px" }}> <i style={{ color: "red", fontSize: "28px" }} className="fa fa-plus-circle"></i> DIAGNOSTIC</h4>
                        </div>

                        <div className='searchMaladie input-group mt-0'>
                            <input type='search' placeholder='Rechercher par nom' className='form-control h-5' onChange={this.handleSearchDoctor} />
                        </div>
                    </div>

                    <h1>
                        Docteurs et leurs Sp??cialit??s
                    </h1>

                    {
                        this.state.Loader ? <Loader /> : ""
                    }

                    <EditAndAjoutDoctor
                        doctor={this.state.doctor}
                        onFormSubmit={this.onFormSubmit}
                    />
                    <table className="table table-striped table-bordered data">
                        <thead>
                            <tr>
                                <th style={{ width: "30px", textAlign: "center" }}>N??</th>
                                <th style={{ width: "188px" }} >Noms</th>
                                <th style={{ width: "198px" }} >Sp??cialit??</th>
                                <th >Adresse</th>
                                <th style={{ width: "158px" }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {doctors.filter((doctor) => {
                                return (
                                    doctor.nom.toLowerCase().includes(this.state.lower)
                                );
                            }).map(doctor => {
                                return (
                                    <ListDoctors
                                        doctors={doctor}
                                        key={doctor.id}
                                        onDelete={this.onDelete}
                                        onEdit={this.onEdit}
                                        onViewShowDetail={this.handleShowDetail}
                                    />
                                )
                            })
                            }
                        </tbody>
                    </table>
                    <DetailDoctor
                        show={this.state.show}
                        data={this.state.data}
                        close={this.handleModalDetailClose}
                    />
                </div>
            </div>
        )
    }
}

export default Doctors
