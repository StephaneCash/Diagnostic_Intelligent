import { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import '../css/DetailMaladieModal.css';

class DetailMaladie extends Component {
    render() {

        let data = this.props.data;
        console.log("Data", data);
        return (
            <>
                <Modal show={this.props.show} className="modalDetail">
                    <Modal.Header>DETAIL MALADIE</Modal.Header>
                    <Modal.Body>
                        <table className="table ">
                            <thead>
                                <tr>
                                    <th >#</th>
                                    <th>Nom</th>
                                    <th>Type</th>
                                    <th>Symptome</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{data.id}</td>
                                    <td>{data.nom}</td>
                                    <td>{data.type}</td>
                                    <td>{data.symptomes}</td>
                                    <td>{data.description}</td>
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

export default DetailMaladie;