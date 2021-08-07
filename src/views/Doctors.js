import React from 'react'

function Doctors() {

    let tdActive = document.getElementById('');
    const onMouseOver = () => {

    }
    return (
        <div>
            <div className="centerData">
                <div className="hr1"></div>
                <div className="maladieAndSearch d-flex">
                    <div className="newMaladie">
                        <button className="buttonMaladie btn btn-success"><i className="fa fa-plus"></i> Ajout Docteur</button>
                    </div>

                    <div className="searchMaladie input-group">
                        <input type="search" placeholder="Recherche" className="form-control" />
                        <button type="button" className="buttonMal btn btn-primary">
                            <i className="fa fa-search" />
                        </button>
                    </div>
                </div>

                <h1>
                    Docteurs et Spécialités
                </h1>
                <hr/>
                <table className="table table ">
                    <thead>
                        <tr>
                            <th scope="col">N°</th>
                            <th scope="col">Noms</th>
                            <th scope="col">Spécialité</th>
                            <th scope="col" style={{ width: '16%' }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td scope="row">1</td>
                            <td>Franc Mula</td>
                            <td>Otto</td>
                            <td>
                                <button className='buttonC btn btn-success' type="submit">Contacter</button>
                                <button type="submit" className='btn btn-primary'>Modifier</button>
                                <button className='buttonS btn btn-danger' type="submit">Supprimer</button>
                            </td>
                        </tr>
                        <tr>
                            <td scope="row">2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>
                                <button type="submit" className='btn btn-primary'>Modifier</button>
                                <button className='buttonS btn btn-danger' type="submit">Supprimer</button>
                            </td>
                        </tr>
                        <tr>
                            <td scope="row">3</td>
                            <td colSpan={2}>Larry the Bird</td>
                            <td>
                                <button type="submit" className='btn btn-primary'>Modifier</button>
                                <button className='buttonS btn btn-danger' type="submit">Supprimer</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Doctors
