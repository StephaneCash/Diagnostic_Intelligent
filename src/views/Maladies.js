import NewMaladie from '../dialog/NewMaladie'
import EditMaladie from '../dialog/EditMaladie';
import '../css/Maladies.css';
import axios from 'axios';
import React, { Component } from 'react'
import ListMaladies from './ListMaladies';
import Loader from "../dialog/Loader";
import DetailMaladie from "../dialog/DetailMaladie";


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
      description: data.description
    });

    this.getMaladies();
  }

  editMalad = async (data) => {
    this.setState({ maladie: {}, Loader: true });

    await axios.put(`${this.state.url}/${data.id}`, {
      nom: data.nom,
      type: data.type,
      symptomes: data.symptomes,
      description: data.description
    });

    this.getMaladies();
  }

  onDelete = (id) => {
    console.log('Suppessiosn', id);
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
    //console.log("List de maladies", maladies)

    let valLong = maladies.length;
    //console.log('Taille', valLong);

    //console.log(this.props)

    return (
      <div>
        <div className='centerData'>
          <div className='maladieAndSearch d-flex'>
            <div className='newMaladie'>
              <h4 style={{ color: "green", fontSize: "28px" }}> <i style={{ color: "red", fontSize: "28px" }} className="fa fa-plus-circle"></i> DIAGNOSTIC</h4>
            </div>

            <div className='searchMaladie input-group mt-0'>
              <input type='search' placeholder='Rechercher par nom' className='form-control h-5' onChange={this.handleSearchMaladie} />
            </div>
          </div>

          <h1>Maladies et leurs symptômes ({valLong})</h1>
          {
            this.state.Loader ? <Loader /> : ""
          }
          <EditMaladie
            maladie={this.state.maladie}
            onFormSubmit={this.onFormSubmit}
          />
          <table className='ui celled table data'>
            <thead className="">
              <tr>
                <th style={{ width: "80px", textAlign: "center" }}>#</th>
                <th>Nom</th>
                <th>Type</th>
                <th >Symptômes</th>
                <th style={{ width: "338px" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {maladies.filter((maladie) => {
                return (
                  maladie.nom.toLowerCase().includes(this.state.lower)
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
