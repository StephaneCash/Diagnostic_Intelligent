import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import "../css/NewMaladie.css";

const EditMaladie = (props) =>{
  return(
      <div>
      <>
          <div className='newMaladie1'>
              <Modal animation={false} className="newMaladie1" show={props.show} onHide={props.handleClose} backdrop="static" keyboard={false} onHide={props.handleClose}>
                  <Modal.Header closeButton>
                      <Modal.Title><div className="title d-flex">
                          <i className="fa fa-plus editD" aria-hidden="true"></i>
                          Editer Maladie
                      </div></Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                      <form className='col-12 '>
                          <div className="form-group">
                              <label>Nom :</label>
                              <input type="text" placeholder="nom" className='form-control' />
                          </div>
                          <div className="form-group">
                              <label>Type :</label>
                              <select className="form-control">
                                  <option>-- Select --</option>
                                  <option>Virus</option>
                                  <option>Pandémie</option>
                              </select>
                          </div>
                          <div className="form-group">
                              <label>Symptômes :</label>
                              <input type="text" placeholder="Symptômes" className='form-control' />
                          </div>
                      </form>
                  </Modal.Body>
                  <Modal.Footer className="">
                      <div className="buttonNewMaladie1">

                      </div>
                      <button type="submit" className="btn btn-primary buttonNewMaladie">Valider</button>
                  </Modal.Footer>
              </Modal>
          </div>
      </>
      </div>
  )
}

export default EditMaladie;
