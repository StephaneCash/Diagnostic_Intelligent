import { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import '../css/DetailMaladieModal.css';

class DetailDoctor extends Component {
    render() {

        let data = this.props.data;
         console.log("Data", data);
       
        return (
            <>
                <Modal show={this.props.show} className="modalDetail">
                    <Modal.Header>DETAIL DOCTEUR</Modal.Header>
                    <Modal.Body>
                        <table className="table ">
                            <thead>
                                <tr>
                                    <th >#</th>
                                    <th>Noms</th>
                                    <th>Specialité</th>
                                    <th>Adresse</th>
                                    <th>Contacts</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{data.id}</td>
                                    <td>{data.nom} {data.postnom} {data.prenom}</td>
                                    <td>{data.specialte}</td>
                                    <td>{data.adress}</td>
                                    <td>{data.contact}</td>
                                </tr>
                            </tbody>
                        </table>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.props.close}>
                            Fermer
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}

export default DetailDoctor;