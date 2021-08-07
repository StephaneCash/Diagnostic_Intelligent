import React from 'react'
import { useState } from 'react'
import NewMaladie from '../dialog/NewMaladie'
import $ from '../../node_modules/jquery'
import EditMaladie from '../dialog/EditMaladie';
import '../css/Maladies.css';
import { ConfirmDialog, LoadingDialog, ErrorDialog, SuccessDialog } from '../widget/popsDialogs';

function Maladies() {
  // AjoutMaladie
  const [showAjoutMal, setAjoutMal] = useState(false)
  const handleShowMal = () => setAjoutMal(true)
  const handleCloseMal = () => setAjoutMal(false)

  // EditMaladie
  const [showEditMaladie, setEditMaladie] = useState(false)
  const handleShowMaladie = () => setEditMaladie(true)
  const handleCloseMaladie = () => setEditMaladie(false)

  //LoadingDialog
  const [showLoaderDialog, setShowLoaderDialog] = useState(false);
  const handleShowLoaderDialog = () => setShowLoaderDialog(true);
  const handleCloseLoaderDialog = () => setShowLoaderDialog(false);

  //ErrorDialog
  const [showErrorDialog, setShowErrorDialog] = useState(false);
  const handleShowErrorDialog = () => setShowErrorDialog(true);
  const handleCloseErrorDialog = () => setShowErrorDialog(false);

  const [showModifDialog, setShowModifDialog] = useState(false);
  const handleShowModifDialog = () => setShowModifDialog(true);
  const handleCloseModifDialog = () => setShowModifDialog(false);

  //ConfirmDialog
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const handleShowConfirmDialog = () => setShowConfirmDialog(true);
  const handleCloseConfirmDialog = () => setShowConfirmDialog(false);

  //SuccessDialog
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const handleShowSuccessDialog = () => setShowSuccessDialog(true);
  const handleCloseSuccessDialog = () => setShowSuccessDialog(false);

  const [messageDialog, setMessageDialog] = useState({ loadingMessage: "Chargement...", confirmMessage: "Confirmé", errorMessage: "Erreur" });

  return (
    <div>
      <div className='centerData'>
        <div className='hr1' />
        <div className='maladieAndSearch d-flex'>
          <div className='newMaladie'>
            <button
              className='buttonMaladie btn btn-success'
              onClick={handleShowMal}
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
        <hr/>
        <h1>Maladies et leurs symptômes</h1>
        <table className='table table'>
          <thead>
            <tr>
              <th scope='col' className="idTable">N°</th>
              <th scope='col'>Noms</th>
              <th scope='col'>Symptômes</th>
              <th scope='col' style={{ width: '16%' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope='row'>1</td>
              <td>Coronas Virus COVID-19</td>
              <td>Toux, Mal à la gorge</td>
              <td>
                <button type='submit' className='btn btn-primary' onClick={handleShowMaladie}><i className="fa fa-edit"></i> Modifier</button>
                <button className='buttonS btn btn-danger' type='submit'><i className="fa fa-trash"></i> Supprimer</button>
              </td>
            </tr>
            <tr>
              <td scope='row'>2</td>
              <td>Malaria</td>
              <td>Fièvre, Maux de tête, Froid</td>
              <td>
                <button type='submit' className='btn btn-primary'><i className="fa fa-edit"></i>  Modifier</button>
                <button className='buttonS btn btn-danger' type='submit'><i className="fa fa-trash"></i> Supprimer</button>
              </td>
            </tr>
            <tr>
              <td scope='row'>3</td>
              <td colSpan={2}>Larry the Bird</td>
              <td>
                <button type='submit' className='btn btn-primary' onClick={handleShowMaladie}><i className="fa fa-edit"></i> Modifier</button>

                <button className='buttonS btn btn-danger' type='submit'><i className="fa fa-trash"></i> Supprimer</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <NewMaladie
        show={showAjoutMal}
        handeShow={handleShowMal}
        handleClose={handleCloseMal}
      />

      <EditMaladie
        show={showEditMaladie}
        handleShow={handleShowMaladie}
        handleClose={handleCloseMaladie}
      />
   </div>
  )
}

export default Maladies
