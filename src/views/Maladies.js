import NewMaladie from '../dialog/NewMaladie'
import EditMaladie from '../dialog/EditMaladie';
import '../css/Maladies.css';
import axios from 'axios';
import React, { Component } from 'react'
import ListMaladies from './ListMaladies';
import Loader from "../dialog/Loader";
import DetailMaladie from "../dialog/DetailMaladie";
import Menu from './Menu';
import { confirmAlert } from "react-confirm-alert";
import UpContainer from "./UpContainer";

class Maladies extends Component {

  state = {
    login: "okenhde",
    password: "",
    maladies: [],
    maladie: {},
    findMaladie: "",
    showDetail: false,
    data: [],
    lower: [],
    loader: false,
    url: "http://localhost:8000/api/maladies"
  }

  getMaladies = async () => {
    this.setState({ Loader: true })
    const maladies = await axios.get(this.state.url);
    this.setState({ maladies: maladies.data, Loader: false });
    console.log("Maladies", maladies)
  };

  componentDidMount() {
    this.getMaladies();
  }

  deleteMaladie = async id => {
    this.setState({ Loader: true });
    await axios.delete(`${this.state.url}/${id}`);

    this.getMaladies();
  }

  createMaladie = async data => {
    this.setState({ Loader: true });

    await axios.post(this.state.url, {
      nom: data.nom,
      type: data.type,
      symptomes: data.symptomes,
      description: data.description,
      prevention: data.prevention
    });

    this.getMaladies();
  }

  editMalad = async (data) => {
    this.setState({ maladie: {}, Loader: true });

    await axios.put(`${this.state.url}/${data.id}`, {
      nom: data.nom,
      type: data.type,
      symptomes: data.symptomes,
      description: data.description,
      prevention: data.prevention
    });

    this.getMaladies();
  }

  onDelete = (id) => {
    /*confirmAlert({
      title: "ConfirmToSubmit",
      message: "Etes-vous sûr de vouloir supprimer cette filière ?",
      buttons: [
        {
          label: "Oui",
          onClick: () => alert("Click Yes")
        },
        {
          label: "Non",
          onClick: () => alert('Click Non')
        }
      ]
    })*/
    console.log('Suppessiosn', id);
    //alert("Etes-vous sûr de vouloir supprimer cette maladie ?");
    console.log("HHHHHH", confirmAlert);
    this.deleteMaladie(id);
  };

  onEdit = (data) => {
    console.log('Edition', data);
    this.setState({ maladie: data });
  };

  onFormSubmit = data => {

    if (data.isEdit) {
      this.editMalad(data);
    } else {
      this.createMaladie(data);
    }
  };

  handleSearchMaladie = (e) => {
    console.log("Valeur recuperee", e.target.value);
    let value = e.target.value;
    this.setState({ findMaladie: value, lower: value.toLowerCase() });
    //console.log('Maladie entrée', this.state.findMaladie);
  }

  handleShowDetail = (id) => {
    this.setState({ showDetail: true });
    this.setState({ data: id });
    console.log("Données recues", id);
  }

  handleCloseDetail = () => {
    this.setState({ showDetail: false });
  }

  render() {
    let maladies = this.state.maladies;

    let valLong = maladies.length;

    return (
      <div>
        
        <UpContainer />
        <Menu />
        <div className='centerData'>
          <div className='maladieAndSearch d-flex'>
            <div className='newMaladie'>
              <h4 style={{ color: "green", fontSize: "28px" }}> <i style={{ color: "red", fontSize: "28px" }} className="fa fa-plus-circle"></i> DIAGNOSTIC</h4>
            </div>

            <div className='searchMaladie input-group mt-0'>
              <input type='search' placeholder='Rechercher une maladie ' className='form-control h-5' onChange={this.handleSearchMaladie} />
            </div>
          </div>

          <h1>Maladies et leurs symptômes ({valLong})</h1>
          {
            this.state.Loader ? <Loader />  : ""
          }
          <EditMaladie
            maladie={this.state.maladie}
            onFormSubmit={this.onFormSubmit}
          />
          <table className='table table-striped table-bordered data'>
            <thead className="">
              <tr>
                <th style={{ width: "30px", textAlign: "center" }}>#</th>
                <th style={{ width: "158px" }}>Nom</th>
                <th style={{ width: "158px" }}>Type</th>
                <th >Symptômes</th>
                <th style={{ width: "158px" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {maladies.filter((maladie) => {
                return (
                  maladie.nom.toLowerCase().includes(this.state.lower) || maladie.symptomes.toLowerCase().includes(this.state.lower) 
                  || maladie.type.toLowerCase().includes(this.state.lower)
                );
              }).map(maladie => {
                return (
                  <ListMaladies
                    maladies={maladie}
                    key={maladie.id}
                    onDelete={this.onDelete}
                    onEdit={this.onEdit}
                    onViewShowDetail={this.handleShowDetail}
                  />
                )
              })
              }
            </tbody>
          </table>
          <DetailMaladie
            show={this.state.showDetail}
            data={this.state.data}
            close={this.handleCloseDetail}
          />
        </div>
        <NewMaladie
        /* show={showAjoutMal}
         handeShow={handleShowMal}
         handleClose={handleCloseMal}*/
        />

      </div>
    )
  }

}

export default Maladies
