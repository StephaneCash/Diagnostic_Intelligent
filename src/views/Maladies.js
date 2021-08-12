import NewMaladie from '../dialog/NewMaladie'
import EditMaladie from '../dialog/EditMaladie';
import '../css/Maladies.css';
import axios from 'axios';
import React, { Component } from 'react'
import ListMaladies from './ListMaladies';
import Loader from "../dialog/Loader";


class Maladies extends Component {
  // AjoutMaladie
  /*const [showAjoutMal, setAjoutMal] = useState(false)
  const handleShowMal = () => setAjoutMal(true)
  const handleCloseMal = () => setAjoutMal(false)

  // EditMaladie
  const [showEditMaladie, setEditMaladie] = useState(false)
  const handleShowMaladie = () => setEditMaladie(true)
  const handleCloseMaladie = () => setEditMaladie(false)*/

  state = {
    login: "okenhde",
    password: "",
    maladies: [],
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

  onDelete = (id) => {
    console.log('Suppessiosn', id);
    this.deleteMaladie(id);
  };

  onEdit = (data) => {
    console.log('Edition', data);
  };

  render() {
    let maladies = this.state.maladies;
    console.log("List de maladies", maladies)
    return (
      <div>
        <div className='centerData'>
          <div className='hr1' />
          <div className='maladieAndSearch d-flex'>
            <div className='newMaladie'>
              <button
                className='buttonMaladie btn btn-success'
                onClick="{handleShowMal}"
              >
                <i className='fa fa-plus'></i>
                Ajout Maladie
              </button>
            </div>

            <div className='searchMaladie input-group'>
              <input type='search' placeholder='Rechercher' className='form-control' />
              <button type='button' className='buttonMal btn btn-primary'>
                <i className='fa fa-search' />
              </button>
            </div>
          </div>
          <hr />
          <h1>Maladies et leurs symptômes</h1>
          {
            this.state.Loader ? <Loader /> : ""
          }
          <table className='table table'>
            <thead>
              <tr>
                <th scope='col'>N°</th>
                <th scope='col'>Nom</th>
                <th scope='col'>Type</th>
                <th scope='col'>Symptômes</th>
                <th scope='col' className="idTable3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {maladies.map(maladie => {
                return (
                  <ListMaladies
                    maladies={maladie}
                    key={maladie.id}
                    onDelete={this.onDelete}
                    onEdit={this.onEdit}
                  />
                )
              })
              }
            </tbody>
          </table>
        </div>
        <NewMaladie
        /* show={showAjoutMal}
         handeShow={handleShowMal}
         handleClose={handleCloseMal}*/
        />

        <EditMaladie
        /*show={showEditMaladie}
        handleShow={handleShowMaladie}
        handleClose={handleCloseMaladie}*/
        />

      </div>
    )
  }


}

export default Maladies
